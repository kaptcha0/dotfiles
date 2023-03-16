/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

const GLib$1 = imports.gi.GLib;
function assertNotNull(value) {
    if (value === null || value === undefined) {
        throw Error(`Expected value, but found ${value}`);
    }
    return value;
}
function assert(shouldBeTrue, message) {
    if (!shouldBeTrue) {
        throw Error('Assertion failed: ' + message);
    }
}
function logAssert(shouldBeTrue, message) {
    if (!shouldBeTrue) {
        GLib$1.log_structured('Material Shell', GLib$1.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: 'Assertion failed: ' + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;
}

const GObject$1 = imports.gi.GObject;
const Signals = imports.signals;
function registerGObjectClass(target) {
    if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
        return GObject$1.registerClass(target.metaInfo, target);
    }
    else {
        return GObject$1.registerClass(target);
    }
}
class WithSignals {
    emit(name, ...params) { }
    connect(name, callback) {
        return 0;
    }
    disconnect(id) { }
}
Signals.addSignalMethods(WithSignals.prototype);

const Gdk = imports.gi.Gdk;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const schemaSource = Gio.SettingsSchemaSource.new_from_directory(Me.dir.get_child('schemas').get_path(), Gio.SettingsSchemaSource.get_default(), false);
const hotkeysSchemaName = 'org.gnome.shell.extensions.materialshell.bindings';
function log(...args) {
    const fields = { MESSAGE: `${args.join(', ')}` };
    const domain = 'Material Shell';
    GLib.log_structured(domain, GLib.LogLevelFlags.LEVEL_MESSAGE, fields);
}
function init() {
    log('INITIALIZING PREFERENCES');
}
function buildPrefsWidget() {
    log('Prefs widget');
    return new PrefsWidget();
}
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["BOOLEAN"] = 0] = "BOOLEAN";
    WidgetType[WidgetType["COMBO"] = 1] = "COMBO";
    WidgetType[WidgetType["INT"] = 2] = "INT";
    WidgetType[WidgetType["DECIMAL"] = 3] = "DECIMAL";
    WidgetType[WidgetType["INPUT"] = 4] = "INPUT";
    WidgetType[WidgetType["COLOR"] = 5] = "COLOR";
    WidgetType[WidgetType["CUSTOM"] = 6] = "CUSTOM";
})(WidgetType || (WidgetType = {}));
let SettingListBoxRow = class SettingListBoxRow extends Gtk.ListBoxRow {
    _init(summary, description, widget) {
        super._init();
        this._name_label.set_text(summary);
        this._description_label.set_text(description);
        this._settings_widget = widget;
        this._widget_container.append(this._settings_widget);
    }
};
SettingListBoxRow.metaInfo = {
    GTypeName: 'SettingListBoxRow',
    Template: Me.dir.get_child('setting_list_box_row.ui').get_uri(),
    Properties: {
        'settings-widget': GObject.ParamSpec.object('settings-widget', 'Settings Widget', 'The widget in which the user sets the settings value', GObject.ParamFlags.READWRITE, Gtk.Widget.$gtype),
    },
    InternalChildren: [
        'name_label',
        'description_label',
        'widget_container',
    ],
};
SettingListBoxRow = __decorate([
    registerGObjectClass
], SettingListBoxRow);
let HotkeyRowData = class HotkeyRowData extends GObject.Object {
    _init(key, summary, accelName) {
        super._init();
        this.key = key;
        this.summary = summary;
        this.accelName = accelName;
    }
};
HotkeyRowData = __decorate([
    registerGObjectClass
], HotkeyRowData);
let HotkeyListBox = class HotkeyListBox extends Gtk.ListBox {
    _init() {
        super._init();
        this.connect('row-activated', (_, row) => {
            row.openDialog();
        });
        this.settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(hotkeysSchemaName, false) || undefined,
        });
        this.settings
            .list_keys()
            .map((key) => {
            const [ok, accelKey, accelerators, mods] = Gtk.accelerator_parse_with_keycode(this.settings.get_strv(key)[0], null);
            if (!ok) {
                log(`Could not parse key for ${key}: ${this.settings.get_strv(key)[0]}`);
            }
            let accelName;
            if (accelKey == 0) {
                accelName = 'Disabled';
            }
            else {
                assert(accelKey !== null && mods !== null, 'parse should have succeeded');
                accelName = Gtk.accelerator_get_label(accelKey, mods);
            }
            const summary = this.settings.settings_schema
                .get_key(key)
                .get_summary();
            return {
                key,
                summary,
                accelKey,
                mods,
                accelName,
            };
        })
            .sort((modelEntryA, modelEntryB) => {
            return modelEntryA.summary > modelEntryB.summary ? 1 : 0;
        })
            .forEach((modelEntry) => {
            const row = this.createHotkeyRow(new HotkeyRowData(modelEntry.key, modelEntry.summary, modelEntry.accelName));
            row.connect('accel-changed', (_, value) => {
                this.settings.set_strv(modelEntry.key, [value]);
            });
            this.append(row);
        });
    }
    createHotkeyRow(obj) {
        const data = obj;
        return new HotkeyListBoxRow(data.key, data.summary, data.accelName);
    }
};
HotkeyListBox.metaInfo = {
    GTypeName: 'HotkeyListBox',
    Template: Me.dir.get_child('hotkey_list_box.ui').get_uri(),
};
HotkeyListBox = __decorate([
    registerGObjectClass
], HotkeyListBox);
let HotkeyListBoxRow = class HotkeyListBoxRow extends Gtk.ListBoxRow {
    _init(key, hotkeyName, accel) {
        super._init();
        this.key = key;
        this._accel_label.set_text(accel);
        this._hotkey_label.set_text(hotkeyName);
        this.connect('activate', () => this.openDialog());
    }
    openDialog() {
        this._dialog.transient_for = this.get_root();
        this._dialog.present();
        assertNotNull(this.get_root()).get_surface().inhibit_system_shortcuts(null);
    }
    onKeyPressed(_widget, keyval, keycode, state) {
        let mask = state & Gtk.accelerator_get_default_mod_mask();
        mask &= ~Gdk.ModifierType.LOCK_MASK;
        if (mask === 0 && keyval === Gdk.KEY_Escape) {
            this.closeDialog();
            return Gdk.EVENT_STOP;
        }
        if (mask === 0 && keyval === Gdk.KEY_BackSpace) {
            this._accel_label.set_text('Disabled');
            this.emit('accel-changed', '');
            this.closeDialog();
            return Gdk.EVENT_STOP;
        }
        if (!Gtk.accelerator_valid(keyval, mask))
            return Gdk.EVENT_STOP;
        const accel = Gtk.accelerator_name_with_keycode(null, keyval, keycode, mask);
        this._accel_label.set_text(Gtk.accelerator_get_label(keyval, mask));
        this.emit('accel-changed', accel);
        this.closeDialog();
        return Gdk.EVENT_STOP;
    }
    closeDialog() {
        assertNotNull(this.get_root()).get_surface().restore_system_shortcuts();
        this._dialog.close();
    }
};
HotkeyListBoxRow.metaInfo = {
    GTypeName: 'HotkeyListBoxRow',
    Template: Me.dir.get_child('hotkey_list_box_row.ui').get_uri(),
    InternalChildren: ['accel_label', 'hotkey_label', 'dialog'],
    Signals: {
        accel_changed: {
            param_types: [GObject.TYPE_STRING],
            accumulator: 0,
        },
    },
};
HotkeyListBoxRow = __decorate([
    registerGObjectClass
], HotkeyListBoxRow);
let SettingCategoryListBox = class SettingCategoryListBox extends Gtk.Box {
    _init(title, schema) {
        super._init();
        this.settings = new Gio.Settings({
            settings_schema: schemaSource.lookup(schema, false) || undefined,
        });
        this.title = title;
    }
    get title() {
        return this._title_label.get_text();
    }
    set title(value) {
        this._title_label.set_markup(`<span size="medium">${value}</span>`);
    }
    addSetting(key, type, customWidget) {
        const settingKey = this.settings.settings_schema.get_key(key);
        const summary = settingKey.get_summary();
        const description = settingKey.get_description();
        let widget;
        switch (type) {
            case WidgetType.BOOLEAN:
                widget = new Gtk.Switch();
                this.settings.bind(key, widget, 'active', Gio.SettingsBindFlags.DEFAULT);
                break;
            case WidgetType.COMBO:
                const combo = (widget = new Gtk.ComboBoxText());
                const a = settingKey
                    .get_range()
                    .get_child_value(1)
                    .recursiveUnpack();
                a.forEach((value) => {
                    combo.append(value, value);
                });
                this.settings.bind(key, widget, 'active-id', Gio.SettingsBindFlags.DEFAULT);
                break;
            case WidgetType.COLOR: {
                const btn = (widget = new Gtk.ColorButton());
                const rgba = new Gdk.RGBA();
                rgba.parse(this.settings.get_string(key));
                btn.set_rgba(rgba);
                widget.connect('color-set', (button) => {
                    const rgba = button.get_rgba();
                    const css = rgba.to_string();
                    const hexString = cssHexString(css);
                    this.settings.set_string(key, hexString);
                });
                break;
            }
            case WidgetType.INT:
                const spin = (widget = Gtk.SpinButton.new_with_range(0, 1000, 1));
                this.settings.bind(key, spin.get_adjustment(), 'value', Gio.SettingsBindFlags.DEFAULT);
                break;
            case WidgetType.DECIMAL:
                const spin2 = (widget = Gtk.SpinButton.new_with_range(0, 1, 0.1));
                this.settings.bind(key, spin2.get_adjustment(), 'value', Gio.SettingsBindFlags.DEFAULT);
                break;
            case WidgetType.INPUT:
                widget = Gtk.Entry.new();
                this.settings.bind(key, widget, 'text', Gio.SettingsBindFlags.DEFAULT);
                break;
            case WidgetType.CUSTOM:
                if (customWidget == undefined) {
                    throw new Error('Supplied custom widget is undefined');
                }
                widget = customWidget;
                break;
        }
        widget.set_valign(Gtk.Align.CENTER);
        const row = new SettingListBoxRow(summary, description, widget);
        this._list_box.append(row);
    }
};
SettingCategoryListBox.metaInfo = {
    GTypeName: 'SettingCategoryListBox',
    Template: Me.dir.get_child('setting_category_list_box.ui').get_uri(),
    Properties: {
        title: GObject.ParamSpec.string('title', 'Title', 'The title of the category', GObject.ParamFlags.READWRITE, ''),
    },
    InternalChildren: ['title_label', 'list_box'],
};
SettingCategoryListBox = __decorate([
    registerGObjectClass
], SettingCategoryListBox);
let PrefsWidget = class PrefsWidget extends Gtk.Box {
    _init() {
        super._init();
        const theme = new SettingCategoryListBox('Theme', 'org.gnome.shell.extensions.materialshell.theme');
        theme.addSetting('theme', WidgetType.COMBO);
        theme.addSetting('primary-color', WidgetType.COLOR);
        theme.addSetting('vertical-panel-position', WidgetType.COMBO);
        theme.addSetting('horizontal-panel-position', WidgetType.COMBO);
        theme.addSetting('panel-size', WidgetType.INT);
        theme.addSetting('panel-opacity', WidgetType.INT);
        theme.addSetting('panel-icon-style', WidgetType.COMBO);
        theme.addSetting('panel-icon-color', WidgetType.BOOLEAN);
        theme.addSetting('taskbar-item-style', WidgetType.COMBO);
        theme.addSetting('surface-opacity', WidgetType.INT);
        theme.addSetting('blur-background', WidgetType.BOOLEAN);
        theme.addSetting('clock-horizontal', WidgetType.BOOLEAN);
        theme.addSetting('clock-app-launcher', WidgetType.BOOLEAN);
        theme.addSetting('focus-effect', WidgetType.COMBO);
        this._settings_box.append(theme);
        const tweaks = new SettingCategoryListBox('Tweaks', 'org.gnome.shell.extensions.materialshell.tweaks');
        tweaks.addSetting('cycle-through-windows', WidgetType.BOOLEAN);
        tweaks.addSetting('cycle-through-workspaces', WidgetType.BOOLEAN);
        tweaks.addSetting('disable-notifications', WidgetType.BOOLEAN);
        tweaks.addSetting('enable-persistence', WidgetType.BOOLEAN);
        this._settings_box.append(tweaks);
        const layouts = new SettingCategoryListBox('Tiling layouts', 'org.gnome.shell.extensions.materialshell.layouts');
        const tilingLayouts = [
            'maximize',
            'split',
            'half',
            'half-horizontal',
            'half-vertical',
            'ratio',
            'grid',
            'float',
            'simple',
            'simple-horizontal',
            'simple-vertical',
        ];
        layouts.addSetting('default-layout', WidgetType.CUSTOM, getDefaultLayoutComboBox(tilingLayouts, layouts.settings));
        tilingLayouts.forEach((layoutKey) => {
            layouts.addSetting(layoutKey, WidgetType.BOOLEAN);
            if (layoutKey === 'ratio') {
                layouts.addSetting('ratio-value', WidgetType.DECIMAL);
            }
        });
        layouts.addSetting('gap', WidgetType.INT);
        layouts.addSetting('use-screen-gap', WidgetType.BOOLEAN);
        layouts.addSetting('screen-gap', WidgetType.INT);
        layouts.addSetting('tween-time', WidgetType.DECIMAL);
        layouts.addSetting('windows-excluded', WidgetType.INPUT);
        layouts.addSetting('roles-excluded', WidgetType.INPUT);
        this._settings_box.append(layouts);
    }
};
PrefsWidget.metaInfo = {
    GTypeName: 'PrefsWidget',
    Template: Me.dir.get_child('prefs.ui').get_uri(),
    InternalChildren: ['settings_box'],
};
PrefsWidget = __decorate([
    registerGObjectClass
], PrefsWidget);
function cssHexString(css) {
    let rrggbb = '#';
    let start = undefined;
    for (let loop = 0; loop < 3; loop++) {
        let end = 0;
        let xx = '';
        for (let loop = 0; loop < 2; loop++) {
            for (;;) {
                const x = css.slice(end, end + 1);
                if (x == '(' || x == ',' || x == ')')
                    break;
                end++;
            }
            if (loop == 0) {
                end++;
                start = end;
            }
        }
        assert(start !== undefined, 'true by construction');
        xx = parseInt(css.slice(start, end)).toString(16);
        if (xx.length == 1)
            xx = `0${xx}`;
        rrggbb += xx;
        css = css.slice(end);
    }
    return rrggbb;
}
function getDefaultLayoutComboBox(tilingLayouts, setting) {
    const widget = new Gtk.ComboBoxText();
    const refreshComboBox = () => {
        widget.remove_all();
        tilingLayouts.forEach((layoutKey) => {
            if (setting.get_boolean(layoutKey)) {
                widget.append(layoutKey, layoutKey);
            }
        });
    };
    tilingLayouts.forEach((layoutKey) => {
        if (setting.get_boolean(layoutKey)) {
            widget.append(layoutKey, layoutKey);
        }
        setting.connect(`changed::${layoutKey}`, refreshComboBox);
    });
    setting.bind('default-layout', widget, 'active-id', Gio.SettingsBindFlags.DEFAULT);
    return widget;
}
