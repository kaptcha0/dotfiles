const Me = imports.misc.extensionUtils.getCurrentExtension();
const GLib = imports.gi.GLib;
const ByteArray = imports.byteArray;
const log = Me.imports.log;
function log_methods(obj) {
    var result = [];
    for (var id in obj) {
        try {
            if (typeof (obj[id]) == "function") {
                result.push(id + ": " + obj[id].toString());
            }
        }
        catch (err) {
            result.push(id + ": inaccessible");
        }
    }
    log.info(result.toString());
}
function log_object(obj) {
    let seen = [];
    let json = JSON.stringify(obj, function (_key, val) {
        if (val != null && typeof val == "object") {
            if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    });
    log.info(json);
}
function hashCode(text) {
    var hash = 0;
    if (text.length == 0)
        return hash;
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}
function truncate(text, length) {
    text = text.trim();
    text = text.replace(/\s+/g, ' ');
    if (text.length > length) {
        text = text.substring(0, length - 1) + '...';
    }
    return text;
}
function spawnAsync(...args) {
    try {
        let flags = GLib.SpawnFlags.SEARCH_PATH;
        GLib.spawn_async(null, args, null, flags, null);
    }
    catch (err) {
        log.error(`an exception occurred: ${err}`);
    }
}
function spawnSync(...args) {
    try {
        let flags = GLib.SpawnFlags.SEARCH_PATH;
        let [_success, _out, err, _errno] = GLib.spawn_sync(null, args, null, flags, null);
        let err_string = ByteArray.toString(err);
        if (err_string != "") {
            log.error(`an error occurred: ${err}`);
            return false;
        }
        return true;
    }
    catch (err) {
        log.error(`an exception occurred: ${err}`);
    }
}
