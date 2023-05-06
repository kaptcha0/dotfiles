const Me = imports.misc.extensionUtils.getCurrentExtension();
const ScrollMenu = Me.imports.scrollMenu;
const MenuItem = Me.imports.menuItem;
const PopupMenu = imports.ui.popupMenu;
var HistoryMenu = class HistoryMenu extends ScrollMenu.ScrollMenu {
    constructor(onActivateItem, onPinItem, onRemoveItem) {
        super();
        this._onActivateItem = onActivateItem;
        this._onPinItem = onPinItem;
        this._onRemoveItem = onRemoveItem;
        this._nextItem = null;
        this._prevItem = null;
    }
    rebuildMenu(history, selectedID) {
        super.removeAll();
        this._nextItem = null;
        this._prevItem = null;
        history.forEach((info, index, arr) => {
            let item = new MenuItem.MenuItem(info, this.onActivateItem.bind(this), this.onPinItem.bind(this), this.onRemoveItem.bind(this));
            if (info.id() == selectedID) {
                item.setOrnament(PopupMenu.Ornament.CHECK);
                if (index - 1 > 0) {
                    this._nextItem = arr[index - 1];
                }
                if (index + 1 < arr.length) {
                    this._prevItem = arr[index + 1];
                }
                super.scrollToBottom();
            }
            super.addMenuItem(item);
        });
    }
    nextItem() {
        return this._nextItem;
    }
    prevItem() {
        return this._prevItem;
    }
    hasNextItem() {
        return this._nextItem != null;
    }
    hasPrevItem() {
        return this._prevItem != null;
    }
    onActivateItem(item) {
        this._onActivateItem(item.cbInfo);
    }
    onRemoveItem(item) {
        item.destroy();
        this._onRemoveItem(item.cbInfo);
    }
    onPinItem(item) {
        this._onPinItem(item.cbInfo);
    }
}
;
