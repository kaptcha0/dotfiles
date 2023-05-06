var _a;
const { St, GObject } = imports.gi;
const PopupMenu = imports.ui.popupMenu;
var SearchBox = class SearchBox extends PopupMenu.PopupBaseMenuItem {
    constructor() {
        super({
            reactive: false,
            can_focus: true,
        });
        this.searchEntry = new St.Entry({
            style_class: 'search-box',
            can_focus: true,
            hint_text: _('Type here to search...'),
            track_hover: true
        });
        this.searchEntry.set_x_expand(true);
        this.actor.add_child(this.searchEntry);
    }
    onTextChanged(callback) {
        this.searchEntry.get_clutter_text().connect('text-changed', callback);
    }
    getText() {
        return this.searchEntry.get_text();
    }
    setText(text) {
        return this.searchEntry.set_text(text);
    }
}
_a = SearchBox;
(() => {
    GObject.registerClass(_a);
})();
