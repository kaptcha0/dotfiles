const ExtensionUtils = imports.misc.extensionUtils;
var SCHEMA_ID = 'org.gnome.shell.extensions.gnome-clipboard';
var HISTORY_SIZE = "history-size";
var HISTORY_SORT = "history-sort";
var CLIPBOARD_TIMER = "clipboard-timer";
var TIMER_INTERVAL = "timer-interval";
var SAVE_PINNED = "save-pinned";
var SHOW_NOTIFICATIONS = "show-notifications";
var HISTORY_SORT_COPY_TIME = 0;
var HISTORY_SORT_RECENT_USAGE = 1;
var HISTORY_SORT_MOST_USAGE = 2;
var ExtensionSettings = class ExtensionSettings {
    constructor() {
        this._settings = ExtensionUtils.getSettings(SCHEMA_ID);
    }
    onChanged(callback) {
        this._settings.connect('changed', callback);
    }
    historySize() {
        return this._settings.get_uint(HISTORY_SIZE);
    }
    historySort() {
        return this._settings.get_uint(HISTORY_SORT);
    }
    clipboardTimer() {
        return this._settings.get_boolean(CLIPBOARD_TIMER);
    }
    clipboardTimerIntervalInMillisecond() {
        return this._settings.get_uint(TIMER_INTERVAL);
    }
    savePinned() {
        return this._settings.get_boolean(SAVE_PINNED);
    }
    showNotifications() {
        return this._settings.get_boolean(SHOW_NOTIFICATIONS);
    }
}
