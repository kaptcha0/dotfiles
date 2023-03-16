var _a;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Store = Me.imports.store;
const Settings = Me.imports.settings;
const HistoryMenu = Me.imports.historyMenu;
const History = Me.imports.history;
const SearchBox = Me.imports.searchBox;
const ActionBar = Me.imports.actionBar;
const utils = Me.imports.utils;
const log = Me.imports.log;
const ClipboardItem = Me.imports.clipboardItem;
const ConfirmDialog = Me.imports.confirmDialog;
const Mainloop = imports.mainloop;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const PanelMenu = imports.ui.panelMenu;
const { St, GObject, Meta, Shell, GLib } = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
var ClipboardPanel = class ClipboardPanel extends PanelMenu.Button {
    constructor() {
        super(1.0, _('Gnome Clipboard'), false);
        this._clipboardTimerID = 0;
        this._selectionOwnerChangedID = 0;
        this._openStateChangedID = 0;
        this._keyPressEventID = 0;
        log.info("initializing ...");
        this._history = new History.History();
        this._clipboard = St.Clipboard.get_default();
        this._settings = new Settings.ExtensionSettings();
        let path = GLib.get_user_cache_dir() + '/' + Me.uuid;
        this.store = new Store.Store(path);
        let clipboardIcon = new St.Icon({
            icon_name: 'edit-copy-symbolic',
            style_class: 'popup-menu-icon'
        });
        this.add_actor(clipboardIcon);
        this._historyMenu = new HistoryMenu.HistoryMenu(this._onActivateItem.bind(this), this._onPinItem.bind(this), this._onRemoveItem.bind(this));
        this._actionBar = new ActionBar.ActionBar();
        this._setupMenu();
        this._setupListener();
        this._loadHistory(this.store.load());
        this._settings.onChanged(this._onSettingsChanged.bind(this));
        this._openStateChangedID = this._historyMenu.connect('open-state-changed', (_widget, open) => {
            log.info("open-state-changed event");
            if (open) {
                let t = Mainloop.timeout_add(50, () => {
                    this._searchBox.setText('');
                    global.stage.set_key_focus(this._searchBox.searchEntry);
                    Mainloop.source_remove(t);
                    return false;
                });
            }
        });
        this._keyPressEventID = this._historyMenu.scrollView.connect('key-press-event', (_widget, _event, _data) => {
            log.debug("key-press event");
            global.stage.set_key_focus(this._searchBox.searchEntry);
        });
        this._actionBar.onClearHistory(() => {
            this._onClearHistory();
        });
        this._actionBar.onOpenSettings(() => {
            ExtensionUtils.openPrefs();
        });
        this._actionBar.onNextItem(() => {
            this._selectNextItem();
        });
        this._actionBar.onPrevItem(() => {
            this._selectPrevItem();
        });
        this._searchBox.onTextChanged(this._onSearch.bind(this));
    }
    _setupMenu() {
        this.menu.box.style_class = 'popup-menu-content gnome-clipboard';
        this._searchBox = new SearchBox.SearchBox();
        this.menu.addMenuItem(this._searchBox);
        let separator1 = new PopupMenu.PopupSeparatorMenuItem();
        this.menu.addMenuItem(separator1);
        this.menu.addMenuItem(this._historyMenu);
        let separator2 = new PopupMenu.PopupSeparatorMenuItem();
        this.menu.addMenuItem(separator2);
        this.menu.addMenuItem(this._actionBar);
    }
    _onRemoveItem(item) {
        this._history.delete(item.id());
    }
    _onPinItem(item) {
        log.debug(`pin ${item.display()}`);
        if (item.pinned) {
            item.pinned = false;
        }
        else {
            item.pinned = true;
        }
        let t = Mainloop.timeout_add(100, () => {
            this._rebuildMenu();
            Mainloop.source_remove(t);
            return false;
        });
    }
    _onActivateItem(item) {
        log.debug(`update clipboard: ${item.display()} usage: ${item.usage}`);
        this._copyToClipboard(item);
        this._toggle();
    }
    _onSettingsChanged() {
        log.info("settings changed");
        this._setupListener();
        this._rebuildMenu();
        this._saveHistory();
    }
    _onSearch() {
        let query = this._searchBox.getText().toLowerCase();
        this._historyMenu.filterItems(query);
    }
    addClipboard(text) {
        if (text === null || text.length === 0) {
            return false;
        }
        let id = utils.hashCode(text);
        if (id == this._selectedID) {
            return false;
        }
        this._selectedID = id;
        this._addToHistory(text);
        return true;
    }
    _selectPrevItem() {
        let item = this._historyMenu.prevItem();
        if (item) {
            this._copyToClipboard(item);
        }
    }
    _selectNextItem() {
        let item = this._historyMenu.nextItem();
        if (item) {
            this._copyToClipboard(item);
        }
    }
    _addToHistory(text, usage = 1, pinned = false, copiedAt = Date.now(), usedAt = Date.now()) {
        let id = utils.hashCode(text);
        let item = this._history.get(id);
        if (item === undefined) {
            item = new ClipboardItem.ClipboardItem(text, usage, pinned, copiedAt, usedAt);
            this._history.set(item);
        }
        else {
            item.updateLastUsed();
        }
        log.debug(`added '${item.display()}' usage: ${item.usage}`);
    }
    _rebuildMenu() {
        this._history.trim(this._settings.historySize());
        let sorted = this._history.getSorted(this._settings.historySort());
        this._historyMenu.rebuildMenu(sorted, this._selectedID);
        this._onSearch();
        this._actionBar.enablePrevButton(this._historyMenu.hasPrevItem());
        this._actionBar.enableNextButton(this._historyMenu.hasNextItem());
    }
    _setupListener() {
        this._disconnectClipboardTimer();
        this._disconnectSelectionOwnerChanged();
        if (this._settings.clipboardTimer()) {
            let interval = this._settings.clipboardTimerIntervalInMillisecond();
            log.info(`set timer every ${interval} ms`);
            this._clipboardTimerID = Mainloop.timeout_add(interval, () => {
                this._checkClipboard();
                return true;
            });
        }
        else {
            let selection = Shell.Global.get().get_display().get_selection();
            this._selectionOwnerChangedID = selection.connect('owner-changed', (_selection, selectionType, _selectionSource) => {
                if (selectionType === Meta.SelectionType.SELECTION_CLIPBOARD) {
                    this._checkClipboard();
                }
            });
        }
    }
    _checkClipboard() {
        if (!this._actionBar.enable()) {
            return;
        }
        this._clipboard.get_text(St.ClipboardType.CLIPBOARD, (_clipboard, text) => {
            log.info(`set clipboard content: ${text}`);
            if (this.addClipboard(text)) {
                this._rebuildMenu();
                this._saveHistory();
            }
        });
    }
    _copyToClipboard(item) {
        this._clipboard.set_text(St.ClipboardType.CLIPBOARD, item.text);
        this._selectedID = item.id();
        this._rebuildMenu();
        if (this._settings.showNotifications()) {
            Main.notify(_("Clipboard updated"), item.text);
        }
    }
    _onClearHistory() {
        const title = _("Clear history?");
        const message = _("Are you sure you want to remove all items?");
        const sub_message = _("This operation cannot be undone.");
        ConfirmDialog.openConfirmDialog(title, message, sub_message, this._doClearHistory.bind(this), _("Empty"));
    }
    _doClearHistory() {
        this._history.clear();
        this._saveHistory();
        this._rebuildMenu();
    }
    _disconnectClipboardTimer() {
        if (this._clipboardTimerID) {
            Mainloop.source_remove(this._clipboardTimerID);
            this._clipboardTimerID = 0;
        }
    }
    _disconnectSelectionOwnerChanged() {
        if (this._selectionOwnerChangedID) {
            let selection = Shell.Global.get().get_display().get_selection();
            selection.disconnect(this._selectionOwnerChangedID);
            this._selectionOwnerChangedID = 0;
        }
    }
    _loadHistory(history) {
        history.forEach((value) => {
            this._addToHistory(value.text, value.usage, value.pinned, value.copiedAt, value.usedAt);
        });
        this._rebuildMenu();
    }
    _saveHistory() {
        let items = this._history.items(this._settings.savePinned());
        this.store.save(items);
    }
    _toggle() {
        this.menu.toggle();
    }
    destroy() {
        this._disconnectClipboardTimer();
        this._disconnectSelectionOwnerChanged();
        if (this._openStateChangedID) {
            this._historyMenu.disconnect(this._openStateChangedID);
            this._openStateChangedID = 0;
        }
        if (this._keyPressEventID) {
            this._historyMenu.scrollView.disconnect(this._keyPressEventID);
            this._keyPressEventID = 0;
        }
        super.destroy();
    }
}
_a = ClipboardPanel;
(() => {
    GObject.registerClass(_a);
})();
