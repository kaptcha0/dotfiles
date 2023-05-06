const Me = imports.misc.extensionUtils.getCurrentExtension();
const utils = Me.imports.utils;
var ClipboardItem = class ClipboardItem {
    constructor(text, usage, pinned, copiedAt, usedAt) {
        this.text = text;
        this.usage = usage;
        this.pinned = pinned;
        this.copiedAt = copiedAt;
        this.usedAt = usedAt;
    }
    id() {
        return utils.hashCode(this.text);
    }
    display() {
        return utils.truncate(this.text, 32);
    }
    updateLastUsed() {
        this.usage++;
        this.usedAt = Date.now();
    }
}
