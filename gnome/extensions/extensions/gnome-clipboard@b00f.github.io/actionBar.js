var _a;
const { St, } = imports.gi;
const PopupMenu = imports.ui.popupMenu;
const GObject = imports.gi.GObject;
var ActionBar = class ActionBar extends PopupMenu.PopupBaseMenuItem {
    constructor() {
        super({
            reactive: false,
            activate: false,
            hover: false,
            can_focus: false,
            style_class: 'action-bar',
        });
        let actionsBox = new St.BoxLayout({
            vertical: false,
            hover: false,
            can_focus: false,
        });
        this._enableBtn = new PopupMenu.PopupSwitchMenuItem(_("Enable"), true, {
            style_class: 'action-bar-btn',
            reactive: true, hover: true,
        });
        this._enableBtn._ornamentLabel.visible = false;
        actionsBox.add(this._enableBtn);
        let spacer = new PopupMenu.PopupBaseMenuItem({
            hover: false,
            reactive: false,
            activate: false,
        });
        spacer._ornamentLabel.visible = false;
        actionsBox.add(spacer);
        this._clearBtn = new PopupMenu.PopupBaseMenuItem({
            style_class: 'action-bar-btn'
        });
        let clearIcon = new St.Icon({
            icon_name: "edit-delete-symbolic",
            style_class: 'popup-menu-icon',
        });
        this._clearBtn.add_child(clearIcon);
        this._clearBtn._ornamentLabel.visible = false;
        actionsBox.add(this._clearBtn);
        this._settingsBtn = new PopupMenu.PopupBaseMenuItem({
            style_class: 'action-bar-btn'
        });
        let settingsIcon = new St.Icon({
            icon_name: "emblem-system-symbolic",
            style_class: 'popup-menu-icon',
        });
        this._settingsBtn.add_child(settingsIcon);
        this._settingsBtn._ornamentLabel.visible = false;
        actionsBox.add(this._settingsBtn);
        this._prevBtn = new PopupMenu.PopupBaseMenuItem({
            style_class: 'action-bar-btn'
        });
        let prevIcon = new St.Icon({
            icon_name: "go-previous-symbolic",
            style_class: 'popup-menu-icon',
        });
        this._prevBtn.add_child(prevIcon);
        this._prevBtn._ornamentLabel.visible = false;
        actionsBox.add(this._prevBtn);
        this._nextBtn = new PopupMenu.PopupBaseMenuItem({
            style_class: 'action-bar-btn'
        });
        let nextIcon = new St.Icon({
            icon_name: "go-next-symbolic",
            style_class: 'popup-menu-icon',
        });
        this._nextBtn.add_child(nextIcon);
        this._nextBtn._ornamentLabel.visible = false;
        actionsBox.add(this._nextBtn);
        this.actor.add(actionsBox);
    }
    enableNextButton(_enable) {
    }
    enablePrevButton(_enable) {
    }
    onNextItem(callback) {
        this._nextBtn.connect('activate', (_obj) => {
            callback();
        });
    }
    onPrevItem(callback) {
        this._prevBtn.connect('activate', (_obj) => {
            callback();
        });
    }
    onClearHistory(callback) {
        this._clearBtn.connect('activate', (_obj) => {
            callback();
        });
    }
    onOpenSettings(callback) {
        this._settingsBtn.connect('activate', (_obj) => {
            callback();
        });
    }
    enable() {
        return this._enableBtn.state;
    }
}
_a = ActionBar;
(() => {
    GObject.registerClass(_a);
})();
