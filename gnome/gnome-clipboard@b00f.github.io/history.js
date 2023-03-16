const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
var History = class History {
    constructor() {
        this._history = new Map();
    }
    clear() {
        this._history.clear();
    }
    delete(id) {
        this._history.delete(id);
    }
    get(id) {
        return this._history.get(id);
    }
    set(item) {
        return this._history.set(item.id(), item);
    }
    trim(total) {
        let arr = this.getSorted(Settings.HISTORY_SORT_COPY_TIME);
        for (let i = total; i < arr.length; ++i) {
            let item = arr.pop();
            this._history.delete(item.id());
        }
    }
    items(only_pinned) {
        let items = [];
        this._history.forEach((item, _) => {
            if (only_pinned) {
                if (item.pinned) {
                    items.push(item);
                }
            }
            else {
                items.push(item);
            }
        });
        return items;
    }
    getSorted(sort_by) {
        let arr = Array.from(this._history.values());
        arr.sort((l, r) => {
            if (r.pinned && !l.pinned) {
                return 1;
            }
            if (!r.pinned && l.pinned) {
                return -1;
            }
            switch (sort_by) {
                case Settings.HISTORY_SORT_RECENT_USAGE:
                    return r.usedAt - l.usedAt;
                case Settings.HISTORY_SORT_COPY_TIME:
                    return r.copiedAt - l.copiedAt;
                case Settings.HISTORY_SORT_MOST_USAGE:
                default:
                    if (r.usage == l.usage) {
                        return r.copiedAt - l.copiedAt;
                    }
                    return r.usage - l.usage;
            }
        });
        return arr;
    }
}
