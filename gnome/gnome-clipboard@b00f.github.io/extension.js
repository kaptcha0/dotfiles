const Me = imports.misc.extensionUtils.getCurrentExtension();
const ClipboardPanel = Me.imports.clipboardPanel;
const log = Me.imports.log;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const GETTEXT_DOMAIN = 'gnome-clipboard';
const Gettext = imports.gettext.domain(GETTEXT_DOMAIN);
var _ = Gettext.gettext;
var GnomeExtension = class GnomeExtension {
    constructor(uuid) {
        this._uuid = uuid;
        ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
    }
    enable() {
        log.info(`enabling...`);
        if (!this._panel) {
            this._panel = new ClipboardPanel.ClipboardPanel();
            Main.panel.addToStatusArea(this._uuid, this._panel);
        }
    }
    disable() {
        log.info(`disabling...`);
        if (this._panel) {
            this._panel.destroy();
            this._panel = null;
        }
    }
}
function init(meta) {
    log.info(`initializing Gnome Clipboard version ${Me.metadata.version} ...`);
    return new GnomeExtension(meta.uuid);
}
