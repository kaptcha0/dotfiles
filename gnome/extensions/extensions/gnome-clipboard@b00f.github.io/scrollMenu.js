const Me = imports.misc.extensionUtils.getCurrentExtension();
const log = Me.imports.log;
const { St } = imports.gi;
const PopupMenu = imports.ui.popupMenu;
var ScrollMenu = class ScrollMenu extends PopupMenu.PopupMenuSection {
    constructor() {
        super();
        this.scrollView = new St.ScrollView({
            overlay_scrollbars: true,
            style_class: "scroll-view",
            clip_to_allocation: true,
        });
        this.scrollView.set_policy(St.PolicyType.NEVER, St.PolicyType.AUTOMATIC);
        this.scrollViewSection = new PopupMenu.PopupMenuSection();
        this.scrollView.add_actor(this.scrollViewSection.actor);
        this.actor.add_actor(this.scrollView);
    }
    filterItems(query) {
        log.debug(`filtering ${query}`);
        let items = this.scrollViewSection._getMenuItems();
        if (query === '') {
            items.forEach(function (item) {
                item.actor.visible = true;
            });
        }
        else {
            items.forEach(function (item) {
                let text = item.text().toLowerCase();
                let matched = text.indexOf(query) >= 0;
                item.actor.visible = matched;
            });
        }
    }
    addMenuItem(item) {
        this.scrollViewSection.addMenuItem(item);
    }
    removeAll() {
        this.scrollViewSection.removeAll();
    }
    scrollToBottom() {
    }
}
;
