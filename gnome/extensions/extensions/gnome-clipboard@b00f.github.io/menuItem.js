var _a;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;
const GObject = imports.gi.GObject;
const Clutter = imports.gi.Clutter;
var MenuItem = class MenuItem extends PopupMenu.PopupBaseMenuItem {
    constructor(cbInfo, onActivate, onPin, onRemove) {
        super();
        this.cbInfo = cbInfo;
        let label = new St.Label({ text: cbInfo.display() });
        this.add_child(label);
        this.connect('activate', () => {
            onActivate(this);
        });
        let pinIcon = new St.Icon({
            icon_name: "",
            reactive: true,
            track_hover: true,
            style_class: "popup-menu-icon pin-icon",
        });
        if (this.cbInfo.pinned) {
            pinIcon.icon_name = "view-pin-symbolic";
        }
        else {
            pinIcon.icon_name = "";
        }
        pinIcon.connect("enter-event", (self) => {
            self.icon_name = "view-pin-symbolic";
        });
        pinIcon.connect("leave-event", (self) => {
            if (this.cbInfo.pinned) {
                self.icon_name = "view-pin-symbolic";
            }
            else {
                self.icon_name = "";
            }
        });
        let pinBtn = new St.Button({
            style_class: 'action-btn',
            reactive: true,
            track_hover: true,
            child: pinIcon
        });
        pinBtn.set_x_align(Clutter.ActorAlign.END);
        pinBtn.set_x_expand(true);
        pinBtn.set_y_expand(true);
        this.actor.add_child(pinBtn);
        pinBtn.connect('button-press-event', () => {
            onPin(this);
        });
        let removeIcon = new St.Icon({
            icon_name: "edit-delete-symbolic",
            style_class: 'popup-menu-icon'
        });
        let removeBtn = new St.Button({
            style_class: 'action-btn',
            child: removeIcon
        });
        removeBtn.set_x_align(Clutter.ActorAlign.END);
        removeBtn.set_x_expand(false);
        removeBtn.set_y_expand(true);
        this.actor.add_child(removeBtn);
        removeBtn.connect('button-press-event', () => {
            onRemove(this);
        });
    }
    text() {
        return this.cbInfo.text;
    }
}
_a = MenuItem;
(() => {
    GObject.registerClass(_a);
})();
