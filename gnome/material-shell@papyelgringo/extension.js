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

const GObject$9 = imports.gi.GObject;
const Signals$2 = imports.signals;
function registerGObjectClass(target) {
    if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
        return GObject$9.registerClass(target.metaInfo, target);
    }
    else {
        return GObject$9.registerClass(target);
    }
}
class WithSignals {
    emit(name, ...params) { }
    connect(name, callback) {
        return 0;
    }
    disconnect(id) { }
}
Signals$2.addSignalMethods(WithSignals.prototype);

const GLib$o = imports.gi.GLib;
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
        GLib$o.log_structured('Material Shell', GLib$o.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: 'Assertion failed: ' + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;
}

const { PACKAGE_VERSION: PACKAGE_VERSION$1 } = imports.misc.config;
function parseVersion(s) {
    const components = s.split('.').map((x) => {
        if (x === 'alpha')
            return -3;
        if (x === 'beta')
            return -2;
        if (x === 'rc')
            return -1;
        return Number(x);
    });
    if (!components.every((x) => isFinite(x))) {
        throw new Error(`Could not parse version number: ${s}`);
    }
    return components;
}
function compareVersions(lhs, rhs) {
    for (let i = 0; i < Math.max(lhs.length, rhs.length); i++) {
        const a = i < lhs.length ? lhs[i] : 0;
        const b = i < rhs.length ? rhs[i] : 0;
        if (a != b) {
            return a < b ? -1 : 1;
        }
    }
    return 0;
}
const gnomeVersionNumber = parseVersion(PACKAGE_VERSION$1);
function ShellVersionMatch(version) {
    return PACKAGE_VERSION$1.match(new RegExp(`^${version}`)) !== null;
}
function gnomeVersionGreaterOrEqualTo(vs, version) {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) >= 0;
}
function gnomeVersionLessOrEqualTo(vs, version) {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) <= 0;
}
function gnomeVersionEqualTo(vs, version) {
    return compareVersions(gnomeVersionNumber, parseVersion(version)) == 0;
}
logAssert(compareVersions(parseVersion('3.0'), parseVersion('3.1')) === -1, 'Failed tests');
logAssert(compareVersions(parseVersion('30'), parseVersion('3.1')) === 1, 'Failed tests');
logAssert(compareVersions(parseVersion('3.20.32'), parseVersion('3.20.32')) === 0, 'Failed tests');
logAssert(compareVersions(parseVersion('3.20'), parseVersion('3.20.0')) === 0, 'Failed tests');
logAssert(compareVersions(parseVersion('42.3'), parseVersion('41.5')) === 1, 'Failed tests');

const Clutter$v = imports.gi.Clutter;
const GLib$n = imports.gi.GLib;
const St$q = imports.gi.St;
let RippleWave = class RippleWave extends St$q.Widget {
    _init({ mouseX, mouseY, size, }) {
        super._init({
            style_class: 'ripple-wave',
        });
        this.destroyed = false;
        this.connect('destroy', () => {
            this.destroyed = true;
        });
        this.set_pivot_point(0.5, 0.5);
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.fullSize = size * 3;
        this.width = this.fullSize;
        this.height = this.fullSize;
        this.x = Math.round(this.mouseX - this.width / 2);
        this.y = Math.round(this.mouseY - this.height / 2);
        this.scale_x = 32 / this.fullSize;
        this.scale_y = 32 / this.fullSize;
        GLib$n.idle_add(GLib$n.PRIORITY_DEFAULT, () => {
            this.ease({
                scale_x: 1,
                scale_y: 1,
                duration: (this.fullSize / 800) * 1000,
                mode: Clutter$v.AnimationMode.EASE_OUT_QUAD,
            });
            return GLib$n.SOURCE_REMOVE;
        });
    }
    removeIn(second) {
        this.ease({
            opacity: 0,
            duration: second * 1000,
            mode: Clutter$v.AnimationMode.EASE_OUT_QUAD,
            onStopped: () => {
                GLib$n.idle_add(GLib$n.PRIORITY_DEFAULT, () => {
                    if (!this.destroyed) {
                        this.remove_all_transitions();
                        this.destroy();
                    }
                    return false;
                });
            },
        });
    }
};
RippleWave = __decorate([
    registerGObjectClass
], RippleWave);
let RippleBackground = class RippleBackground extends St$q.Widget {
    _init(eventListener) {
        super._init({
            clip_to_allocation: true,
        });
        this.displayed = true;
        eventListener.connect('event', (actor, event) => {
            const eventType = event.type();
            if ([
                Clutter$v.EventType.BUTTON_PRESS,
                Clutter$v.EventType.TOUCH_BEGIN,
            ].indexOf(eventType) > -1) {
                const [_, x, y] = this.transform_stage_point(...event.get_coords());
                this.createRippleWave(x, y);
            }
            else if ([
                Clutter$v.EventType.BUTTON_RELEASE,
                Clutter$v.EventType.TOUCH_END,
                Clutter$v.EventType.LEAVE,
            ].indexOf(eventType) > -1) {
                this.removeRippleWave();
            }
            return false;
        });
        const deactivateId = global.stage.connect('deactivate', this.removeRippleWave.bind(this));
        this.connect('destroy', () => {
            if (deactivateId)
                global.stage.disconnect(deactivateId);
        });
    }
    createRippleWave(x, y) {
        this.lastWave = new RippleWave({
            mouseX: x,
            mouseY: y,
            size: Math.max(this.width, this.height),
        });
        this.add_child(this.lastWave);
    }
    removeRippleWave() {
        if (this.lastWave) {
            const waveToDelete = this.lastWave;
            delete this.lastWave;
            waveToDelete.removeIn(0.8);
        }
    }
};
RippleBackground = __decorate([
    registerGObjectClass
], RippleBackground);

const Clutter$u = imports.gi.Clutter;
const GObject$8 = imports.gi.GObject;
const Meta$a = imports.gi.Meta;
const St$p = imports.gi.St;
const Me$J = imports.misc.extensionUtils.getCurrentExtension();
const beforeGnome44$1 = compareVersions(gnomeVersionNumber, parseVersion('44.0')) < 0;
let MatButton = class MatButton extends St$p.Widget {
    _init(params) {
        const isPrimary = params.primary;
        const child = params.child;
        const super_params = params;
        delete super_params.child;
        delete super_params.primary;
        Object.assign(super_params, {
            reactive: true,
            track_hover: true,
            clip_to_allocation: true,
        });
        super._init(super_params);
        this.set_child(child);
        this.rippleBackground = new RippleBackground(this);
        this.add_child(this.rippleBackground);
        this.add_style_class_name('mat-button');
        if (isPrimary) {
            this.add_style_class_name('primary');
        }
        const clickAction = new PropagateClickAction();
        clickAction.connect('clicked', (action) => {
            this.clicked = true;
            const button = action.get_button();
            this.emit('clicked', button);
            if (button === Clutter$u.BUTTON_PRIMARY || button === 0) {
                this.emit('primary-action');
            }
            if (button === Clutter$u.BUTTON_SECONDARY) {
                this.emit('secondary-action');
            }
            this.rippleBackground.removeRippleWave();
            return true;
        });
        clickAction.connect('long-press', this._onLongPress.bind(this));
        this.add_action(clickAction);
        this.connect('enter-event', () => {
            Me$J.msThemeManager.setCursor(Meta$a.Cursor.POINTING_HAND);
        });
        this.connect('leave-event', () => {
            Me$J.msThemeManager.setCursor(Meta$a.Cursor.DEFAULT);
        });
    }
    _onLongPress(action, actor, state) {
        if (state == Clutter$u.LongPressState.CANCEL) {
            const event = action.event;
            if (this._longPressLater)
                return true;
            const callback = () => {
                delete this._longPressLater;
                if (this.clicked) {
                    delete this.clicked;
                    return false;
                }
                action.release();
                this.emit('drag-start', event);
                return false;
            };
            this._longPressLater = beforeGnome44$1
                ? Meta$a.later_add(Meta$a.LaterType.BEFORE_REDRAW, callback)
                : global.compositor
                    .get_laters()
                    .add(Meta$a.LaterType.BEFORE_REDRAW, callback);
        }
        if (state == Clutter$u.LongPressState.ACTIVATE) {
            this.emit('secondary-action');
        }
        return true;
    }
    vfunc_get_preferred_width(forHeight) {
        if (!this.child)
            return super.vfunc_get_preferred_width(forHeight);
        return this.child.vfunc_get_preferred_width(forHeight);
    }
    vfunc_get_preferred_height(forWidth) {
        if (!this.child)
            return super.vfunc_get_preferred_height(forWidth);
        return this.child.vfunc_get_preferred_height(forWidth);
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        if (this.child) {
            this.child.allocate(contentBox);
        }
        if (this.rippleBackground.get_parent()) {
            this.rippleBackground.allocate(contentBox);
        }
    }
    set_child(child) {
        if (this.child) {
            this.remove_child(this.child);
        }
        this.child = child;
        if (child) {
            this.add_child(child);
        }
    }
};
MatButton.metaInfo = {
    GTypeName: 'MatButton',
    Signals: {
        clicked: {
            param_types: [GObject$8.TYPE_INT],
        },
        'primary-action': {},
        'secondary-action': {},
        'drag-start': {
            param_types: [Clutter$u.Event.$gtype],
        },
    },
};
MatButton = __decorate([
    registerGObjectClass
], MatButton);
const beforeGnome42 = compareVersions(gnomeVersionNumber, parseVersion('42.0')) < 0;
const PropagateClickAction = (() => {
    if (beforeGnome42) {
        let PropagateClickActionBefore42 = class PropagateClickActionBefore42 extends Clutter$u.ClickAction {
            vfunc_clicked(actor) {
                this.event = Clutter$u.get_current_event();
                return super.vfunc_clicked(actor);
            }
            vfunc_long_press(actor, state) {
                this.event = Clutter$u.get_current_event();
                return super.vfunc_long_press(actor, state);
            }
        };
        PropagateClickActionBefore42.metaInfo = {
            GTypeName: 'PropagateClickAction',
        };
        PropagateClickActionBefore42 = __decorate([
            registerGObjectClass
        ], PropagateClickActionBefore42);
        return PropagateClickActionBefore42;
    }
    else {
        let PropagateClickActionAfter42 = class PropagateClickActionAfter42 extends Clutter$u.ClickAction {
            vfunc_handle_event(event) {
                this.event = event;
                super.vfunc_handle_event(event);
                return false;
            }
        };
        PropagateClickActionAfter42.metaInfo = {
            GTypeName: 'PropagateClickAction',
        };
        PropagateClickActionAfter42 = __decorate([
            registerGObjectClass
        ], PropagateClickActionAfter42);
        return PropagateClickActionAfter42;
    }
})();

const St$o = imports.gi.St;
const Me$I = imports.misc.extensionUtils.getCurrentExtension();
let MatPanelButton = class MatPanelButton extends MatButton {
    _init(params = {}) {
        super._init(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me$I.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.connect('destroy', () => {
            Me$I.msThemeManager.disconnect(panelSizeSignal);
        });
    }
    vfunc_get_preferred_width(_forHeight) {
        const { scaleFactor } = St$o.ThemeContext.get_for_stage(global.stage);
        return [
            Me$I.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
            Me$I.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
        ];
    }
    vfunc_get_preferred_height(_forWidth) {
        const { scaleFactor } = St$o.ThemeContext.get_for_stage(global.stage);
        return [
            Me$I.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
            Me$I.msThemeManager.getPanelSizeNotScaled() * scaleFactor,
        ];
    }
};
MatPanelButton.metaInfo = {
    GTypeName: 'MatPanelButton',
};
MatPanelButton = __decorate([
    registerGObjectClass
], MatPanelButton);

const Me$H = imports.misc.extensionUtils.getCurrentExtension();
const Clutter$t = imports.gi.Clutter;
class MsManager extends WithSignals {
    constructor() {
        super();
        this.signals = [];
    }
    observe(subject, property, callback) {
        const signal = {
            from: subject,
            id: subject.connect(property, callback),
        };
        this.signals.push(signal);
        if (subject instanceof Clutter$t.Actor) {
            subject.connect('destroy', () => {
                this.signals.splice(this.signals.indexOf(signal), 1);
            });
        }
        return () => {
            subject.disconnect(signal.id);
        };
    }
    destroy() {
        this.signals.forEach((signal) => {
            if (signal.from) {
                try {
                    signal.from.disconnect(signal.id);
                }
                catch (error) {
                    Me$H.log(`Failed to disconnect signal ${signal.id} from ${signal.from} ${signal.from.constructor.name} ${signal.from.toString()}  `);
                }
            }
        });
    }
}

const Me$G = imports.misc.extensionUtils.getCurrentExtension();
function logAsyncException(e) {
    if (e instanceof Error) {
        Me$G.log(`\nException when running asynchronous function:\n${e}\n${e.stack}\n`);
    }
    else {
        Me$G.logWithStackTrace(`\nException when running asynchronous function: ${e}\n`);
    }
}
function mslog(...args) {
    Me$G.log(...args);
}

const GLib$m = imports.gi.GLib;
const Me$F = imports.misc.extensionUtils.getCurrentExtension();
class Async {
    static addTimeout(priority, interval, func) {
        const timeoutId = GLib$m.timeout_add(priority, interval, () => {
            const source = func();
            if (source == GLib$m.SOURCE_REMOVE) {
                this.clearTimeoutId(timeoutId);
            }
            return source;
        });
        this.timeoutIdList.push(timeoutId);
        return timeoutId;
    }
    static clearTimeoutId(timeoutId) {
        if (timeoutId && this.timeoutIdList.includes(timeoutId)) {
            GLib$m.source_remove(timeoutId);
            this.timeoutIdList.splice(this.timeoutIdList.indexOf(timeoutId), 1);
        }
    }
    static clearAllPendingTimeout() {
        for (const timeoutId of this.timeoutIdList) {
            this.clearTimeoutId(timeoutId);
        }
    }
}
Async.timeoutIdList = [];
class AsyncDebounce {
    constructor(delayMs, f) {
        this.running = false;
        this.runAgain = false;
        this.delayMs = delayMs;
        this.f = f;
    }
    cancel() {
        if (this.timeoutId !== undefined)
            GLib$m.source_remove(this.timeoutId);
        this.runAgain = false;
    }
    schedule() {
        if (this.running) {
            this.runAgain = true;
        }
        else if (this.timeoutId === undefined) {
            this.timeoutId = Async.addTimeout(GLib$m.PRIORITY_DEFAULT, this.delayMs, () => {
                this.runInternal().catch(logAsyncException);
                return GLib$m.SOURCE_REMOVE;
            });
        }
        else {
        }
    }
    async runInternal() {
        assert(!this.running, 'Expected all other invocations to have finished');
        this.running = true;
        this.timeoutId = undefined;
        try {
            await this.f();
        }
        finally {
            this.running = false;
            if (this.runAgain) {
                this.runAgain = false;
                this.schedule();
            }
        }
    }
}

const GLib$l = imports.gi.GLib;
const { main: Main$l } = imports.ui;
const Me$E = imports.misc.extensionUtils.getCurrentExtension();
const range = (to) => Array(to)
    .fill(0)
    .map((_, i) => i);
function throttle(func, wait, options) {
    let call;
    let result;
    let timeout = null;
    let previous = 0;
    const definedOptions = Object.assign({
        trailing: true,
        leading: true,
    }, options);
    const later = function () {
        previous = definedOptions.leading === false ? 0 : Date.now();
        timeout = null;
        assert(call !== null, 'unreachable');
        result = func.apply(call.context, call.args);
        if (!timeout)
            call = null;
        return false;
    };
    return function (...params) {
        const now = Date.now();
        if (!previous && definedOptions.leading === false)
            previous = now;
        const remaining = wait - (now - previous);
        call = { context: this, args: params };
        if (remaining <= 0 || remaining > wait) {
            if (timeout !== null) {
                Async.clearTimeoutId(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(call.context, call.args);
            if (!timeout)
                call = null;
        }
        else if (!timeout && definedOptions.trailing !== false) {
            timeout = Async.addTimeout(GLib$l.PRIORITY_DEFAULT, remaining, later);
        }
        return result;
    };
}
const isParentOfActor = (parent, actor) => {
    if (!parent) {
        return false;
    }
    let parentOfActor = actor;
    while (parentOfActor !== null) {
        if (parentOfActor === parent)
            return true;
        parentOfActor = parentOfActor.get_parent();
    }
    return false;
};
const reparentActor = (actor, parent, first = false) => {
    if (!actor || !parent)
        return;
    const currentParent = actor.get_parent();
    if (currentParent === parent)
        return;
    Me$E.reparentInProgress = true;
    const restoreFocusTo = actor.has_key_focus()
        ? actor
        : isParentOfActor(actor, global.stage.key_focus)
            ? global.stage.key_focus
            : null;
    if (restoreFocusTo) {
        Main$l.layoutManager.uiGroup.grab_key_focus();
    }
    if (currentParent) {
        currentParent.remove_child(actor);
    }
    if (first) {
        parent.insert_child_at_index(actor, 0);
    }
    else {
        parent.add_child(actor);
    }
    if (restoreFocusTo) {
        restoreFocusTo.grab_key_focus();
    }
    Me$E.reparentInProgress = false;
};
const InfinityTo0 = (number) => {
    return Math.abs(number) === Infinity ? 0 : number;
};

const Gio$g = imports.gi.Gio;
const Me$D = imports.misc.extensionUtils.getCurrentExtension();
const getSettings = (key) => {
    const schema = Gio$g.SettingsSchemaSource.new_from_directory(Me$D.dir.get_child('schemas').get_path(), Gio$g.SettingsSchemaSource.get_default(), false).lookup(Me$D.metadata[key], true);
    if (schema !== null) {
        return new Gio$g.Settings({
            settings_schema: schema,
        });
    }
    else {
        throw Error('Cannot find schema');
    }
};

const { Color } = imports.gi.Cogl;
const Gio$f = imports.gi.Gio;
const { byteArray } = imports;
const GLib$k = imports.gi.GLib;
const Meta$9 = imports.gi.Meta;
const St$n = imports.gi.St;
const { main: Main$k } = imports.ui;
const Me$C = imports.misc.extensionUtils.getCurrentExtension();
const VerticalPanelPositionEnum = {
    LEFT: 0,
    RIGHT: 1,
};
const HorizontalPanelPositionEnum = {
    TOP: 0,
    BOTTOM: 1,
};
const PanelIconStyleEnum = {
    HYBRID: 0,
    CATEGORY: 1,
    APPLICATION: 2,
};
const FocusEffectEnum = {
    NONE: 0,
    DEFAULT: 1,
    BORDER: 2,
};
const msThemeSignalEnum = {
    HorizontalPanelPositionChanged: 'horizontal-panel-position-changed',
    VerticalPanelPositionChanged: 'vertical-panel-position-changed',
    PanelSizeChanged: 'panel-size-changed',
    BlurBackgroundChanged: 'blur-background-changed',
    PanelIconStyleChanged: 'panel-icon-style-changed',
    PanelIconColorChanged: 'panel-icon-color-changed',
    ClockHorizontalChanged: 'clock-horizontal-changed',
    ClockAppLauncherChanged: 'clock-app-launcher-changed',
    FocusEffectChanged: 'focus-effect-changed',
};
function parseCoglColor(color) {
    const c = new Color();
    c.init_from_4ub(parseInt(color.substring(1, 3), 16), parseInt(color.substring(3, 5), 16), parseInt(color.substring(5, 7), 16), 255);
    return c;
}
class MsThemeManager extends MsManager {
    constructor() {
        super();
        this.themeContext = St$n.ThemeContext.get_for_stage(global.stage);
        this.theme = this.themeContext.get_theme();
        this.themeSettings = getSettings('theme');
        this.themeFile = Gio$f.file_new_for_path(`${GLib$k.get_user_cache_dir()}/${Me$C.uuid}-theme.css`);
        this.themeValue = this.themeSettings.get_string('theme');
        this.primary = this.themeSettings.get_string('primary-color');
        this.primaryColor = parseCoglColor(this.primary);
        this.metaCursor = Meta$9.Cursor.DEFAULT;
        let displayedCursor = this.metaCursor;
        this.throttledDisplaySetCursor = throttle(() => {
            if (displayedCursor == this.metaCursor)
                return;
            displayedCursor = this.metaCursor;
            return global.display.set_cursor(this.metaCursor);
        }, 16, { leading: false });
        this.observe(this.themeContext, 'changed', () => {
            Me$C.log('theme changed');
            this.theme = this.themeContext.get_theme();
            if (Main$k.layoutManager.uiGroup.has_style_class_name('no-theme')) {
                Main$k.layoutManager.uiGroup.remove_style_class_name('no-theme');
            }
            if (!this.theme.application_stylesheet) {
                Main$k.layoutManager.uiGroup.add_style_class_name('no-theme');
            }
        });
        this.observe(this.themeSettings, 'changed::theme', (schema) => {
            this.themeValue = schema.get_string('theme');
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::primary-color', (schema) => {
            this.primary = schema.get_string('primary-color');
            this.primaryColor = parseCoglColor(this.primary);
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::vertical-panel-position', () => {
            this.emit(msThemeSignalEnum.VerticalPanelPositionChanged);
        });
        this.observe(this.themeSettings, 'changed::horizontal-panel-position', () => {
            this.emit(msThemeSignalEnum.HorizontalPanelPositionChanged);
        });
        this.observe(this.themeSettings, 'changed::panel-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::surface-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::panel-size', () => {
            this.emit(msThemeSignalEnum.PanelSizeChanged);
        });
        this.observe(this.themeSettings, 'changed::blur-background', () => {
            this.emit(msThemeSignalEnum.BlurBackgroundChanged);
        });
        this.observe(this.themeSettings, 'changed::panel-icon-style', () => {
            this.emit(msThemeSignalEnum.PanelIconStyleChanged);
        });
        this.observe(this.themeSettings, 'changed::panel-icon-color', () => {
            this.emit(msThemeSignalEnum.PanelIconColorChanged);
        });
        this.observe(this.themeSettings, 'changed::clock-horizontal', () => {
            this.emit(msThemeSignalEnum.ClockHorizontalChanged);
        });
        this.observe(this.themeSettings, 'changed::clock-app-launcher', () => {
            this.emit(msThemeSignalEnum.ClockAppLauncherChanged);
        });
        this.observe(this.themeSettings, 'changed::focus-effect', () => {
            this.emit(msThemeSignalEnum.FocusEffectChanged);
        });
    }
    get verticalPanelPosition() {
        return this.themeSettings.get_enum('vertical-panel-position');
    }
    get horizontalPanelPosition() {
        return this.themeSettings.get_enum('horizontal-panel-position');
    }
    get panelOpacity() {
        return this.themeSettings.get_int('panel-opacity');
    }
    get panelIconStyle() {
        return this.themeSettings.get_enum('panel-icon-style');
    }
    set panelIconStyle(value) {
        this.themeSettings.set_enum('panel-icon-style', value);
    }
    get panelIconColor() {
        return this.themeSettings.get_boolean('panel-icon-color');
    }
    get surfaceOpacity() {
        return this.themeSettings.get_int('surface-opacity');
    }
    get blurBackground() {
        return this.themeSettings.get_boolean('blur-background');
    }
    get clockHorizontal() {
        return this.themeSettings.get_boolean('clock-horizontal');
    }
    get clockAppLauncher() {
        return this.themeSettings.get_boolean('clock-app-launcher');
    }
    getPanelSize() {
        return this.getScaledSize(this.themeSettings.get_int('panel-size'));
    }
    getPanelSizeNotScaled() {
        return this.themeSettings.get_int('panel-size');
    }
    getScaledSize(size) {
        const { scaleFactor } = St$n.ThemeContext.get_for_stage(global.stage);
        return size * scaleFactor;
    }
    get focusEffect() {
        return this.themeSettings.get_enum('focus-effect');
    }
    isColorDark(color) {
        color = color.replace('#', '');
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);
        const linearColors = [r / 255, g / 255, b / 255];
        for (let i = 0; i < linearColors.length; ++i) {
            if (linearColors[i] <= 0.03928) {
                linearColors[i] = linearColors[i] / 12.92;
            }
            else {
                linearColors[i] = Math.pow((linearColors[i] + 0.055) / 1.055, 2.4);
            }
        }
        const luminance = 0.2126 * linearColors[0] +
            0.7152 * linearColors[1] +
            0.0722 * linearColors[2];
        return luminance < 0.179;
    }
    setCursor(cursor) {
        this.metaCursor = cursor;
        this.throttledDisplaySetCursor();
    }
    async readFileContent(file) {
        return new Promise((resolve, reject) => {
            file.load_contents_async(null, (obj, res) => {
                const [success, contents] = assertNotNull(obj).load_contents_finish(res);
                if (success) {
                    const content = byteArray.toString(contents);
                    resolve(content);
                }
                else {
                    reject(success);
                }
            });
        });
    }
    async writeContentToFile(content, file) {
        return new Promise((resolve, _) => {
            const contentBytes = new GLib$k.Bytes(byteArray.fromString(content));
            file.replace_async(null, false, Gio$f.FileCreateFlags.NONE, GLib$k.PRIORITY_DEFAULT, null, (file, res) => {
                const stream = assertNotNull(file).replace_finish(res);
                stream.write_bytes_async(contentBytes, GLib$k.PRIORITY_DEFAULT, null, (ioStream, wRes) => {
                    assertNotNull(ioStream).write_bytes_finish(wRes);
                    stream.close(null);
                    resolve(assertNotNull(file));
                });
            });
        });
    }
    async buildThemeStylesheetToFile(file) {
        const originThemeFile = Gio$f.file_new_for_path(`${Me$C.path}/style-${this.themeValue}-theme.css`);
        let content = await this.readFileContent(originThemeFile);
        content = content.replace(/#3f51b5/g, this.primary);
        content = content.replace(/0.876/g, `${this.panelOpacity / 100}`);
        content = content.replace(/0.987/g, `${this.surfaceOpacity / 100}`);
        await this.writeContentToFile(content, file);
    }
    async regenerateStylesheet() {
        this.unloadStylesheet();
        if (!this.theme.application_stylesheet) {
            Main$k.layoutManager.uiGroup.add_style_class_name('no-theme');
        }
        await this.buildThemeStylesheetToFile(this.themeFile);
        this.theme.load_stylesheet(this.themeFile);
        GLib$k.idle_add(GLib$k.PRIORITY_DEFAULT_IDLE, () => {
            this.themeContext.set_theme(this.theme);
            Main$k.reloadThemeResource();
            Main$k.loadTheme();
            return GLib$k.SOURCE_REMOVE;
        });
    }
    unloadStylesheet() {
        if (Main$k.layoutManager.uiGroup.has_style_class_name('no-theme')) {
            Main$k.layoutManager.uiGroup.remove_style_class_name('no-theme');
        }
        this.theme.unload_stylesheet(this.themeFile);
    }
    destroy() {
        super.destroy();
        if (!Me$C.locked) {
            this.unloadStylesheet();
        }
    }
}

const Gio$e = imports.gi.Gio;
const { main: Main$j } = imports.ui;
function getExtensionSettings(extensionUUID) {
    const extension = Main$j.extensionManager.lookup(extensionUUID);
    if (!extension)
        return null;
    try {
        return new Gio$e.Settings({
            schema_id: extension.metadata['settings-schema'],
        });
    }
    catch (_) {
    }
    try {
        const source = Gio$e.SettingsSchemaSource.new_from_directory(extension.path + '/schemas/', Gio$e.SettingsSchemaSource.get_default(), false);
        return new Gio$e.Settings({
            settings_schema: source.lookup(extension.metadata['settings-schema'], false) ||
                undefined,
        });
    }
    catch (_) {
    }
    return null;
}

const Clutter$s = imports.gi.Clutter;
const Gio$d = imports.gi.Gio;
const GnomeDesktop$2 = imports.gi.GnomeDesktop;
const Shell$a = imports.gi.Shell;
const St$m = imports.gi.St;
const { dateMenu, main: Main$i, panel } = imports.ui;
const Me$B = imports.misc.extensionUtils.getCurrentExtension();
const isBeforeGnome43 = compareVersions(gnomeVersionNumber, parseVersion('43.0')) < 0;
let MsStatusArea = class MsStatusArea extends Clutter$s.Actor {
    _init() {
        super._init({
            layout_manager: new Clutter$s.BoxLayout({
                orientation: Clutter$s.Orientation.VERTICAL,
                pack_start: false,
            }),
        });
        this.signalIds = null;
        this.originalAppIndicatorIconSize = undefined;
        this.gnomeShellPanel = Main$i.panel;
        this.leftBoxActors = [];
        this.centerBoxActors = [];
        this.rightBoxActors = [];
        this.dateMenu = this.gnomeShellPanel.statusArea.dateMenu;
        this.enable();
        const panelSizeSignal = Me$B.msThemeManager.connect('panel-size-changed', () => this.onPanelSizeChanged());
        this.connect('destroy', () => {
            Me$B.msThemeManager.disconnect(panelSizeSignal);
            this.restoreAppIndicatorSettings();
        });
        this.onPanelSizeChanged();
    }
    onPanelSizeChanged() {
        for (const child of this.get_children()) {
            this.recursivelySetProperties(child, true);
        }
        this.overrideAppIndicatorSettings();
    }
    overrideAppIndicatorSettings() {
        const iconSize = this.iconSize();
        const appIndicatorSettings = getExtensionSettings('ubuntu-appindicators@ubuntu.com') ||
            getExtensionSettings('appindicatorsupport@rgcjonas.gmail.com');
        if (appIndicatorSettings) {
            if (this.originalAppIndicatorIconSize === undefined) {
                this.originalAppIndicatorIconSize =
                    appIndicatorSettings.get_int('icon-size');
            }
            appIndicatorSettings.set_int('icon-size', iconSize);
        }
        panel.PANEL_ICON_SIZE = iconSize;
    }
    restoreAppIndicatorSettings() {
        if (this.originalAppIndicatorIconSize === undefined)
            return;
        const appIndicatorSettings = getExtensionSettings('ubuntu-appindicators@ubuntu.com') ||
            getExtensionSettings('appindicatorsupport@rgcjonas.gmail.com');
        if (appIndicatorSettings) {
            appIndicatorSettings.set_int('icon-size', this.originalAppIndicatorIconSize);
        }
        panel.PANEL_ICON_SIZE = 16;
    }
    enable() {
        this.verticaliseDateMenuButton();
        this.stealPanelActors();
        this.overridePanelMenuSide();
    }
    verticaliseDateMenuButton() {
        assert(this.msDateMenuBox === undefined, 'date menu button has alreayd been verticalized');
        const originalDateMenuBox = assertNotNull(this.dateMenu._clockDisplay.get_parent());
        this.dateMenu.remove_child(originalDateMenuBox);
        this.msDateMenuBox = {
            box: new MsDateMenuBox(this.dateMenu),
            originalDateMenuBox,
        };
        this.dateMenu.add_child(this.msDateMenuBox.box);
    }
    unVerticaliseDateMenuButton() {
        assert(this.msDateMenuBox !== undefined, "date menu button hasn't been verticalized");
        this.msDateMenuBox.box.destroy();
        this.dateMenu.add_child(this.msDateMenuBox.originalDateMenuBox);
        delete this.msDateMenuBox;
    }
    stealPanelActors() {
        this.gnomeShellPanel._leftBox
            .get_children()
            .filter((actor) => {
            return (actor !=
                this.gnomeShellPanel.statusArea.activities.container &&
                actor != this.gnomeShellPanel.statusArea.appMenu.container);
        })
            .forEach((actor) => {
            this.stealActor(actor, this.leftBoxActors);
        });
        const leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect('actor-added', (_, actor) => {
            this.stealActor(actor, this.leftBoxActors);
        });
        this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
            this.stealActor(actor, this.centerBoxActors);
        });
        const centerBoxActorAddedSignal = this.gnomeShellPanel._centerBox.connect('actor-added', (_, actor) => {
            this.stealActor(actor, this.centerBoxActors);
        });
        this.gnomeShellPanel._rightBox
            .get_children()
            .reverse()
            .forEach((actor) => {
            this.stealActor(actor, this.rightBoxActors);
        });
        const rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect('actor-added', (_, actor) => {
            this.stealActor(actor, this.rightBoxActors);
        });
        this.signalIds = {
            rightBoxActor: rightBoxActorAddedSignal,
            leftBoxActor: leftBoxActorAddedSignal,
            centerBoxActor: centerBoxActorAddedSignal,
        };
    }
    determineSortingOrder(actor) {
        const mainChild = actor.get_children()[0];
        if (mainChild !== undefined) {
            if (mainChild instanceof
                (isBeforeGnome43 ? panel.AggregateMenu : panel.QuickSettings)) {
                return 1;
            }
            else if (mainChild instanceof dateMenu.DateMenuButton) {
                return 2;
            }
        }
        return 0;
    }
    stealActor(actor, container) {
        var _a;
        container.push(actor);
        actor.connect('destroy', () => {
            container.splice(container.indexOf(actor), 1);
        });
        actor.y_expand = false;
        actor.x_expand = true;
        this.recursivelySetProperties(actor, true);
        (_a = actor.get_parent()) === null || _a === void 0 ? void 0 : _a.remove_child(actor);
        const index = [actor, ...this.get_children()]
            .sort((a, b) => {
            return (this.determineSortingOrder(a) -
                this.determineSortingOrder(b));
        })
            .indexOf(actor);
        assert(index !== -1, 'Expected actor to be in one of the containers');
        this.insert_child_at_index(actor, index);
    }
    restorePanelActors() {
        const signalIds = assertNotNull(this.signalIds);
        this.gnomeShellPanel._leftBox.disconnect(signalIds.leftBoxActor);
        this.gnomeShellPanel._centerBox.disconnect(signalIds.centerBoxActor);
        this.gnomeShellPanel._rightBox.disconnect(signalIds.rightBoxActor);
        this.leftBoxActors.forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._leftBox);
        });
        this.centerBoxActors.forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._centerBox);
        });
        this.rightBoxActors.reverse().forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetProperties(actor, false);
            reparentActor(actor, this.gnomeShellPanel._rightBox);
        });
    }
    iconSize() {
        return Math.max(16.0, Math.round(Me$B.msThemeManager.getPanelSizeNotScaled() / 3));
    }
    recursivelySetProperties(actor, controlledByMS) {
        if (actor instanceof St$m.BoxLayout) {
            actor.vertical = controlledByMS;
            actor.set_x_align(Clutter$s.ActorAlign.CENTER);
        }
        if (actor instanceof St$m.Icon &&
            actor.has_style_class_name('popup-menu-arrow')) {
            actor.visible = !controlledByMS;
        }
        if (actor instanceof St$m.Icon) {
            if (controlledByMS) {
                const iconSize = this.iconSize();
                actor.set_style(`margin-top: ${Math.round(iconSize * 0.5)}px;
                    margin-bottom: ${Math.round(iconSize * 0.5)}px;
                    icon-size: ${iconSize}px;
                    `);
            }
            else {
                actor.set_style(null);
            }
        }
        if (actor instanceof Shell$a.TrayIcon) {
            if (controlledByMS) {
                const iconSize = this.iconSize();
                actor.marginTop = Math.round(iconSize * 0.5);
                actor.marginBottom = Math.round(iconSize * 0.5);
                actor.width = iconSize;
                actor.height = iconSize;
            }
            else {
                actor.marginTop = -1;
                actor.marginBottom = -1;
                actor.width = -1;
                actor.height = -1;
            }
        }
        if (actor.has_style_class_name &&
            actor.has_style_class_name('panel-button')) {
            actor.y_expand = !controlledByMS;
        }
        actor.get_children().forEach((child) => {
            this.recursivelySetProperties(child, controlledByMS);
        });
    }
    overridePanelMenuSide() {
        for (const menuData of this.gnomeShellPanel.menuManager._menus) {
            const menu = gnomeVersionGreaterOrEqualTo(menuData, '42.0')
                ? menuData
                : menuData.menu;
            if (menu._boxPointer) {
                menu._boxPointer.oldArrowSideFunction =
                    menu._boxPointer._calculateArrowSide;
                menu._boxPointer._calculateArrowSide = function () {
                    return Me$B.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? St$m.Side.LEFT
                        : St$m.Side.RIGHT;
                };
            }
        }
    }
    restorePanelMenuSide() {
        for (const menuData of this.gnomeShellPanel.menuManager._menus) {
            const menu = gnomeVersionGreaterOrEqualTo(menuData, '42.0')
                ? menuData
                : menuData.menu;
            if (menu._boxPointer) {
                menu._boxPointer._calculateArrowSide = menu._boxPointer.oldArrowSideFunction;
                delete menu._boxPointer.oldArrowSideFunction;
            }
        }
    }
    disable() {
        Me$B.logFocus('disable statusArea');
        this.unVerticaliseDateMenuButton();
        this.restorePanelMenuSide();
        this.restorePanelActors();
        this.restoreAppIndicatorSettings();
        if (compareVersions(gnomeVersionNumber, parseVersion('43.0')) >= 0) {
            this.gnomeShellPanel.statusArea.quickSettings.set_y_expand(true);
        }
        else {
            this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
        }
    }
};
MsStatusArea.metaInfo = {
    GTypeName: 'MsStatusArea',
};
MsStatusArea = __decorate([
    registerGObjectClass
], MsStatusArea);
let MsDateMenuBox = class MsDateMenuBox extends St$m.Widget {
    _init(dateMenu) {
        super._init({
            x_align: Clutter$s.ActorAlign.CENTER,
            layout_manager: new Clutter$s.BinLayout(),
        });
        this.dateMenu = dateMenu;
        this.indicatorActor = this.dateMenu._indicator;
        this._wallClock = new GnomeDesktop$2.WallClock({ time_only: true });
        this.clockLabel = new St$m.Label({});
        this.notificationIcon = new St$m.Icon({
            gicon: Gio$d.icon_new_for_string(`${Me$B.path}/assets/icons/bell-symbolic.svg`),
        });
        this.notificationIconRing = new St$m.Icon({
            style_class: 'primary',
            gicon: Gio$d.icon_new_for_string(`${Me$B.path}/assets/icons/bell-ring-symbolic.svg`),
        });
        this.dndIcon = new St$m.Icon({
            gicon: Gio$d.icon_new_for_string(`${Me$B.path}/assets/icons/bell-off-symbolic.svg`),
        });
        this._settings = new Gio$d.Settings({
            schema_id: 'org.gnome.desktop.notifications',
        });
        this.iconDisplay = new Clutter$s.Actor();
        this.iconDisplay.add_child(this.notificationIcon);
        this.iconDisplay.add_child(this.notificationIconRing);
        this.iconDisplay.add_child(this.dndIcon);
        if (Me$B.msThemeManager.clockHorizontal) {
            this.add_child(this.iconDisplay);
        }
        else {
            this.add_child(this.clockLabel);
        }
        const clockHorizontalSignal = Me$B.msThemeManager.connect('clock-horizontal-changed', () => {
            if (Me$B.msThemeManager.clockHorizontal) {
                this.remove_child(this.clockLabel);
                this.add_child(this.iconDisplay);
            }
            else {
                this.remove_child(this.iconDisplay);
                this.add_child(this.clockLabel);
            }
            this.updateVisibility();
        });
        this.updateVisibility();
        this.updateClock();
        this.dateMenuSignal = this._wallClock.connect('notify::clock', this.updateClock.bind(this));
        this.indicatorSignal = this.indicatorActor.connect('notify::visible', this.updateVisibility.bind(this));
        this.connect('destroy', () => {
            Me$B.msThemeManager.disconnect(clockHorizontalSignal);
            this.indicatorActor.disconnect(this.indicatorSignal);
            this._wallClock.disconnect(this.dateMenuSignal);
            delete this._wallClock;
        });
    }
    updateClock() {
        const clockSections = this._wallClock.clock
            .replace(/∶/g, ' ')
            .split(' ');
        if (!clockSections[0])
            clockSections.shift();
        const markup = clockSections
            .map((section) => `<span>${section}</span>`)
            .join('\n');
        this.clockLabel.clutter_text.set_markup(markup);
        this.updateVisibility();
    }
    updateVisibility() {
        const doNotDisturb = !this._settings.get_boolean('show-banners');
        if (this.indicatorActor.visible) {
            if (Me$B.msThemeManager.clockHorizontal) {
                if (doNotDisturb) {
                    this.dndIcon.show();
                    this.notificationIconRing.hide();
                }
                else {
                    this.dndIcon.hide();
                    this.notificationIconRing.show();
                }
                this.notificationIcon.hide();
            }
            else {
                if (doNotDisturb) {
                    if (this.clockLabel.has_style_class_name('primary')) {
                        this.clockLabel.remove_style_class_name('primary');
                    }
                    return;
                }
                if (this.clockLabel.has_style_class_name('primary'))
                    return;
                this.clockLabel.add_style_class_name('primary');
            }
        }
        else {
            if (Me$B.msThemeManager.clockHorizontal) {
                this.notificationIcon.show();
                this.notificationIconRing.hide();
                this.dndIcon.hide();
            }
            else {
                if (!this.clockLabel.has_style_class_name('primary'))
                    return;
                this.clockLabel.remove_style_class_name('primary');
            }
        }
    }
};
MsDateMenuBox.metaInfo = {
    GTypeName: 'MsDateMenuBox',
};
MsDateMenuBox = __decorate([
    registerGObjectClass
], MsDateMenuBox);

const Clutter$r = imports.gi.Clutter;
function centerInBox(box, width, height) {
    const paddingX = (box.x2 - box.x1 - width) / 2;
    const paddingY = (box.y2 - box.y1 - height) / 2;
    const x = box.x1 + paddingX;
    const y = box.y1 + paddingY;
    return Clutter$r.ActorBox.new(x, y, x + width, y + height);
}

function set_style_class(widget, style_class, enabled) {
    if (enabled) {
        if (!widget.has_style_class_name(style_class)) {
            widget.add_style_class_name(style_class);
        }
    }
    else {
        if (widget.has_style_class_name(style_class)) {
            widget.remove_style_class_name(style_class);
        }
    }
}

const Util$2 = imports.misc.util;
const Me$A = imports.misc.extensionUtils.getCurrentExtension();
const updateTitleBarVisibility = function (metaWindow) {
    var _a, _b;
    const msWorkspaceIsInFloatLayout = (_b = ((_a = metaWindow.msWindow) === null || _a === void 0 ? void 0 : _a.msWorkspace.layout.state.key) === 'float') !== null && _b !== void 0 ? _b : false;
    const shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (!metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }
};
const setTitleBarVisibility = function (metaWindow, visible) {
    const windowXID = getWindowXID(metaWindow);
    if (!windowXID || metaWindow.is_client_decorated() || !metaWindow.decorated)
        return;
    try {
        Util$2.trySpawn([
            'xprop',
            '-id',
            windowXID,
            '-f',
            '_MOTIF_WM_HINTS',
            '32c',
            '-set',
            '_MOTIF_WM_HINTS',
            `2, 0, ${visible ? '1' : '2'} 0, 0`,
        ]);
    }
    catch (e) {
        Me$A.logFocus('xprop', e);
    }
    metaWindow.titleBarVisible = visible;
};
const getWindowXID = function (win) {
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/);
    return match !== null ? match[0] : null;
};

const Clutter$q = imports.gi.Clutter;
const GLib$j = imports.gi.GLib;
const GObject$7 = imports.gi.GObject;
const St$l = imports.gi.St;
const Animation = imports.ui.animation;
const Me$z = imports.misc.extensionUtils.getCurrentExtension();
let AppPlaceholder = class AppPlaceholder extends St$l.Widget {
    _init(icon, textLabel) {
        super._init({
            x_align: Clutter$q.ActorAlign.FILL,
            y_align: Clutter$q.ActorAlign.FILL,
            layout_manager: new Clutter$q.BinLayout(),
            reactive: true,
        });
        this.iconContainer = new St$l.Bin({
            style: 'padding:24px',
        });
        this.pressed = false;
        this.waitForReset = false;
        this.vertical = true;
        this.iconContainer.set_child(icon);
        this.spinnerContainer = new Clutter$q.Actor({});
        this.spinnerContainer.set_opacity(0);
        this.appTitle = new St$l.Label({
            text: textLabel,
            style_class: 'headline-4 text-high-emphasis',
        });
        this.callToAction = new St$l.Label({
            text: 'Click anywhere to launch',
            style_class: 'headline-5 text-medium-emphasis',
            style: 'margin-top:32px;',
        });
        this.identityContainer = new St$l.BoxLayout({
            vertical: true,
            x_align: Clutter$q.ActorAlign.START,
            y_align: Clutter$q.ActorAlign.CENTER,
            x_expand: true,
            y_expand: true,
            style: 'padding:24px; text-align:start;',
        });
        [this.appTitle, this.callToAction, this.spinnerContainer].forEach((actor) => this.identityContainer.add_child(actor));
        this.box = new St$l.BoxLayout({
            vertical: false,
            x_align: Clutter$q.ActorAlign.CENTER,
            y_align: Clutter$q.ActorAlign.CENTER,
            style: 'padding:48px; border-radius:48px',
        });
        this.box.add_child(this.iconContainer);
        this.box.add_child(this.identityContainer);
        this.add_style_class_name('surface-darker');
        this.add_child(this.box);
        this.clickableContainer = new RippleBackground(this);
        this.clickableContainer.x_expand = true;
        this.clickableContainer.y_expand = true;
        this.add_child(this.clickableContainer);
        this.connect('event', (actor, event) => {
            switch (event.type()) {
                case Clutter$q.EventType.BUTTON_PRESS:
                case Clutter$q.EventType.TOUCH_BEGIN:
                    this.pressed = true;
                    break;
                case Clutter$q.EventType.BUTTON_RELEASE:
                case Clutter$q.EventType.TOUCH_END:
                    if (this.pressed)
                        this.activate(event.get_button());
                    this.pressed = false;
                    break;
                case Clutter$q.EventType.LEAVE:
                    this.pressed = false;
                    break;
                default:
                    break;
            }
        });
        this.connect('key-focus-in', () => {
            this.box.add_style_class_name('surface');
        });
        this.connect('key-focus-out', () => {
            this.box.remove_style_class_name('surface');
        });
    }
    setIcon(icon) {
        this.iconContainer.set_child(icon);
    }
    setTitle(title) {
        this.appTitle.set_text(title);
    }
    setOrientation(width, height) {
        const vertical = width < height;
        if (vertical === this.vertical)
            return;
        this.vertical = vertical;
        this.box.vertical = this.vertical;
        this.identityContainer.x_align = this.vertical
            ? Clutter$q.ActorAlign.CENTER
            : Clutter$q.ActorAlign.START;
        this.appTitle.x_align = this.vertical
            ? Clutter$q.ActorAlign.CENTER
            : Clutter$q.ActorAlign.START;
        this.callToAction.x_align = this.vertical
            ? Clutter$q.ActorAlign.CENTER
            : Clutter$q.ActorAlign.START;
    }
    vfunc_key_press_event(keyEvent) {
        switch (keyEvent.keyval) {
            case Clutter$q.KEY_Return:
            case Clutter$q.KEY_KP_Enter:
            case Clutter$q.KEY_space:
            case Clutter$q.KEY_KP_Space:
                this.activate(0);
                return Clutter$q.EVENT_STOP;
        }
        return Clutter$q.EVENT_PROPAGATE;
    }
    vfunc_allocate(...args) {
        const width = args[0].get_width();
        const height = args[0].get_height();
        GLib$j.idle_add(GLib$j.PRIORITY_DEFAULT_IDLE, () => {
            this.setOrientation(width, height);
            return GLib$j.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }
    activate(button = 0) {
        if (this.waitForReset)
            return;
        this.waitForReset = true;
        this.clickableContainer.reactive = false;
        this._spinner = new Animation.Spinner(16);
        this.spinnerContainer.add_child(this._spinner);
        this._spinner.play();
        this.spinnerContainer.set_opacity(255);
        this.emit('activated', button);
    }
    reset() {
        this.clickableContainer.reactive = true;
        if (this._spinner) {
            this._spinner.destroy();
        }
        this.spinnerContainer.set_opacity(0);
        this.waitForReset = false;
    }
};
AppPlaceholder.metaInfo = {
    GTypeName: 'AppPlaceholder',
    Signals: {
        activated: {
            param_types: [GObject$7.TYPE_INT],
            accumulator: 0.0,
        },
    },
};
AppPlaceholder = __decorate([
    registerGObjectClass
], AppPlaceholder);

const Me$y = imports.misc.extensionUtils.getCurrentExtension();
const Clutter$p = imports.gi.Clutter;
const GLib$i = imports.gi.GLib;
const { PRIORITY_DEFAULT, SOURCE_CONTINUE, SOURCE_REMOVE } = imports.gi.GLib;
const GObject$6 = imports.gi.GObject;
const Meta$8 = imports.gi.Meta;
const { WindowTracker } = imports.gi.Shell;
const St$k = imports.gi.St;
const { dialog, main: Main$h } = imports.ui;
const isWayland = GLib$i.getenv('XDG_SESSION_TYPE').toLowerCase() === 'wayland';
const PLACEHOLDER_ICON_SIZE = 248;
function buildMetaWindowIdentifier(metaWindow) {
    return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
}
function isWindowContentInteresting(metaWindow) {
    const actor = metaWindow.get_compositor_private();
    assert(actor !== null, "Expected the metaWindow's actor to exist");
    if (metaWindow.firstFrameDrawn) {
        return true;
    }
    if (actor.get_children().some((a) => a instanceof dialog.Dialog)) {
        return true;
    }
    return false;
}
let MsWindow = class MsWindow extends Clutter$p.Actor {
    _init(
        { app, persistent, initialAllocation, msWorkspace, lifecycleState, createdAt, }
    ) {
        super._init({
            reactive: true,
            x: initialAllocation ? initialAllocation.x || 0 : 0,
            y: initialAllocation ? initialAllocation.y || 0 : 0,
            width: initialAllocation ? initialAllocation.width || 0 : 0,
            height: initialAllocation ? initialAllocation.height || 0 : 0,
        });
        this.appSignalId = undefined;
        this.lifecycleState = lifecycleState;
        this.app = app;
        this.createdAt = createdAt;
        this.trackAppChanges();
        this._persistent = persistent;
        this.msWorkspace = msWorkspace;
        this.updateMetaWindowPositionAndSizeThrottled = throttle(() => this.updateMetaWindowPositionAndSizeInternal(), 16);
        this.windowClone = new Clutter$p.Clone();
        this.placeholder = new AppPlaceholder(this.app.create_icon_texture(PLACEHOLDER_ICON_SIZE), this.app.get_name());
        this.placeholder.connect('activated', (_) => {
            this.emit('request-new-meta-window');
        });
        this.destroyId = this.connect('destroy', this._onDestroy.bind(this));
        this.connect('parent-set', () => {
            this.msContent.style_changed();
            this.updateMetaWindowVisibility();
        });
        this.connect('notify::visible', () => {
            this.updateMetaWindowVisibility();
        });
        this.msContent = new MsWindowContent({
            placeholder: this.placeholder,
            clone: this.windowClone,
        });
        this.add_child(this.msContent);
        this.setMsWorkspace(msWorkspace);
    }
    get state() {
        var _a, _b, _c, _d;
        const metaWindow = this.metaWindow;
        let matchingInfo;
        switch (this.lifecycleState.type) {
            case 'app-placeholder':
                matchingInfo = this.lifecycleState.matchingInfo;
                break;
            case 'window':
                matchingInfo = {
                    appId: this.app.id,
                    title: (_a = this.lifecycleState.metaWindow) === null || _a === void 0 ? void 0 : _a.title,
                    pid: (_b = this.lifecycleState.metaWindow) === null || _b === void 0 ? void 0 : _b.get_pid(),
                    wmClass: (_c = this.lifecycleState.metaWindow) === null || _c === void 0 ? void 0 : _c.get_wm_class_instance(),
                    stableSeq: (_d = this.lifecycleState.metaWindow) === null || _d === void 0 ? void 0 : _d.get_stable_sequence(),
                };
                break;
            default:
                matchingInfo = {
                    appId: this.app.id,
                    title: undefined,
                    pid: undefined,
                    wmClass: undefined,
                    stableSeq: undefined,
                };
        }
        return {
            appId: this.app.id,
            metaWindowIdentifier: metaWindow !== null
                ? buildMetaWindowIdentifier(metaWindow)
                : null,
            matchingInfo: matchingInfo,
            persistent: this._persistent,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            createdAt: this.createdAt.valueOf(),
        };
    }
    get metaWindow() {
        const state = this.lifecycleState;
        if (state.type !== 'window')
            return null;
        return (state.metaWindow ||
            (state.dialogs && state.dialogs.length > 0
                ? state.dialogs[state.dialogs.length - 1].metaWindow
                : null));
    }
    get metaWindows() {
        const state = this.lifecycleState;
        if (state.type !== 'window')
            return [];
        const windows = state.dialogs.map((d) => d.metaWindow);
        if (state.metaWindow !== null)
            windows.push(state.metaWindow);
        return windows;
    }
    get windowIdentifier() {
        const metaWindow = this.metaWindow;
        if (metaWindow !== null) {
            return buildMetaWindowIdentifier(metaWindow);
        }
        else {
            return `${this.app.id}-${this.lifecycleState.type}`;
        }
    }
    get title() {
        if (!this.app)
            return '';
        const metaWindow = this.metaWindow;
        return metaWindow ? metaWindow.get_title() : this.app.get_name();
    }
    set persistent(boolean) {
        this._persistent = boolean;
        Me$y.stateManager.stateChanged();
    }
    trackAppChanges() {
        assert(this.appSignalId === undefined, 'Expected the signalId to be undefined');
        this.appSignalId = this.app.connect('windows-changed', () => {
            const lifecycleState = this.lifecycleState;
            if (lifecycleState.type === 'window') {
                const metaWindowList = this.app.get_windows();
                if (lifecycleState.metaWindow &&
                    !metaWindowList.includes(lifecycleState.metaWindow)) {
                    GLib$i.idle_add(GLib$i.PRIORITY_DEFAULT_IDLE, () => {
                        if (this.lifecycleState == lifecycleState &&
                            lifecycleState.metaWindow) {
                            const app = WindowTracker.get_default().get_window_app(lifecycleState.metaWindow);
                            if (app !== null) {
                                this.app.disconnect(assertNotNull(this.appSignalId));
                                this.appSignalId = undefined;
                                this.app = app;
                                this.onAppChanged();
                            }
                        }
                        return GLib$i.SOURCE_REMOVE;
                    });
                }
            }
        });
    }
    onAppChanged() {
        const state = this.lifecycleState;
        assert(state.type == 'window', "Expected the MsWindow to be in the 'window' state");
        this.trackAppChanges();
        state.matchingInfo.appId = this.app.id;
        this.placeholder.setIcon(this.app.create_icon_texture(PLACEHOLDER_ICON_SIZE));
        this.placeholder.setTitle(this.app.get_name());
    }
    delayGetMetaWindowActor(metaWindow, delayedCount, resolve, reject) {
        if (delayedCount < 20) {
            Async.addTimeout(GLib$i.PRIORITY_DEFAULT, 50, () => {
                const actor = metaWindow.get_compositor_private();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                }
                else {
                    this.delayGetMetaWindowActor(metaWindow, delayedCount++, resolve, reject);
                }
                return GLib$i.SOURCE_REMOVE;
            });
        }
        else {
            reject();
        }
    }
    get dragged() {
        var _a;
        return (((_a = Me$y.msWindowManager.msDndManager.dragInProgress) === null || _a === void 0 ? void 0 : _a.msWindow) === this);
    }
    get followMetaWindow() {
        if (!this.msWorkspace)
            return false;
        return ((this.msWorkspace &&
            this.msWorkspace.layout.state.key === 'float') ||
            (this.metaWindow && this.metaWindow.fullscreen));
    }
    async onMetaWindowActorExist(metaWindow) {
        return new Promise((resolve, reject) => {
            if (!metaWindow) {
                return resolve();
            }
            const actor = metaWindow.get_compositor_private();
            if (actor && actor.get_texture()) {
                resolve(actor);
            }
            else {
                this.delayGetMetaWindowActor(metaWindow, 0, resolve, reject);
            }
        });
    }
    async onMetaWindowFirstFrameDrawn(metaWindow) {
        return new Promise((resolve, _reject) => {
            var _a;
            const check = () => {
                if (isWindowContentInteresting(metaWindow)) {
                    resolve();
                    return SOURCE_REMOVE;
                }
                return SOURCE_CONTINUE;
            };
            Async.addTimeout(PRIORITY_DEFAULT, 50, check);
            (_a = metaWindow.firstFrameDrawnPromise) === null || _a === void 0 ? void 0 : _a.then(resolve);
        });
    }
    vfunc_allocate(box) {
        box.x1 = Math.round(box.x1);
        box.y1 = Math.round(box.y1);
        box.x2 = Math.round(box.x2);
        box.y2 = Math.round(box.y2);
        this.set_allocation(box);
        const contentBox = Clutter$p.ActorBox.new(0, 0, box.get_width(), box.get_height());
        this.msContent.allocate(contentBox);
        const workArea = Main$h.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
        const offsetX = monitorInFullScreen
            ? this.msWorkspace.monitor.x
            : workArea.x;
        const offsetY = monitorInFullScreen
            ? this.msWorkspace.monitor.y
            : workArea.y;
        if (this.lifecycleState.type === 'window') {
            [...this.lifecycleState.dialogs]
                .sort((firstDialog, secondDialog) => firstDialog.metaWindow.user_time -
                secondDialog.metaWindow.user_time)
                .forEach((dialog) => {
                const dialogFrame = dialog.metaWindow.get_buffer_rect();
                const x1 = dialogFrame.x - box.x1 - offsetX;
                const x2 = x1 + dialogFrame.width;
                const y1 = dialogFrame.y - box.y1 - offsetY;
                const y2 = y1 + dialogFrame.height;
                const dialogBox = Clutter$p.ActorBox.new(x1, y1, x2, y2);
                dialog.clone.allocate(dialogBox);
            });
        }
    }
    set_position(x, y) {
        if (this.followMetaWindow)
            return;
        super.set_position(x, y);
    }
    set_size(width, height) {
        if (this.followMetaWindow)
            return;
        super.set_size(width, height);
    }
    getRelativeMetaWindowPosition(metaWindow) {
        if (this.dragged) {
            const currentFrameRect = metaWindow.get_frame_rect();
            return {
                x: currentFrameRect.x,
                y: currentFrameRect.y,
            };
        }
        else {
            const workArea = Main$h.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
            return {
                x: workArea.x + this.x,
                y: workArea.y + this.y,
            };
        }
    }
    updateMetaWindowPositionAndSize() {
        this.updateMetaWindowPositionAndSizeThrottled();
    }
    updateMetaWindowPositionAndSizeInternal() {
        const state = this.lifecycleState;
        if (state.type !== 'window')
            return;
        const metaWindow = state.metaWindow;
        const windowActor = metaWindow &&
            metaWindow.get_compositor_private();
        if (!windowActor ||
            this.width === 0 ||
            this.height === 0 ||
            this.followMetaWindow ||
            metaWindow.minimized) {
            return;
        }
        if (!metaWindow.firstFrameDrawn) {
            if (!this.msContent.has_allocation()) {
                return;
            }
            const contentBox = this.msContent.allocation;
            const centeredBox = centerInBox(contentBox, windowActor.width, windowActor.height);
            const workArea = Main$h.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
            windowActor.x = workArea.x + this.x + centeredBox.x1;
            windowActor.y = workArea.y + this.y + centeredBox.y1;
            return;
        }
        let shouldBeMaximizedHorizontally = metaWindow.maximized_horizontally;
        let shouldBeMaximizedVertically = metaWindow.maximized_vertically;
        if (this.get_parent() ===
            this.msWorkspace.msWorkspaceActor.tileableContainer) {
            shouldBeMaximizedHorizontally =
                this.x === 0 &&
                    this.width ===
                        this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_width();
            shouldBeMaximizedVertically =
                this.y === 0 &&
                    this.height ===
                        this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_height();
        }
        const needToChangeMaximizeHorizontally = shouldBeMaximizedHorizontally !== metaWindow.maximized_horizontally;
        const needToChangeMaximizeVertically = shouldBeMaximizedVertically !== metaWindow.maximized_vertically;
        let needToMove = false;
        let needToResize = false;
        let needToMoveOrResize = false;
        let moveTo = undefined;
        let resizeTo = undefined;
        if (!shouldBeMaximizedHorizontally || !shouldBeMaximizedVertically) {
            const currentFrameRect = metaWindow.get_frame_rect();
            if (metaWindow.allows_resize()) {
                moveTo = this.getRelativeMetaWindowPosition(metaWindow);
                resizeTo = {
                    width: this.width,
                    height: this.height,
                };
            }
            else {
                if (!this.msContent.has_allocation()) {
                    return;
                }
                const contentBox = this.msContent.allocation;
                const relativePosition = this.getRelativeMetaWindowPosition(metaWindow);
                moveTo = {
                    x: relativePosition.x +
                        (contentBox.get_width() - currentFrameRect.width) / 2,
                    y: relativePosition.y +
                        (contentBox.get_height() - currentFrameRect.height) / 2,
                };
                resizeTo = {
                    width: currentFrameRect.width,
                    height: currentFrameRect.height,
                };
            }
            needToMove =
                currentFrameRect.x !== moveTo.x ||
                    currentFrameRect.y !== moveTo.y;
            needToResize =
                currentFrameRect.width !== resizeTo.width ||
                    currentFrameRect.height !== resizeTo.height;
            needToMoveOrResize = needToMove || needToResize;
        }
        if (!needToChangeMaximizeHorizontally &&
            !needToChangeMaximizeVertically &&
            !needToMoveOrResize) {
            return;
        }
        if (needToChangeMaximizeHorizontally ||
            needToChangeMaximizeVertically) {
            const shouldMaximizeHorizontally = shouldBeMaximizedHorizontally &&
                !metaWindow.maximized_horizontally;
            const shouldMaximizeVertically = shouldBeMaximizedVertically && !metaWindow.maximized_vertically;
            const shouldUnMaximizeHorizontally = !shouldBeMaximizedHorizontally &&
                metaWindow.maximized_horizontally;
            const shouldUnMaximizeVertically = !shouldBeMaximizedVertically && metaWindow.maximized_vertically;
            const callback = () => {
                if (shouldUnMaximizeHorizontally &&
                    shouldUnMaximizeVertically) {
                    metaWindow.unmaximize(Meta$8.MaximizeFlags.BOTH);
                }
                else if (shouldUnMaximizeHorizontally) {
                    metaWindow.unmaximize(Meta$8.MaximizeFlags.HORIZONTAL);
                }
                else if (shouldUnMaximizeVertically) {
                    metaWindow.unmaximize(Meta$8.MaximizeFlags.VERTICAL);
                }
                if (shouldMaximizeHorizontally && shouldMaximizeVertically) {
                    metaWindow.maximize(Meta$8.MaximizeFlags.BOTH);
                }
                else if (shouldMaximizeHorizontally) {
                    metaWindow.maximize(Meta$8.MaximizeFlags.HORIZONTAL);
                }
                else if (shouldMaximizeVertically) {
                    metaWindow.maximize(Meta$8.MaximizeFlags.VERTICAL);
                }
            };
            if (isWayland) {
                GLib$i.idle_add(GLib$i.PRIORITY_DEFAULT_IDLE, () => {
                    callback();
                    return GLib$i.SOURCE_REMOVE;
                });
            }
            else {
                callback();
            }
        }
        if (needToMoveOrResize &&
            moveTo !== undefined &&
            resizeTo !== undefined) {
            if (!this.dragged) {
                moveTo.x = Math.max(Math.min(moveTo.x, this.msWorkspace.monitor.x +
                    this.msWorkspace.monitor.width -
                    resizeTo.width), this.msWorkspace.monitor.x);
                moveTo.y = Math.max(Math.min(moveTo.y, this.msWorkspace.monitor.y +
                    this.msWorkspace.monitor.height -
                    resizeTo.height), this.msWorkspace.monitor.y);
            }
            if (isWayland) {
                const moveTo2 = moveTo;
                const resizeTo2 = resizeTo;
                GLib$i.idle_add(GLib$i.PRIORITY_DEFAULT_IDLE, () => {
                    if (needToResize) {
                        metaWindow.move_resize_frame(true, moveTo2.x, moveTo2.y, resizeTo2.width, resizeTo2.height);
                    }
                    else {
                        metaWindow.move_frame(true, moveTo2.x, moveTo2.y);
                    }
                    return GLib$i.SOURCE_REMOVE;
                });
            }
            else {
                if (needToResize) {
                    metaWindow.move_resize_frame(true, moveTo.x, moveTo.y, resizeTo.width, resizeTo.height);
                    const moveTo2 = moveTo;
                    GLib$i.idle_add(GLib$i.PRIORITY_DEFAULT_IDLE, () => {
                        const currentFrameRect = metaWindow.get_frame_rect();
                        if (currentFrameRect.x !== moveTo2.x ||
                            currentFrameRect.y !== moveTo2.y) {
                            metaWindow.move_frame(true, moveTo2.x, moveTo2.y);
                        }
                        return GLib$i.SOURCE_REMOVE;
                    });
                }
                else {
                    metaWindow.move_frame(true, moveTo.x, moveTo.y);
                }
            }
        }
    }
    mimicMetaWindowPositionAndSize() {
        const metaWindow = this.metaWindow;
        if (!metaWindow || this.dragged)
            return;
        const workArea = Main$h.layoutManager.getWorkAreaForMonitor(metaWindow.get_monitor());
        const currentFrameRect = metaWindow.get_frame_rect();
        const newPosition = {
            x: currentFrameRect.x -
                (metaWindow.fullscreen
                    ? this.msWorkspace.monitor.x
                    : workArea.x) -
                this.msContent.x,
            y: currentFrameRect.y -
                (metaWindow.fullscreen
                    ? this.msWorkspace.monitor.y
                    : workArea.y) -
                this.msContent.y,
        };
        const newSize = {
            width: currentFrameRect.width + this.msContent.x * 2,
            height: currentFrameRect.height + this.msContent.y * 2,
        };
        super.set_position(newPosition.x, newPosition.y);
        super.set_size(newSize.width, newSize.height);
    }
    resizeDialogs() {
        if (this.lifecycleState.type !== 'window')
            return;
        this.lifecycleState.dialogs.forEach((dialog) => {
            const { metaWindow } = dialog;
            const frame = metaWindow.get_frame_rect();
            const workArea = Main$h.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
            const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
            const offsetX = monitorInFullScreen
                ? this.msWorkspace.monitor.x
                : workArea.x;
            const offsetY = monitorInFullScreen
                ? this.msWorkspace.monitor.y
                : workArea.y;
            const needMove = frame.x - offsetX < this.x ||
                frame.x - offsetX + frame.width > this.x + this.width ||
                frame.y - offsetY < this.y ||
                frame.y - offsetY + frame.height > this.y + this.height;
            const needResize = frame.width > this.width || frame.height > this.height;
            if (needResize && metaWindow.resizeable) {
                const minWidth = Math.min(frame.width, this.width);
                const minHeight = Math.min(frame.height, this.height);
                metaWindow.move_resize_frame(true, needMove
                    ? offsetX + this.x + (this.width - minWidth) / 2
                    : frame.x, needMove
                    ? offsetY + this.y + (this.height - minHeight) / 2
                    : frame.y, minWidth, minHeight);
            }
            else if (needMove && metaWindow.allows_move()) {
                metaWindow.move_frame(true, offsetX + this.x + (this.width - frame.width) / 2, offsetY + this.y + (this.height - frame.height) / 2);
            }
        });
    }
    resizeMetaWindows() {
        if (this.lifecycleState.type == 'window' &&
            this.lifecycleState.metaWindow !== null) {
            this.followMetaWindow
                ? this.mimicMetaWindowPositionAndSize()
                : this.updateMetaWindowPositionAndSize();
        }
        this.resizeDialogs();
    }
    registerOnMetaWindowSignals(metaWindow) {
        return [
            metaWindow.connect('notify::title', (_) => {
                this.emit('title-changed', this.title);
            }),
            metaWindow.connect('position-changed', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            }),
            metaWindow.connect('size-changed', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            }),
            metaWindow.connect('notify::fullscreen', () => {
                if (this.followMetaWindow) {
                    this.mimicMetaWindowPositionAndSize();
                }
            }),
        ];
    }
    unregisterOnMetaWindowSignals() {
        const state = this.lifecycleState;
        if (state.type !== 'window' || state.metaWindow === null)
            return;
        for (const signalId of state.metaWindowSignals) {
            state.metaWindow.disconnect(signalId);
        }
        state.metaWindowSignals = [];
    }
    setMsWorkspace(msWorkspace) {
        this.msWorkspace = msWorkspace;
        if (this.lifecycleState.type === 'window') {
            [
                ...this.lifecycleState.dialogs.map((dialog) => dialog.metaWindow),
                this.lifecycleState.metaWindow,
            ].forEach((metaWindow) => {
                if (metaWindow) {
                    updateTitleBarVisibility(metaWindow);
                    this.updateWorkspaceAndMonitor(metaWindow);
                }
            });
            this.resizeMetaWindows();
        }
    }
    async setWindow(metaWindow) {
        assert(this.lifecycleState.type === 'app-placeholder', 'Can only set the window if the MsWindow is in the app-placeholder state.');
        const state = (this.lifecycleState = {
            type: 'window',
            metaWindow: metaWindow,
            metaWindowSignals: this.registerOnMetaWindowSignals(metaWindow),
            dialogs: [],
            matchingInfo: this.lifecycleState.matchingInfo,
            matchedAtTime: new Date(),
            matchedWhileWaiting: this.lifecycleState.waitingForAppSince !== undefined,
        });
        metaWindow.msWindow = this;
        this.windowClone.set_source(null);
        await this.onMetaWindowActorExist(metaWindow);
        if (this.lifecycleState !== state ||
            this.lifecycleState.metaWindow !== metaWindow)
            return;
        await this.onMetaWindowFirstFrameDrawn(metaWindow);
        if (this.lifecycleState !== state ||
            this.lifecycleState.metaWindow !== metaWindow)
            return;
        this.updateWorkspaceAndMonitor(metaWindow);
        this.windowClone.set_source(metaWindow.get_compositor_private());
        this.onMetaWindowsChanged();
    }
    unsetWindow() {
        assert(this.lifecycleState.type === 'window', 'Can only unset the window when in the window state');
        this.unregisterOnMetaWindowSignals();
        this.windowClone.set_source(null);
        this.reactive = true;
        this.lifecycleState = {
            type: 'app-placeholder',
            matchingInfo: this.lifecycleState.matchingInfo,
            waitingForAppSince: undefined,
        };
        this.onMetaWindowsChanged();
    }
    updateWorkspaceAndMonitor(metaWindow) {
        if (metaWindow && this.msWorkspace) {
            if (metaWindow.get_monitor() != this.msWorkspace.monitor.index) {
                metaWindow.move_to_monitor(this.msWorkspace.monitor.index);
            }
            const workspace = Me$y.msWorkspaceManager.getWorkspaceOfMsWorkspace(this.msWorkspace);
            if (workspace && metaWindow.get_workspace() != workspace) {
                metaWindow.change_workspace(workspace);
            }
        }
    }
    addDialog(metaWindow) {
        if (this.lifecycleState.type === 'app-placeholder') {
            this.lifecycleState = {
                type: 'window',
                metaWindow: null,
                metaWindowSignals: [],
                dialogs: [],
                matchingInfo: this.lifecycleState.matchingInfo,
                matchedAtTime: new Date(),
                matchedWhileWaiting: this.lifecycleState.waitingForAppSince !== undefined,
            };
        }
        if (this.lifecycleState.type !== 'window') {
            throw new Error(`Cannot add dialog to an MsWindow in the ${this.lifecycleState.type} state`);
        }
        this.updateWorkspaceAndMonitor(metaWindow);
        const clone = new Clutter$p.Clone({
            source: metaWindow.get_compositor_private(),
        });
        const dialog = {
            metaWindow,
            clone,
        };
        metaWindow.msWindow = this;
        this.lifecycleState.dialogs.push(dialog);
        this.add_child(clone);
        this.resizeDialogs();
        this.onMetaWindowsChanged();
        if (this.msWorkspace.tileableFocused === this) {
            this.grab_key_focus();
        }
    }
    removeAllDialogs() {
        if (this.lifecycleState.type === 'window') {
            const d = [...this.lifecycleState.dialogs];
            for (const dialog of d) {
                this.removeDialog(dialog.metaWindow);
            }
        }
    }
    removeDialog(metaWindow) {
        if (this.lifecycleState.type !== 'window') {
            throw new Error('Can only remove dialogs when in the window state');
        }
        const idx = this.lifecycleState.dialogs.findIndex((x) => x.metaWindow == metaWindow);
        if (idx === -1) {
            throw new Error('Dialog is not added to window');
        }
        const dialog = this.lifecycleState.dialogs[idx];
        this.lifecycleState.dialogs.splice(idx, 1);
        this.remove_child(dialog.clone);
        dialog.clone.destroy();
        metaWindow.msWindow = undefined;
    }
    onMetaWindowsChanged() {
        if (this.lifecycleState.type == 'window') {
            this.reactive = false;
            const metaWindow = assertNotNull(this.metaWindow);
            if (isWindowContentInteresting(metaWindow)) {
                updateTitleBarVisibility(metaWindow);
                this.resizeMetaWindows();
            }
            else {
            }
            set_style_class(this.msContent, 'surface-darker', this.lifecycleState.metaWindow === null ||
                !this.lifecycleState.metaWindow.firstFrameDrawn);
            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
        }
        else {
            this.reactive = false;
            set_style_class(this.msContent, 'surface-darker', false);
            if (!this.placeholder.get_parent()) {
                this.msContent.add_child(this.placeholder);
            }
        }
        this.emit('title-changed', this.title);
    }
    grab_key_focus() {
        this.focusDialogs();
        if (!Me$y.msWindowManager.msFocusManager.requestFocus(this))
            return;
        if (this.metaWindow) {
            this.metaWindow.activate(global.get_current_time());
        }
        else {
            this.placeholder.grab_key_focus();
        }
    }
    focusDialogs() {
        let focused = false;
        if (this.lifecycleState.type === 'window' &&
            this.lifecycleState.dialogs) {
            [
                ...this.lifecycleState.dialogs.filter((dialog) => [
                    Meta$8.WindowType.DIALOG,
                    Meta$8.WindowType.MODAL_DIALOG,
                ].includes(dialog.metaWindow.window_type)),
            ]
                .sort((firstDialog, secondDialog) => {
                return (firstDialog.metaWindow.user_time -
                    secondDialog.metaWindow.user_time);
            })
                .forEach((dialog, index, array) => {
                this.set_child_above_sibling(dialog.clone, null);
                if (index === array.length - 1) {
                    dialog.metaWindow.activate(global.get_current_time());
                    focused = true;
                }
            });
        }
        return focused;
    }
    metaWindowUnManaged(metaWindow) {
        const state = this.lifecycleState;
        assert(state.type == 'window', "Expected the MsWindow to be in the 'window' state");
        const isMainMetaWindow = metaWindow === state.metaWindow;
        const dialog = state.dialogs.some((dialog) => dialog.metaWindow === metaWindow);
        if (!isMainMetaWindow && !dialog) {
            Me$y.log('Cannot find the window which was unmanaged');
            return;
        }
        if (dialog) {
            this.removeDialog(metaWindow);
        }
        if (isMainMetaWindow) {
            state.metaWindow = null;
        }
        metaWindow.msWindow = undefined;
        metaWindow.handledByMaterialShell = false;
        if (state.metaWindow == null && state.dialogs.length == 0) {
            if (this._persistent) {
                this.unsetWindow();
            }
            else {
                this.lifecycleState = { type: 'waiting-for-destroy' };
                GLib$i.idle_add(GLib$i.PRIORITY_DEFAULT_IDLE, () => {
                    if (this.lifecycleState.type === 'waiting-for-destroy') {
                        this.kill();
                    }
                    return GLib$i.SOURCE_REMOVE;
                });
            }
        }
    }
    async kill() {
        const state = this.lifecycleState;
        switch (state.type) {
            case 'window': {
                const dialogPromises = state.dialogs.map((dialog) => {
                    return new Promise((resolve) => {
                        if (dialog.metaWindow.get_compositor_private()) {
                            dialog.metaWindow.connect('unmanaged', (_) => {
                                resolve();
                            });
                            dialog.metaWindow.delete(global.get_current_time());
                        }
                        else {
                            resolve();
                        }
                    });
                });
                const promise = new Promise((resolve) => {
                    if (state.metaWindow &&
                        state.metaWindow.get_compositor_private()) {
                        state.metaWindow.connect('unmanaged', (_) => {
                            resolve();
                        });
                        state.metaWindow.delete(global.get_current_time());
                    }
                    else {
                        resolve();
                    }
                });
                await Promise.all([...dialogPromises, promise]);
                break;
            }
            case 'app-placeholder': {
                if (this._persistent) {
                }
                else {
                    this.msWorkspace.removeMsWindow(this);
                    this.destroy();
                }
                break;
            }
            case 'waiting-for-destroy':
                this.msWorkspace.removeMsWindow(this);
                this.destroy();
                break;
            case 'destroyed':
                break;
        }
    }
    fadeOutPlaceholder() {
        const onComplete = () => {
            this.placeholder.set_opacity(255);
            if (this.metaWindow) {
                this.msContent.remove_child(this.placeholder);
            }
            this.placeholder.reset();
        };
        this.placeholder.ease({
            opacity: 0,
            duration: 250,
            mode: Clutter$p.AnimationMode.EASE_OUT_CUBIC,
            onStopped: onComplete,
        });
    }
    freezeAllocation() {
        this.set_width(this.allocation.get_width());
        this.set_height(this.allocation.get_height());
    }
    unFreezeAllocation() {
        this.set_width(-1);
        this.set_height(-1);
    }
    updateMetaWindowVisibility() {
        const metaWindow = this.metaWindow;
        if (metaWindow) {
            const shouldBeHidden = !this.visible ||
                this.get_parent() === null ||
                Me$y.msWindowManager.msDndManager.dragInProgress;
            if (shouldBeHidden && !metaWindow.minimized) {
                metaWindow.minimize();
            }
            else if (!shouldBeHidden && metaWindow.minimized) {
                metaWindow.unminimize();
            }
        }
    }
    toString() {
        if (this.lifecycleState.type === 'destroyed') {
            return `[destroyed MsWindow - ${this.app.get_name()}]`;
        }
        const string = super.toString();
        return `${string.slice(0, string.length - 1)} ${this.app.get_name()}]`;
    }
    _onDestroy() {
        if (this.destroyId)
            this.disconnect(this.destroyId);
        if (this.appSignalId)
            this.app.disconnect(this.appSignalId);
        if (this.placeholder.get_parent() === null)
            this.placeholder.destroy();
        this.unregisterOnMetaWindowSignals();
        this.lifecycleState = { type: 'destroyed' };
    }
};
MsWindow.metaInfo = {
    GTypeName: 'MsWindow',
    Signals: {
        title_changed: {
            param_types: [GObject$6.TYPE_STRING],
            accumulator: 0,
        },
        dragged_changed: {
            param_types: [GObject$6.TYPE_BOOLEAN],
            accumulator: 0,
        },
        request_new_meta_window: {
            param_types: [],
            accumulator: 0,
        },
    },
};
MsWindow = __decorate([
    registerGObjectClass
], MsWindow);
let MsWindowContent = class MsWindowContent extends St$k.Widget {
    _init({ placeholder, clone, }) {
        super._init({ clip_to_allocation: true });
        this.placeholder = placeholder;
        this.clone = clone;
        this.add_child(this.clone);
        this.add_child(this.placeholder);
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const parent = this.get_parent();
        assert(parent instanceof MsWindow, 'expected parent to be an MsWindow');
        const metaWindow = parent.metaWindow;
        if (metaWindow &&
            metaWindow.firstFrameDrawn &&
            metaWindow.get_compositor_private()) {
            const windowFrameRect = metaWindow.get_frame_rect();
            const windowBufferRect = metaWindow.get_buffer_rect();
            let x1, x2, y1, y2;
            if (metaWindow.resizeable || metaWindow.fullscreen) {
                x1 = windowBufferRect.x - windowFrameRect.x;
                y1 = windowBufferRect.y - windowFrameRect.y;
                x2 = x1 + windowBufferRect.width;
                y2 = y1 + windowBufferRect.height;
            }
            else {
                const monitor = parent.msWorkspace.monitor;
                const workArea = Main$h.layoutManager.getWorkAreaForMonitor(monitor.index);
                x1 = windowBufferRect.x - workArea.x - parent.x;
                y1 = windowBufferRect.y - workArea.y - parent.y;
                x2 = x1 + windowBufferRect.width;
                y2 = y1 + windowBufferRect.height;
            }
            const cloneBox = Clutter$p.ActorBox.new(x1, y1, x2, y2);
            this.clone.allocate(cloneBox);
        }
        else {
            const [_mw, _mh, w, h] = this.clone.get_preferred_size();
            this.clone.allocate(centerInBox(box, w, h));
        }
        if (this.placeholder.get_parent() === this) {
            this.placeholder.allocate(box);
        }
    }
};
MsWindowContent.metaInfo = {
    GTypeName: 'MsWindowContent',
};
MsWindowContent = __decorate([
    registerGObjectClass
], MsWindowContent);

function diffLists(lhs, rhs) {
    return {
        added: rhs.filter((x) => !lhs.includes(x)),
        removed: lhs.filter((x) => !rhs.includes(x)),
    };
}

const GLib$h = imports.gi.GLib;
class IdleDebounce {
    constructor(f) {
        this.scheduleInfo = null;
        this.f = f;
    }
    schedule(...args) {
        if (this.scheduleInfo === null) {
            this.scheduleInfo = {
                signal: GLib$h.idle_add(GLib$h.PRIORITY_DEFAULT_IDLE, () => {
                    const info = assertNotNull(this.scheduleInfo);
                    this.scheduleInfo = null;
                    this.f(...info.args);
                    return GLib$h.SOURCE_REMOVE;
                }),
                args: args,
            };
        }
        else {
            this.scheduleInfo.args = args;
        }
    }
    cancel() {
        if (this.scheduleInfo !== null) {
            GLib$h.Source.remove(this.scheduleInfo.signal);
            this.scheduleInfo = null;
        }
    }
}

const Shell$9 = imports.gi.Shell;
class AppsManager {
    static getApps() {
        const usage = Shell$9.AppUsage.get_default();
        const appSystem = Shell$9.AppSystem.get_default();
        const appsInstalled = appSystem.get_installed().filter((appInfo) => {
            try {
                const _ = appInfo.get_id();
            }
            catch (e) {
                return false;
            }
            return appInfo.should_show();
        });
        return appsInstalled
            .sort((a, b) => {
            return usage.compare(a.get_id(), b.get_id());
        })
            .map((appInfo) => {
            return appSystem.lookup_app(appInfo.get_id());
        });
    }
}

const Clutter$o = imports.gi.Clutter;
class SignalHandle {
    constructor(target, id) {
        this.target = target;
        if (target instanceof Clutter$o.Actor) {
            target.connect('destroy', () => {
                this.disconnect();
            });
        }
        this.id = id;
    }
    static connect(to, signal, callback) {
        return new SignalHandle(to, to.connect(signal, callback));
    }
    disconnect() {
        if (this.target == null) {
            log('Signal is already disconnected');
        }
        else {
            this.target.disconnect(this.id);
            this.target = null;
        }
    }
}
class SignalObserver {
    constructor() {
        this.signalObservedList = [];
    }
    observe(subject, signalKey, callback) {
        const signalHandle = SignalHandle.connect(subject, signalKey, callback);
        this.signalObservedList.push(signalHandle);
        return signalHandle;
    }
    clear() {
        for (const handler of this.signalObservedList) {
            handler.disconnect();
        }
        this.signalObservedList = [];
    }
}

const Clutter$n = imports.gi.Clutter;
const GnomeDesktop$1 = imports.gi.GnomeDesktop;
const Shell$8 = imports.gi.Shell;
const St$j = imports.gi.St;
const { main: Main$g } = imports.ui;
const Me$x = imports.misc.extensionUtils.getCurrentExtension();
const BUTTON_SIZE = 124;
let MsApplicationLauncher = class MsApplicationLauncher extends St$j.Widget {
    _init(msWorkspace) {
        super._init({
            reactive: true,
            style: 'padding:64px',
        });
        this.msWorkspace = msWorkspace;
        this.add_style_class_name('surface-darker');
        this.appListContainer = new MsApplicationButtonContainer(this.msWorkspace);
        this.initAppListContainer();
        this.launcherChangedSignal = SignalHandle.connect(Me$x.msThemeManager, 'clock-app-launcher-changed', () => {
            this.restartAppListContainer();
        });
        this.installedChangedSignal = SignalHandle.connect(Shell$8.AppSystem.get_default(), 'installed-changed', () => {
            this.restartAppListContainer();
        });
        this.connect('key-focus-in', () => {
            this.appListContainer.inputContainer.grab_key_focus();
        });
        this.connect('parent-set', () => {
            if (this.msWorkspace.tileableFocused === this) {
                this.grab_key_focus();
            }
        });
        this.connect('key-focus-out', () => {
        });
    }
    onDestroy() {
        this.launcherChangedSignal.disconnect();
        this.installedChangedSignal.disconnect();
    }
    get dragged() {
        return false;
    }
    restartAppListContainer() {
        this.appListContainer.destroy();
        this.appListContainer = new MsApplicationButtonContainer(this.msWorkspace);
        this.initAppListContainer();
    }
    initAppListContainer() {
        this.add_child(this.appListContainer);
        AppsManager.getApps().forEach((app) => {
            const button = new MsApplicationButton({
                app,
                buttonSize: this.appListContainer.buttonSize,
            });
            button.connect('enter-event', () => {
                this.appListContainer.highlightButton(button);
            });
            button.connect('clicked', () => {
                Me$x.msWindowManager.openApp(app, this.msWorkspace);
                this.appListContainer.reset();
            });
            this.appListContainer.addAppButton(button);
        });
        this.appListContainer.initFilteredAppButtonList();
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const containerBox = new Clutter$n.ActorBox();
        const minSize = Math.min(contentBox.get_width(), contentBox.get_height());
        const workArea = Main$g.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
        const containerWidth = Math.min(contentBox.get_width() * 0.8, workArea.width / 2);
        containerBox.x1 = Math.round(contentBox.x1 + (contentBox.get_width() - containerWidth) / 2);
        containerBox.x2 = Math.round(contentBox.x2 - (contentBox.get_width() - containerWidth) / 2);
        containerBox.y1 = Math.round(contentBox.y1 + 0.1 * minSize);
        containerBox.y2 = Math.round(contentBox.y2 - 0.1 * minSize);
        containerBox.x2 =
            containerBox.get_width() % 2 != 0
                ? containerBox.x2 + 1
                : containerBox.x2;
        containerBox.y2 =
            containerBox.get_height() % 2 != 0
                ? containerBox.y2 + 1
                : containerBox.y2;
        this.appListContainer.allocate(containerBox);
    }
};
MsApplicationLauncher.metaInfo = {
    GTypeName: 'MsApplicationLauncher',
    CssName: 'MsApplicationLauncher',
};
MsApplicationLauncher = __decorate([
    registerGObjectClass
], MsApplicationLauncher);
let MsApplicationButtonContainer = class MsApplicationButtonContainer extends St$j.Widget {
    _init(msWorkspace) {
        super._init({});
        this.msWorkspace = msWorkspace;
        this.appButtonList = [];
        this.filteredAppButtonList = [];
        this.filteredAppButtonListBuffer = [];
        this.currentButtonFocused = null;
        this.startIndex = 0;
        this.numberOfRow = 1;
        this.numberOfColumn = 1;
        this.maxIndex = 1;
        if (Me$x.msThemeManager.clockAppLauncher) {
            const clockLabel = new St$j.Label({
                style_class: 'headline-6 text-medium-emphasis margin-right-x2',
                y_align: Clutter$n.ActorAlign.CENTER,
            });
            this.clockLabel = clockLabel;
            const dateLabel = new St$j.Label({
                style_class: 'headline-6 text-medium-emphasis',
                y_align: Clutter$n.ActorAlign.CENTER,
            });
            this.dateLabel = dateLabel;
            this.clockBin = new St$j.BoxLayout({
                x_align: Clutter$n.ActorAlign.CENTER,
            });
            this.clockBin.add_child(clockLabel);
            this.clockBin.add_child(this.dateLabel);
            this._wallClock = new GnomeDesktop$1.WallClock({
                time_only: true,
            });
            const updateClock = () => {
                if (clockLabel.mapped) {
                    clockLabel.text = this._wallClock.clock;
                    const date = new Date();
                    const dateFormat = Shell$8.util_translate_time_string(N_('%A %B %-d'));
                    dateLabel.text = date.toLocaleFormat(dateFormat);
                }
            };
            this.signalClock = this._wallClock.connect('notify::clock', updateClock);
            clockLabel.connect('notify::mapped', () => {
                if (clockLabel.mapped) {
                    updateClock();
                    clockLabel.queue_relayout();
                }
            });
            clockLabel.connect('destroy', () => {
                this._wallClock.disconnect(this.signalClock);
                delete this._wallClock;
            });
            this.add_child(this.clockBin);
        }
        this.inputLayout = new St$j.BoxLayout({});
        this.searchIcon = new St$j.Icon({
            style_class: 'search-entry-icon',
            icon_name: 'edit-find-symbolic',
        });
        this.inputContainer = new St$j.Entry({
            style_class: 'search-entry',
            hint_text: _('Type to search…'),
            track_hover: true,
            can_focus: true,
        });
        this.inputContainer.set_primary_icon(this.searchIcon);
        this._text = this.inputContainer.clutter_text;
        this._text.connect('text-changed', () => {
            this.updateFilteredAppButtonList();
            this.highlightInitialButton();
        });
        this._text.connect('key-press-event', (entry, event) => {
            const symbol = event.get_key_symbol();
            switch (symbol) {
                case Clutter$n.KEY_Escape:
                    this.reset();
                    this.removeHighlightButton();
                    return Clutter$n.EVENT_STOP;
                case Clutter$n.KEY_Tab:
                    this.highlightNextButton();
                    return Clutter$n.EVENT_STOP;
                case Clutter$n.KEY_ISO_Left_Tab:
                    this.highlightPreviousButton();
                    return Clutter$n.EVENT_STOP;
                case Clutter$n.KEY_Down:
                    this.highlightButtonBelow();
                    return Clutter$n.EVENT_STOP;
                case Clutter$n.KEY_Up:
                    this.highlightButtonAbove();
                    return Clutter$n.EVENT_STOP;
                case Clutter$n.KEY_Right:
                    if (this._text.cursor_position === -1) {
                        this.highlightNextButton();
                        return Clutter$n.EVENT_STOP;
                    }
                    else {
                        return Clutter$n.EVENT_PROPAGATE;
                    }
                case Clutter$n.KEY_Left:
                    if (this.currentButtonFocused !=
                        this.filteredAppButtonListBuffer[0] &&
                        this.getCurrentIndex() > -1) {
                        this.highlightPreviousButton();
                        return Clutter$n.EVENT_STOP;
                    }
                    else {
                        return Clutter$n.EVENT_PROPAGATE;
                    }
                case Clutter$n.KEY_Return:
                case Clutter$n.KEY_KP_Enter:
                    if (this.currentButtonFocused)
                        this.currentButtonFocused.emit('clicked', 0);
                    return Clutter$n.EVENT_STOP;
            }
            return Clutter$n.EVENT_PROPAGATE;
        });
        this.add_child(this.inputContainer);
        this.container = new St$j.Widget();
        this.container.add_style_class_name('surface');
        this.container.set_style('border-radius:16px;');
        this.add_child(this.container);
    }
    get buttonSize() {
        return Me$x.msThemeManager.getScaledSize(BUTTON_SIZE);
    }
    reset() {
        if (this.inputContainer.get_text() === '' &&
            this.currentButtonFocused === null) {
            this.msWorkspace.focusPreviousTileableFromHistory();
            return;
        }
        if (this.inputContainer.get_text().length) {
            this.inputContainer.set_text('');
            this._text.cursor_position = -1;
            return;
        }
        this.updateFilteredAppButtonList();
    }
    initFilteredAppButtonList() {
        this.filteredAppButtonList = this.appButtonList;
        this.filteredAppButtonListBuffer = this.appButtonList;
        this.startIndex = 0;
    }
    updateFilteredAppButtonList() {
        this.filteredAppButtonListBuffer = this.appButtonList.filter((button) => {
            const stringToSearch = `${button.app.get_name()}${button.app.get_id()}${button.app.get_description()}`;
            const regex = new RegExp(this.inputContainer.get_text(), 'i');
            if (regex.test(stringToSearch)) {
                button.visible = true;
                return true;
            }
            else {
                button.visible = false;
                return false;
            }
        });
        this.filteredAppButtonList = [];
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        let index = 0;
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[index]);
            index++;
        }
        this.startIndex = 0;
    }
    scrollFilteredAppButtonListUp() {
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        if (this.startIndex + maxButtons >
            this.filteredAppButtonListBuffer.length - 1) {
            return false;
        }
        const maxColumns = this.numberOfColumn;
        let index = 0;
        let showIndex;
        this.startIndex += maxColumns;
        while (index < this.startIndex) {
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[index]) {
                this.filteredAppButtonListBuffer[index].visible = false;
            }
            index++;
        }
        this.filteredAppButtonList = [];
        index = 0;
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            showIndex = this.startIndex + index;
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[showIndex]) {
                this.filteredAppButtonListBuffer[showIndex].visible = true;
                this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[showIndex]);
            }
            index++;
        }
        return true;
    }
    scrollFilteredAppButtonListDown() {
        const maxColumns = this.numberOfColumn;
        if (this.startIndex - maxColumns < 0) {
            return false;
        }
        let index = 0;
        let showIndex;
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        this.startIndex -= maxColumns;
        this.filteredAppButtonList = [];
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            showIndex = this.startIndex + index;
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[showIndex]) {
                this.filteredAppButtonListBuffer[showIndex].visible = true;
                this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[showIndex]);
            }
            index++;
        }
        return true;
    }
    getCurrentIndex() {
        const index = this.currentButtonFocused
            ? this.filteredAppButtonList.indexOf(this.currentButtonFocused)
            : -1;
        if (index < 0 || index > this.maxIndex) {
            this.highlightInitialButton();
        }
        return index;
    }
    highlightNextButton() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < 0) {
            return;
        }
        else if (currentIndex == this.maxIndex) {
            if (this.scrollFilteredAppButtonListUp()) {
                currentIndex -= this.numberOfColumn;
            }
            else {
                return;
            }
        }
        if (currentIndex < this.filteredAppButtonList.length - 1) {
            this.highlightButton(this.filteredAppButtonList[currentIndex + 1]);
        }
    }
    highlightPreviousButton() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex > 0) {
            this.highlightButton(this.filteredAppButtonList[currentIndex - 1]);
        }
        else if (currentIndex === 0) {
            if (this.scrollFilteredAppButtonListDown()) {
                currentIndex += this.numberOfColumn - 1;
                this.highlightButton(this.filteredAppButtonList[currentIndex]);
            }
        }
    }
    highlightButtonAbove() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < this.numberOfColumn) {
            if (this.scrollFilteredAppButtonListDown()) {
                currentIndex += this.numberOfColumn;
            }
        }
        const nextButton = this.filteredAppButtonList[currentIndex - this.numberOfColumn];
        if (nextButton) {
            this.highlightButton(nextButton);
        }
    }
    highlightButtonBelow() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < 0) {
            return;
        }
        else if (currentIndex + this.numberOfColumn > this.maxIndex) {
            if (this.scrollFilteredAppButtonListUp()) {
                currentIndex -= this.numberOfColumn;
            }
            else {
                return;
            }
        }
        const nextButton = this.filteredAppButtonList[currentIndex + this.numberOfColumn];
        if (nextButton) {
            this.highlightButton(nextButton);
        }
    }
    highlightButton(button) {
        if (button == this.currentButtonFocused)
            return;
        if (this.currentButtonFocused) {
            this.currentButtonFocused.remove_style_class_name('highlighted');
        }
        this.currentButtonFocused = button;
        this.currentButtonFocused.add_style_class_name('highlighted');
    }
    highlightInitialButton() {
        if (this.filteredAppButtonList &&
            this.filteredAppButtonList.length > 0) {
            this.highlightButton(this.filteredAppButtonList[0]);
        }
    }
    removeHighlightButton() {
        if (this.currentButtonFocused) {
            this.currentButtonFocused.remove_style_class_name('highlighted');
        }
        if (this.filteredAppButtonList) {
            this.currentButtonFocused = null;
        }
    }
    addAppButton(button) {
        this.appButtonList.push(button);
        this.add_child(button);
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const containerPadding = Me$x.msThemeManager.getScaledSize(16);
        const clockHeight = Me$x.msThemeManager.getScaledSize(Me$x.msThemeManager.clockAppLauncher ? 64 : 0);
        const searchHeight = Me$x.msThemeManager.getScaledSize(48);
        const searchMargin = Me$x.msThemeManager.getScaledSize(24);
        const availableWidth = contentBox.get_width() - containerPadding * 2;
        const availableHeight = contentBox.get_height() -
            containerPadding * 2 -
            searchHeight -
            searchMargin -
            clockHeight;
        const numberOfButtons = this.filteredAppButtonList.length;
        this.numberOfColumn = Math.floor(availableWidth / this.buttonSize);
        this.numberOfRow = Math.floor(availableHeight / this.buttonSize);
        const numberOfRowNeeded = Math.ceil(numberOfButtons / this.numberOfColumn);
        this.maxIndex =
            this.numberOfColumn *
                Math.min(this.numberOfRow, numberOfRowNeeded) -
                1;
        const horizontalOffset = (contentBox.get_width() -
            (this.buttonSize * this.numberOfColumn +
                containerPadding * 2)) /
            2;
        const verticalOffset = (contentBox.get_height() -
            (this.buttonSize * this.numberOfRow +
                containerPadding * 2 +
                searchHeight +
                searchMargin +
                clockHeight)) /
            2;
        if (this.clockBin) {
            const clockBox = new Clutter$n.ActorBox();
            clockBox.x1 = contentBox.x1 + horizontalOffset + containerPadding;
            clockBox.x2 = contentBox.x2 - horizontalOffset - containerPadding;
            clockBox.y1 = contentBox.y1 + verticalOffset;
            clockBox.y2 = clockBox.y1 + clockHeight;
            this.clockBin.allocate(clockBox);
        }
        const searchBox = new Clutter$n.ActorBox();
        searchBox.x1 = contentBox.x1 + horizontalOffset;
        searchBox.x2 = contentBox.x2 - horizontalOffset;
        searchBox.y1 = contentBox.y1 + verticalOffset + clockHeight;
        searchBox.y2 = searchBox.y1 + searchHeight;
        this.inputContainer.allocate(searchBox);
        const containerBox = new Clutter$n.ActorBox();
        containerBox.x1 = contentBox.x1 + horizontalOffset;
        containerBox.x2 = contentBox.x2 - horizontalOffset;
        containerBox.y1 =
            contentBox.y1 +
                verticalOffset +
                searchHeight +
                searchMargin +
                clockHeight;
        containerBox.y2 = contentBox.y2 - verticalOffset;
        this.container.allocate(containerBox);
        let index = 0;
        for (let y = 0; y < this.numberOfRow; y++) {
            for (let x = 0; x < this.numberOfColumn; x++) {
                index = x + this.numberOfColumn * y;
                if (index < this.filteredAppButtonList.length) {
                    const button = this.filteredAppButtonList[index];
                    const buttonBox = new Clutter$n.ActorBox();
                    buttonBox.x1 =
                        containerBox.x1 +
                            this.buttonSize * x +
                            containerPadding;
                    buttonBox.x2 = buttonBox.x1 + this.buttonSize;
                    buttonBox.y1 =
                        containerBox.y1 +
                            this.buttonSize * y +
                            containerPadding;
                    buttonBox.y2 = buttonBox.y1 + this.buttonSize;
                    button.visible = true;
                    button.allocate(buttonBox);
                }
            }
        }
        for (let i = index + 1; i < numberOfButtons; i++) {
            this.filteredAppButtonList[i].visible = false;
        }
        const buttonSet = new Set(this.filteredAppButtonList);
        const hiddenBox = new Clutter$n.ActorBox();
        hiddenBox.x1 = contentBox.x1;
        hiddenBox.x2 = contentBox.x1;
        hiddenBox.y1 = contentBox.x1;
        hiddenBox.y2 = contentBox.x1;
        for (const button of this.appButtonList) {
            if (!buttonSet.has(button)) {
                button.allocate(hiddenBox);
                button.visible = false;
            }
        }
        if (this.currentButtonFocused) {
            this.getCurrentIndex();
        }
    }
};
MsApplicationButtonContainer = __decorate([
    registerGObjectClass
], MsApplicationButtonContainer);
let MsApplicationButton = class MsApplicationButton extends MatButton {
    _init({ app, buttonSize }) {
        super._init({});
        this.app = app;
        this.buttonSize = buttonSize;
        this.layout = new St$j.BoxLayout({
            vertical: true,
            width: this.buttonSize,
            height: this.buttonSize,
            clip_to_allocation: true,
        });
        if (app) {
            this.icon = this.app.create_icon_texture(72);
            this.title = new St$j.Label({
                text: this.app.get_name(),
                x_align: Clutter$n.ActorAlign.CENTER,
                style_class: 'subtitle-2',
                style: 'margin-top:12px',
            });
            this.layout.add_child(this.icon);
            this.layout.add_child(this.title);
            Me$x.tooltipManager.add(this.title, { relativeActor: this });
        }
        this.layout.set_style('padding:12px;');
        this.set_child(this.layout);
    }
};
MsApplicationButton.metaInfo = {
    GTypeName: 'MsApplicationButton',
};
MsApplicationButton = __decorate([
    registerGObjectClass
], MsApplicationButton);

const Clutter$m = imports.gi.Clutter;
const GObject$5 = imports.gi.GObject;
const St$i = imports.gi.St;
const DND$2 = imports.ui.dnd;
const Me$w = imports.misc.extensionUtils.getCurrentExtension();
let ReorderableList = class ReorderableList extends Clutter$m.Actor {
    _init(vertical = false, classAccepted = []) {
        super._init({
            layout_manager: new Clutter$m.BoxLayout({
                orientation: vertical
                    ? Clutter$m.Orientation.VERTICAL
                    : Clutter$m.Orientation.HORIZONTAL,
            }),
        });
        this.vertical = vertical;
        this.classAccepted = classAccepted;
        this.dragInProgress = false;
        this.connect('actor-added', (_, actor) => {
            if (!actor._draggable && actor !== this.placeHolder)
                this.makeActorDraggable(actor);
        });
        this.placeHolder = new DropPlaceholder();
        this.placeHolder.connect('drag-dropped', (_, source) => {
            if (source._draggable._dragActor.get_parent()) {
                source._draggable._dragActor.get_parent().remove_child(source);
            }
        });
    }
    makeActorDraggable(nonDraggableActor) {
        const actor = nonDraggableActor;
        actor.originalHandleDragOver = actor.handleDragOver;
        actor.originalAcceptDrop = actor.acceptDrop;
        actor.handleDragOver = (source, _, x, y) => {
            const originalResult = actor.originalHandleDragOver
                ? actor.originalHandleDragOver(source, actor, x, y)
                : null;
            const isForeignActor = source != this.draggedActor &&
                this.classAccepted.some((aClass) => source instanceof aClass);
            if (isForeignActor && !this.foreignActor) {
                this.foreignEntered(source);
            }
            if (source === this.draggedActor || isForeignActor) {
                if (actor.draggable != undefined && actor.draggable === false)
                    return DND$2.DragMotionResult.NO_DROP;
                const actorIndex = this.get_children()
                    .filter((actor) => actor != this.placeHolder)
                    .indexOf(actor);
                const after = this.vertical
                    ? y > actor.height / 2
                    : x > actor.width / 2;
                this.placeHolder.resize(source.width, source.height);
                this.movePlaceholder(actorIndex + (after ? 1 : 0));
                return DND$2.DragMotionResult.NO_DROP;
            }
            return originalResult || DND$2.DragMotionResult.MOVE_DROP;
        };
        actor.acceptDrop = (source) => {
            if (source._draggable._dragActor.get_parent()) {
                source._draggable._dragActor.get_parent().remove_child(source);
            }
            if (source === this.draggedActor || source === this.foreignActor) {
                return true;
            }
            return actor.originalAcceptDrop
                ? actor.originalAcceptDrop(source)
                : false;
        };
        const isMatButton = actor instanceof MatButton;
        actor._draggable = DND$2.makeDraggable(actor, {
            restoreOnSuccess: false,
            manualMode: isMatButton,
        });
        if (isMatButton) {
            actor.connect('drag-start', (_, event) => {
                const [x, y] = event.get_coords();
                actor._draggable.startDrag(x, y, global.get_current_time(), event.get_event_sequence(), event.get_device());
            });
        }
        let originalIndex = null;
        actor._draggable.connect('drag-begin', () => {
            originalIndex = this.get_children().indexOf(actor);
            this.placeHolder.resize(actor.width, actor.height);
            this.draggedActor = actor;
            this.movePlaceholder(originalIndex);
            this.emit('drag-start');
        });
        actor._draggable.connect('drag-cancelled', () => {
            assert(originalIndex !== null, 'drag cancelled before it was started');
            this.set_child_at_index(this.placeHolder, originalIndex);
        });
        actor._draggable.connect('drag-end', () => {
            const placeholderIndex = this.get_children().indexOf(this.placeHolder);
            if (this.placeHolder.get_parent() == this)
                this.remove_child(this.placeHolder);
            if (this.draggedActor) {
                reparentActor(this.draggedActor, this);
                this.set_child_at_index(this.draggedActor, placeholderIndex);
                if (placeholderIndex !== originalIndex) {
                    this.emit('actor-moved', this.draggedActor, placeholderIndex);
                }
            }
            this.draggedActor = null;
            originalIndex = null;
            this.emit('drag-end');
        });
    }
    movePlaceholder(toIndex) {
        if (this.placeHolder.get_parent()) {
            this.set_child_at_index(this.placeHolder, toIndex);
        }
        else {
            this.insert_child_at_index(this.placeHolder, toIndex);
        }
    }
    foreignEntered(actor) {
        this.foreignActor = actor;
        const connectCancelId = actor._draggable.connect('drag-cancelled', () => {
            if (this.placeHolder.get_parent() == this)
                this.remove_child(this.placeHolder);
        });
        const connectEndId = actor._draggable.connect('drag-end', () => {
            let placeholderIndex = undefined;
            const actor = this.foreignActor;
            assert(actor !== undefined, 'drag ended before it was started');
            if (this.placeHolder.get_parent()) {
                placeholderIndex = this.get_children().indexOf(this.placeHolder);
                this.remove_child(this.placeHolder);
            }
            actor._draggable.disconnect(connectCancelId);
            actor._draggable.disconnect(connectEndId);
            delete this.foreignActor;
            if (placeholderIndex !== undefined) {
                this.emit('foreign-actor-inserted', actor, placeholderIndex);
            }
        });
    }
};
ReorderableList.metaInfo = {
    GTypeName: 'ReorderableList',
    Signals: {
        'drag-start': {},
        'drag-end': {},
        'actor-moved': {
            param_types: [Clutter$m.Actor.$gtype, GObject$5.TYPE_INT],
        },
        'foreign-actor-inserted': {
            param_types: [Clutter$m.Actor.$gtype, GObject$5.TYPE_INT],
        },
    },
};
ReorderableList = __decorate([
    registerGObjectClass
], ReorderableList);
let DropPlaceholder = class DropPlaceholder extends St$i.Widget {
    _init() {
        super._init({ style_class: 'drop-placeholder' });
        this._delegate = this;
    }
    handleDragOver(source) {
        return DND$2.DragMotionResult.MOVE_DROP;
    }
    acceptDrop(source) {
        this.emit('drag-dropped', source);
        return true;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
};
DropPlaceholder.metaInfo = {
    GTypeName: 'DropPlaceHolder',
    Signals: {
        'drag-dropped': {
            param_types: [Clutter$m.Actor.$gtype],
        },
        'drag-over': {},
    },
};
DropPlaceholder = __decorate([
    registerGObjectClass
], DropPlaceholder);

const Clutter$l = imports.gi.Clutter;
const Gio$c = imports.gi.Gio;
const GLib$g = imports.gi.GLib;
const GObject$4 = imports.gi.GObject;
const Shell$7 = imports.gi.Shell;
const St$h = imports.gi.St;
const { main: Main$f, popupMenu: PopupMenu$1 } = imports.ui;
const DND$1 = imports.ui.dnd;
const Me$v = imports.misc.extensionUtils.getCurrentExtension();
const isTileableItem = (obj) => {
    return obj instanceof TileableItem;
};
const isIconTaskBarItem = (obj) => {
    return obj instanceof IconTaskBarItem;
};
const isTileableItemOrIconTaskBarItem = (obj) => {
    return isTileableItem(obj) || isIconTaskBarItem(obj);
};
let TaskBar = class TaskBar extends St$h.Widget {
    _init(msWorkspace, panelMenuManager) {
        super._init({
            name: 'taskBar',
            x_expand: true,
            reactive: true,
        });
        this._delegate = this;
        this.taskActiveIndicator = new TaskActiveIndicator({
            style_class: 'task-active-indicator',
        });
        this.add_child(this.taskActiveIndicator);
        this.taskButtonContainer = new ReorderableList(false, [TaskBarItem]);
        this.taskButtonContainer.connect('actor-moved', (_, item, index) => {
            this.msWorkspace.setTileableAtIndex(item.tileable, index);
            this.msWorkspace.focusTileable(item.tileable);
        });
        this.taskButtonContainer.connect('foreign-actor-inserted', (_, actor, index) => {
            if (actor.tileable instanceof MsWindow) {
                Me$v.msWorkspaceManager.setWindowToMsWorkspace(actor.tileable, this.msWorkspace);
                this.msWorkspace.setTileableAtIndex(actor.tileable, index);
                this.msWorkspace.focusTileable(actor.tileable);
                Me$v.msWorkspaceManager.stateChanged();
            }
        });
        this.taskButtonContainer.connect('drag-start', (_, _actor, _foreignActor) => {
            this.taskActiveIndicator.hide();
        });
        this.taskButtonContainer.connect('drag-end', (_, _actor, _foreignActor) => {
            this.taskActiveIndicator.show();
        });
        this.add_child(this.taskButtonContainer);
        this.msWorkspace = msWorkspace;
        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceSignals = [
            msWorkspace.connect('tileableList-changed', (_, newTileableList) => {
                this.onTileableListChange(newTileableList);
            }),
            msWorkspace.connect('tileable-focus-changed', (_, tileable, oldTileable) => {
                this.onFocusChanged(tileable, oldTileable);
            }),
        ];
        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$l.ScrollDirection.UP:
                    this.msWorkspace.focusPreviousTileable();
                    break;
                case Clutter$l.ScrollDirection.DOWN:
                    this.msWorkspace.focusNextTileable();
                    break;
            }
        });
        this.tracker = Shell$7.WindowTracker.get_default();
        this.windowFocused = null;
        this.menuManager = panelMenuManager;
        this.onTileableListChange(this.msWorkspace.tileableList);
    }
    get items() {
        return this.taskButtonContainer
            .get_children()
            .filter(isTileableItemOrIconTaskBarItem);
    }
    onTileableListChange(newTileableList) {
        const { added: tileableToAdd, removed: tileableToRemove } = diffLists(this.items.map((item) => item.tileable), newTileableList);
        for (const tileable of tileableToRemove) {
            const item = assertNotNull(this.getTaskBarItemOfTileable(tileable));
            item.destroy();
        }
        for (const tileable of tileableToAdd) {
            const item = this.createNewItemForTileable(tileable);
            this.taskButtonContainer.insert_child_at_index(item, newTileableList.indexOf(tileable));
        }
        newTileableList.forEach((tileable, index) => {
            this.items[index].setTileable(tileable);
            if (tileable == this.msWorkspace.tileableFocused) {
                this.items[index].setActive(true);
            }
        });
    }
    onFocusChanged(tileableFocused, oldTileableFocused) {
        if (tileableFocused === oldTileableFocused) {
            return;
        }
        const previousItem = oldTileableFocused !== null
            ? this.getTaskBarItemOfTileable(oldTileableFocused)
            : null;
        const nextItem = this.getTaskBarItemOfTileable(tileableFocused);
        if (previousItem) {
            if (previousItem.has_style_class_name('active')) {
                previousItem.setActive(false);
            }
        }
        if (!nextItem)
            return;
        nextItem.setActive(true);
        this.queue_relayout();
    }
    getActiveItem() {
        if (this.items.length > 0) {
            return this.items[this.msWorkspace.focusedIndex];
        }
        else {
            return null;
        }
    }
    createNewItemForTileable(tileable) {
        let item;
        if (tileable instanceof MsWindow) {
            item = new TileableItem(tileable);
            this.menuManager.addMenu(assertNotNull(item.menu));
            item.connect('middle-clicked', (_) => {
                if (item.tileable instanceof MsWindow)
                    item.tileable.kill();
            });
            item.connect('close-clicked', (_) => {
                if (item.tileable instanceof MsWindow)
                    item.tileable.kill();
            });
        }
        else {
            item = new IconTaskBarItem(tileable, Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/plus-symbolic.svg`));
        }
        item.connect('left-clicked', (_) => {
            this.msWorkspace.focusTileable(item.tileable);
        });
        return item;
    }
    getTaskBarItemOfTileable(tileable) {
        return this.items.find((item) => {
            return item.tileable === tileable;
        });
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        this.taskButtonContainer.allocate(contentBox);
        const activeItem = this.getActiveItem();
        if (activeItem) {
            this.taskActiveIndicator.show();
            const taskActiveIndicatorBox = new Clutter$l.ActorBox({
                x1: activeItem.x,
                x2: activeItem.x + activeItem.width,
                y1: contentBox.get_height() - this.taskActiveIndicator.height,
                y2: contentBox.get_height(),
            });
            this.taskActiveIndicator.allocate(taskActiveIndicatorBox);
        }
        else {
            this.taskActiveIndicator.hide();
        }
    }
    _onDestroy() {
        this.msWorkspaceSignals.forEach((signal) => this.msWorkspace.disconnect(signal));
    }
};
TaskBar = __decorate([
    registerGObjectClass
], TaskBar);
let TaskActiveIndicator = class TaskActiveIndicator extends St$h.Widget {
    _init(...args) {
        super._init(...args);
    }
    prepareAnimation(newAllocation) {
        this.translation_x = this.translation_x + this.x - newAllocation.x1;
        this.scale_x = (this.width * this.scale_x) / newAllocation.get_width();
    }
    animate() {
        this.ease({
            translation_x: 0,
            scale_x: 1,
            duration: 250,
            mode: Clutter$l.AnimationMode.EASE_OUT_QUAD,
            onStopped: () => {
                this.translation_x = 0;
                this.scaleX = 1;
            },
        });
    }
    vfunc_allocate(...args) {
        if (this.width && this.mapped) {
            this.prepareAnimation(args[0]);
            GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
                this.animate();
                return GLib$g.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
};
TaskActiveIndicator.metaInfo = {
    GTypeName: 'TaskActiveIndicator',
};
TaskActiveIndicator = __decorate([
    registerGObjectClass
], TaskActiveIndicator);
let TaskBarItem = class TaskBarItem extends MatButton {
    _init(contentActor, draggable) {
        super._init({
            style_class: 'task-bar-item',
        });
        this.y_expand = true;
        this._delegate = this;
        this.draggable = draggable;
        this.contentActor = contentActor;
        this.monitor = assertNotNull(Main$f.layoutManager.primaryMonitor);
        this.set_child(this.contentActor);
        this.connect('primary-action', () => {
            this.emit('left-clicked');
        });
        this.connect('secondary-action', () => {
            if (this.menu !== undefined) {
                this.menu.toggle();
            }
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter$l.BUTTON_MIDDLE) {
                this.emit('middle-clicked');
            }
        });
    }
    vfunc_parent_set() {
        const actor = this.get_parent() || this;
        if (actor.is_mapped()) {
            this.monitor = assertNotNull(Main$f.layoutManager.findMonitorForActor(actor));
        }
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = Me$v.msThemeManager.getPanelSize();
        return [height, height];
    }
    setActive(active) {
        if (!active && this.has_style_class_name('active')) {
            this.remove_style_class_name('active');
        }
        if (active && !this.has_style_class_name('active')) {
            this.add_style_class_name('active');
        }
    }
};
TaskBarItem.metaInfo = {
    GTypeName: 'TaskBarItem',
    Signals: {
        'drag-dropped': {},
        'drag-over': {
            param_types: [GObject$4.TYPE_BOOLEAN],
        },
        'left-clicked': {},
        'middle-clicked': {},
    },
};
TaskBarItem = __decorate([
    registerGObjectClass
], TaskBarItem);
let TileableItem = class TileableItem extends TaskBarItem {
    _init(tileable) {
        const container = new St$h.BoxLayout({
            style_class: 'task-bar-item-content',
        });
        super._init(container, true);
        this.container = container;
        this.buildIconIdle = new IdleDebounce(this.buildIcon.bind(this));
        this.startIconContainer = new St$h.Bin({
            y_align: Clutter$l.ActorAlign.CENTER,
        });
        this.endIconContainer = new St$h.Bin({
            y_align: Clutter$l.ActorAlign.CENTER,
        });
        this.menu = new PopupMenu$1.PopupMenu(this, 0.5, St$h.Side.TOP);
        this.menu.actor.add_style_class_name('horizontal-panel-menu');
        this.makePersistentAction = this.menu.addAction('Pin tab', () => {
            if (this.tileable instanceof MsWindow) {
                this.tileable.persistent = true;
            }
            this.endIconContainer.set_child(this.persistentIcon);
            this.makePersistentAction.hide();
            this.unmakePersistentAction.show();
        }, Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/pin-symbolic.svg`));
        this.unmakePersistentAction = this.menu.addAction('Unpin tab', () => {
            if (this.tileable instanceof MsWindow) {
                this.tileable.persistent = false;
            }
            this.endIconContainer.set_child(this.closeButton);
            this.makePersistentAction.show();
            this.unmakePersistentAction.hide();
        }, Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/pin-off-symbolic.svg`));
        this.menu.addAction('Close', () => {
            this.emit('close-clicked');
        }, Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/close-symbolic.svg`));
        Main$f.layoutManager.uiGroup.add_actor(this.menu.actor);
        this.menu.actor.hide();
        this.title = new St$h.Label({
            style_class: 'task-bar-item-title',
            y_align: Clutter$l.ActorAlign.CENTER,
        });
        Me$v.tooltipManager.add(this.title, { relativeActor: this });
        this.signalManager = new MsManager();
        this.style = getSettings('theme').get_string('taskbar-item-style');
        this.signalManager.observe(getSettings('theme'), 'changed::taskbar-item-style', () => {
            this.style =
                getSettings('theme').get_string('taskbar-item-style');
            this.updateTitle();
            this.setStyle();
        });
        this.connect('destroy', this._onDestroy.bind(this));
        this.closeIcon = new St$h.Icon({
            style_class: 'task-small-icon',
            gicon: Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/close-symbolic.svg`),
        });
        this.closeButton = new St$h.Button({
            style_class: 'task-close-button',
            child: this.closeIcon,
        });
        this.closeButton.connect('clicked', () => {
            this.emit('close-clicked');
        });
        this.persistentIcon = new St$h.Icon({
            style_class: 'task-small-icon',
            gicon: Gio$c.icon_new_for_string(`${Me$v.path}/assets/icons/pin-symbolic.svg`),
        });
        this.container.add_child(this.startIconContainer);
        this.container.add_child(this.title);
        this.container.add_child(this.endIconContainer);
        this.setTileable(tileable);
    }
    setTileable(tileable) {
        if (tileable === this.tileable)
            return;
        if (this.titleSignalKiller)
            this.titleSignalKiller();
        this.tileable = tileable;
        this.app = tileable instanceof MsWindow ? tileable.app : null;
        if (this.icon) {
            this.buildIcon(assertNotNull(this.lastHeight));
        }
        this.titleSignalKiller = this.signalManager.observe(this.tileable, 'title-changed', () => this.updateTitle());
        if (this.tileable instanceof MsWindow && this.tileable._persistent) {
            this.makePersistentAction.hide();
            this.unmakePersistentAction.show();
            this.endIconContainer.set_child(this.persistentIcon);
        }
        else {
            this.unmakePersistentAction.hide();
            this.makePersistentAction.show();
            this.endIconContainer.set_child(this.closeButton);
        }
        this.setStyle();
    }
    setStyle() {
        this.updateTitle();
        if (this.style == 'icon') {
            this.title.hide();
        }
        else {
            this.title.show();
        }
    }
    buildIcon(height) {
        if (this.icon)
            this.icon.destroy();
        assert(this.app !== null, 'cannot build an icon without an app');
        this.lastHeight = height;
        const icon = this.app.create_icon_texture(height / 2);
        assert(icon instanceof St$h.Widget, 'expected icon to be a widget');
        this.icon = icon;
        this.icon.style_class = 'app-icon';
        this.icon.set_size(height / 2, height / 2);
        this.startIconContainer.set_child(this.icon);
        const smallIconSize = Math.max(Math.round(height / 3), 18);
        this.persistentIcon.set_icon_size(smallIconSize);
        this.closeIcon.set_icon_size(smallIconSize);
        this.queue_relayout();
    }
    setActive(active) {
        super.setActive(active);
        this.updateTitle();
    }
    updateTitle() {
        assert(this.tileable !== undefined, 'item has no tileable');
        if (this.tileable instanceof MsApplicationLauncher ||
            this.app === null) {
            this.title.text = '';
        }
        else {
            if (this.style == 'full') {
                if (this.tileable.title.includes(this.app.get_name())) {
                    this.title.text = this.tileable.title;
                }
                else {
                    const escapedAppName = GLib$g.markup_escape_text(this.app.get_name(), -1);
                    const escapedTitle = GLib$g.markup_escape_text(this.tileable.title, -1);
                    this.title.get_clutter_text().set_markup(`${escapedTitle}<span alpha="${this.has_style_class_name('active') ? '40%' : '20%'}">   -   ${escapedAppName}</span>`);
                }
            }
            else if (this.style == 'name') {
                this.title.text = this.app.get_name();
            }
        }
    }
    vfunc_allocate(box) {
        const height = box.get_height();
        if (!this.icon || this.lastHeight != height) {
            this.buildIconIdle.schedule(height);
        }
        super.vfunc_allocate(box);
    }
    _onDestroy() {
        this.buildIconIdle.cancel();
        this.signalManager.destroy();
        if (this.menu !== undefined)
            this.menu.destroy();
    }
};
TileableItem.metaInfo = {
    GTypeName: 'TileableItem',
    Signals: {
        'close-clicked': {},
    },
};
TileableItem = __decorate([
    registerGObjectClass
], TileableItem);
let IconTaskBarItem = class IconTaskBarItem extends TaskBarItem {
    _init(tileable, gicon) {
        const container = new St$h.Bin({
            style_class: 'task-bar-icon-container',
        });
        super._init(container, false);
        this.container = container;
        this.buildIconIdle = new IdleDebounce((height) => {
            this.icon.set_icon_size(height);
        });
        this.icon = new St$h.Icon({
            gicon,
            style_class: 'app-icon',
            icon_size: Me$v.msThemeManager.getPanelSizeNotScaled() / 2,
        });
        this.container.set_child(this.icon);
        this.tileable = tileable;
        this.connect('destroy', this._onDestroy.bind(this));
    }
    setTileable(tileable) {
        if (tileable === this.tileable)
            return;
        this.tileable = tileable;
    }
    vfunc_get_preferred_width(_forHeight) {
        return [_forHeight, _forHeight];
    }
    vfunc_allocate(box) {
        const height = Me$v.msThemeManager.getPanelSizeNotScaled() / 2;
        if (this.icon && this.icon.get_icon_size() != height) {
            this.buildIconIdle.schedule(height);
        }
        super.vfunc_allocate(box);
    }
    _onDestroy() {
        this.buildIconIdle.cancel();
    }
};
IconTaskBarItem = __decorate([
    registerGObjectClass
], IconTaskBarItem);

const Me$u = imports.misc.extensionUtils.getCurrentExtension();
const MainCategories = [
    'Game',
    'Development',
    'Video',
    'Audio',
    'AudioVideo',
    'Graphics',
    'Office',
    'Science',
    'Education',
    'FileManager',
    'InstantMessaging',
    'Network',
    'Settings',
    'System',
    'Utility',
];
const meaningfulCategories = ['IDE', 'WebBrowser', 'Player'];
class MsWorkspaceCategory {
    constructor(msWorkspace, forcedCategory) {
        this.msWorkspace = msWorkspace;
        this.forcedCategory = forcedCategory;
        this.category = this.determineCategory();
    }
    forceCategory(category) {
        this.forcedCategory = category;
        this.refreshCategory();
        Me$u.stateManager.stateChanged();
    }
    refreshCategory() {
        this.category = this.determineCategory();
    }
    determineCategory() {
        if (this.forcedCategory) {
            return this.forcedCategory;
        }
        const appList = this.msWorkspace.msWindowList.map((msWindow) => {
            return msWindow.app;
        });
        if (!appList.length)
            return null;
        const categoryScoreMap = new Map();
        appList.forEach((app) => {
            if (app.is_window_backed())
                return;
            const appMainCategories = [];
            let multiplier = 1;
            const categoriesString = app.get_app_info().get_categories();
            const categories = categoriesString
                ? categoriesString.split(';')
                : [];
            categories.forEach((category) => {
                if (MainCategories.includes(category)) {
                    appMainCategories.push(category);
                }
                if (meaningfulCategories.includes(category)) {
                    multiplier += 1;
                }
            });
            appMainCategories.forEach((category) => {
                if (categoryScoreMap.has(category)) {
                    categoryScoreMap.set(category, categoryScoreMap.get(category) + 1 * Number(multiplier));
                }
                else {
                    categoryScoreMap.set(category, 1 * Number(multiplier));
                }
            });
        });
        let mostRatedCategoryEntry = null;
        for (const entry of categoryScoreMap.entries()) {
            if (!mostRatedCategoryEntry || entry[1] > mostRatedCategoryEntry[1])
                mostRatedCategoryEntry = entry;
            if (entry[1] === mostRatedCategoryEntry[1] &&
                MainCategories.indexOf(entry[0]) <
                    MainCategories.indexOf(mostRatedCategoryEntry[0])) {
                mostRatedCategoryEntry = entry;
            }
        }
        if (!mostRatedCategoryEntry)
            return null;
        return mostRatedCategoryEntry[0];
    }
}

const Clutter$k = imports.gi.Clutter;
const Gio$b = imports.gi.Gio;
const GObject$3 = imports.gi.GObject;
const St$g = imports.gi.St;
const { main: Main$e, popupMenu: popupMenu$1 } = imports.ui;
const DND = imports.ui.dnd;
const Me$t = imports.misc.extensionUtils.getCurrentExtension();
let WorkspaceList = class WorkspaceList extends St$g.Widget {
    _init() {
        super._init({
            clip_to_allocation: true,
            style_class: 'workspace-list',
            reactive: true,
        });
        this._delegate = this;
        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceButtonMap = new Map();
        this.msWorkspaceManager = Me$t.msWorkspaceManager;
        this.menuManager = new popupMenu$1.PopupMenuManager(this);
        this.buttonList = new ReorderableList(true);
        this.buttonList.connect('actor-moved', (_, actor, index) => {
            this.msWorkspaceManager.setMsWorkspaceAt(actor.msWorkspace, index);
        });
        this.add_child(this.buttonList);
        this.workspaceActiveIndicator = new WorkspaceActiveIndicator();
        const panelSizeSignal = Me$t.msThemeManager.connect('panel-size-changed', () => {
            this.workspaceActiveIndicator.set_height(Me$t.msThemeManager.getPanelSize());
            this.queue_relayout();
        });
        this.add_child(this.workspaceActiveIndicator);
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildButtons();
                this.activeButtonForIndex(global.workspace_manager.get_active_workspace_index());
            }
        });
        this.msWorkspaceManager.connect('dynamic-super-workspaces-changed', () => {
            this.buildButtons();
        });
        this.workspaceSignal = global.workspace_manager.connect('active-workspace-changed', () => {
            this.activeButtonForIndex(global.workspace_manager.get_active_workspace_index());
        });
        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$k.ScrollDirection.UP:
                    this.msWorkspaceManager.activatePreviousMsWorkspace();
                    break;
                case Clutter$k.ScrollDirection.DOWN:
                    this.msWorkspaceManager.activateNextMsWorkspace();
                    break;
            }
        });
        this.connect('destroy', () => {
            Me$t.msThemeManager.disconnect(panelSizeSignal);
        });
    }
    buildButtons() {
        this.msWorkspaceManager.primaryMsWorkspaces.forEach((msWorkspace, index) => {
            const button = this.msWorkspaceButtonMap.get(msWorkspace);
            if (button === undefined) {
                const workspaceButton = new WorkspaceButton(this.msWorkspaceManager, msWorkspace);
                this.menuManager.addMenu(workspaceButton.menu.menu);
                this.buttonList.insert_child_at_index(workspaceButton, index);
                this.msWorkspaceButtonMap.set(msWorkspace, workspaceButton);
            }
            else {
                const index = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(msWorkspace);
                this.buttonList.set_child_at_index(button, index);
            }
        });
        this.msWorkspaceButtonMap.forEach((button, msWorkspace) => {
            if (!this.msWorkspaceManager.primaryMsWorkspaces.includes(msWorkspace)) {
                button.destroy();
                this.msWorkspaceButtonMap.delete(msWorkspace);
            }
        });
    }
    activeButtonForIndex(index) {
        if (this.buttonActive) {
            if (this.buttonActive.has_style_class_name('active')) {
                this.buttonActive.remove_style_class_name('active');
            }
        }
        const child = this.buttonList.get_child_at_index(index);
        assert(child instanceof St$g.Widget, 'Child was not a widget');
        this.buttonActive = child;
        this.buttonActive.add_style_class_name('active');
        this.workspaceActiveIndicator.ease({
            translation_y: this.get_preferred_width(-1)[1] * index,
            duration: 250,
            mode: Clutter$k.AnimationMode.EASE_OUT_QUAD,
        });
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        for (const child of this.get_children()) {
            if (child == this.workspaceActiveIndicator) {
                const themeNode = this.get_theme_node();
                const contentBox = themeNode.get_content_box(box);
                const width = this.workspaceActiveIndicator.get_width();
                const height = this.workspaceActiveIndicator.get_height();
                const actorBox = new Clutter$k.ActorBox({
                    x1: contentBox.x1,
                    x2: contentBox.x1 + width,
                    y1: contentBox.y1,
                    y2: contentBox.y1 + height,
                });
                this.workspaceActiveIndicator.allocate(actorBox);
            }
            else {
                child.allocate_preferred_size(child.x, child.y);
            }
        }
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$t.msThemeManager.getPanelSize(),
            Me$t.msThemeManager.getPanelSize(),
        ];
    }
    _onDestroy() {
        global.workspace_manager.disconnect(this.workspaceSignal);
    }
};
WorkspaceList = __decorate([
    registerGObjectClass
], WorkspaceList);
let WorkspaceButton = class WorkspaceButton extends MatButton {
    _init(msWorkspaceManager, msWorkspace) {
        const workspaceButtonIcon = new WorkspaceButtonIcon(msWorkspace);
        super._init({
            child: workspaceButtonIcon,
            style: 'mat-panel-button',
        });
        this.msWorkspaceManager = msWorkspaceManager;
        this.msWorkspace = msWorkspace;
        this.workspaceButtonIcon = workspaceButtonIcon;
        this._delegate = this;
        this.menu = this.buildMenu();
        const panelSizeSignal = Me$t.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.connect('primary-action', () => {
            this.msWorkspace.activate();
        });
        this.connect('secondary-action', () => {
            this.menu.menu.toggle();
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter$k.BUTTON_MIDDLE) {
                if (this.msWorkspaceManager.primaryMsWorkspaces.indexOf(this.msWorkspace) !==
                    this.msWorkspaceManager.primaryMsWorkspaces.length - 1)
                    msWorkspace.close();
            }
        });
        this.connect('destroy', () => {
            this.menu.menu.destroy();
            this.menu.disconnectSignals();
            Me$t.msThemeManager.disconnect(panelSizeSignal);
        });
        this.mouseData = {
            pressed: false,
            dragged: false,
            originalCoords: null,
            originalSequence: null,
        };
    }
    get draggable() {
        return (this.msWorkspaceManager.primaryMsWorkspaces.indexOf(this.msWorkspace) !==
            this.msWorkspaceManager.primaryMsWorkspaces.length - 1);
    }
    buildMenu() {
        const rootMenu = new popupMenu$1.PopupMenu(this, 0.5, St$g.Side.LEFT);
        rootMenu.actor.add_style_class_name('panel-menu');
        rootMenu.addMenuItem(new popupMenu$1.PopupSeparatorMenuItem(_('Panel icons style')));
        const panelIconStyleHybridRadio = rootMenu.addAction(_('Hybrid'), () => {
            Me$t.msThemeManager.panelIconStyle = PanelIconStyleEnum.HYBRID;
        }, Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.HYBRID
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        const panelIconStyleCategoryRadio = rootMenu.addAction(_('Categories only'), () => {
            Me$t.msThemeManager.panelIconStyle = PanelIconStyleEnum.CATEGORY;
        }, Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.CATEGORY
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        const panelIconStyleApplicationRadio = rootMenu.addAction(_('Applications preview'), () => {
            Me$t.msThemeManager.panelIconStyle =
                PanelIconStyleEnum.APPLICATION;
        }, Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.APPLICATION
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        const iconStyleSignal = Me$t.msThemeManager.connect('panel-icon-style-changed', () => {
            assertNotNull(panelIconStyleHybridRadio._icon).set_gicon(Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.HYBRID
                ? 'marked'
                : 'blank'}-symbolic.svg`));
            assertNotNull(panelIconStyleCategoryRadio._icon).set_gicon(Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.CATEGORY
                ? 'marked'
                : 'blank'}-symbolic.svg`));
            assertNotNull(panelIconStyleApplicationRadio._icon).set_gicon(Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/radiobox-${Me$t.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.APPLICATION
                ? 'marked'
                : 'blank'}-symbolic.svg`));
        });
        rootMenu.addMenuItem(new popupMenu$1.PopupSeparatorMenuItem(_('Override category')));
        const autoSentence = _('Determined automatically');
        const subMenu = new popupMenu$1.PopupSubMenuMenuItem(this.msWorkspace.msWorkspaceCategory.forcedCategory || autoSentence);
        const setCategory = (category) => {
            this.msWorkspace.msWorkspaceCategory.forceCategory(category);
            this.workspaceButtonIcon.buildIcons();
            subMenu.label.text = category || autoSentence;
        };
        subMenu.menu.addAction(autoSentence, () => {
            setCategory();
        });
        MainCategories.forEach((key) => {
            subMenu.menu.addAction(key, () => {
                setCategory(key);
            }, Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/category/${key.toLowerCase()}-symbolic.svg`));
        });
        rootMenu.addMenuItem(subMenu);
        Main$e.layoutManager.uiGroup.add_actor(rootMenu.actor);
        rootMenu.close();
        return {
            menu: rootMenu,
            panelIconStyleHybridRadio,
            panelIconStyleCategoryRadio,
            panelIconStyleApplicationRadio,
            subMenu,
            disconnectSignals: () => {
                Me$t.msThemeManager.disconnect(iconStyleSignal);
            },
        };
    }
    initDrag() {
        this._draggable = DND.makeDraggable(this, {
            restoreOnSuccess: false,
            manualMode: true,
        });
        this._draggable.connect('drag-end', () => {
            this.mouseData.pressed = false;
            this.mouseData.dragged = false;
        });
    }
    handleDragOver(source, actor, x, y) {
        if (source instanceof TaskBarItem) {
            return DND.DragMotionResult.MOVE_DROP;
        }
        return DND.DragMotionResult.NO_DROP;
    }
    acceptDrop(source) {
        if (source instanceof TaskBarItem) {
            if (source.tileable instanceof MsWindow) {
                Me$t.msWorkspaceManager.setWindowToMsWorkspace(source.tileable, this.msWorkspace);
                this.msWorkspaceManager.stateChanged();
                this.msWorkspace.activate();
            }
            return true;
        }
        return false;
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$t.msThemeManager.getPanelSize(),
            Me$t.msThemeManager.getPanelSize(),
        ];
    }
    vfunc_get_preferred_height(_forWidth) {
        return [
            Me$t.msThemeManager.getPanelSize(),
            Me$t.msThemeManager.getPanelSize(),
        ];
    }
};
WorkspaceButton.metaInfo = {
    GTypeName: 'WorkspaceButton',
    Signals: {
        'drag-dropped': {},
        'drag-over': {
            param_types: [GObject$3.TYPE_BOOLEAN],
        },
    },
};
WorkspaceButton = __decorate([
    registerGObjectClass
], WorkspaceButton);
function isMsWindow$1(argument) {
    return argument instanceof MsWindow;
}
let WorkspaceButtonIcon = class WorkspaceButtonIcon extends St$g.Widget {
    _init(msWorkspace) {
        super._init();
        this.msWorkspace = msWorkspace;
        this.appIconList = [];
        this.desaturateIcons();
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildIcons();
            }
        });
        this.msWorkspace.connect('tileableList-changed', (_) => {
            this.buildIcons();
        });
        const themeSignals = [
            Me$t.msThemeManager.connect('panel-icon-style-changed', () => {
                this.buildIcons();
            }),
            Me$t.msThemeManager.connect('panel-icon-color-changed', () => {
                this.desaturateIcons();
            }),
            Me$t.msThemeManager.connect('panel-size-changed', () => {
                this.buildIcons();
            }),
        ];
        this.connect('destroy', () => {
            for (const s of themeSignals)
                Me$t.msThemeManager.disconnect(s);
        });
    }
    desaturateIcons() {
        const shouldDesaturate = !Me$t.msThemeManager.panelIconColor;
        const isDesaturate = this.desaturateEffect !== undefined &&
            this.desaturateEffect === this.get_effect('desaturate_icons');
        if (shouldDesaturate === isDesaturate)
            return;
        if (shouldDesaturate) {
            this.desaturateEffect = new Clutter$k.DesaturateEffect();
            this.add_effect_with_name('desaturate_icons', this.desaturateEffect);
        }
        else {
            assert(this.desaturateEffect !== undefined, 'true by construction');
            this.remove_effect(this.desaturateEffect);
            delete this.desaturateEffect;
        }
    }
    buildIcons() {
        this.appIconList.forEach((icon) => {
            icon.destroy();
        });
        const appList = this.msWorkspace.tileableList
            .filter(isMsWindow$1)
            .map((msWindow) => {
            return msWindow.app;
        });
        this.appIconList = [];
        if (appList.length) {
            const numberOfEachAppMap = new Map();
            appList.forEach((app) => {
                if (numberOfEachAppMap.has(app)) {
                    numberOfEachAppMap.set(app, numberOfEachAppMap.get(app) + 1);
                }
                else {
                    numberOfEachAppMap.set(app, 1);
                }
            });
            const sortedByInstanceAppList = [...numberOfEachAppMap.entries()]
                .sort((a, b) => {
                return b[1] - a[1];
            })
                .map((entry) => {
                return entry[0];
            });
            if (this.msWorkspace.msWorkspaceCategory.forcedCategory ||
                Me$t.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.CATEGORY ||
                (Me$t.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.HYBRID &&
                    sortedByInstanceAppList.length > 1)) {
                const category = this.msWorkspace.msWorkspaceCategory.category || '';
                const icon = new St$g.Icon({
                    gicon: Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/category/${category.toLowerCase()}-symbolic.svg`),
                    icon_size: Me$t.msThemeManager.getPanelSizeNotScaled() / 2,
                });
                this.appIconList.push(icon);
                this.add_child(icon);
            }
            else {
                sortedByInstanceAppList.forEach((app) => {
                    const icon = app.create_icon_texture(Me$t.msThemeManager.getPanelSizeNotScaled() / 2);
                    this.appIconList.push(icon);
                    this.add_child(icon);
                });
            }
        }
        else {
            const icon = new St$g.Icon({
                gicon: Gio$b.icon_new_for_string(`${Me$t.path}/assets/icons/plus-symbolic.svg`),
                icon_size: Me$t.msThemeManager.getPanelSizeNotScaled() / 2,
            });
            this.appIconList.push(icon);
            this.add_child(icon);
        }
    }
    vfunc_allocate(allocationBox) {
        this.set_allocation(allocationBox);
        const themeNode = this.get_theme_node();
        allocationBox = themeNode.get_content_box(allocationBox);
        const portion = (allocationBox.x2 - allocationBox.x1) / 8;
        if (this.appIconList.length === 1) {
            const centerBox = new Clutter$k.ActorBox();
            centerBox.x1 = allocationBox.x1 + 2 * portion;
            centerBox.x2 = allocationBox.x2 - 2 * portion;
            centerBox.y1 = allocationBox.y1 + 2 * portion;
            centerBox.y2 = allocationBox.y2 - 2 * portion;
            this.appIconList[0].allocate(centerBox);
        }
        else {
            this.appIconList.forEach((icon, index) => {
                const box = new Clutter$k.ActorBox();
                switch (index) {
                    case 0:
                        box.x1 = allocationBox.x1 + portion;
                        box.x2 = allocationBox.x2 - 3 * portion;
                        box.y1 = allocationBox.y1 + 2 * portion;
                        box.y2 = allocationBox.y2 - 2 * portion;
                        icon.allocate(box);
                        break;
                    case 1:
                        box.x1 = allocationBox.x1 + 3 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + 3 * portion;
                        box.y2 = allocationBox.y2 - portion;
                        icon.allocate(box);
                        break;
                    case 2:
                        box.x1 = allocationBox.x1 + 4 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + portion;
                        box.y2 = allocationBox.y2 - 4 * portion;
                        icon.allocate(box);
                        break;
                }
            });
        }
    }
};
WorkspaceButtonIcon.metaInfo = {
    GTypeName: 'WorkspaceButtonIcon',
};
WorkspaceButtonIcon = __decorate([
    registerGObjectClass
], WorkspaceButtonIcon);
let WorkspaceActiveIndicator = class WorkspaceActiveIndicator extends St$g.Widget {
    _init() {
        super._init({
            style_class: 'workspace-active-indicator',
        });
    }
    vfunc_get_preferred_height(_for_width) {
        const height = Me$t.msThemeManager.getPanelSize();
        return [height, height];
    }
};
WorkspaceActiveIndicator = __decorate([
    registerGObjectClass
], WorkspaceActiveIndicator);

const St$f = imports.gi.St;
const Me$s = imports.misc.extensionUtils.getCurrentExtension();
let MatDivider = class MatDivider extends St$f.Widget {
    _init(vertical = false) {
        super._init({
            y_expand: vertical,
            x_expand: !vertical,
        });
        this.vertical = vertical;
    }
    vfunc_get_preferred_width(forHeight) {
        return this.vertical
            ? [1, 1]
            :
                super.vfunc_get_preferred_width(forHeight);
    }
    vfunc_get_preferred_height(forWidth) {
        return !this.vertical
            ? [1, 1]
            :
                super.vfunc_get_preferred_height(forWidth);
    }
};
MatDivider.metaInfo = {
    GTypeName: 'MatDivider',
};
MatDivider = __decorate([
    registerGObjectClass
], MatDivider);

const Clutter$j = imports.gi.Clutter;
const St$e = imports.gi.St;
let SearchResultEntry = class SearchResultEntry extends MatButton {
    _init(icon, title, description, _withMenu) {
        super._init({});
        this.layout = new St$e.BoxLayout();
        this.textLayout = new St$e.BoxLayout({
            vertical: true,
            styleClass: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
            y_align: Clutter$j.ActorAlign.CENTER,
        });
        if (icon) {
            this.icon = icon;
            this.icon.set_style('margin: 12px');
            this.layout.add_child(this.icon);
        }
        else {
            this.icon = null;
        }
        this.layout.add_child(this.textLayout);
        this.title = new St$e.Label({
            text: title,
        });
        this.textLayout.add_child(this.title);
        if (description) {
            this.description = new St$e.Label({
                text: description,
                styleClass: 'caption text-medium-emphasis',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        }
        else {
            this.description = null;
        }
        this.set_child(this.layout);
    }
    setSelected(selected) {
        if (selected) {
            this.add_style_class_name('highlighted');
        }
        else {
            this.remove_style_class_name('highlighted');
        }
    }
};
SearchResultEntry.metaInfo = {
    GTypeName: 'SearchResultEntry',
    Signals: {
        activate: {
            param_types: [],
            accumulator: 0,
        },
    },
};
SearchResultEntry = __decorate([
    registerGObjectClass
], SearchResultEntry);

const St$d = imports.gi.St;
let SearchResultHeader = class SearchResultHeader extends St$d.Bin {
    _init(text) {
        super._init({
            style_class: 'subtitle-2 margin margin-top-x2 margin-bottom-x2 text-high-emphasis',
        });
        this.label = new St$d.Label({
            text: text,
        });
        this.set_child(this.label);
    }
};
SearchResultHeader.metaInfo = {
    GTypeName: 'SearchResultHeader',
};
SearchResultHeader = __decorate([
    registerGObjectClass
], SearchResultHeader);

const Gio$a = imports.gi.Gio;
const GObject$2 = imports.gi.GObject;
const St$c = imports.gi.St;
const Me$r = imports.misc.extensionUtils.getCurrentExtension();
let ProviderResultList = class ProviderResultList extends St$c.BoxLayout {
    _init(provider, onClicked) {
        super._init({ vertical: true, visible: false });
        this.resultList = [];
        this.firstResultEntryList = new St$c.BoxLayout({ vertical: true });
        this.restResultEntryList = new St$c.BoxLayout({ vertical: true });
        this.maxResultLength = 5;
        this.provider = provider;
        this.onClicked = onClicked;
        this.header = new SearchResultHeader(provider.title);
        this.add_child(this.header);
        this.add_child(this.firstResultEntryList);
        this.add_child(this.restResultEntryList);
        this.moreResultEntry = new SearchResultEntry(new St$c.Icon({
            icon_size: 32,
            gicon: Gio$a.icon_new_for_string(`${Me$r.path}/assets/icons/chevron-down-symbolic.svg`),
        }), '', '', provider.id === 'applications');
        this.moreResultEntry.visible = false;
        this.moreResultEntry.connect('primary-action', () => {
            this.restResultEntryList.show();
            this.moreResultEntry.hide();
        });
        this.add_child(this.moreResultEntry);
    }
    async updateSearch(newResultList, termList) {
        this.visible = newResultList.length > 0;
        this.moreResultEntry.visible =
            newResultList.length > this.maxResultLength;
        this.restResultEntryList.visible = false;
        this.firstResultEntryList.remove_all_children();
        this.restResultEntryList.remove_all_children();
        this.resultList = newResultList;
        for (const resultMeta of newResultList) {
            let icon = resultMeta.createIcon(32);
            if (!icon)
                icon = this.provider.createFallbackIcon(32);
            const entry = new SearchResultEntry(icon, resultMeta.name, resultMeta.description, this.provider.id === 'applications');
            entry.connect('primary-action', () => {
                this.onClicked(resultMeta.id);
            });
            if (newResultList.length > this.maxResultLength) {
                this.moreResultEntry.title.text = ngettext('%d more', '%d more', newResultList.length - 5).format(newResultList.length - 5);
            }
            if (this.firstResultEntryList.get_children().length <
                this.maxResultLength) {
                this.firstResultEntryList.add_child(entry);
            }
            else {
                this.restResultEntryList.add_child(entry);
            }
        }
    }
};
ProviderResultList.metaInfo = {
    GTypeName: 'ProviderResultList',
    Signals: {
        activated: {
            param_types: [GObject$2.TYPE_STRING],
        },
    },
};
ProviderResultList = __decorate([
    registerGObjectClass
], ProviderResultList);

const Shell$6 = imports.gi.Shell;
const St$b = imports.gi.St;
const ParentalControlsManager$2 = imports.misc.parentalControlsManager;
const SystemActions = imports.misc.systemActions;
const Me$q = imports.misc.extensionUtils.getCurrentExtension();
class AppSearchProvider {
    constructor() {
        this.isRemoteProvider = false;
        this.id = 'applications';
        this.searchInProgress = false;
        this._appSys = Shell$6.AppSystem.get_default();
        this.canLaunchSearch = false;
        this._systemActions = new SystemActions.getDefault();
        this._parentalControlsManager = ParentalControlsManager$2.getDefault();
    }
    get title() {
        return _('Applications');
    }
    createFallbackIcon(icon_size) {
        return null;
    }
    activateResult(id, terms) {
        const app = Shell$6.AppSystem.get_default().lookup_app(id);
        if (app) {
            Me$q.msWindowManager.openApp(app, Me$q.msWorkspaceManager.getActiveMsWorkspace());
        }
        else {
            SystemActions.getDefault().activateAction(id);
        }
    }
    getResultMetas(apps) {
        const { scaleFactor } = St$b.ThemeContext.get_for_stage(global.stage);
        const metas = [];
        for (const id of apps) {
            if (id.endsWith('.desktop')) {
                const app = this._appSys.lookup_app(id);
                metas.push({
                    id: app.get_id(),
                    name: app.get_name(),
                    createIcon: (size) => app.create_icon_texture(size),
                });
            }
            else {
                const name = this._systemActions.getName(id);
                const iconName = this._systemActions.getIconName(id);
                const createIcon = (size) => new St$b.Icon({
                    icon_name: iconName,
                    width: size * scaleFactor,
                    height: size * scaleFactor,
                    style_class: 'system-action-icon',
                });
                metas.push({ id, name, createIcon });
            }
        }
        return Promise.resolve(metas);
    }
    filterResults(results, maxNumber) {
        return results.slice(0, maxNumber);
    }
    getInitialResultSet(terms, cancellable) {
        if (!this._parentalControlsManager.initialized) {
            return new Promise((resolve) => {
                const initializedId = this._parentalControlsManager.connect('app-filter-changed', async () => {
                    if (this._parentalControlsManager.initialized) {
                        this._parentalControlsManager.disconnect(initializedId);
                        resolve(await this.getInitialResultSet(terms, cancellable));
                    }
                });
            });
        }
        const query = terms.join(' ');
        const groups = Shell$6.AppSystem.search(query);
        const usage = Shell$6.AppUsage.get_default();
        let results = [];
        groups.forEach((group) => {
            group = group.filter((appID) => {
                const app = this._appSys.lookup_app(appID);
                return (app &&
                    this._parentalControlsManager.shouldShowApp(app.app_info));
            });
            results = results.concat(group.sort((a, b) => usage.compare(a, b)));
        });
        results = results.concat(this._systemActions.getMatchingActions(terms));
        return new Promise((resolve) => resolve(results));
    }
    getSubsearchResultSet(previousResults, terms, cancellable) {
        return this.getInitialResultSet(terms, cancellable);
    }
}

const Me$p = imports.misc.extensionUtils.getCurrentExtension();
const SEPARATOR = '::';
const STATE_KEY = 'recent-searches';
const MAX_HISTORY_SIZE = 100;
class RecentSearchProvider {
    constructor() {
        this.isRemoteProvider = false;
        this.searchInProgress = false;
        this.id = 'ms-recent';
        this.historyList = [];
    }
    get title() {
        return 'Recent';
    }
    createFallbackIcon(icon_size) {
        return null;
    }
    activateResult(id, terms) {
        throw new Error('Should never be called. Remap to original provider instead.');
    }
    static splitId(id) {
        const v = id.split(SEPARATOR);
        assert(v.length == 2, `Invalid id: ${id}`);
        return {
            provider_id: v[0],
            id: v[1],
        };
    }
    loadHistoryFromExtensionState() {
        const historyState = Me$p.stateManager.getState(STATE_KEY);
        if (historyState !== undefined &&
            historyState.history !== undefined &&
            Array.isArray(historyState.history)) {
            this.historyList = historyState.history;
        }
    }
    onResultActivated(provider_id, id, terms) {
        assert(provider_id != this.id, 'Trying to add recent item to history again. Remap it to the original provider first.');
        if (provider_id === 'org.gnome.Calculator.desktop') {
            return;
        }
        this.historyList.push({
            id,
            provider_id,
            terms,
            context: this.getContext(),
        });
        if (this.historyList.length > MAX_HISTORY_SIZE) {
            this.historyList.shift();
        }
        Me$p.stateManager.setState(STATE_KEY, {
            history: this.historyList,
        });
    }
    getContext() {
        return {
            timestamp: new Date().getTime(),
            visible_apps: [
                ...new Set(Me$p.msWindowManager.msWindowList
                    .filter((x) => x.lifecycleState.type === 'window' &&
                    x.msWorkspace.isDisplayed())
                    .map((x) => x.state.appId)).values(),
            ],
            open_apps: [
                ...new Set(Me$p.msWindowManager.msWindowList
                    .filter((x) => x.lifecycleState.type === 'window')
                    .map((x) => x.state.appId)).values(),
            ],
            workspace_index: Me$p.msWorkspaceManager.workspaceManager.get_active_workspace_index(),
        };
    }
    search(terms, provider_results) {
        terms = terms.map((x) => x.toLocaleLowerCase());
        const seen = new Map();
        for (const [provider_id, metas] of provider_results) {
            for (const meta of metas) {
                seen.set(provider_id + SEPARATOR + meta.id, meta);
            }
        }
        const filteredHistory = [];
        for (const item of this.historyList) {
            const key = item.provider_id + SEPARATOR + item.id;
            const meta = seen.get(key);
            if (meta !== undefined) {
                filteredHistory.push(item);
            }
        }
        const forest = new DecisionTree(filteredHistory);
        const best = forest.eval(this.getContext());
        if (best.length > 0) {
            const [dominantItem, count] = getDominantItem(best);
            const PROBABILITY_THRESHOLD = 0.9;
            const CONSTANT_OFFSET = 1;
            if ((count + CONSTANT_OFFSET) / best.length >
                PROBABILITY_THRESHOLD) {
                const key = dominantItem.provider_id + SEPARATOR + dominantItem.id;
                const bestMeta = seen.get(key);
                return [
                    {
                        id: key,
                        name: bestMeta.name,
                        description: bestMeta.description,
                        createIcon: bestMeta.createIcon,
                        clipboardText: bestMeta.clipboardText,
                    },
                ];
            }
            else {
                return [];
            }
        }
        else {
            return [];
        }
    }
}
function getDominantItem(items) {
    assert(items.length > 0, 'Cannot get dominant item from empty list');
    const counts = new Map();
    for (const item of items) {
        const key = item.provider_id + SEPARATOR + item.id;
        const count = counts.get(key) || 0;
        counts.set(key, count + 1);
    }
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const key = sorted[0][0];
    const [provider_id, id] = key.split(SEPARATOR);
    const item = items.find((x) => x.provider_id == provider_id && x.id == id);
    return [item, sorted[0][1]];
}
class DecisionTree {
    constructor(metas) {
        this.root = DecisionTree.buildTree(metas);
    }
    eval(context) {
        let node = this.root;
        while (node.type == 'split') {
            if (DecisionTree.evalCategory(node.split, context)) {
                node = node.truthy;
            }
            else {
                node = node.falsy;
            }
        }
        return node.items;
    }
    static buildTree(items) {
        if (DecisionTree.entropy(items) == 0.0) {
            return {
                type: 'leaf',
                items,
            };
        }
        const split = DecisionTree.bestSplit(items);
        if (split === null) {
            return {
                type: 'leaf',
                items,
            };
        }
        return {
            type: 'split',
            split: split.split,
            falsy: DecisionTree.buildTree(split.falsy),
            truthy: DecisionTree.buildTree(split.truthy),
        };
    }
    static evalCategory(category, context) {
        switch (category.id) {
            case 'isAppOpen':
                return context.open_apps.includes(category.app_id);
            case 'isTimeOfDay':
                return getTimeOfDay(context.timestamp) == category.time_of_day;
            case 'isDayOfWeek':
                return getDayOfWeek(context.timestamp) == category.day_of_week;
            case 'isAppVisible':
                return context.visible_apps.includes(category.app_id);
            case 'isWorkspaceIndex':
                return context.workspace_index == category.workspace_index;
            default:
                assert(false, 'Invalid category');
        }
    }
    static getCategories(history) {
        const categories = [];
        const visible_apps = new Set();
        const open_apps = new Set();
        const workspace_indices = new Set();
        const days_of_week = new Set();
        const times_of_day = new Set();
        for (const item of history) {
            for (const app_id of item.context.visible_apps) {
                visible_apps.add(app_id);
            }
            for (const app_id of item.context.open_apps) {
                open_apps.add(app_id);
            }
            workspace_indices.add(item.context.workspace_index);
            days_of_week.add(getDayOfWeek(item.context.timestamp));
            times_of_day.add(getTimeOfDay(item.context.timestamp));
        }
        for (const app_id of visible_apps) {
            categories.push({
                id: 'isAppVisible',
                app_id,
            });
        }
        for (const app_id of open_apps) {
            categories.push({
                id: 'isAppOpen',
                app_id,
            });
        }
        for (const day_of_week of days_of_week) {
            categories.push({
                id: 'isDayOfWeek',
                day_of_week,
            });
        }
        for (const time_of_day of times_of_day) {
            categories.push({
                id: 'isTimeOfDay',
                time_of_day,
            });
        }
        for (const workspace_index of workspace_indices) {
            categories.push({
                id: 'isWorkspaceIndex',
                workspace_index,
            });
        }
        return categories;
    }
    static bestSplit(history) {
        assert(history.length > 0, "Can't split empty history");
        let bestCategory = undefined;
        let bestScore = -1 / 0;
        let bestSplit = [[], []];
        const categories = DecisionTree.getCategories(history);
        for (const category of categories) {
            const [falsy, truthy] = DecisionTree.split(history, category);
            const score = DecisionTree.score(falsy, truthy);
            if (score > bestScore) {
                bestScore = score;
                bestCategory = category;
                bestSplit = [falsy, truthy];
            }
        }
        if (bestSplit[0].length == 0 || bestSplit[1].length == 0)
            return null;
        return {
            split: bestCategory,
            falsy: bestSplit[0],
            truthy: bestSplit[1],
        };
    }
    static entropy(history) {
        const counts = new Map();
        for (const item of history) {
            const key = item.provider_id + SEPARATOR + item.id;
            const prev = counts.get(key);
            if (prev === undefined) {
                counts.set(key, 1);
            }
            else {
                counts.set(key, prev + 1);
            }
        }
        let result = 0;
        for (const v of counts.values()) {
            const p = v / history.length;
            result -= p * Math.log2(p);
        }
        return result;
    }
    static score(falsy, truthy) {
        return -(DecisionTree.entropy(falsy) * falsy.length +
            DecisionTree.entropy(truthy) * truthy.length);
    }
    static split(history, category) {
        const falsy = [];
        const truthy = [];
        for (const item of history) {
            if (this.evalCategory(category, item.context)) {
                truthy.push(item);
            }
            else {
                falsy.push(item);
            }
        }
        return [falsy, truthy];
    }
    toString() {
        return JSON.stringify(this.root, null, 2);
    }
}
function getTimeOfDay(timestamp) {
    const hour = new Date(timestamp).getHours();
    if (hour < 6) {
        return 'night';
    }
    if (hour < 12) {
        return 'morning';
    }
    if (hour < 18) {
        return 'afternoon';
    }
    return 'evening';
}
function getDayOfWeek(timestamp) {
    return new Date(timestamp).getDay();
}
function testRandomForest() {
    const history = [
        {
            terms: [],
            provider_id: 'pa',
            id: 'a',
            context: {
                visible_apps: ['a', 'b'],
                open_apps: ['a', 'b'],
                workspace_index: 0,
                timestamp: 0,
            },
        },
        {
            terms: [],
            provider_id: 'pa',
            id: 'b',
            context: {
                visible_apps: ['a'],
                open_apps: ['a'],
                workspace_index: 0,
                timestamp: 0,
            },
        },
    ];
    const forest = new DecisionTree(history);
    assert(forest.eval({
        visible_apps: ['a'],
        open_apps: ['a'],
        workspace_index: 0,
        timestamp: 0,
    })[0].id === 'b', '');
    assert(forest.eval({
        visible_apps: ['a', 'c'],
        open_apps: ['a', 'q'],
        workspace_index: 1,
        timestamp: 42132,
    })[0].id === 'b', '');
}
testRandomForest();

const Gio$9 = imports.gi.Gio;
const GLib$f = imports.gi.GLib;
const Shell$5 = imports.gi.Shell;
const St$a = imports.gi.St;
const Me$o = imports.misc.extensionUtils.getCurrentExtension();
const FileUtils = imports.misc.fileUtils;
const GdkPixbuf = imports.gi.GdkPixbuf;
const ParentalControlsManager$1 = imports.misc.parentalControlsManager;
const KEY_FILE_GROUP = 'Shell Search Provider';
const beforeGnome43$1 = compareVersions(gnomeVersionNumber, parseVersion('43.0')) < 0;
const SearchProviderIface = `
<node>
<interface name="org.gnome.Shell.SearchProvider">
<method name="GetInitialResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetSubsearchResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetResultMetas">
    <arg type="as" direction="in" />
    <arg type="aa{sv}" direction="out" />
</method>
<method name="ActivateResult">
    <arg type="s" direction="in" />
</method>
</interface>
</node>`;
const SearchProvider2Iface = `
<node>
<interface name="org.gnome.Shell.SearchProvider2">
<method name="GetInitialResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetSubsearchResultSet">
    <arg type="as" direction="in" />
    <arg type="as" direction="in" />
    <arg type="as" direction="out" />
</method>
<method name="GetResultMetas">
    <arg type="as" direction="in" />
    <arg type="aa{sv}" direction="out" />
</method>
<method name="ActivateResult">
    <arg type="s" direction="in" />
    <arg type="as" direction="in" />
    <arg type="u" direction="in" />
</method>
<method name="LaunchSearch">
    <arg type="as" direction="in" />
    <arg type="u" direction="in" />
</method>
</interface>
</node>`;
const SearchProviderProxyInfo = Gio$9.DBusInterfaceInfo.new_for_xml(SearchProviderIface);
const SearchProvider2ProxyInfo = Gio$9.DBusInterfaceInfo.new_for_xml(SearchProvider2Iface);
function loadRemoteSearchProviders(searchSettings) {
    const objectPaths = {};
    let loadedProviders = [];
    function loadRemoteSearchProvider(file) {
        const keyfile = new GLib$f.KeyFile();
        const path = file.get_path();
        try {
            keyfile.load_from_file(path, 0);
        }
        catch (e) {
            return;
        }
        if (!keyfile.has_group(KEY_FILE_GROUP))
            return;
        let remoteProvider;
        try {
            const group = KEY_FILE_GROUP;
            const busName = keyfile.get_string(group, 'BusName');
            const objectPath = keyfile.get_string(group, 'ObjectPath');
            if (objectPaths[objectPath])
                return;
            let appInfo = null;
            try {
                const desktopId = keyfile.get_string(group, 'DesktopId');
                appInfo = Gio$9.DesktopAppInfo.new(desktopId);
                if (!appInfo.should_show())
                    return;
            }
            catch (e) {
                log(`Ignoring search provider ${path}: missing DesktopId`);
                return;
            }
            let autoStart = true;
            try {
                autoStart = keyfile.get_boolean(group, 'AutoStart');
            }
            catch (e) {
            }
            let version = '1';
            try {
                version = keyfile.get_string(group, 'Version');
            }
            catch (e) {
            }
            if (parseInt(version) >= 2)
                remoteProvider = new RemoteSearchProvider2(appInfo, busName, objectPath, autoStart);
            else
                remoteProvider = new RemoteSearchProvider(appInfo, busName, objectPath, autoStart);
            remoteProvider.defaultEnabled = true;
            try {
                remoteProvider.defaultEnabled = !keyfile.get_boolean(group, 'DefaultDisabled');
            }
            catch (e) {
            }
            objectPaths[objectPath] = remoteProvider;
            loadedProviders.push(remoteProvider);
        }
        catch (e) {
            log(`Failed to add search provider ${path}: ${e}`);
        }
    }
    if (searchSettings.get_boolean('disable-external'))
        return [];
    FileUtils.collectFromDatadirs('search-providers', false, loadRemoteSearchProvider);
    const sortOrder = searchSettings.get_strv('sort-order');
    sortOrder.unshift('org.gnome.Settings.desktop');
    const disabled = searchSettings.get_strv('disabled');
    const enabled = searchSettings.get_strv('enabled');
    loadedProviders = loadedProviders.filter((provider) => {
        const appId = provider.appInfo.get_id();
        if (provider.defaultEnabled)
            return !disabled.includes(appId);
        else
            return enabled.includes(appId);
    });
    loadedProviders.sort((providerA, providerB) => {
        const appIdA = providerA.appInfo.get_id();
        const appIdB = providerB.appInfo.get_id();
        const idxA = sortOrder.indexOf(appIdA);
        const idxB = sortOrder.indexOf(appIdB);
        if (idxA == -1 && idxB == -1) {
            const nameA = providerA.appInfo.get_name();
            const nameB = providerB.appInfo.get_name();
            return GLib$f.utf8_collate(nameA, nameB);
        }
        if (idxA == -1)
            return 1;
        if (idxB == -1)
            return -1;
        return idxA - idxB;
    });
    return loadedProviders;
}
class RemoteSearchProvider {
    constructor(appInfo, dbusName, dbusPath, autoStart, proxyInfo) {
        this.isRemoteProvider = true;
        this.canLaunchSearch = false;
        this.searchInProgress = false;
        if (!proxyInfo)
            proxyInfo = SearchProviderProxyInfo;
        let gFlags = Gio$9.DBusProxyFlags.DO_NOT_LOAD_PROPERTIES;
        if (autoStart)
            gFlags |= Gio$9.DBusProxyFlags.DO_NOT_AUTO_START_AT_CONSTRUCTION;
        else
            gFlags |= Gio$9.DBusProxyFlags.DO_NOT_AUTO_START;
        this.proxy = new Gio$9.DBusProxy({
            g_bus_type: Gio$9.BusType.SESSION,
            g_name: dbusName,
            g_object_path: dbusPath,
            g_interface_info: proxyInfo,
            g_interface_name: proxyInfo.name,
            gFlags,
        });
        this.proxy.init_async(GLib$f.PRIORITY_DEFAULT, null);
        this.appInfo = appInfo;
        this.id = appInfo.get_id();
    }
    get title() {
        return this.appInfo.get_name();
    }
    createFallbackIcon(icon_size) {
        return new St$a.Icon({
            icon_size,
            gicon: this.appInfo.get_icon(),
        });
    }
    createIcon(size, meta) {
        let gicon = null;
        let icon = null;
        if (meta['icon']) {
            gicon = Gio$9.icon_deserialize(meta['icon']);
        }
        else if (meta['gicon']) {
            gicon = Gio$9.icon_new_for_string(meta['gicon']);
        }
        else if (meta['icon-data']) {
            const [width, height, rowStride, hasAlpha, bitsPerSample, nChannels_, data,] = meta['icon-data'];
            gicon = Shell$5.util_create_pixbuf_from_data(data, GdkPixbuf.Colorspace.RGB, hasAlpha, bitsPerSample, width, height, rowStride);
        }
        if (gicon)
            icon = new St$a.Icon({ gicon, icon_size: size });
        return icon;
    }
    filterResults(results, maxNumber) {
        if (results.length <= maxNumber)
            return results;
        const regularResults = results.filter((r) => !r.startsWith('special:'));
        const specialResults = results.filter((r) => r.startsWith('special:'));
        return regularResults
            .slice(0, maxNumber)
            .concat(specialResults.slice(0, maxNumber));
    }
    async getInitialResultSet(terms, cancellable) {
        try {
            const [results] = await (beforeGnome43$1
                ? new Promise((resolve, reject) => {
                    this.proxy.GetInitialResultSetRemote(terms, (results, error) => {
                        if (error)
                            reject(error);
                        else
                            resolve(results);
                    }, cancellable);
                })
                : this.proxy.GetInitialResultSetAsync(terms, cancellable));
            return results;
        }
        catch (error) {
            if (!error.matches(Gio$9.IOErrorEnum, Gio$9.IOErrorEnum.CANCELLED))
                log(`Received error from D-Bus search provider ${this.id}: ${error}`);
            return [];
        }
    }
    async getSubsearchResultSet(previousResults, newTerms, cancellable) {
        try {
            const [results] = await (beforeGnome43$1
                ? new Promise((resolve, reject) => {
                    this.proxy.GetSubsearchResultSetRemote(previousResults, newTerms, (results, error) => {
                        if (error)
                            reject(error);
                        else
                            resolve(results);
                    }, cancellable);
                })
                : this.proxy.GetSubsearchResultSetAsync(previousResults, newTerms, cancellable));
            return results;
        }
        catch (error) {
            if (!error.matches(Gio$9.IOErrorEnum, Gio$9.IOErrorEnum.CANCELLED))
                log(`Received error from D-Bus search provider ${this.id}: ${error}`);
            return [];
        }
    }
    async getResultMetas(ids, cancellable) {
        let metas;
        try {
            [metas] = await (beforeGnome43$1
                ? new Promise((resolve, reject) => {
                    this.proxy.GetResultMetasRemote(ids, (results, error) => {
                        if (error)
                            reject(error);
                        else
                            resolve(results);
                    }, cancellable);
                })
                : this.proxy.GetResultMetasAsync(ids, cancellable));
        }
        catch (error) {
            if (!error.matches(Gio$9.IOErrorEnum, Gio$9.IOErrorEnum.CANCELLED))
                log(`Received error from D-Bus search provider ${this.id} during GetResultMetas: ${error}`);
            return [];
        }
        const resultMetas = [];
        for (let i = 0; i < metas.length; i++) {
            const rawMeta = metas[i];
            const unpackedMeta = {};
            for (const prop in rawMeta) {
                if (prop !== 'icon')
                    unpackedMeta[prop] = rawMeta[prop].deepUnpack();
                else
                    unpackedMeta[prop] = rawMeta[prop];
            }
            resultMetas.push({
                id: assertNotNull(unpackedMeta['id']),
                name: assertNotNull(unpackedMeta['name']),
                description: unpackedMeta['description'],
                createIcon: (size) => this.createIcon(size, unpackedMeta),
                clipboardText: unpackedMeta['clipboardText'],
            });
        }
        return resultMetas;
    }
    activateResult(id, terms) {
        if (beforeGnome43$1) {
            this.proxy.ActivateResultRemote(id, terms, global.get_current_time());
        }
        else {
            this.proxy.ActivateResultAsync(id).catch(logAsyncException);
        }
    }
    launchSearch(_terms) {
        mslog(`Search provider ${this.appInfo.get_id()} does not implement LaunchSearch`);
        this.appInfo.launch([], global.create_app_launch_context(0, -1));
    }
}
class RemoteSearchProvider2 extends RemoteSearchProvider {
    constructor(appInfo, dbusName, dbusPath, autoStart) {
        super(appInfo, dbusName, dbusPath, autoStart, SearchProvider2ProxyInfo);
        this.canLaunchSearch = true;
    }
    activateResult(id, terms) {
        if (beforeGnome43$1) {
            this.proxy.ActivateResultRemote(id, terms, global.get_current_time());
        }
        else {
            this.proxy
                .ActivateResultAsync(id, terms, global.get_current_time())
                .catch(logAsyncException);
        }
    }
    launchSearch(terms) {
        if (beforeGnome43$1) {
            this.proxy.LaunchSearchRemote(terms, global.get_current_time());
        }
        else {
            this.proxy
                .LaunchSearchAsync(terms, global.get_current_time())
                .catch(logAsyncException);
        }
    }
}

const Clutter$i = imports.gi.Clutter;
const Gio$8 = imports.gi.Gio;
const GLib$e = imports.gi.GLib;
const Shell$4 = imports.gi.Shell;
const St$9 = imports.gi.St;
const ParentalControlsManager = imports.misc.parentalControlsManager;
function getTermsForSearchString(searchString) {
    searchString = searchString.replace(/^\s+/g, '').replace(/\s+$/g, '');
    if (searchString === '')
        return [];
    return searchString.split(/\s+/);
}
const SEARCH_PROVIDERS_SCHEMA = 'org.gnome.desktop.search-providers';
const Me$n = imports.misc.extensionUtils.getCurrentExtension();
let SearchResultList = class SearchResultList extends St$9.BoxLayout {
    _init(searchEntry) {
        super._init({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.signalObserver = new SignalObserver();
        this.providerList = [];
        this.terms = [];
        this.searchTimeoutId = 0;
        this.startingSearch = false;
        this.results = {};
        this.isSubSearch = false;
        this.cancellable = new Gio$8.Cancellable();
        this.clearIcon = new St$9.Icon({
            style_class: 'search-entry-icon',
            icon_name: 'edit-clear-symbolic',
        });
        this.iconClickedId = 0;
        this.entrySelected = null;
        this.allApplicationList = new St$9.BoxLayout({ vertical: true });
        this.providerDisplayMap = new Map();
        this.navigated = false;
        this.recentSearchProvider = new RecentSearchProvider();
        this.recentSearchProvider.loadHistoryFromExtensionState();
        this.recentSearchProviderSearchThrottled = throttle(() => {
            this.updateResults(this.recentSearchProvider, this.recentSearchProvider.search(this.terms, new Map([...this.providerDisplayMap.values()]
                .filter((x) => x.provider != this.recentSearchProvider)
                .map((x) => [x.provider.id, x.resultList]))));
        }, 30);
        this.searchEntry = searchEntry;
        this.text = this.searchEntry.clutter_text;
        this.add_child(this.allApplicationList);
        this.signalObserver.observe(this.searchEntry, 'secondary-icon-clicked', () => {
            this.searchEntry.text = '';
        });
        this.signalObserver.observe(this.text, 'text-changed', this.onTextChanged.bind(this));
        this.signalObserver.observe(this.text, 'key-press-event', this.onKeyPress.bind(this));
        this.parentalControlsManager = ParentalControlsManager.getDefault();
        this.parentalControlsManager.connect('app-filter-changed', this.reloadRemoteProviders.bind(this));
        this.searchSettings = new Gio$8.Settings({
            schema_id: SEARCH_PROVIDERS_SCHEMA,
        });
        this.signalObserver.observe(this.searchSettings, 'changed::disabled', this.reloadRemoteProviders.bind(this));
        this.signalObserver.observe(this.searchSettings, 'changed::enabled', this.reloadRemoteProviders.bind(this));
        this.signalObserver.observe(this.searchSettings, 'changed::disable-external', this.reloadRemoteProviders.bind(this));
        this.signalObserver.observe(this.searchSettings, 'changed::sort-order', this.reloadRemoteProviders.bind(this));
        this.registerProvider(this.recentSearchProvider);
        this.registerProvider(new AppSearchProvider());
        const appSystem = Shell$4.AppSystem.get_default();
        this.signalObserver.observe(appSystem, 'installed-changed', this.reloadRemoteProviders.bind(this));
        this.reloadRemoteProviders();
        this.connect('destroy', () => {
            this.signalObserver.clear();
        });
    }
    get resultEntryList() {
        const list = [];
        for (const providerDisplay of this.providerDisplayMap.values()) {
            list.push(...providerDisplay.firstResultEntryList.get_children());
            if (providerDisplay.restResultEntryList.visible) {
                list.push(...providerDisplay.restResultEntryList.get_children());
            }
        }
        if (this.allApplicationList.visible) {
            list.push(...this.allApplicationList.get_children());
        }
        return list;
    }
    registerProvider(provider) {
        provider.searchInProgress = false;
        if (provider instanceof RemoteSearchProvider &&
            !this.parentalControlsManager.shouldShowApp(provider.appInfo))
            return;
        this.providerList.push(provider);
        const providerDisplay = new ProviderResultList(provider, (id) => {
            Me$n.layout.toggleOverview();
            let remappedProvider = provider;
            if (remappedProvider === this.recentSearchProvider) {
                const splitId = RecentSearchProvider.splitId(id);
                const actualProvider = this.providerList.find((x) => x.id == splitId.provider_id);
                assert(actualProvider !== undefined, `Could not find provider with id ${splitId.provider_id}`);
                remappedProvider = actualProvider;
                id = splitId.id;
            }
            remappedProvider.activateResult(id, this.terms);
            this.recentSearchProvider.onResultActivated(remappedProvider.id, id, this.terms);
        });
        this.providerDisplayMap.set(provider, providerDisplay);
        this.add_child(providerDisplay);
    }
    reloadRemoteProviders() {
        const remoteProviders = this.providerList.filter((p) => p.isRemoteProvider);
        remoteProviders.forEach((provider) => {
            this.unregisterProvider(provider);
        });
        const remoteProviderList = loadRemoteSearchProviders(this.searchSettings);
        remoteProviderList.forEach(this.registerProvider.bind(this));
        this.updateAllApplicationResults();
    }
    unregisterProvider(provider) {
        const index = this.providerList.indexOf(provider);
        this.providerList.splice(index, 1);
        if (this.providerDisplayMap.has(provider)) {
            this.providerDisplayMap.get(provider).destroy();
            this.providerDisplayMap.delete(provider);
        }
    }
    onTextChanged() {
        const terms = getTermsForSearchString(this.searchEntry.get_text());
        if (terms == this.terms)
            return;
        const searchActive = terms.length > 0;
        this.setTerms(terms);
        if (searchActive) {
            this.searchEntry.set_secondary_icon(this.clearIcon);
        }
        else {
            this.searchEntry.set_secondary_icon(null);
            this.searchCancelled();
        }
    }
    onKeyPress(entry, event) {
        const symbol = event.get_key_symbol();
        switch (symbol) {
            case Clutter$i.KEY_Escape: {
                this.resetAndClose();
                return Clutter$i.EVENT_STOP;
            }
            case Clutter$i.KEY_Tab:
            case Clutter$i.KEY_Down: {
                this.selectNext();
                return Clutter$i.EVENT_STOP;
            }
            case Clutter$i.KEY_ISO_Left_Tab:
            case Clutter$i.KEY_Up: {
                this.selectPrevious();
                return Clutter$i.EVENT_STOP;
            }
            case Clutter$i.KEY_Return:
            case Clutter$i.KEY_KP_Enter: {
                if (this.entrySelected !== null) {
                    this.entrySelected.emit('primary-action');
                }
                return Clutter$i.EVENT_STOP;
            }
        }
        return Clutter$i.EVENT_PROPAGATE;
    }
    async doProviderSearch(provider, previousResults) {
        provider.searchInProgress = true;
        let results;
        if (this.isSubSearch && previousResults) {
            results = await provider
                .getSubsearchResultSet(previousResults, this.terms, this.cancellable)
                .catch(logAsyncException);
        }
        else {
            results = await provider
                .getInitialResultSet(this.terms, this.cancellable)
                .catch(logAsyncException);
        }
        this.results[provider.id] = results;
        const resultsMetas = await provider
            .getResultMetas(results, this.cancellable)
            .catch(logAsyncException);
        if (resultsMetas !== undefined)
            this.updateResults(provider, resultsMetas);
    }
    async doSearch() {
        this.startingSearch = false;
        const previousResults = this.results;
        this.results = {};
        this.entrySelected = null;
        this.navigated = false;
        for (const provider of this.providerList) {
            const previousProviderResults = previousResults[provider.id];
            if (provider.id != 'ms-recent') {
                this.doProviderSearch(provider, previousProviderResults).catch(logAsyncException);
            }
        }
        this.clearSearchTimeout();
    }
    clearSearchTimeout() {
        if (this.searchTimeoutId > 0) {
            Async.clearTimeoutId(this.searchTimeoutId);
            this.searchTimeoutId = 0;
        }
    }
    onSearchTimeout() {
        this.searchTimeoutId = 0;
        this.doSearch();
        return GLib$e.SOURCE_REMOVE;
    }
    searchCancelled() {
        if (this.text.text !== '')
            this.reset();
    }
    setTerms(terms) {
        this.allApplicationList.visible = terms.length == 0;
        const searchString = terms.join(' ');
        const previousSearchString = this.terms.join(' ');
        if (searchString == previousSearchString)
            return;
        this.startingSearch = true;
        this.cancellable.cancel();
        this.cancellable.reset();
        if (terms.length == 0) {
            this.reset();
            return;
        }
        let isSubSearch = false;
        if (this.terms.length > 0)
            isSubSearch = searchString.indexOf(previousSearchString) == 0;
        this.terms = terms;
        this.isSubSearch = isSubSearch;
        if (this.searchTimeoutId == 0)
            this.searchTimeoutId = Async.addTimeout(GLib$e.PRIORITY_DEFAULT, 150, this.onSearchTimeout.bind(this));
    }
    updateResults(provider, results) {
        const terms = this.terms;
        const display = this.providerDisplayMap.get(provider);
        if (!display)
            return;
        display
            .updateSearch(results, terms)
            .then(() => {
            provider.searchInProgress = false;
            if (!this.navigated) {
                const resultEntryList = this.resultEntryList;
                if (resultEntryList.length > 0) {
                    this.selectResult(resultEntryList[0]);
                }
            }
        })
            .catch(logAsyncException);
        if (display.provider != this.recentSearchProvider) {
            this.recentSearchProviderSearchThrottled();
        }
    }
    updateAllApplicationResults() {
        this.allApplicationList.remove_all_children();
        const appSystem = Shell$4.AppSystem.get_default();
        const appsInstalled = appSystem
            .get_installed()
            .filter((appInfo) => {
            try {
                const _ = appInfo.get_id();
            }
            catch (e) {
                return false;
            }
            return (appInfo.should_show() &&
                this.parentalControlsManager.shouldShowApp(appInfo));
        })
            .sort((a, b) => a.get_display_name().localeCompare(b.get_display_name()));
        for (const appInfo of appsInstalled) {
            const icon = new St$9.Icon({
                icon_size: 32,
                gicon: appInfo.get_icon(),
            });
            const entry = new SearchResultEntry(icon, appInfo.get_display_name(), appInfo.get_description(), true);
            entry.connect('primary-action', () => {
                this.resetAndClose();
                const app = Shell$4.AppSystem.get_default().lookup_app(appInfo.get_id());
                if (app) {
                    Me$n.msWindowManager.openApp(app, Me$n.msWorkspaceManager.getActiveMsWorkspace());
                }
            });
            this.allApplicationList.add_child(entry);
        }
        const resultEntryList = this.resultEntryList;
        if (resultEntryList.length > 0) {
            this.selectResult(resultEntryList[0]);
        }
    }
    selectResult(entry) {
        if (this.entrySelected) {
            this.entrySelected.setSelected(false);
        }
        this.entrySelected = entry;
        this.entrySelected.setSelected(true);
        this.emit('result-selected-changed', this.entrySelected);
    }
    selectNext() {
        this.navigated = true;
        const entryList = this.resultEntryList;
        if (this.entrySelected == null || entryList.length == 0) {
            return;
        }
        const currentIndex = entryList.indexOf(this.entrySelected);
        const nextEntry = entryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }
    selectPrevious() {
        this.navigated = true;
        const entryList = this.resultEntryList;
        if (this.entrySelected == null || entryList.length == 0) {
            return;
        }
        const currentIndex = entryList.indexOf(this.entrySelected);
        const previousEntry = entryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }
    reset() {
        this.searchEntry.text = '';
        this.terms = [];
        this.results = {};
        this.entrySelected = null;
        for (const providerDisplay of this.providerDisplayMap.values()) {
            providerDisplay.updateSearch([], []);
        }
        this.clearSearchTimeout();
        this.startingSearch = false;
    }
    resetAndClose() {
        this.reset();
        Me$n.layout.toggleOverview();
    }
};
SearchResultList.metaInfo = {
    GTypeName: 'SearchResultList',
    Signals: {
        'result-selected-changed': {
            param_types: [SearchResultEntry.$gtype],
            accumulator: 0,
        },
    },
};
SearchResultList = __decorate([
    registerGObjectClass
], SearchResultList);

const Clutter$h = imports.gi.Clutter;
const St$8 = imports.gi.St;
const Util$1 = imports.misc.util;
const ShellEntry = imports.ui.shellEntry;
const Me$m = imports.misc.extensionUtils.getCurrentExtension();
let ExtendedPanelContent = class ExtendedPanelContent extends St$8.BoxLayout {
    _init() {
        super._init({
            vertical: true,
            y_expand: true,
            x_expand: true,
            x_align: Clutter$h.ActorAlign.FILL,
        });
        this.scrollView = new St$8.ScrollView({
            x_expand: true,
            hscrollbar_policy: St$8.PolicyType.NEVER,
            vscrollbar_policy: St$8.PolicyType.AUTOMATIC,
        });
        this.searchEntry = new St$8.Entry({
            style_class: 'search-entry',
            style: 'margin: 6px 8px',
            hint_text: _('Type to search'),
            track_hover: true,
            can_focus: true,
        });
        this.searchEntry.set_offscreen_redirect(Clutter$h.OffscreenRedirect.ALWAYS);
        ShellEntry.addContextMenu(this.searchEntry);
        this.searchEntryBin = new SearchEntryBin({
            child: this.searchEntry,
            x_align: Clutter$h.ActorAlign.FILL,
            styleClass: 'background-primary',
        });
        this.add_child(this.searchEntryBin);
        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Util$1.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.scrollView.add_actor(this.searchResultList);
        this.add_child(this.scrollView);
    }
    vfunc_get_preferred_width(_forHeight) {
        const desiredWidth = Me$m.msThemeManager.getScaledSize(448) -
            Me$m.msThemeManager.getPanelSize();
        return [desiredWidth, desiredWidth];
    }
};
ExtendedPanelContent = __decorate([
    registerGObjectClass
], ExtendedPanelContent);
let SearchEntryBin = class SearchEntryBin extends St$8.Bin {
    _init(params = {}) {
        super._init(params);
    }
    vfunc_get_preferred_height(_for_width) {
        const height = Math.max(Me$m.msThemeManager.getScaledSize(48), Me$m.msThemeManager.getPanelSize());
        return [height, height];
    }
};
SearchEntryBin = __decorate([
    registerGObjectClass
], SearchEntryBin);

const Clutter$g = imports.gi.Clutter;
const Gio$7 = imports.gi.Gio;
const St$7 = imports.gi.St;
const { main: Main$d } = imports.ui;
const Util = imports.misc.util;
const Me$l = imports.misc.extensionUtils.getCurrentExtension();
let PanelContent = class PanelContent extends St$7.BoxLayout {
    _init() {
        super._init({
            vertical: true,
            y_expand: true,
        });
        this.topBox = new St$7.BoxLayout({
            vertical: true,
            y_expand: true,
        });
        this.add_child(this.topBox);
        this.buttonIcon = new St$7.Icon({
            style_class: 'mat-panel-button-icon',
            icon_size: Me$l.msThemeManager.getPanelSizeNotScaled() / 2,
        });
        this.searchButton = new SearchButton({
            child: this.buttonIcon,
            primary: true,
        });
        this.searchButton.connect('clicked', () => {
            this.emit('toggle');
        });
        this.topBox.add_child(this.searchButton);
        this.workspaceList = new WorkspaceList();
        this.topBox.add_child(this.workspaceList);
        this.statusArea = new MsStatusArea();
        this.add_child(this.statusArea);
        const panelSizeSignal = Me$l.msThemeManager.connect('panel-size-changed', () => {
            this.buttonIcon.set_icon_size(Me$l.msThemeManager.getPanelSizeNotScaled() / 2);
            this.queue_relayout();
        });
        this.connect('destroy', () => {
            Me$l.msThemeManager.disconnect(panelSizeSignal);
        });
        this.setIcon('search');
    }
    enable() {
        this.statusArea.enable();
    }
    disable() {
        this.statusArea.disable();
    }
    vfunc_get_preferred_width(_for_height) {
        const panelSize = Me$l.msThemeManager.getPanelSize();
        return [panelSize, panelSize];
    }
    setIcon(icon) {
        if (icon === 'search') {
            this.buttonIcon.set_gicon(Gio$7.icon_new_for_string(`${Me$l.path}/assets/icons/magnify-symbolic.svg`));
        }
        if (icon === 'close') {
            this.buttonIcon.set_gicon(Gio$7.icon_new_for_string(`${Me$l.path}/assets/icons/close-symbolic.svg`));
        }
    }
};
PanelContent.metaInfo = {
    GTypeName: 'PanelContent',
    Signals: {
        toggle: {
            param_types: [],
            accumulator: 0,
        },
    },
};
PanelContent = __decorate([
    registerGObjectClass
], PanelContent);
let MsPanel = class MsPanel extends St$7.BoxLayout {
    _init() {
        super._init({
            name: 'msPanel',
            reactive: true,
        });
        this.isExpanded = false;
        this.signalObserver = new SignalObserver();
        this.gnomeShellPanel = Main$d.panel;
        this.gnomeShellPanel.hide();
        this.updateStyle();
        this.signalObserver.observe(Me$l.msThemeManager, msThemeSignalEnum.VerticalPanelPositionChanged, this.updateStyle.bind(this));
        this.panelContent = new PanelContent();
        this.add_child(this.panelContent);
        this.extendedPanelContent = new ExtendedPanelContent();
        this.divider = new MatDivider();
        this.disableConnect = Me$l.connect('extension-disable', () => {
            Me$l.logFocus('extension-disable');
            Me$l.disconnect(this.disableConnect);
            this.disable();
        });
        this.signalObserver.observe(Me$l.msThemeManager, msThemeSignalEnum.PanelSizeChanged, () => {
            this.queue_relayout();
        });
        this.connect('destroy', () => {
            this.signalObserver.clear();
        });
        this.panelContent.connect('toggle', () => {
            Me$l.layout.toggleOverview();
        });
    }
    enable() {
        this.gnomeShellPanel.hide();
        this.panelContent.enable();
    }
    disable() {
        this.gnomeShellPanel.show();
        this.panelContent.disable();
    }
    updateStyle() {
        this.remove_style_class_name('position-left');
        this.remove_style_class_name('position-right');
        switch (Me$l.msThemeManager.verticalPanelPosition) {
            case VerticalPanelPositionEnum.LEFT: {
                this.add_style_class_name('position-left');
                break;
            }
            case VerticalPanelPositionEnum.RIGHT: {
                this.add_style_class_name('position-right');
            }
        }
    }
    vfunc_get_preferred_width(_for_height) {
        const panelSize = Me$l.msThemeManager.getPanelSize();
        return [panelSize, panelSize];
    }
    toggle() {
        if (!this.isExpanded) {
            if (!Me$l.layout.panelsVisible) {
                this.show();
            }
            if (this.extendedPanelContent.get_parent() === null) {
                if (Me$l.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT) {
                    this.insert_child_below(this.extendedPanelContent, this.panelContent);
                }
                else {
                    this.insert_child_above(this.extendedPanelContent, this.panelContent);
                }
            }
            if (this.divider.get_parent() === null) {
                if (Me$l.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT) {
                    this.insert_child_below(this.divider, this.panelContent);
                }
                else {
                    this.insert_child_above(this.divider, this.panelContent);
                }
            }
            this.width = Me$l.msThemeManager.getScaledSize(448);
            this.translation_x =
                (Me$l.msThemeManager.getScaledSize(448) -
                    (Me$l.layout.panelsVisible
                        ? Me$l.msThemeManager.getPanelSize()
                        : 0)) *
                    (Me$l.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1);
            this.ease({
                translation_x: 0,
                duration: 200,
                mode: Clutter$g.AnimationMode.EASE_OUT_QUAD,
            });
            this.extendedPanelContent.searchEntry.grab_key_focus();
            this.panelContent.setIcon('close');
            this.isExpanded = true;
            this.add_style_class_name('shadow');
        }
        else {
            this.isExpanded = false;
            this.panelContent.setIcon('search');
            this.remove_style_class_name('shadow');
            this.ease({
                translation_x: (Me$l.msThemeManager.getScaledSize(448) -
                    (Me$l.layout.panelsVisible
                        ? Me$l.msThemeManager.getPanelSize()
                        : 0)) *
                    (Me$l.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1),
                duration: 200,
                mode: Clutter$g.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.remove_child(this.extendedPanelContent);
                    this.remove_child(this.divider);
                    this.width = -1;
                    this.translation_x = 0;
                    if (!Me$l.layout.panelsVisible) {
                        this.hide();
                    }
                    this.extendedPanelContent.searchResultList.reset();
                },
            });
        }
    }
    vfunc_get_preferred_height(_forWidth) {
        const monitor = Main$d.layoutManager.primaryMonitor;
        assert(monitor !== null, 'found no primary monitor');
        return [monitor.height, monitor.height];
    }
};
MsPanel.metaInfo = {
    GTypeName: 'MsPanel',
};
MsPanel = __decorate([
    registerGObjectClass
], MsPanel);
let SearchButton = class SearchButton extends MatPanelButton {
    _init(params = {}) {
        super._init(params);
    }
    vfunc_get_preferred_height(_for_width) {
        const height = Math.max(Me$l.msThemeManager.getScaledSize(48), Me$l.msThemeManager.getPanelSize());
        return [height, height];
    }
};
SearchButton = __decorate([
    registerGObjectClass
], SearchButton);

const Clutter$f = imports.gi.Clutter;
const Me$k = imports.misc.extensionUtils.getCurrentExtension();
class TranslationHelper extends WithSignals {
    constructor(container, vertical = false) {
        super();
        this.container = container;
        this.vertical = vertical;
    }
    getTransformedBox(actor) {
        const x1 = actor.x + actor.translation_x;
        const x2 = x1 + actor.width;
        const y1 = actor.y + actor.translation_y;
        const y2 = y1 + actor.height;
        return new Clutter$f.ActorBox({ x1, y1, x2, y2 });
    }
    setTranslation(enteringActors, globalContext, direction) {
        let translationY = this.container.translation_y;
        let translationX = this.container.translation_x;
        const visibleArea = {
            x1: Math.abs(translationX),
            x2: Math.abs(translationX) + this.container.allocation.get_width(),
            y1: Math.abs(translationY),
            y2: Math.abs(translationY) + this.container.allocation.get_height(),
        };
        if (this.animationInProgress) {
            this.container.remove_all_transitions();
            this.animationInProgress = false;
            this.container
                .get_children()
                .filter((actor) => actor.visible)
                .forEach((actor) => {
                const allocationBox = this.getTransformedBox(actor);
                if (this.vertical) {
                    if (allocationBox.y2 < visibleArea.y1) {
                        actor.hide();
                        translationY += InfinityTo0(allocationBox.get_height());
                    }
                    if (allocationBox.y1 > visibleArea.y2) {
                        actor.hide();
                    }
                }
                else {
                    if (allocationBox.x2 < visibleArea.x1) {
                        actor.hide();
                        translationX += InfinityTo0(allocationBox.get_width());
                    }
                    if (allocationBox.x1 > visibleArea.x2) {
                        actor.hide();
                    }
                }
            });
        }
        enteringActors.forEach((actor, index) => {
            const enteringActorFound = this.container.contains(actor);
            if (!enteringActorFound || !actor.visible) {
                reparentActor(actor, this.container);
                actor.visible = true;
                if (direction < 0) {
                    this.container.set_child_at_index(actor, index);
                    if (this.vertical) {
                        translationY -= actor.height;
                    }
                    else {
                        translationX -= actor.width;
                    }
                }
            }
        });
        let visibleChildren = this.container
            .get_children()
            .filter((actor) => actor.visible);
        const originActor = direction > 0
            ? visibleChildren[0]
            : visibleChildren[visibleChildren.length - 1];
        const targetActor = direction > 0
            ? visibleChildren[visibleChildren.length - 1]
            : visibleChildren[0];
        const originActorGlobalIndex = globalContext.indexOf(originActor);
        const targetActorGlobalIndex = globalContext.indexOf(targetActor);
        const minGlobalIndex = Math.min(originActorGlobalIndex, targetActorGlobalIndex);
        const maxGlobalIndex = Math.max(originActorGlobalIndex, targetActorGlobalIndex);
        for (let index = 1; index < visibleChildren.length - 1; index++) {
            const actor = visibleChildren[index];
            const globalIndex = globalContext.indexOf(actor);
            if (globalIndex < minGlobalIndex || globalIndex > maxGlobalIndex) {
                actor.hide();
                const allocationBox = this.getTransformedBox(actor);
                if (this.vertical) {
                    if (allocationBox.y1 < visibleArea.y1) {
                        translationY += InfinityTo0(allocationBox.get_height());
                    }
                }
                else {
                    if (allocationBox.x1 < visibleArea.x1) {
                        translationX += InfinityTo0(allocationBox.get_width());
                    }
                }
            }
        }
        visibleChildren = this.container
            .get_children()
            .filter((actor) => actor.visible);
        for (let index = 0; index < visibleChildren.length; index++) {
            const actor = visibleChildren[index];
            const isFirst = index == 0;
            if (isFirst) {
                actor.translation_x = -actor.x;
                actor.translation_y = -actor.y;
            }
            else {
                const prevActor = visibleChildren[index - 1];
                const allocationBox = this.getTransformedBox(prevActor);
                if (this.vertical) {
                    actor.translation_y = allocationBox.y2;
                }
                else {
                    actor.translation_x = allocationBox.x2 - actor.x;
                }
            }
        }
        this.container.translation_y = translationY;
        this.container.translation_x = translationX;
        let targetTranslation = 0;
        if (direction > 0) {
            const lastChild = visibleChildren[visibleChildren.length - 1];
            const lastChildBox = this.getTransformedBox(lastChild);
            targetTranslation = this.vertical
                ? lastChildBox.y2 - this.container.allocation.get_height()
                : lastChildBox.x2 - this.container.allocation.get_width();
        }
        const transitionConfig = {
            duration: 250,
            mode: Clutter$f.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.endTransition(this.container
                    .get_children()
                    .filter((actor) => !enteringActors.includes(actor)));
            },
        };
        if (this.vertical) {
            transitionConfig.translation_y = -targetTranslation;
        }
        else {
            transitionConfig.translation_x = -targetTranslation;
        }
        this.animationInProgress = true;
        this.container.ease(transitionConfig);
    }
    endTransition(actorsLeftList) {
        this.container.translation_x = 0;
        this.container.translation_y = 0;
        for (const child of this.container.get_children()) {
            child.set_translation(0, 0, 0);
            child.show();
        }
        this.animationInProgress = false;
        this.emit('transition-completed', actorsLeftList);
    }
}

const Clutter$e = imports.gi.Clutter;
const Meta$7 = imports.gi.Meta;
const Shell$3 = imports.gi.Shell;
const St$6 = imports.gi.St;
const { main: Main$c } = imports.ui;
const Background = imports.ui.background;
const Me$j = imports.misc.extensionUtils.getCurrentExtension();
let MsMain = class MsMain extends St$6.Widget {
    _init() {
        var _a;
        super._init({});
        this.signals = [];
        this.overviewShown = false;
        Me$j.layout = this;
        this.panelsVisible = (_a = Me$j.stateManager.getState('panels-visible')) !== null && _a !== void 0 ? _a : true;
        Main$c.layoutManager.uiGroup.insert_child_above(this, global.window_group);
        this.monitorsContainer = [];
        this.aboveContainer = new Clutter$e.Actor();
        this.add_child(this.aboveContainer);
        this.backgroundGroup = new Meta$7.BackgroundGroup({});
        this.setBlurBackground(Me$j.msThemeManager.blurBackground);
        this.add_child(this.backgroundGroup);
        this.primaryMonitorContainer = new PrimaryMonitorContainer(assertNotNull(this.primaryMonitor), this.backgroundGroup, {
            clip_to_allocation: true,
        });
        this.add_child(this.primaryMonitorContainer);
        this.panel = this.primaryMonitorContainer.panel;
        this.primaryMonitorContainer.setMsWorkspaceActor(Me$j.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor);
        for (const externalMonitor of this.externalMonitors) {
            const container = new MonitorContainer(externalMonitor, this.backgroundGroup, {
                clip_to_allocation: true,
            });
            this.monitorsContainer.push(container);
            this.add_child(container);
        }
        this.registerToSignals();
        this.onMsWorkspacesChanged();
        this.updatePanelVisibilities();
        this.updateFullscreenMonitors();
    }
    get primaryMonitor() {
        return Main$c.layoutManager.primaryMonitor;
    }
    get externalMonitors() {
        return Main$c.layoutManager.monitors.filter((monitor) => monitor !== this.primaryMonitor);
    }
    setBlurBackground(blur) {
        var _a;
        const themeContext = St$6.ThemeContext.get_for_stage(global.stage);
        if ((this.blurEffect && blur) || (!this.blurEffect && !blur)) {
            return;
        }
        else if (this.blurEffect && !blur) {
            (_a = this._scaleChangedId) === null || _a === void 0 ? void 0 : _a.disconnect();
            this.backgroundGroup.remove_effect(this.blurEffect);
            delete this.blurEffect;
            return;
        }
        const effect = (this.blurEffect = new Shell$3.BlurEffect({
            brightness: 0.55,
            sigma: 60 * themeContext.scale_factor,
        }));
        this._scaleChangedId = SignalHandle.connect(themeContext, 'notify::scale-factor', () => {
            effect.sigma = 60 * themeContext.scale_factor;
        });
        this.backgroundGroup.add_effect(this.blurEffect);
    }
    registerToSignals() {
        this.signals.push({
            from: global.display,
            id: global.display.connect('overlay-key', () => {
                this.toggleOverview();
            }),
        });
        this.signals.push({
            from: this,
            id: this.connect('captured-event', (_, event) => {
                if (!this.overviewShown)
                    return;
                if (event.type() === Clutter$e.EventType.BUTTON_PRESS) {
                    const source = event.get_source();
                    const [x, y] = event.get_coords();
                    const [x1, y1] = this.panel.get_transformed_position();
                    const [width, height] = this.panel.get_transformed_size();
                    if (!(x >= x1 &&
                        x <= x1 + width &&
                        y >= y1 &&
                        y <= y1 + height)) {
                        this.toggleOverview();
                    }
                }
                return Clutter$e.EVENT_PROPAGATE;
            }),
        });
        this.signals.push({
            from: Me$j.msThemeManager,
            id: Me$j.msThemeManager.connect('blur-background-changed', () => {
                this.setBlurBackground(Me$j.msThemeManager.blurBackground);
            }),
        });
        this.signals.push({
            from: Me$j.msWorkspaceManager,
            id: Me$j.msWorkspaceManager.connect('switch-workspace', (_, from, to) => {
                this.onSwitchWorkspace(from, to);
            }),
        });
        this.signals.push({
            from: Me$j.msWorkspaceManager,
            id: Me$j.msWorkspaceManager.connect('dynamic-super-workspaces-changed', () => {
                this.onMsWorkspacesChanged();
            }),
        });
        this.signals.push({
            from: Me$j,
            id: Me$j.connect('extension-disable', () => {
                this.aboveContainer.get_children().forEach((actor) => {
                    this.aboveContainer.remove_child(actor);
                    global.window_group.add_child(actor);
                });
                this.signals.forEach((signal) => {
                    signal.from.disconnect(signal.id);
                });
            }),
        });
        this.signals.push({
            from: global.display,
            id: global.display.connect('in-fullscreen-changed', () => {
                this.updateFullscreenMonitors();
            }),
        });
        this.signals.push({
            from: Main$c.layoutManager,
            id: Main$c.layoutManager.connect('monitors-changed', () => {
                this.primaryMonitorContainer.setMonitor(assertNotNull(this.primaryMonitor));
                const externalMonitorsDiff = Main$c.layoutManager.monitors.length -
                    1 -
                    this.monitorsContainer.length;
                if (externalMonitorsDiff > 0) {
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = new MonitorContainer(this.externalMonitors[this.externalMonitors.length -
                            Math.abs(externalMonitorsDiff) +
                            i], this.backgroundGroup, {
                            clip_to_allocation: true,
                        });
                        this.monitorsContainer.push(container);
                        this.add_child(container);
                    }
                }
                else if (externalMonitorsDiff < 0) {
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = this.monitorsContainer.pop();
                        assert(container !== undefined, 'monitorsContainer was empty');
                        if (container.msWorkspaceActor) {
                            container.remove_child(container.msWorkspaceActor);
                        }
                        container.destroy();
                    }
                }
                this.externalMonitors.forEach((monitor, index) => {
                    this.monitorsContainer[index].setMonitor(monitor);
                });
                this.onMsWorkspacesChanged();
                this.updatePanelVisibilities();
                this.updateFullscreenMonitors();
            }),
        });
    }
    onMsWorkspacesChanged() {
        this.primaryMonitorContainer.setMsWorkspaceActor(Me$j.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor);
        this.monitorsContainer.forEach((container) => {
            const msWorkspace = Me$j.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(container.monitor.index)[0];
            if (msWorkspace) {
                container.setMsWorkspaceActor(msWorkspace.msWorkspaceActor);
            }
        });
    }
    onSwitchWorkspace(_from, _to) {
        this.onMsWorkspacesChanged();
    }
    togglePanelsVisibilities() {
        this.panelsVisible = !this.panelsVisible;
        Me$j.stateManager.setState('panels-visible', this.panelsVisible);
        this.updatePanelVisibilities();
    }
    updatePanelVisibilities() {
        [
            this.primaryMonitorContainer.verticalPanelSpacer,
            this.primaryMonitorContainer.horizontalPanelSpacer,
            ...this.monitorsContainer.map((container) => container.horizontalPanelSpacer),
        ].forEach((actor) => {
            actor.visible = this.panelsVisible;
            if (this.panelsVisible) {
                if (Main$c.layoutManager._findActor(actor) === -1) {
                    Main$c.layoutManager._trackActor(actor, {
                        affectsStruts: true,
                    });
                }
            }
            else {
                Main$c.layoutManager._untrackActor(actor);
            }
        });
        this.primaryMonitorContainer.panel.visible = this.panelsVisible;
        Me$j.msWorkspaceManager.refreshMsWorkspaceUI();
    }
    updateFullscreenMonitors() {
        this.primaryMonitorContainer.refreshFullscreen();
        for (const container of this.monitorsContainer) {
            container.refreshFullscreen();
        }
        Me$j.msWorkspaceManager.refreshMsWorkspaceUI();
    }
    toggleOverview() {
        if (this.overviewShown) {
            this.overviewShown = false;
            this.primaryMonitorContainer.workspaceContainer.ease_property('@effects.dimmer.brightness', Clutter$e.Color.new(127, 127, 127, 255), {
                duration: 300,
                mode: Clutter$e.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.primaryMonitorContainer.workspaceContainer.clear_effects();
                },
            });
            Me$j.msWindowManager.msFocusManager.popModal(this);
        }
        else {
            this.overviewShown = true;
            Me$j.msWindowManager.msFocusManager.pushModal(this, {
                actionMode: Shell$3.ActionMode.OVERVIEW,
            });
            const dimmerEffect = new Clutter$e.BrightnessContrastEffect({
                name: 'dimmer',
                brightness: Clutter$e.Color.new(127, 127, 127, 255),
            });
            this.primaryMonitorContainer.workspaceContainer.add_effect(dimmerEffect);
            this.primaryMonitorContainer.workspaceContainer.ease_property('@effects.dimmer.brightness', Clutter$e.Color.new(90, 90, 90, 255), {
                duration: 300,
                mode: Clutter$e.AnimationMode.EASE_IN_QUAD,
            });
        }
        this.panel.toggle();
    }
    add_child(actor) {
        super.add_child(actor);
        this.set_child_above_sibling(this.aboveContainer, null);
    }
    setActorAbove(actor) {
        reparentActor(actor, this.aboveContainer);
    }
    vfunc_get_preferred_width(_forHeight) {
        const width = global.stage.width;
        return [width, width];
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = global.stage.height;
        return [height, height];
    }
};
MsMain.metaInfo = {
    GTypeName: 'MsMain',
};
MsMain = __decorate([
    registerGObjectClass
], MsMain);
let MonitorContainer = class MonitorContainer extends St$6.Widget {
    _init(monitor, bgGroup, params) {
        super._init(params);
        this.bgGroup = bgGroup;
        this.horizontalPanelSpacer = new St$6.Widget({
            style_class: 'HorizontalSpacer',
        });
        this.setMonitor(monitor);
        this.add_child(this.horizontalPanelSpacer);
        const panelSizeSignal = Me$j.msThemeManager.connect('panel-size-changed', () => {
            this.updateSpacer();
        });
        const horizontalPanelPositionSignal = Me$j.msThemeManager.connect('horizontal-panel-position-changed', () => {
            this.updateSpacer();
        });
        this.connect('destroy', () => {
            Me$j.msThemeManager.disconnect(panelSizeSignal);
            Me$j.msThemeManager.disconnect(horizontalPanelPositionSignal);
            if (this.bgManager) {
                this.bgManager.destroy();
            }
        });
    }
    refreshFullscreen() {
        this.setFullscreen(global.display.get_monitor_in_fullscreen(this.monitor.index));
    }
    setFullscreen(monitorIsFullscreen) {
        this.bgManager.backgroundActor.visible = !monitorIsFullscreen;
        this.horizontalPanelSpacer.visible =
            Me$j.layout.panelsVisible && !monitorIsFullscreen;
    }
    setMsWorkspaceActor(actor) {
        if (actor === this.msWorkspaceActor)
            return;
        if (this.msWorkspaceActor &&
            this.msWorkspaceActor.get_parent() === this) {
            this.remove_child(this.msWorkspaceActor);
        }
        this.msWorkspaceActor = actor;
        reparentActor(this.msWorkspaceActor, this);
        this.msWorkspaceActor.updateUI();
    }
    updateSpacer() {
        const panelHeight = Me$j.msThemeManager.getPanelSize();
        const panelPosition = Me$j.msThemeManager.horizontalPanelPosition;
        this.horizontalPanelSpacer.set_size(this.monitor.width, panelHeight);
        this.horizontalPanelSpacer.set_position(0, panelPosition === HorizontalPanelPositionEnum.TOP
            ? 0
            : this.monitor.height - panelHeight);
    }
    setMonitor(monitor) {
        if (this.bgManager) {
            this.bgManager.destroy();
        }
        this.monitor = monitor;
        this.set_size(monitor.width, monitor.height);
        this.set_position(monitor.x, monitor.y);
        this.updateSpacer();
        this.bgManager = new Background.BackgroundManager({
            container: this.bgGroup,
            monitorIndex: monitor.index,
        });
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        this.get_children().forEach((actor) => {
            if (actor === this.horizontalPanelSpacer) {
                return this.horizontalPanelSpacer.allocate_preferred_size(this.horizontalPanelSpacer.x, this.horizontalPanelSpacer.y);
            }
            if (actor === this.msWorkspaceActor) {
                const msWorkspaceActorBox = new Clutter$e.ActorBox();
                msWorkspaceActorBox.x1 = box.x1;
                msWorkspaceActorBox.x2 = box.x2;
                msWorkspaceActorBox.y1 = box.y1;
                msWorkspaceActorBox.y2 = box.y2;
                return this.msWorkspaceActor.allocate(msWorkspaceActorBox);
            }
            actor.allocate_preferred_size(actor.x, actor.y);
        });
    }
};
MonitorContainer.metaInfo = {
    GTypeName: 'MonitorContainer',
};
MonitorContainer = __decorate([
    registerGObjectClass
], MonitorContainer);
let PrimaryMonitorContainer = class PrimaryMonitorContainer extends MonitorContainer {
    _init(monitor, bgGroup, params) {
        super._init(monitor, bgGroup, params);
        this.workspaceContainer = new St$6.Widget({
            layout_manager: new Clutter$e.BinLayout(),
            x_align: Clutter$e.ActorAlign.FILL,
            y_align: Clutter$e.ActorAlign.FILL,
        });
        this.translationHelper = new TranslationHelper(this.workspaceContainer, true);
        this.verticalPanelSpacer = new St$6.Widget({
            style_class: 'VerticalSpacer',
        });
        this.add_child(this.verticalPanelSpacer);
        this.panel = new MsPanel();
        this.add_child(this.workspaceContainer);
        this.add_child(this.panel);
        this.translationHelper.connect('transition-completed', (_, actorsLeftList) => {
            assert(this.msWorkspaceActor !== undefined, 'expected a workspace actor to exist');
            for (const actor of actorsLeftList) {
                this.workspaceContainer.remove_child(actor);
            }
            this.msWorkspaceActor.updateUI();
        });
        const verticalPanelPositionSignal = Me$j.msThemeManager.connect('vertical-panel-position-changed', () => {
            this.queue_relayout();
            this.updateSpacer();
        });
        this.connect('destroy', () => {
            Me$j.msThemeManager.disconnect(verticalPanelPositionSignal);
        });
        this.updateSpacer();
    }
    setFullscreen(monitorIsFullscreen) {
        this.panel.visible = Me$j.layout.panelsVisible && !monitorIsFullscreen;
        this.verticalPanelSpacer.visible =
            Me$j.layout.panelsVisible && !monitorIsFullscreen;
        super.setFullscreen(monitorIsFullscreen);
    }
    setTranslation(prevActor, nextActor) {
        const indexOfPrevActor = Me$j.msWorkspaceManager.primaryMsWorkspaces.findIndex((msWorkspace) => {
            return msWorkspace.msWorkspaceActor === prevActor;
        });
        const indexOfNextActor = Me$j.msWorkspaceManager.primaryMsWorkspaces.findIndex((msWorkspace) => {
            return msWorkspace.msWorkspaceActor === nextActor;
        });
        prevActor.height = nextActor.height = this.height;
        this.translationHelper.setTranslation([nextActor], Me$j.msWorkspaceManager.primaryMsWorkspaces.map((msWorkspace) => msWorkspace.msWorkspaceActor), indexOfNextActor > indexOfPrevActor ? 1 : -1);
    }
    setMsWorkspaceActor(actor) {
        if (actor === this.msWorkspaceActor)
            return;
        let prevActor;
        if (this.msWorkspaceActor) {
            prevActor = this.msWorkspaceActor;
        }
        else {
            reparentActor(actor, this.workspaceContainer);
        }
        this.msWorkspaceActor = actor;
        if (prevActor) {
            this.setTranslation(prevActor, this.msWorkspaceActor);
        }
    }
    updateSpacer() {
        super.updateSpacer();
        if (this.verticalPanelSpacer) {
            const panelWidth = Me$j.msThemeManager.getPanelSize();
            const panelPosition = Me$j.msThemeManager.verticalPanelPosition;
            this.verticalPanelSpacer.set_size(panelWidth, this.monitor.height);
            this.verticalPanelSpacer.set_position(panelPosition === VerticalPanelPositionEnum.LEFT
                ? 0
                : this.monitor.width - panelWidth, 0);
        }
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const panelBox = new Clutter$e.ActorBox();
        const panelPosition = Me$j.msThemeManager.verticalPanelPosition;
        if (this.panel) {
            const panelWidth = this.panel.get_preferred_width(-1)[1];
            panelBox.x1 =
                panelPosition === VerticalPanelPositionEnum.LEFT
                    ? box.x1
                    : box.x2 - panelWidth;
            panelBox.x2 = panelBox.x1 + panelWidth;
            panelBox.y1 = box.y1;
            panelBox.y2 = this.panel.get_preferred_height(-1)[1];
        }
        const msWorkspaceActorBox = box.copy();
        if (this.panel && this.panel.visible && Me$j.layout.panelsVisible) {
            if (panelPosition === VerticalPanelPositionEnum.LEFT) {
                msWorkspaceActorBox.x1 =
                    msWorkspaceActorBox.x1 + Me$j.msThemeManager.getPanelSize();
            }
            else {
                msWorkspaceActorBox.x2 =
                    msWorkspaceActorBox.x2 - Me$j.msThemeManager.getPanelSize();
            }
        }
        for (const child of this.get_children()) {
            if (child === this.panel) {
                child.allocate(panelBox);
            }
            else if (child === this.horizontalPanelSpacer) {
                this.horizontalPanelSpacer.allocate_preferred_size(this.horizontalPanelSpacer.x, this.horizontalPanelSpacer.y);
            }
            else if (child === this.verticalPanelSpacer) {
                this.verticalPanelSpacer.allocate_preferred_size(this.verticalPanelSpacer.x, this.verticalPanelSpacer.y);
            }
            else {
                child.allocate(msWorkspaceActorBox);
            }
        }
    }
};
PrimaryMonitorContainer.metaInfo = {
    GTypeName: 'PrimaryMonitorContainer',
};
PrimaryMonitorContainer = __decorate([
    registerGObjectClass
], PrimaryMonitorContainer);

const MIN_BASIS_RATIO = 0.1;
class Portion {
    constructor(basis = 100, vertical = false) {
        this._basis = basis;
        this.vertical = vertical;
        this.children = [];
        this.borders = [];
    }
    get state() {
        return {
            basis: this.basis,
            vertical: this.vertical,
            children: this.children.map((child) => child.state),
        };
    }
    set state(state) {
        this.basis = state.basis;
        this.vertical = state.vertical;
        this.children = state.children.map((childState) => {
            const child = new Portion();
            child.state = childState;
            return child;
        });
        this.updateBorders();
    }
    get portionLength() {
        return this.children.length
            ? this.children.reduce((sum, portion) => sum + portion.portionLength, 0)
            : 1;
    }
    get concatBorders() {
        return this.borders.concat(...this.children.map((portion) => {
            return portion.borders;
        }));
    }
    get basis() {
        return this._basis;
    }
    set basis(value) {
        if (value < 0) {
            value = 0;
        }
        this._basis = value;
    }
    updateBorders() {
        this.borders = [];
        if (this.children.length < 2) {
            return;
        }
        for (let i = 0; i < this.children.length - 1; i++) {
            const [firstPortion, secondPortion] = this.children.slice(i, i + 2);
            this.borders.push(new PortionBorder(firstPortion, secondPortion, this));
        }
    }
    hasPortion(portion) {
        for (let i = 0; i < this.children.length; i++) {
            const possiblePortion = this.children[i];
            if (possiblePortion === portion ||
                (possiblePortion.children.length > 0 &&
                    possiblePortion.hasPortion(portion))) {
                return true;
            }
        }
        return false;
    }
    insert(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }
        if (this.children.length === 0) {
            this.children.splice(0, 0, new Portion(basis, vertical));
        }
        this.children.splice(0, 0, new Portion(basis, vertical));
        this.updateBorders();
    }
    insertVertical(basis = 100) {
        this.insert(basis, true);
    }
    insertHorizontal(basis = 100) {
        this.insert(basis, false);
    }
    push(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }
        if (this.children.length === 0) {
            this.children.push(new Portion(basis, vertical));
        }
        this.children.push(new Portion(basis, vertical));
        this.updateBorders();
    }
    pushVertical(basis = 100) {
        this.push(basis, true);
    }
    pushHorizontal(basis = 100) {
        this.push(basis, false);
    }
    shift() {
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];
            return;
        }
        const child = this.children[0];
        if (child) {
            if (child.children.length) {
                child.shift();
            }
            else {
                this.children.shift();
            }
        }
        this.updateBorders();
    }
    pop() {
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];
            return;
        }
        const child = this.children[this.children.length - 1];
        if (child) {
            if (child.children.length) {
                child.pop();
            }
            else {
                this.children.pop();
            }
        }
        this.updateBorders();
    }
    rotateRight() {
        const firstChild = this.children.shift();
        if (firstChild)
            this.children.push(firstChild);
        this.updateBorders();
    }
    rotateLeft() {
        const lastChild = this.children.pop();
        if (lastChild)
            this.children.splice(0, 0, lastChild);
        this.updateBorders();
    }
    isBorderInSubPortion(index, after = false) {
        let portionIndex = 0;
        const afterOffset = after ? 1 : 0;
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index) {
                if (after ||
                    i - afterOffset < 0 ||
                    portion.children.length === 0) {
                    return false;
                }
            }
            if (portion.portionLength + portionIndex > index) {
                if (portion.children.length === 0) {
                    return false;
                }
                if (after) {
                    if (portionIndex === index) {
                        if (portion.children[0].portionLength > 1) {
                            return portion.children[0].isBorderInSubPortion(0, after);
                        }
                        else {
                            return false;
                        }
                    }
                    return true;
                }
                const lastPortion = portion.children[portion.children.length - 1];
                const portionIndexUntilLast = portion.portionLength +
                    portionIndex -
                    lastPortion.portionLength;
                if (index > portionIndexUntilLast) {
                    if (lastPortion.portionLength > 1) {
                        return lastPortion.isBorderInSubPortion(index - portionIndexUntilLast, after);
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            portionIndex += portion.portionLength;
        }
        return false;
    }
    getBorderForIndex(index, vertical = false, after = false) {
        let portionIndex = 0;
        const afterOffset = after ? 1 : 0;
        if (index >= this.portionLength) {
            return;
        }
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index) {
                if (i - afterOffset < 0) {
                    return;
                }
            }
            if (portion.portionLength + portionIndex > index) {
                if (this.vertical === vertical &&
                    !portion.isBorderInSubPortion(index - portionIndex, after)) {
                    return this.borders[i - afterOffset];
                }
                return portion.getBorderForIndex(index - portionIndex, vertical, after);
            }
            portionIndex += portion.portionLength;
        }
    }
    getRatioForIndex(index, ratio = { x: 0, y: 0, width: 1, height: 1 }) {
        let portionIndex = 0;
        if (index >= this.portionLength) {
            return;
        }
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index && portion.children.length === 0) {
                return this.getRatioForPortion(portion, ratio);
            }
            if (portion.portionLength + portionIndex > index) {
                return portion.getRatioForIndex(index - portionIndex, this.getRatioForPortion(portion, ratio));
            }
            portionIndex += portion.portionLength;
        }
        return ratio;
    }
    getRatioForPortion(portion, ratio = { x: 0, y: 0, width: 1, height: 1 }) {
        const basisTotal = this.children.reduce((sum, child) => sum + child.basis, 0);
        let basisSum = 0;
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            const hasPortion = child.hasPortion(portion);
            if (child !== portion && !hasPortion) {
                basisSum += child.basis;
                continue;
            }
            const [position, size] = this.vertical
                ? ['y', 'height']
                : ['x', 'width'];
            ratio[position] += ratio[size] * (basisSum / basisTotal);
            ratio[size] *= child.basis / basisTotal;
            if (hasPortion) {
                return child.getRatioForPortion(portion, ratio);
            }
            break;
        }
        return ratio;
    }
    convert() {
        this.vertical = !this.vertical;
        this.children.forEach((portion) => portion.convert());
    }
}
class PortionBorder {
    constructor(firstPortion, secondPortion, parentPortion) {
        this.firstPortion = firstPortion;
        this.secondPortion = secondPortion;
        this.parentPortion = parentPortion;
    }
    get vertical() {
        return !this.parentPortion.vertical;
    }
    updateBasis(basisRatio) {
        if (basisRatio < 0) {
            basisRatio = 0;
        }
        const basisSum = this.firstPortion.basis + this.secondPortion.basis;
        this.firstPortion.basis *= basisRatio;
        if (this.firstPortion.basis / basisSum < MIN_BASIS_RATIO) {
            this.firstPortion.basis = MIN_BASIS_RATIO * basisSum;
        }
        else if (this.firstPortion.basis / basisSum > 1 - MIN_BASIS_RATIO) {
            this.firstPortion.basis = (1 - MIN_BASIS_RATIO) * basisSum;
        }
        else if (this.firstPortion.basis / basisSum > 0.24 &&
            this.firstPortion.basis / basisSum < 0.26) {
            this.firstPortion.basis = basisSum * 0.25;
        }
        else if (this.firstPortion.basis / basisSum > 0.49 &&
            this.firstPortion.basis / basisSum < 0.51) {
            this.firstPortion.basis = basisSum * 0.5;
        }
        else if (this.firstPortion.basis / basisSum > 0.74 &&
            this.firstPortion.basis / basisSum < 0.76) {
            this.firstPortion.basis = basisSum * 0.75;
        }
        this.secondPortion.basis = basisSum - this.firstPortion.basis;
    }
}

const Clutter$d = imports.gi.Clutter;
const Gio$6 = imports.gi.Gio;
const GLib$d = imports.gi.GLib;
const Me$i = imports.misc.extensionUtils.getCurrentExtension();
let BaseTilingLayout = class BaseTilingLayout extends Clutter$d.LayoutManager {
    _init(msWorkspace, state = {}) {
        super._init();
        this.lastObservedTileableList = [];
        this._state = Object.assign({}, this.constructor.state, state);
        this.icon = Gio$6.icon_new_for_string(`${Me$i.path}/assets/icons/tiling/${this._state.key}-symbolic.svg`);
        this.msWorkspace = msWorkspace;
        this.themeSettings = getSettings('theme');
        this.signals = [];
        this.registerToSignals();
        GLib$d.idle_add(GLib$d.PRIORITY_DEFAULT, () => {
            this.afterInit();
            return GLib$d.SOURCE_REMOVE;
        });
    }
    afterInit() {
        this.onTileableListChanged(this.msWorkspace.tileableList);
    }
    get preferredFocusHistory() {
        return 'chronological';
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get tileableContainer() {
        return this.msWorkspace.msWorkspaceActor.tileableContainer;
    }
    get monitor() {
        return this.msWorkspace.monitor;
    }
    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => {
            if (tileable === this.msWorkspace.appLauncher) {
                return (tileable === this.msWorkspace.tileableFocused ||
                    this.msWorkspace.tileableList.length === 1);
            }
            else {
                return tileable.visible;
            }
        });
    }
    registerToSignals() {
        this.signals.push({
            from: this.msWorkspace,
            id: this.msWorkspace.connect('tileableList-changed', (_, tileableList) => {
                this.onTileableListChanged(tileableList);
            }),
        }, {
            from: this.msWorkspace,
            id: this.msWorkspace.connect('tileable-focus-changed', (_, tileable, oldTileable) => {
                this.onFocusChanged(tileable, oldTileable);
            }),
        }, {
            from: global.display,
            id: global.display.connect('workareas-changed', this.onWorkAreasChanged.bind(this)),
        });
    }
    shouldBeVisible(_tileable) {
        return true;
    }
    initializeTileable(tileable) {
        if (tileable === this.msWorkspace.appLauncher &&
            tileable !== this.msWorkspace.tileableFocused) {
            this.msWorkspace.appLauncher.hide();
        }
        if (this.shouldBeVisible(tileable)) {
            if (!tileable.get_parent()) {
                this.tileableContainer.add_child(tileable);
            }
        }
        else {
            if (tileable.get_parent() === this.tileableContainer) {
                this.tileableContainer.remove_child(tileable);
            }
        }
    }
    restoreTileable(_tileable) { }
    tileTileable(_tileable, _box, _index, _siblingLength) {
    }
    resolveBox(box) {
        if (!box) {
            box = new Clutter$d.ActorBox();
            box.x2 = InfinityTo0(this.tileableContainer.allocation.get_width());
            box.y2 = InfinityTo0(this.tileableContainer.allocation.get_height());
        }
        return box;
    }
    tileAll(box) {
        const resolvedBox = this.resolveBox(box);
        for (const tileable of this.tileableListVisible) {
            if (tileable instanceof MsWindow && tileable.dragged)
                return;
            this.tileTileable(tileable, resolvedBox, this.tileableListVisible.indexOf(tileable), this.tileableListVisible.length);
            if (tileable instanceof MsWindow) {
                tileable.updateMetaWindowPositionAndSize();
            }
        }
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
        actor.set_scale(0.8, 0.8);
        actor.translation_x = actor.width * 0.1;
        actor.translation_y = actor.height * 0.1;
        actor.opacity = 0;
        actor.ease({
            scale_x: 1,
            scale_y: 1,
            translation_x: 0,
            translation_y: 0,
            opacity: 255,
            duration: 250,
            mode: Clutter$d.AnimationMode.EASE_OUT_QUAD,
        });
    }
    hideAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.ease({
            scale_x: 0.8,
            scale_y: 0.8,
            translation_x: actor.width * 0.1,
            translation_y: actor.height * 0.1,
            opacity: 0,
            duration: 250,
            mode: Clutter$d.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                actor.set_scale(1, 1);
                actor.translation_x = 0;
                actor.translation_y = 0;
                actor.opacity = 255;
                actor.visible = false;
            },
        });
    }
    onTileableListChanged(tileableList) {
        const { added: enteringTileableList, removed: leavingTileableList } = diffLists(this.lastObservedTileableList, tileableList);
        this.lastObservedTileableList = [...tileableList];
        for (const tileable of enteringTileableList) {
            this.initializeTileable(tileable);
        }
        for (const tileable of leavingTileableList) {
            if (tileable instanceof MsWindow &&
                Me$i.msWindowManager.msWindowList.includes(tileable)) {
                this.restoreTileable(tileable);
            }
        }
        if (this.msWorkspace.appLauncher.visible &&
            this.msWorkspace.tileableFocused !== this.msWorkspace.appLauncher) {
            this.hideAppLauncher();
        }
        if (tileableList.length == 1 && !this.msWorkspace.appLauncher.visible) {
            this.showAppLauncher();
        }
        this.tileAll();
        this.layout_changed();
    }
    onWorkAreasChanged() { }
    onFocusChanged(tileable, oldTileable) {
        if (tileable === this.msWorkspace.appLauncher) {
            this.tileAll();
            GLib$d.idle_add(GLib$d.PRIORITY_DEFAULT, () => {
                this.showAppLauncher();
                return GLib$d.SOURCE_REMOVE;
            });
        }
        else if (oldTileable === this.msWorkspace.appLauncher) {
            this.hideAppLauncher();
            this.tileAll();
        }
    }
    getWorkspaceBounds() {
        const box = this.msWorkspace.msWorkspaceActor.tileableContainer.allocation;
        return {
            x: 0,
            y: 0,
            width: box.get_width(),
            height: box.get_height(),
        };
    }
    applyGaps(x, y, width, height, screenGap, gap) {
        gap = gap || Me$i.layoutManager.gap;
        if (screenGap == undefined) {
            screenGap = Me$i.layoutManager.useScreenGap
                ? Me$i.layoutManager.screenGap
                : gap;
        }
        if ((!gap && !screenGap) ||
            this.msWorkspace.tileableList.length < 2) {
            return { x, y, width, height };
        }
        const bounds = this.getWorkspaceBounds();
        const edgeGap = screenGap;
        const halfGap = gap / 2;
        if (x === bounds.x) {
            x += edgeGap;
            width -= edgeGap;
        }
        else {
            x += halfGap;
            width -= halfGap;
        }
        if (y === bounds.y) {
            y += edgeGap;
            height -= edgeGap;
        }
        else {
            y += halfGap;
            height -= halfGap;
        }
        if (x + width === bounds.x + bounds.width) {
            width -= edgeGap;
        }
        else {
            width -= halfGap;
        }
        if (y + height === bounds.y + bounds.height) {
            height -= edgeGap;
        }
        else {
            height -= halfGap;
        }
        if (x < 0)
            x = 0;
        if (y < 0)
            y = 0;
        if (width < 1)
            width = 1;
        if (height < 1)
            height = 1;
        return { x, y, width, height };
    }
    buildQuickWidget() {
    }
    vfunc_get_preferred_width(_container, _forHeight) {
        return [-1, -1];
    }
    vfunc_get_preferred_height(_container, _forWidth) {
        return [-1, -1];
    }
    vfunc_allocate(container, box) {
        this.tileAll(box);
        container.get_children().forEach((actor) => {
            if (this.msWorkspace.tileableList.includes(actor)) {
                actor.allocate_preferred_size(actor.x, actor.y);
            }
            else {
                actor.allocate(box);
            }
        });
    }
    onDestroy() {
        this.signals.forEach((signal) => {
            try {
                signal.from.disconnect(signal.id);
            }
            catch (error) {
                Me$i.log(`Failed to disconnect signal ${signal.id} from ${signal.from} ${signal.from.constructor.name} ${signal.from.toString()}  `);
            }
        });
        if (!Me$i.disableInProgress) {
            this.msWorkspace.tileableList.forEach((tileable) => {
                this.restoreTileable(tileable);
            });
        }
    }
};
BaseTilingLayout = __decorate([
    registerGObjectClass
], BaseTilingLayout);

const { round } = Math;
const Clutter$c = imports.gi.Clutter;
const Cogl = imports.gi.Cogl;
const GObject$1 = imports.gi.GObject;
const Meta$6 = imports.gi.Meta;
const St$5 = imports.gi.St;
const Me$h = imports.misc.extensionUtils.getCurrentExtension();
const BORDER_WIDTH = 2;
let BaseResizeableTilingLayout = class BaseResizeableTilingLayout extends BaseTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.mainPortion = new Portion();
        if (state.mainPortion) {
            this.mainPortion.state = state.mainPortion;
            delete state.mainPortion;
        }
        this.currentFocusEffect = Me$h.msThemeManager.focusEffect;
        this.onGapChange();
    }
    registerToSignals() {
        super.registerToSignals();
        this.signals.push({
            from: Me$h.layoutManager,
            id: Me$h.layoutManager.connect('gap-changed', this.onGapChange.bind(this)),
        }, {
            from: Me$h.msThemeManager,
            id: Me$h.msThemeManager.connect('focus-effect-changed', this.onFocusEffectChanged.bind(this)),
        });
    }
    get state() {
        return Object.assign({}, this._state, {
            mainPortion: this.mainPortion.state,
        });
    }
    onGapChange() {
        if (!Me$h.layoutManager.someGap) {
            if (!this.borderContainer) {
                this.borderActorList = [];
                this.borderContainer = new Clutter$c.Actor();
                this.msWorkspace.msWorkspaceActor.add_child(this.borderContainer);
                this.updateBordersActor();
            }
        }
        else {
            if (this.borderContainer) {
                this.borderContainer.destroy();
                delete this.borderContainer;
                delete this.borderActorList;
            }
        }
    }
    getTileableIndex(tileable) {
        return this.tileableListVisible.indexOf(tileable);
    }
    getTileablePortionRatio(tileable) {
        const index = this.getTileableIndex(tileable);
        if (index < 0) {
            return;
        }
        return this.mainPortion.getRatioForIndex(index);
    }
    getTileableBorder(tileable, vertical = false, after = false) {
        const index = this.getTileableIndex(tileable);
        if (index < 0) {
            return;
        }
        return this.mainPortion.getBorderForIndex(index, vertical, after);
    }
    applyBoxRatio(box, ratio) {
        return {
            x: round(box.x1 + ratio.x * box.get_width()),
            y: round(box.y1 + ratio.y * box.get_height()),
            width: round(ratio.width * box.get_width()),
            height: round(ratio.height * box.get_height()),
        };
    }
    applyBoxRatioAndGaps(box, ratio) {
        const { x, y, width, height } = this.applyBoxRatio(box, ratio);
        return this.applyGaps(x, y, width, height);
    }
    tileTileable(tileable, box) {
        const ratio = this.getTileablePortionRatio(tileable);
        if (!ratio) {
            return;
        }
        const { x, y, width, height } = this.applyBoxRatioAndGaps(box, ratio);
        tileable.x = x;
        tileable.y = y;
        tileable.width = width;
        tileable.height = height;
    }
    applyGaps(x, y, width, height) {
        const gap = Me$h.layoutManager.gap || BORDER_WIDTH;
        const screenGap = Me$h.layoutManager.useScreenGap
            ? Me$h.layoutManager.screenGap
            : Me$h.layoutManager.gap;
        return super.applyGaps(x, y, width, height, screenGap, gap);
    }
    updateMainPortionLength(length) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (length > 1 && this.mainPortion.portionLength < length) {
            this.mainPortion.push();
        }
    }
    tileAll(box) {
        box = this.resolveBox(box);
        this.updateMainPortionLength(this.tileableListVisible.length);
        if (this.borderContainer) {
            this.updateBordersActor();
            this.updateBordersPosition(box);
        }
        super.tileAll(box);
    }
    updateBordersActor() {
        assert(this.borderActorList !== undefined, 'Layout has no borders');
        assert(this.borderContainer !== undefined, 'Layout has no borders');
        const borderLength = this.mainPortion.concatBorders.length;
        if (this.borderActorList.length < borderLength) {
            for (let i = 0; i <= borderLength - this.borderActorList.length; i++) {
                const actor = new ResizableBorderActor();
                this.borderActorList.push(actor);
                this.borderContainer.add_child(actor);
            }
        }
        else if (this.borderActorList.length > borderLength) {
            this.borderActorList
                .splice(borderLength, this.borderActorList.length - borderLength)
                .forEach((actor) => {
                actor.destroy();
            });
        }
    }
    updateBordersPosition(box) {
        const borderActorList = this.borderActorList;
        assert(borderActorList !== undefined, 'Layout has no borders');
        this.mainPortion.concatBorders.forEach((portionBorder, index) => {
            const actor = borderActorList[index];
            actor.portionBorder = portionBorder;
            const ratio = this.mainPortion.getRatioForPortion(portionBorder.firstPortion);
            const { x, y, width, height } = this.applyBoxRatio(box, ratio);
            const scaledBorderWidth = Me$h.msThemeManager.getScaledSize(BORDER_WIDTH);
            if (portionBorder.vertical) {
                actor.x = x + width - scaledBorderWidth / 2;
                actor.y = y;
                actor.height = height;
                actor.width = scaledBorderWidth;
            }
            else {
                actor.x = x;
                actor.y = y + height - scaledBorderWidth / 2;
                actor.height = scaledBorderWidth;
                actor.width = width;
            }
        });
    }
    initializeTileable(tileable) {
        this.addUnFocusEffect(tileable, this.currentFocusEffect, tileable === this.msWorkspace.tileableFocused);
        super.initializeTileable(tileable);
    }
    restoreTileable(tileable) {
        this.removeUnFocusEffect(tileable, this.currentFocusEffect);
        super.restoreTileable(tileable);
    }
    onFocusEffectChanged() {
        const oldFocusEffect = this.currentFocusEffect;
        this.currentFocusEffect = Me$h.msThemeManager.focusEffect;
        this.msWorkspace.tileableList.forEach((tileable) => {
            this.removeUnFocusEffect(tileable, oldFocusEffect);
            this.addUnFocusEffect(tileable, this.currentFocusEffect, tileable === this.msWorkspace.tileableFocused);
        });
    }
    onFocusChanged(tileable, oldTileable) {
        this.setUnFocusEffect(tileable, this.currentFocusEffect, true);
        if (oldTileable) {
            if (oldTileable instanceof MsWindow &&
                oldTileable.metaWindow &&
                oldTileable.metaWindow.fullscreen) {
                oldTileable.metaWindow.unmake_fullscreen();
            }
            this.setUnFocusEffect(oldTileable, this.currentFocusEffect, false);
        }
        super.onFocusChanged(tileable, oldTileable);
    }
    addUnFocusEffect(tileable, effect, focused) {
        if (!tileable || tileable.focusEffects)
            return;
        if (effect === FocusEffectEnum.DEFAULT) {
            const dimmer = new Clutter$c.BrightnessContrastEffect({
                name: 'dimmer',
                brightness: focused
                    ? Clutter$c.Color.new(127, 127, 127, 255)
                    : Clutter$c.Color.new(100, 100, 100, 255),
            });
            tileable.focusEffects = {
                dimmer,
            };
            tileable.add_effect(dimmer);
        }
        else if (effect === FocusEffectEnum.BORDER) {
            const border = new PrimaryBorderEffect({
                name: 'border',
                opacity: focused ? 1.0 : 0.0,
            });
            tileable.focusEffects = {
                border,
            };
            tileable.add_effect(border);
        }
    }
    removeUnFocusEffect(tileable, effect) {
        if (!tileable || !tileable.focusEffects)
            return;
        tileable.remove_all_transitions();
        if (effect === FocusEffectEnum.DEFAULT) {
            assert(tileable.focusEffects.dimmer !== undefined, "Tilable doesn't have the dimmer effect");
            tileable.remove_effect(tileable.focusEffects.dimmer);
        }
        else if (effect === FocusEffectEnum.BORDER) {
            assert(tileable.focusEffects.border !== undefined, "Tilable doesn't have the border effect");
            tileable.remove_effect(tileable.focusEffects.border);
        }
        delete tileable.focusEffects;
    }
    setUnFocusEffect(tileable, effect, focused) {
        if (!tileable)
            return;
        if (effect === FocusEffectEnum.DEFAULT) {
            if (!focused) {
                this.addUnFocusEffect(tileable, effect, !focused);
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property('@effects.dimmer.brightness', Clutter$c.Color.new(100, 100, 100, 255), {
                        mode: Clutter$c.AnimationMode.EASE_OUT_QUAD,
                        duration: 150,
                    });
                }
            }
            else {
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property('@effects.dimmer.brightness', Clutter$c.Color.new(127, 127, 127, 255), {
                        duration: 150,
                        mode: Clutter$c.AnimationMode.EASE_OUT_QUAD,
                        onComplete: () => {
                            this.removeUnFocusEffect(tileable, effect);
                        },
                    });
                }
            }
        }
        else if (effect === FocusEffectEnum.BORDER) {
            if (focused) {
                this.addUnFocusEffect(tileable, effect, focused);
            }
            else {
                this.removeUnFocusEffect(tileable, effect);
            }
        }
    }
    onDestroy() {
        if (this.borderContainer) {
            this.borderContainer.destroy();
        }
        super.onDestroy();
    }
};
BaseResizeableTilingLayout = __decorate([
    registerGObjectClass
], BaseResizeableTilingLayout);
let ResizableBorderActor = class ResizableBorderActor extends St$5.Widget {
    _init() {
        super._init({ reactive: true, track_hover: true });
        this.set_background_color(new Clutter$c.Color({ red: 10, green: 10, blue: 10, alpha: 255 }));
        this.connect('event', (actor, event) => {
            const eventType = event.type();
            switch (eventType) {
                case Clutter$c.EventType.BUTTON_PRESS:
                case Clutter$c.EventType.TOUCH_BEGIN: {
                    const border = this.portionBorder;
                    assert(border !== undefined, 'Actor has no border');
                    Me$h.msWindowManager.msResizeManager.startResize(border);
                    break;
                }
                case Clutter$c.EventType.ENTER:
                    Me$h.msThemeManager.setCursor(Meta$6.Cursor.MOVE_OR_RESIZE_WINDOW);
                    break;
                case Clutter$c.EventType.LEAVE:
                    Me$h.msThemeManager.setCursor(Meta$6.Cursor.DEFAULT);
                    break;
            }
        });
    }
    get vertical() {
        return this.height > this.width;
    }
};
ResizableBorderActor.metaInfo = {
    GTypeName: 'ResizableBorderActor',
    Signals: {
        'drag-start': {},
    },
};
ResizableBorderActor = __decorate([
    registerGObjectClass
], ResizableBorderActor);
let PrimaryBorderEffect = class PrimaryBorderEffect extends Clutter$c.Effect {
    _init(params) {
        super._init(params);
        this._pipeline = null;
        this.color = new Cogl.Color();
    }
    vfunc_paint_node(node, paintContext) {
        const framebuffer = paintContext.get_framebuffer();
        const coglContext = framebuffer.get_context();
        const actor = this.get_actor();
        actor.continue_paint(paintContext);
        if (!this._pipeline) {
            this._pipeline = new Cogl.Pipeline(coglContext);
        }
        if (this.color !== Me$h.msThemeManager.primaryColor) {
            this.color = Me$h.msThemeManager.primaryColor;
            const c = this.color.copy();
            c.set_alpha_float(this.opacity);
            c.premultiply();
            this._pipeline.set_color(c);
        }
        const alloc = actor.get_allocation_box();
        const width = 2;
        const allocWidth = alloc.get_width();
        const allocHeight = alloc.get_height();
        framebuffer.draw_rectangle(this._pipeline, 0, 0, allocWidth, width);
        framebuffer.draw_rectangle(this._pipeline, allocWidth - width, width, allocWidth, allocHeight);
        framebuffer.draw_rectangle(this._pipeline, 0, allocHeight, allocWidth - width, allocHeight - width);
        framebuffer.draw_rectangle(this._pipeline, 0, allocHeight - width, width, width);
    }
};
PrimaryBorderEffect.metaInfo = {
    GTypeName: 'PrimaryBorderEffect',
    Properties: {
        opacity: GObject$1.ParamSpec.float('opacity', 'opacity', 'opacity', GObject$1.ParamFlags.READWRITE, 0, 1, 1),
    },
};
PrimaryBorderEffect = __decorate([
    registerGObjectClass
], PrimaryBorderEffect);

let GridLayout = class GridLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        const columnLength = Math.ceil(Math.sqrt(length));
        const rowLength = Math.ceil(length / columnLength);
        while (this.mainPortion.children.length > columnLength) {
            this.mainPortion.pop();
        }
        while (columnLength > 1 &&
            this.mainPortion.children.length < columnLength) {
            this.mainPortion.push();
        }
        for (let i = 0; i < columnLength - 1; i++) {
            const column = this.mainPortion.children[i];
            while (column.children.length > rowLength) {
                column.pop();
            }
            while (rowLength > 1 && column.children.length < rowLength) {
                column.push();
            }
        }
        const lastColumn = this.mainPortion.children[columnLength - 1];
        if (lastColumn) {
            const lastRowLength = length - (columnLength - 1) * rowLength;
            while (lastColumn.children.length > lastRowLength) {
                lastColumn.pop();
            }
            while (lastRowLength > 1 &&
                lastColumn.children.length < lastRowLength) {
                lastColumn.push();
            }
        }
    }
};
GridLayout.state = { key: 'grid' };
GridLayout.label = 'Grid';
GridLayout = __decorate([
    registerGObjectClass
], GridLayout);

let HalfLayoutBase = class HalfLayoutBase extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (this.mainPortion.portionLength < length) {
            if (this.mainPortion.children.length === 0) {
                this.mainPortion.push();
            }
            else {
                this.mainPortion.children[1].push();
            }
        }
    }
    isVerticalLayout(box) {
        return box.get_width() < box.get_height();
    }
    tileAll(box) {
        box = this.resolveBox(box);
        const vertical = this.isVerticalLayout(box);
        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }
        super.tileAll(box);
    }
};
HalfLayoutBase = __decorate([
    registerGObjectClass
], HalfLayoutBase);
let HalfLayout = class HalfLayout extends HalfLayoutBase {
};
HalfLayout.state = { key: 'half' };
HalfLayout.label = 'Half';
HalfLayout = __decorate([
    registerGObjectClass
], HalfLayout);

let HalfHorizontalLayout = class HalfHorizontalLayout extends HalfLayoutBase {
    isVerticalLayout() {
        return false;
    }
};
HalfHorizontalLayout.state = { key: 'half-horizontal' };
HalfHorizontalLayout.label = 'Half horizontal';
HalfHorizontalLayout = __decorate([
    registerGObjectClass
], HalfHorizontalLayout);

let HalfVerticalLayout = class HalfVerticalLayout extends HalfLayoutBase {
    isVerticalLayout() {
        return true;
    }
};
HalfVerticalLayout.state = { key: 'half-vertical' };
HalfVerticalLayout.label = 'Half vertical';
HalfVerticalLayout = __decorate([
    registerGObjectClass
], HalfVerticalLayout);

let RatioLayout = class RatioLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        const pushInPortion = (portion) => {
            if (portion.children.length === 2) {
                pushInPortion(portion.children[1]);
            }
            else {
                portion.push();
            }
        };
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (length > 1 && this.mainPortion.portionLength < length) {
            pushInPortion(this.mainPortion);
        }
    }
};
RatioLayout.state = { key: 'ratio' };
RatioLayout.label = 'Ratio';
RatioLayout = __decorate([
    registerGObjectClass
], RatioLayout);

const Clutter$b = imports.gi.Clutter;
let SimpleLayoutBase = class SimpleLayoutBase extends BaseResizeableTilingLayout {
    isVerticalLayout(box) {
        return box.get_width() < box.get_height();
    }
    tileAll(box) {
        if (!box) {
            box = new Clutter$b.ActorBox();
            box.x2 = this.tileableContainer.allocation.get_width();
            box.y2 = this.tileableContainer.allocation.get_height();
        }
        const vertical = this.isVerticalLayout(box);
        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }
        super.tileAll(box);
    }
};
SimpleLayoutBase = __decorate([
    registerGObjectClass
], SimpleLayoutBase);
let SimpleLayout = class SimpleLayout extends SimpleLayoutBase {
};
SimpleLayout.state = { key: 'simple' };
SimpleLayout.label = 'Simple';
SimpleLayout = __decorate([
    registerGObjectClass
], SimpleLayout);

let SimpleHorizontalLayout = class SimpleHorizontalLayout extends SimpleLayoutBase {
    isVerticalLayout() {
        return false;
    }
};
SimpleHorizontalLayout.state = { key: 'simple-horizontal' };
SimpleHorizontalLayout.label = 'Simple horizontal';
SimpleHorizontalLayout = __decorate([
    registerGObjectClass
], SimpleHorizontalLayout);

let SimpleVerticalLayout = class SimpleVerticalLayout extends SimpleLayoutBase {
    isVerticalLayout() {
        return true;
    }
};
SimpleVerticalLayout.state = { key: 'simple-vertical' };
SimpleVerticalLayout.label = 'Simple vertical';
SimpleVerticalLayout = __decorate([
    registerGObjectClass
], SimpleVerticalLayout);

const GLib$c = imports.gi.GLib;
let FloatLayout = class FloatLayout extends BaseTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.windowsRestacked();
    }
    registerToSignals() {
        super.registerToSignals();
        this.signals.push({
            from: global.display,
            id: global.display.connect('restacked', this.windowsRestacked.bind(this)),
        });
    }
    initializeTileable(tileable) {
        if (tileable instanceof MsWindow && tileable.metaWindow) {
            GLib$c.idle_add(GLib$c.PRIORITY_DEFAULT, () => {
                if (tileable.metaWindow) {
                    updateTitleBarVisibility(tileable.metaWindow);
                }
                tileable.mimicMetaWindowPositionAndSize();
                tileable.msContent.clip_to_allocation = false;
                return GLib$c.SOURCE_REMOVE;
            });
        }
        if (tileable === this.tileableFocused) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(tileable, null);
        }
        super.initializeTileable(tileable);
    }
    restoreTileable(tileable) {
        if (tileable instanceof MsWindow && tileable.metaWindow) {
            tileable.msContent.clip_to_allocation = true;
            GLib$c.idle_add(GLib$c.PRIORITY_DEFAULT, () => {
                if (tileable.metaWindow) {
                    updateTitleBarVisibility(tileable.metaWindow);
                }
                return GLib$c.SOURCE_REMOVE;
            });
        }
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.x = 0;
        actor.y = 0;
        actor.width = this.tileableContainer.allocation.get_width();
        actor.height = this.tileableContainer.allocation.get_height();
        super.showAppLauncher();
    }
    onFocusChanged(tileableFocused, oldTileable) {
        if (tileableFocused != this.msWorkspace.appLauncher &&
            this.msWorkspace.appLauncher.visible) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_below_sibling(tileableFocused, this.msWorkspace.appLauncher);
        }
        else {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(tileableFocused, null);
        }
        super.onFocusChanged(tileableFocused, oldTileable);
    }
    tileAll() {
        this.msWorkspace.tileableList.forEach((tileable) => {
            if (tileable.dragged)
                return;
            if (tileable === this.msWorkspace.appLauncher) {
                tileable.x = 0;
                tileable.y = 0;
                tileable.width = this.tileableContainer.allocation.get_width();
                tileable.height =
                    this.tileableContainer.allocation.get_height();
            }
            if (tileable instanceof MsWindow) {
                tileable.mimicMetaWindowPositionAndSize();
            }
        });
    }
    windowsRestacked() {
        global.window_group.get_children().forEach((actor) => {
            if (actor instanceof MsWindow &&
                actor.metaWindow &&
                actor.metaWindow.msWindow) {
                if (this.msWorkspace.tileableList.includes(actor.metaWindow.msWindow)) {
                    this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(actor.metaWindow.msWindow, null);
                }
            }
        });
    }
};
FloatLayout.state = { key: 'float' };
FloatLayout.label = 'Float';
FloatLayout = __decorate([
    registerGObjectClass
], FloatLayout);

const Me$g = imports.misc.extensionUtils.getCurrentExtension();
let MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.currentDisplayed = null;
        this.translationHelper = new TranslationHelper(this.tileableContainer);
        this.translationHelper.connect('transition-completed', () => {
            this.endTransition();
        });
    }
    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => tileable.visible);
    }
    displayTileable(actor) {
        if (this.translationHelper.animationInProgress)
            return;
        if (this.currentDisplayed) {
            if (logAssert(this.tileableContainer
                .get_children()
                .includes(this.currentDisplayed.tileable), 'Expected the currently displayed tileable to be a child of the tileable container')) {
                this.tileableContainer.remove_child(this.currentDisplayed.tileable);
            }
            this.currentDisplayed.tileable.disconnect(this.currentDisplayed.destroySignal);
        }
        this.currentDisplayed = {
            tileable: actor,
            destroySignal: actor.connect('destroy', () => {
                this.currentDisplayed = null;
            }),
        };
        reparentActor(actor, this.tileableContainer);
        if (this.msWorkspace.isDisplayed())
            actor.grab_key_focus();
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }
    hideAppLauncher() {
    }
    onFocusChanged(windowFocused, oldWindowFocused) {
        if (windowFocused.dragged || windowFocused === oldWindowFocused) {
            this.displayTileable(windowFocused);
        }
        else {
            this.startTransition(windowFocused, oldWindowFocused);
        }
    }
    shouldBeVisible(tileable) {
        var _a;
        return tileable === ((_a = this.currentDisplayed) === null || _a === void 0 ? void 0 : _a.tileable);
    }
    initializeTileable(tileable) {
        super.initializeTileable(tileable);
        tileable.visible = true;
        if (tileable === this.msWorkspace.tileableFocused) {
            this.displayTileable(tileable);
        }
    }
    restoreTileable(tileable) {
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
        if (this.translationHelper.animationInProgress) {
            tileable.translation_x = 0;
            tileable.translation_y = 0;
        }
    }
    tileTileable(tileable, box) {
        tileable.x = box.x1;
        tileable.y = box.y1;
        tileable.width = box.get_width();
        tileable.height = box.get_height();
    }
    startTransition(nextActor, prevActor) {
        const indexOfPrevActor = this.msWorkspace.tileableList.findIndex((tileable) => {
            return tileable === prevActor;
        });
        const indexOfNextActor = this.msWorkspace.tileableList.findIndex((tileable) => {
            return tileable === nextActor;
        });
        this.translationHelper.setTranslation([nextActor], this.msWorkspace.tileableList, indexOfNextActor > indexOfPrevActor ? 1 : -1);
    }
    endTransition() {
        var _a;
        if (this.msWorkspace.tileableFocused !== null) {
            for (const child of this.tileableContainer.get_children()) {
                if (child != this.msWorkspace.tileableFocused &&
                    child != ((_a = this.currentDisplayed) === null || _a === void 0 ? void 0 : _a.tileable)) {
                    this.tileableContainer.remove_child(child);
                }
            }
            this.displayTileable(this.msWorkspace.tileableFocused);
        }
    }
};
MaximizeLayout.state = { key: 'maximize' };
MaximizeLayout.label = 'Maximize';
MaximizeLayout = __decorate([
    registerGObjectClass
], MaximizeLayout);

const Clutter$a = imports.gi.Clutter;
const Gio$5 = imports.gi.Gio;
const GObject = imports.gi.GObject;
const St$4 = imports.gi.St;
const Me$f = imports.misc.extensionUtils.getCurrentExtension();
let MatNumberPicker = class MatNumberPicker extends St$4.BoxLayout {
    _init(value, params) {
        super._init({
            y_align: Clutter$a.ActorAlign.CENTER,
        });
        this.value = value;
        this.params = Object.assign({
            step: 1,
            min: 0,
            max: 999999,
        }, params);
        this.minIcon = new St$4.Icon({
            gicon: Gio$5.icon_new_for_string(`${Me$f.path}/assets/icons/minus-symbolic.svg`),
        });
        this.minButton = new St$4.Button({
            child: this.minIcon,
        });
        this.minButton.connect('clicked', () => {
            this.decrement();
        });
        this.plusIcon = new St$4.Icon({
            gicon: Gio$5.icon_new_for_string(`${Me$f.path}/assets/icons/plus-symbolic.svg`),
        });
        this.plusButton = new St$4.Button({
            child: this.plusIcon,
        });
        this.plusButton.connect('clicked', () => {
            this.increment();
        });
        this.valueLabel = new St$4.Label({
            text: this.value.toString(),
            y_align: Clutter$a.ActorAlign.CENTER,
        });
        this.add_child(this.minButton);
        this.add_child(this.valueLabel);
        this.add_child(this.plusButton);
    }
    decrement() {
        this.value = Math.max(this.params.min, this.value - this.params.step);
        this.updateValue();
    }
    increment() {
        this.value = Math.min(this.params.max, this.value + this.params.step);
        this.updateValue();
    }
    updateValue() {
        this.valueLabel.text = this.value.toString();
        this.emit('changed', this.value);
    }
};
MatNumberPicker.metaInfo = {
    GTypeName: 'MatNumberPicker',
    Signals: {
        changed: {
            param_types: [GObject.TYPE_INT],
        },
    },
};
MatNumberPicker = __decorate([
    registerGObjectClass
], MatNumberPicker);

let SplitLayout = class SplitLayout extends BaseResizeableTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.translationHelper = new TranslationHelper(this.tileableContainer);
        this.baseIndex = 0;
        this.activeTileableList = [];
        this.updateActiveTileableListFromFocused();
        this.vertical = this.monitor.width < this.monitor.height;
        this.translationHelper.connect('transition-completed', (_, actorsLeftList) => {
            this.endTransition(actorsLeftList);
        });
        if (this.mainPortion.vertical !== this.vertical) {
            this.mainPortion.convert();
        }
    }
    afterInit() {
        super.afterInit();
        this.refreshVisibleActors();
    }
    get tileableListVisible() {
        return this.activeTileableList;
    }
    get preferredFocusHistory() {
        return 'spatial';
    }
    updateActiveTileableListFromFocused() {
        this.baseIndex = Math.max(0, Math.min(this.msWorkspace.focusedIndex, this.msWorkspace.tileableList.length -
            this._state.nbOfColumns -
            1));
        this.activeTileableList = this.msWorkspace.tileableList.slice(this.baseIndex, this.baseIndex + this._state.nbOfColumns);
    }
    onTileableListChanged(newWindows) {
        super.onTileableListChanged(newWindows);
        this.updateActiveTileableListFromFocused();
        this.refreshVisibleActors();
    }
    refreshVisibleActors() {
        if (this.translationHelper.animationInProgress)
            return;
        for (const tileable of this.msWorkspace.tileableList) {
            if (this.activeTileableList.includes(tileable)) {
                tileable.show();
            }
            else {
                tileable.hide();
            }
        }
        this.msWorkspace.refreshFocus();
    }
    onFocusChanged(tileableFocused, _oldTileableFocused) {
        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        let newBaseIndex = this.baseIndex;
        newBaseIndex = Math.max(newBaseIndex, newIndex - this._state.nbOfColumns + 1);
        newBaseIndex = Math.min(newBaseIndex, newIndex);
        newBaseIndex = Math.min(newBaseIndex, this.msWorkspace.tileableList.length - this._state.nbOfColumns);
        newBaseIndex = Math.max(newBaseIndex, 0);
        const oldTileableList = this.activeTileableList;
        if (newBaseIndex !== this.baseIndex) {
            const direction = this.baseIndex > newBaseIndex ? -1 : 1;
            const nthChange = Math.abs(this.baseIndex - newBaseIndex);
            for (let index = 0; index < nthChange; index++) {
                if (direction > 0) {
                    this.mainPortion.rotateRight();
                }
                else {
                    this.mainPortion.rotateLeft();
                }
            }
            this.baseIndex = newBaseIndex;
            this.activeTileableList = this.msWorkspace.tileableList.slice(newBaseIndex, newBaseIndex + this._state.nbOfColumns);
            this.tileAll();
            this.startTransition(this.activeTileableList, direction);
        }
        for (const tileable of new Set([
            ...oldTileableList,
            ...this.activeTileableList,
        ])) {
            this.setUnFocusEffect(tileable, this.currentFocusEffect, tileable === tileableFocused);
        }
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }
    hideAppLauncher() {
    }
    shouldBeVisible(_tileable) {
        return true;
    }
    initializeTileable(tileable) {
        super.initializeTileable(tileable);
        tileable.visible = true;
    }
    restoreTileable(tileable) {
        super.restoreTileable(tileable);
        tileable.visible = true;
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
    }
    updateMainPortionLength(length) {
        super.updateMainPortionLength(length > this._state.nbOfColumns ? this._state.nbOfColumns : length);
    }
    getTileableIndex(tileable) {
        if (this.activeTileableList.includes(tileable)) {
            return this.activeTileableList.indexOf(tileable);
        }
        return -1;
    }
    tileAll(box) {
        if (!this.translationHelper.animationInProgress)
            super.tileAll(box);
    }
    startTransition(nextTileableList, direction) {
        if (this.borderContainer) {
            this.borderContainer.hide();
        }
        this.translationHelper.setTranslation(nextTileableList, this.msWorkspace.tileableList, direction);
    }
    endTransition(actorListToRemove) {
        if (this.borderContainer) {
            this.borderContainer.show();
        }
        for (const actor of actorListToRemove) {
            actor.hide();
        }
        this.msWorkspace.refreshFocus();
    }
    buildQuickWidget() {
        const widget = new MatNumberPicker(this._state.nbOfColumns, {
            min: 2,
        });
        widget.connect('changed', (_, newValue) => {
            this._state.nbOfColumns = newValue;
            this.updateActiveTileableListFromFocused();
            this.refreshVisibleActors();
            this.tileAll();
        });
        return widget;
    }
};
SplitLayout.state = { key: 'split', nbOfColumns: 2 };
SplitLayout.label = 'Split';
SplitLayout = __decorate([
    registerGObjectClass
], SplitLayout);

const GLib$b = imports.gi.GLib;
const { main: Main$b } = imports.ui;
const Me$e = imports.misc.extensionUtils.getCurrentExtension();
const layouts = [
    MaximizeLayout,
    SplitLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    SimpleLayout,
    SimpleHorizontalLayout,
    SimpleVerticalLayout,
    FloatLayout,
];
const TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.state.key] = layout;
    return layoutsByKey;
}, {});
class LayoutManager extends MsManager {
    constructor() {
        super();
        this.workspaceManager = global.workspace_manager;
        this.layoutList = layouts;
        this.layoutsSettings = getSettings('layouts');
        this.observe(this.layoutsSettings, 'changed::gap', (schema) => {
            this.gap = schema.get_int('gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::use-screen-gap', (schema) => {
            this.useScreenGap = schema.get_boolean('use-screen-gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::screen-gap', (schema) => {
            this.screenGap = schema.get_int('screen-gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::tween-time', (schema) => {
            this.tweenTime = schema.get_double('tween-time');
        });
        this.observe(this.layoutsSettings, 'changed::ratio-value', (schema) => {
            this.ratio = schema.get_double('ratio-value');
            this.tileWindows();
        });
        this.ratio = this.layoutsSettings.get_double('ratio-value');
        this.gap = this.layoutsSettings.get_int('gap');
        this.useScreenGap = this.layoutsSettings.get_boolean('use-screen-gap');
        this.screenGap = this.layoutsSettings.get_int('screen-gap');
        this.tweenTime = this.layoutsSettings.get_double('tween-time');
    }
    get someGap() {
        return this.gap != 0 || (this.useScreenGap && this.screenGap != 0);
    }
    get defaultLayoutKeyList() {
        return layouts
            .map((layout) => layout.state.key)
            .filter((layoutKey) => this.layoutsSettings.get_boolean(layoutKey));
    }
    get defaultLayoutKey() {
        return this.layoutsSettings.get_string('default-layout');
    }
    getLayoutListFromKeys(layoutKeys) {
        return layoutKeys.map((layoutKey) => {
            return TilingLayoutByKey[layoutKey];
        });
    }
    createLayout(workspace, state) {
        switch (state.key) {
            case 'maximize':
                return new MaximizeLayout(workspace, state);
            case 'split':
                return new SplitLayout(workspace, state);
            case 'grid':
                return new GridLayout(workspace, state);
            case 'half':
                return new HalfLayout(workspace, state);
            case 'half-horizontal':
                return new HalfHorizontalLayout(workspace, state);
            case 'half-vertical':
                return new HalfVerticalLayout(workspace, state);
            case 'ratio':
                return new RatioLayout(workspace, state);
            case 'simple':
                return new SimpleLayout(workspace, state);
            case 'simple-horizontal':
                return new SimpleHorizontalLayout(workspace, state);
            case 'simple-vertical':
                return new SimpleVerticalLayout(workspace, state);
            case 'float':
                return new FloatLayout(workspace, state);
        }
    }
    getLayoutByKey(key) {
        return TilingLayoutByKey[key];
    }
    tileWindows() {
        if (this.tilingInProgress)
            return;
        this.tilingInProgress = true;
        GLib$b.idle_add(GLib$b.PRIORITY_DEFAULT, () => {
            for (const monitor of Main$b.layoutManager.monitors) {
                let msWorkspace;
                if (monitor.index === Main$b.layoutManager.primaryIndex) {
                    msWorkspace =
                        Me$e.msWorkspaceManager.getActivePrimaryMsWorkspace();
                }
                else {
                    msWorkspace =
                        Me$e.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitor.index)[0];
                }
                const layout = msWorkspace.layout;
                layout.tileAll();
            }
            this.tilingInProgress = false;
            return GLib$b.SOURCE_REMOVE;
        });
    }
}

const Clutter$9 = imports.gi.Clutter;
const Gio$4 = imports.gi.Gio;
const GLib$a = imports.gi.GLib;
const Soup = imports.gi.Soup;
const { main: Main$a, messageTray } = imports.ui;
const Dialog = imports.ui.dialog;
const ModalDialog = imports.ui.modalDialog;
const { PACKAGE_VERSION } = imports.misc.config;
const Me$d = imports.misc.extensionUtils.getCurrentExtension();
const API_SERVER = 'http://api.material-shell.com';
const beforeGnome43 = compareVersions(gnomeVersionNumber, parseVersion('43.0')) < 0;
class MsNotificationManager extends MsManager {
    constructor() {
        super();
        this.httpSession = new Soup.Session();
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications'))
            return;
        let uuid = Me$d.stateManager.getState('notification-uuid');
        if (!uuid) {
            uuid = GLib$a.uuid_string_random();
            Me$d.stateManager.setState('notification-uuid', uuid);
        }
        const previousCheck = Me$d.stateManager.getState('notification-check')
            ? new Date(Me$d.stateManager.getState('notification-check'))
            : new Date();
        const message = Soup.Message.new('GET', `${API_SERVER}/notifications?lastCheck=${previousCheck.toISOString()}&uuid=${uuid}&gnomeVersion=${PACKAGE_VERSION}&version=${Me$d.metadata.version}&commit=${Me$d.metadata.commit}`);
        if (beforeGnome43) {
            this.httpSession.queue_message(message, () => {
                if (message.status_code != Soup.KnownStatusCode.OK) {
                    Me$d.log(`error fetching notification: ${message.status_code.toString()}`);
                    return;
                }
                let notifications = [];
                try {
                    notifications = JSON.parse(message.response_body.data);
                }
                catch (e) {
                    Me$d.log(`error unpacking notification: ${e}`);
                    return;
                }
                this.showNotifications(notifications);
            });
        }
        else {
            this.httpSession.send_and_read_async(message, GLib$a.PRIORITY_DEFAULT, new Gio$4.Cancellable(), (session, result) => {
                if (session && message.status_code === Soup.Status.OK) {
                    const bytes = session.send_and_read_finish(result);
                    const decoder = new TextDecoder('utf-8');
                    const response = decoder.decode(bytes.get_data());
                    let notifications;
                    try {
                        notifications = JSON.parse(response);
                    }
                    catch (e) {
                        Me$d.log(`error unpacking notification: ${e}`);
                        return;
                    }
                    this.showNotifications(notifications);
                }
            });
        }
        Me$d.stateManager.setState('notification-check', new Date().toISOString());
    }
    showNotifications(notifications) {
        const source = new MsNotificationSource();
        notifications.forEach((notificationData) => {
            Main$a.messageTray.add(source);
            const notification = new MsNotification(source, notificationData.title, notificationData.content, notificationData.icon, notificationData.action);
            source.showNotification(notification);
        });
    }
}
let MsNotificationSource = class MsNotificationSource extends messageTray.Source {
    _init() {
        super._init('Material Shell');
    }
    getIcon() {
        return Gio$4.icon_new_for_string(`${Me$d.path}/assets/icons/on-dark-small.svg`);
    }
};
MsNotificationSource = __decorate([
    registerGObjectClass
], MsNotificationSource);
let MsNotification = class MsNotification extends messageTray.Notification {
    _init(source, title, text, icon, action) {
        const params = {};
        if (icon) {
            params.gicon = Gio$4.icon_new_for_string(`${Me$d.path}/assets/icons/${icon}.svg`);
        }
        super._init(source, title, text, params);
        this.action = action;
        this.bannerBodyMarkup = true;
    }
    activate() {
        super.activate();
        const dialog = new MsNotificationDialog(this.title, this.bannerBodyText, this.action);
        dialog.open(global.get_current_time());
    }
};
MsNotification = __decorate([
    registerGObjectClass
], MsNotification);
let MsNotificationDialog = class MsNotificationDialog extends ModalDialog.ModalDialog {
    _init(title, text, action) {
        super._init({ styleClass: '' });
        const actions = [
            {
                label: _('Cancel'),
                action: this._onCancelButtonPressed.bind(this),
                key: Clutter$9.KEY_Escape,
            },
        ];
        if (action) {
            actions.push({
                default: true,
                label: action.label,
                action: () => {
                    Gio$4.AppInfo.launch_default_for_uri(action.url, global.create_app_launch_context(0, -1));
                    this.close();
                },
            });
        }
        this.setButtons(actions);
        const content = new Dialog.MessageDialogContent({
            title: title,
            description: text,
        });
        content._description.get_clutter_text().use_markup = true;
        this.contentLayout.add(content);
    }
    _onCancelButtonPressed() {
        this.close();
    }
};
MsNotificationDialog = __decorate([
    registerGObjectClass
], MsNotificationDialog);

const GLib$9 = imports.gi.GLib;
const Meta$5 = imports.gi.Meta;
const Shell$2 = imports.gi.Shell;
const { main: Main$9 } = imports.ui;
const Me$c = imports.misc.extensionUtils.getCurrentExtension();
const KeyBindingAction = {
    PREVIOUS_WINDOW: 'previous-window',
    NEXT_WINDOW: 'next-window',
    APP_LAUNCHER: 'app-launcher',
    KILL_FOCUSED_WINDOW: 'kill-focused-window',
    MOVE_WINDOW_LEFT: 'move-window-left',
    MOVE_WINDOW_RIGHT: 'move-window-right',
    MOVE_WINDOW_TOP: 'move-window-top',
    MOVE_WINDOW_BOTTOM: 'move-window-bottom',
    RESIZE_WINDOW_LEFT: 'resize-window-left',
    RESIZE_WINDOW_UP: 'resize-window-up',
    RESIZE_WINDOW_RIGHT: 'resize-window-right',
    RESIZE_WINDOW_DOWN: 'resize-window-down',
    FOCUS_MONITOR_LEFT: 'focus-monitor-left',
    FOCUS_MONITOR_UP: 'focus-monitor-up',
    FOCUS_MONITOR_RIGHT: 'focus-monitor-right',
    FOCUS_MONITOR_DOWN: 'focus-monitor-down',
    MOVE_WINDOW_MONITOR_LEFT: 'move-window-monitor-left',
    MOVE_WINDOW_MONITOR_UP: 'move-window-monitor-up',
    MOVE_WINDOW_MONITOR_RIGHT: 'move-window-monitor-right',
    MOVE_WINDOW_MONITOR_DOWN: 'move-window-monitor-down',
    CYCLE_TILING_LAYOUT: 'cycle-tiling-layout',
    REVERSE_CYCLE_TILING_LAYOUT: 'reverse-cycle-tiling-layout',
    TOGGLE_MATERIAL_SHELL_UI: 'toggle-material-shell-ui',
    PREVIOUS_WORKSPACE: 'previous-workspace',
    NEXT_WORKSPACE: 'next-workspace',
    LAST_WORKSPACE: 'last-workspace',
};
class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.settings = getSettings('bindings');
        this.actionIdToNameMap = new Map();
        this.actionNameToActionMap = new Map();
        this.lastStash = null;
        this.nextStash = null;
        this.resetStash();
        this.connectId = global.window_manager.connect('switch-workspace', (_, from, _to) => {
            if (this.lastStash !== null && from != this.lastStash) {
                this.resetStash();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WINDOW, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusPreviousTileable();
        });
        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WINDOW, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusNextTileable();
        });
        this.actionNameToActionMap.set(KeyBindingAction.APP_LAUNCHER, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusAppLauncher();
        });
        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WORKSPACE, () => {
            Me$c.msWorkspaceManager.activatePreviousMsWorkspace();
        });
        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WORKSPACE, () => {
            Me$c.msWorkspaceManager.activateNextMsWorkspace();
        });
        this.actionNameToActionMap.set(KeyBindingAction.LAST_WORKSPACE, () => {
            const currentIndex = this.workspaceManager.get_active_workspace_index();
            const lastIndex = this.workspaceManager.n_workspaces - 1;
            if (currentIndex < lastIndex) {
                Me$c.msWorkspaceManager.primaryMsWorkspaces[lastIndex].activate();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.KILL_FOCUSED_WINDOW, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            if (msWorkspace.tileableFocused instanceof MsWindow) {
                msWorkspace.tileableFocused.kill();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_LEFT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                msWorkspace.swapTileableLeft(focused);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_RIGHT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                msWorkspace.swapTileableRight(focused);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_TOP, () => {
            const activeMsWorkspace = Me$c.msWorkspaceManager.getActivePrimaryMsWorkspace();
            if (activeMsWorkspace.tileableFocused instanceof
                MsApplicationLauncher ||
                activeMsWorkspace.tileableFocused == null) {
                return;
            }
            if (activeMsWorkspace ===
                Me$c.msWorkspaceManager.primaryMsWorkspaces[0]) {
                if (!Me$c.msWorkspaceManager.shouldCycleWorkspacesNavigation() &&
                    (!Meta$5.prefs_get_dynamic_workspaces() ||
                        activeMsWorkspace.msWindowList.length === 1)) {
                    return;
                }
                const nextMsWorkspace = Me$c.msWorkspaceManager.primaryMsWorkspaces[Me$c.msWorkspaceManager.primaryMsWorkspaces.length - 1];
                Me$c.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
                if (!Me$c.msWorkspaceManager.shouldCycleWorkspacesNavigation()) {
                    Me$c.msWorkspaceManager.setMsWorkspaceAt(nextMsWorkspace, 0);
                }
                nextMsWorkspace.activate();
                return;
            }
            const currentMsWorkspaceIndex = Me$c.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
            const nextMsWorkspace = Me$c.msWorkspaceManager.primaryMsWorkspaces[currentMsWorkspaceIndex - 1];
            Me$c.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
            nextMsWorkspace.activate();
        });
        Meta$5.keybindings_set_custom_handler('move-to-workspace-up', this.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_TOP));
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_BOTTOM, () => {
            const activeMsWorkspace = Me$c.msWorkspaceManager.getActivePrimaryMsWorkspace();
            if (activeMsWorkspace.tileableFocused instanceof
                MsApplicationLauncher ||
                activeMsWorkspace.tileableFocused == null) {
                return;
            }
            if (activeMsWorkspace ===
                Me$c.msWorkspaceManager.primaryMsWorkspaces[Me$c.msWorkspaceManager.primaryMsWorkspaces.length -
                    (Meta$5.prefs_get_dynamic_workspaces() ? 2 : 1)]) {
                if ((Meta$5.prefs_get_dynamic_workspaces() &&
                    activeMsWorkspace.msWindowList.length === 1 &&
                    !Me$c.msWorkspaceManager.shouldCycleWorkspacesNavigation()) ||
                    (!Meta$5.prefs_get_dynamic_workspaces() &&
                        !Me$c.msWorkspaceManager.shouldCycleWorkspacesNavigation())) {
                    return;
                }
                if (!Meta$5.prefs_get_dynamic_workspaces() ||
                    (activeMsWorkspace.msWindowList.length === 1 &&
                        Me$c.msWorkspaceManager.shouldCycleWorkspacesNavigation())) {
                    const nextMsWorkspace = Me$c.msWorkspaceManager.msWorkspaceList[0];
                    Me$c.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
                    Me$c.msWorkspaceManager.setMsWorkspaceAt(nextMsWorkspace, 0);
                    nextMsWorkspace.activate();
                    return;
                }
            }
            const currentMsWorkspaceIndex = Me$c.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
            const nextMsWorkspace = Me$c.msWorkspaceManager.primaryMsWorkspaces[currentMsWorkspaceIndex + 1];
            Me$c.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
            nextMsWorkspace.activate();
        });
        Meta$5.keybindings_set_custom_handler('move-to-workspace-down', this.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_BOTTOM));
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_LEFT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$c.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_W, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_UP, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$c.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_N, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_RIGHT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$c.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_E, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_DOWN, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$c.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_S, 5);
            }
        });
        ['LEFT', 'UP', 'RIGHT', 'DOWN'].forEach((DIRECTION) => {
            this.actionNameToActionMap.set(KeyBindingAction[`FOCUS_MONITOR_${DIRECTION}`], () => {
                const currentMsWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
                const monitorIndex = global.display.get_monitor_neighbor_index(currentMsWorkspace.monitor.index, Meta$5.DisplayDirection[DIRECTION]);
                if (monitorIndex !== -1) {
                    const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspaceOfMonitor(monitorIndex);
                    Me$c.msWorkspaceManager.focusMsWorkspace(msWorkspace);
                }
            });
            this.actionNameToActionMap.set(KeyBindingAction[`MOVE_WINDOW_MONITOR_${DIRECTION}`], () => {
                const currentMsWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
                const focused = currentMsWorkspace.tileableFocused;
                if (focused instanceof MsApplicationLauncher ||
                    focused === null) {
                    return;
                }
                const monitorIndex = global.display.get_monitor_neighbor_index(currentMsWorkspace.monitor.index, Meta$5.DisplayDirection[DIRECTION]);
                if (monitorIndex !== -1) {
                    const msWorkspace = monitorIndex ===
                        global.display.get_primary_monitor()
                        ? Me$c.msWorkspaceManager.getActivePrimaryMsWorkspace()
                        : Me$c.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
                    Me$c.msWorkspaceManager.setWindowToMsWorkspace(focused, msWorkspace);
                    GLib$9.idle_add(GLib$9.PRIORITY_DEFAULT_IDLE, () => {
                        Me$c.msWorkspaceManager.focusMsWorkspace(msWorkspace);
                        return GLib$9.SOURCE_REMOVE;
                    });
                }
            });
            Meta$5.keybindings_set_custom_handler(`move-to-monitor-${DIRECTION.toLowerCase()}`, this.actionNameToActionMap.get(KeyBindingAction[`MOVE_WINDOW_MONITOR_${DIRECTION}`]));
        });
        [...Array(10).keys()].forEach((workspaceIndex) => {
            const actionKey = `MOVE_WINDOW_TO_${workspaceIndex + 1}`;
            KeyBindingAction[actionKey] = `move-window-to-workspace-${workspaceIndex + 1}`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const activeMsWorkspace = Me$c.msWorkspaceManager.getActivePrimaryMsWorkspace();
                const currentMsWorkspaceIndex = Me$c.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
                const focused = activeMsWorkspace.tileableFocused;
                if (focused instanceof MsApplicationLauncher ||
                    focused === null ||
                    workspaceIndex === currentMsWorkspaceIndex) {
                    return;
                }
                if (workspaceIndex >=
                    Me$c.msWorkspaceManager.primaryMsWorkspaces.length) {
                    workspaceIndex =
                        Me$c.msWorkspaceManager.primaryMsWorkspaces.length - 1;
                }
                const nextMsWorkspace = Me$c.msWorkspaceManager.primaryMsWorkspaces[workspaceIndex];
                Me$c.msWorkspaceManager.setWindowToMsWorkspace(focused, nextMsWorkspace);
                nextMsWorkspace.activate();
            });
        });
        this.actionNameToActionMap.set(KeyBindingAction.CYCLE_TILING_LAYOUT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.nextLayout(1);
        });
        this.actionNameToActionMap.set(KeyBindingAction.REVERSE_CYCLE_TILING_LAYOUT, () => {
            const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.nextLayout(-1);
        });
        this.actionNameToActionMap.set(KeyBindingAction.TOGGLE_MATERIAL_SHELL_UI, () => {
            Me$c.layout.togglePanelsVisibilities();
        });
        Object.keys(TilingLayoutByKey).forEach((layoutKey) => {
            const actionKey = `USE_${layoutKey}_LAYOUT`;
            KeyBindingAction[actionKey] = `use-${layoutKey}-layout`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const msWorkspace = Me$c.msWorkspaceManager.getActiveMsWorkspace();
                msWorkspace.setLayoutByKey(layoutKey);
            });
        });
        [...Array(10).keys()].forEach((workspaceIndex) => {
            const actionKey = `NAVIGATE_TO_${workspaceIndex + 1}`;
            KeyBindingAction[actionKey] = `navigate-to-workspace-${workspaceIndex + 1}`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const currentNumOfWorkspaces = Me$c.msWorkspaceManager.msWorkspaceList.length - 1;
                const currentWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
                let nextWorkspaceIndex = workspaceIndex;
                if (this.lastStash === null ||
                    nextWorkspaceIndex !== this.nextStash) {
                    this.lastStash = currentWorkspaceIndex;
                    this.nextStash = nextWorkspaceIndex;
                }
                else {
                    if (nextWorkspaceIndex === this.nextStash) {
                        nextWorkspaceIndex = this.lastStash;
                    }
                    this.resetStash();
                }
                nextWorkspaceIndex =
                    nextWorkspaceIndex > currentNumOfWorkspaces
                        ? currentNumOfWorkspaces
                        : nextWorkspaceIndex;
                Me$c.msWorkspaceManager.primaryMsWorkspaces[nextWorkspaceIndex].activate();
            });
        });
        this.actionNameToActionMap.forEach((action, name) => {
            this.addKeybinding(name);
        });
    }
    resetStash() {
        this.lastStash = null;
        this.nextStash = null;
    }
    addKeybinding(name) {
        const actionCallback = this.actionNameToActionMap.get(name);
        if (actionCallback === undefined) {
            Me$c.log('Error: Cannot add keybinding. No such action exists: ' + name);
            return;
        }
        const actionId = Main$9.wm.addKeybinding(name, this.settings, Meta$5.KeyBindingFlags.IGNORE_AUTOREPEAT, Shell$2.ActionMode.NORMAL, actionCallback);
        this.actionIdToNameMap.set(actionId, name);
    }
    destroy() {
        for (const [_, value] of this.actionIdToNameMap) {
            Main$9.wm.removeKeybinding(value);
        }
        this.actionIdToNameMap.clear();
        if (this.connectId) {
            global.window_manager.disconnect(this.connectId);
        }
    }
}

const Clutter$8 = imports.gi.Clutter;
const GLib$8 = imports.gi.GLib;
const Meta$4 = imports.gi.Meta;
const { main: Main$8 } = imports.ui;
const Me$b = imports.misc.extensionUtils.getCurrentExtension();
class MsDndManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.dragInProgress = null;
        this.inputGrabber = new InputGrabber();
        this.observe(this.msWindowManager, 'ms-window-created', () => {
            this.listenForMsWindowsSignal();
        });
        this.listenForMsWindowsSignal();
        this.observe(global.workspace_manager, 'active-workspace-changed', () => {
            if (this.dragInProgress !== null) {
                const newMsWorkspace = Me$b.msWorkspaceManager.getActivePrimaryMsWorkspace();
                if (this.dragInProgress.msWindow.metaWindow) {
                    this.dragInProgress.msWindow.metaWindow.change_workspace_by_index(global.workspace_manager.get_active_workspace_index(), true);
                }
                else {
                    Me$b.msWorkspaceManager.setWindowToMsWorkspace(this.dragInProgress.msWindow, newMsWorkspace);
                }
                this.dragInProgress.originalParent =
                    newMsWorkspace.msWorkspaceActor.tileableContainer;
            }
        });
        this.observe(global.display, 'grab-op-begin', (display, metaWindow, op) => {
            if (op === Meta$4.GrabOp.MOVING) {
                const msWindow = metaWindow.msWindow;
                if (msWindow &&
                    msWindow.metaWindow === metaWindow &&
                    !msWindow.followMetaWindow) {
                    global.display.end_grab_op(global.get_current_time());
                    this.startDrag(msWindow);
                }
            }
        });
        this.observe(this.inputGrabber, 'captured-event', (_, event) => {
            if (this.dragInProgress !== null) {
                const [stageX, stageY] = event.get_coords();
                const msWindowDragged = this.dragInProgress.msWindow;
                switch (event.type()) {
                    case Clutter$8.EventType.MOTION:
                        msWindowDragged.set_position(Math.round(stageX -
                            msWindowDragged.width *
                                this.dragInProgress
                                    .originPointerAnchor[0]), Math.round(stageY -
                            msWindowDragged.height *
                                this.dragInProgress
                                    .originPointerAnchor[1]));
                        this.throttledCheckUnderPointer();
                        break;
                    case Clutter$8.EventType.BUTTON_RELEASE:
                        this.endDrag();
                        break;
                }
            }
        });
        this.throttledCheckUnderPointer = throttle(this.checkUnderThePointer, 50, { trailing: false });
    }
    listenForMsWindowsSignal() {
        this.msWindowManager.msWindowList.forEach((msWindow) => {
            if (!this.signalMap.has(msWindow)) {
                const id = msWindow.connect('event', (_, event) => {
                    if (this.dragInProgress)
                        return;
                    switch (event.type()) {
                        case Clutter$8.EventType.MOTION:
                            if (event.get_state() === 320) {
                                this.startDrag(msWindow);
                            }
                            break;
                    }
                });
                this.signalMap.set(msWindow, id);
            }
        });
    }
    startDrag(msWindow) {
        global.stage.add_child(this.inputGrabber);
        const originalParent = assertNotNull(msWindow.get_parent());
        msWindow.freezeAllocation();
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        const [globalX, globalY] = global.get_pointer();
        const [_, relativeX, relativeY] = msWindow.transform_stage_point(globalX, globalY);
        this.dragInProgress = {
            msWindow,
            originPointerAnchor: [
                relativeX / msWindow.width,
                relativeY / msWindow.height,
            ],
            originalParent,
        };
        Me$b.layout.setActorAbove(msWindow);
        this.checkUnderThePointerRoutine();
        msWindow.set_position(Math.round(globalX -
            msWindow.width * this.dragInProgress.originPointerAnchor[0]), Math.round(globalY -
            msWindow.height * this.dragInProgress.originPointerAnchor[1]));
        this.msWindowManager.msFocusManager.pushModal(this.inputGrabber);
        Me$b.msThemeManager.setCursor(Meta$4.Cursor.DND_IN_DRAG);
    }
    endDrag() {
        assert(this.dragInProgress !== null, 'No drag in progress');
        const { msWindow, originalParent } = this.dragInProgress;
        this.dragInProgress = null;
        this.msWindowManager.msFocusManager.popModal(this.inputGrabber);
        global.stage.remove_child(this.inputGrabber);
        msWindow.unFreezeAllocation();
        reparentActor(msWindow, originalParent);
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        Me$b.msThemeManager.setCursor(Meta$4.Cursor.DEFAULT);
    }
    checkUnderThePointerRoutine() {
        if (this.dragInProgress === null)
            return;
        this.throttledCheckUnderPointer();
        Async.addTimeout(GLib$8.PRIORITY_DEFAULT, 100, () => {
            this.checkUnderThePointerRoutine();
            return GLib$8.SOURCE_REMOVE;
        });
    }
    checkUnderThePointer() {
        assert(this.dragInProgress !== null, 'No drag in progress');
        const [x, y] = global.get_pointer();
        const monitor = Main$8.layoutManager.currentMonitor;
        const msWindowDragged = this.dragInProgress.msWindow;
        const msWorkspace = msWindowDragged.msWorkspace;
        if (monitor.index !== msWorkspace.monitor.index) {
            let newMsWorkspace;
            if (monitor === Main$8.layoutManager.primaryMonitor) {
                newMsWorkspace =
                    Me$b.msWorkspaceManager.getActivePrimaryMsWorkspace();
            }
            else {
                newMsWorkspace =
                    Me$b.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitor.index)[0];
            }
            Me$b.msWorkspaceManager.setWindowToMsWorkspace(msWindowDragged, newMsWorkspace);
            this.dragInProgress.originalParent =
                newMsWorkspace.msWorkspaceActor.tileableContainer;
        }
        const workArea = Main$8.layoutManager.getWorkAreaForMonitor(msWorkspace.monitor.index);
        const relativeX = x - workArea.x;
        const relativeY = y - workArea.y;
        msWorkspace.tileableList
            .filter((tileable) => tileable instanceof MsWindow &&
            tileable.visible &&
            tileable.get_parent() ===
                msWorkspace.msWorkspaceActor.tileableContainer)
            .forEach((tileable) => {
            if (relativeX >= tileable.x &&
                relativeX <= tileable.x + tileable.width &&
                relativeY >= tileable.y &&
                relativeY <= tileable.y + tileable.height) {
                msWorkspace.swapTileable(msWindowDragged, tileable);
            }
        });
    }
}
let InputGrabber = class InputGrabber extends Clutter$8.Actor {
    _init() {
        super._init({
            name: 'InputGrabber',
            reactive: true,
        });
        this.add_constraint(new Clutter$8.BindConstraint({
            source: global.stage,
            coordinate: Clutter$8.BindCoordinate.ALL,
        }));
    }
    vfunc_key_press_event(keyEvent) {
        const actionId = global.display.get_keybinding_action(keyEvent.hardware_keycode, keyEvent.modifier_state);
        if (Me$b.hotKeysModule.actionIdToNameMap.has(actionId)) {
            const actionName = Me$b.hotKeysModule.actionIdToNameMap.get(actionId);
            switch (actionName) {
                case KeyBindingAction.PREVIOUS_WINDOW:
                    assertNotNull(Me$b.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_LEFT))();
                    break;
                case KeyBindingAction.NEXT_WINDOW:
                    assertNotNull(Me$b.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_RIGHT))();
                    break;
                case KeyBindingAction.PREVIOUS_WORKSPACE:
                    assertNotNull(Me$b.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_TOP))();
                    break;
                case KeyBindingAction.NEXT_WORKSPACE:
                    assertNotNull(Me$b.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_BOTTOM))();
                    break;
            }
        }
        return false;
    }
};
InputGrabber = __decorate([
    registerGObjectClass
], InputGrabber);

const GLib$7 = imports.gi.GLib;
const { main: Main$7 } = imports.ui;
const Me$a = imports.misc.extensionUtils.getCurrentExtension();
class MsFocusManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.lastMsWindowFocused = null;
        this.lastKeyFocus = null;
        this.actorGrabMap = new Map();
        this.msWindowManager = msWindowManager;
        this.observe(global.stage, 'notify::key-focus', this.onKeyFocus.bind(this));
        this.observe(global.display, 'notify::focus-window', this.onWindowFocus.bind(this));
        this.observe(global.workspace_manager, 'active-workspace-changed', () => {
            if (!Me$a.loaded)
                return;
            this.focusProtected = true;
            Async.addTimeout(GLib$7.PRIORITY_DEFAULT, 100, () => {
                delete this.focusProtected;
                return GLib$7.SOURCE_REMOVE;
            });
        });
    }
    onKeyFocus() {
        const keyFocus = global.stage.key_focus;
        if (!keyFocus) {
            if (this.focusProtected &&
                this.lastKeyFocus &&
                this.lastKeyFocus != this.lastMsWindowFocused &&
                this.lastKeyFocus.mapped) {
                Me$a.logFocus('Focus Protected, restore focus to ', this.lastKeyFocus);
                return this.lastKeyFocus.grab_key_focus();
            }
            return;
        }
        this.lastKeyFocus = keyFocus;
        let actor = keyFocus;
        while (actor !== null) {
            if (actor instanceof MsWindow) {
                this.setFocusToMsWindow(actor);
                return;
            }
            actor = actor.get_parent();
        }
        if (keyFocus != Main$7.layoutManager.uiGroup) {
            this.lastMsWindowFocused = null;
        }
    }
    onWindowFocus() {
        const windowFocus = global.display.get_focus_window();
        if (!windowFocus || !windowFocus.msWindow)
            return;
        const msWindow = windowFocus.msWindow;
        msWindow.focusDialogs();
        this.setFocusToMsWindow(msWindow);
    }
    setFocusToMsWindow(msWindow) {
        if (msWindow === this.lastMsWindowFocused)
            return;
        this.lastMsWindowFocused = msWindow;
        this.emit('focus-changed', msWindow);
    }
    requestFocus(msWindow) {
        return (msWindow !== this.lastMsWindowFocused &&
            !this.msWindowManager.msDndManager.dragInProgress);
    }
    pushModal(actor, options) {
        const grab = Main$7.pushModal(actor, options);
        this.actorGrabMap.set(actor, grab);
    }
    popModal(actor) {
        const grab = this.actorGrabMap.get(actor);
        if (grab !== undefined) {
            if (gnomeVersionGreaterOrEqualTo(Main$7.popModal, '42.0')) {
                assert(typeof grab !== 'boolean', 'Expected grab to be a grab object');
                Main$7.popModal(grab);
            }
            else {
                Main$7.popModal(actor);
            }
            this.actorGrabMap.delete(actor);
        }
    }
}

const Clutter$7 = imports.gi.Clutter;
const Meta$3 = imports.gi.Meta;
const Me$9 = imports.misc.extensionUtils.getCurrentExtension();
const RESIZE_CODES = [
    Meta$3.GrabOp.RESIZING_N,
    Meta$3.GrabOp.RESIZING_NE,
    Meta$3.GrabOp.RESIZING_NW,
    Meta$3.GrabOp.RESIZING_E,
    Meta$3.GrabOp.RESIZING_W,
    Meta$3.GrabOp.RESIZING_S,
    Meta$3.GrabOp.RESIZING_SE,
    Meta$3.GrabOp.RESIZING_SW,
];
const RESIZE_VERTICAL_CODES = [Meta$3.GrabOp.RESIZING_N, Meta$3.GrabOp.RESIZING_S];
const RESIZE_AFTER_CODES = [
    Meta$3.GrabOp.RESIZING_N,
    Meta$3.GrabOp.RESIZING_NW,
    Meta$3.GrabOp.RESIZING_W,
    Meta$3.GrabOp.RESIZING_SW,
];
const CHECK_TIMEOUT_MS = 100;
class MsResizeManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.resizeInProgress = null;
        this.inputResizer = new InputResizer();
        this.observe(global.display, 'grab-op-begin', (_, metaWindow, directionOp) => {
            Me$9.logFocus('START DRAG', directionOp, RESIZE_CODES.includes(directionOp));
            if (RESIZE_CODES.includes(directionOp)) {
                const msWindow = metaWindow.msWindow;
                if (msWindow &&
                    msWindow.metaWindow === metaWindow &&
                    !msWindow.followMetaWindow) {
                    global.display.end_grab_op(global.get_current_time());
                    const { layout } = msWindow.msWorkspace;
                    if (!(layout instanceof BaseResizeableTilingLayout)) {
                        return;
                    }
                    const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
                    const after = RESIZE_AFTER_CODES.includes(directionOp);
                    const border = layout.getTileableBorder(msWindow, vertical, after);
                    if (border) {
                        this.startResize(border);
                    }
                }
            }
        });
        this.observe(this.inputResizer, 'captured-event', (_, event) => {
            if (this.resizeInProgress !== null) {
                switch (event.type()) {
                    case Clutter$7.EventType.MOTION:
                        this.checkPointerPosition();
                        break;
                    case Clutter$7.EventType.BUTTON_RELEASE:
                        this.endPointerChecker();
                        break;
                }
            }
        });
        this.throttledCheckPointerPosition = throttle(this.checkPointerPosition, CHECK_TIMEOUT_MS, { trailing: false });
    }
    checkPointerPosition() {
        if (this.resizeInProgress !== null) {
            this.updateResize();
        }
    }
    endPointerChecker() {
        if (this.resizeInProgress !== null) {
            this.endResize();
        }
    }
    getPointerPositionRelativeToWorkspace() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { msWorkspaceActor } = this.resizeInProgress.msWorkspace;
        const [containerX, containerY] = msWorkspaceActor.tileableContainer.get_transformed_position();
        const [globalX, globalY] = global.get_pointer();
        return [globalX - containerX, globalY - containerY];
    }
    getFirstPortionPositionAndSize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { layout } = this.resizeInProgress.msWorkspace;
        assert(layout instanceof BaseResizeableTilingLayout, 'expected a resizable layout');
        const ratio = layout.mainPortion.getRatioForPortion(this.resizeInProgress.border.firstPortion);
        return layout.applyBoxRatio(layout.resolveBox(), ratio);
    }
    startResize(border) {
        assert(this.resizeInProgress === null, 'Resize already in progress');
        this.resizeInProgress = {
            border: border,
            msWorkspace: Me$9.msWorkspaceManager.getActiveMsWorkspace(),
        };
        global.stage.add_child(this.inputResizer);
        this.msWindowManager.msFocusManager.pushModal(this.inputResizer);
        Me$9.msThemeManager.setCursor(Meta$3.Cursor.MOVE_OR_RESIZE_WINDOW);
    }
    updateResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const [pointerX, pointerY] = this.getPointerPositionRelativeToWorkspace();
        const { x, y, width, height } = this.getFirstPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio;
        if (!this.resizeInProgress.border.vertical) {
            basisRatio = relativeY / height;
        }
        else {
            basisRatio = relativeX / width;
        }
        this.resizeInProgress.border.updateBasis(basisRatio);
        this.resizeInProgress.msWorkspace.layout.tileAll();
    }
    endResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        this.resizeInProgress = null;
        this.msWindowManager.msFocusManager.popModal(this.inputResizer);
        Me$9.stateManager.stateChanged();
        global.stage.remove_child(this.inputResizer);
        Me$9.msThemeManager.setCursor(Meta$3.Cursor.DEFAULT);
    }
    resizeTileable(tileable, directionOp, percent) {
        const { layout } = tileable.msWorkspace;
        if (!(layout instanceof BaseResizeableTilingLayout)) {
            return;
        }
        const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
        const after = RESIZE_AFTER_CODES.includes(directionOp);
        const border = layout.getTileableBorder(tileable, vertical, after);
        if (border) {
            border.updateBasis((100 + percent * (after ? -1 : 1)) / 100);
            layout.tileAll();
        }
    }
}
let InputResizer = class InputResizer extends Clutter$7.Actor {
    _init() {
        super._init({
            name: 'InputResizer',
            reactive: true,
        });
        this.add_constraint(new Clutter$7.BindConstraint({
            source: global.stage,
            coordinate: Clutter$7.BindCoordinate.ALL,
        }));
    }
};
InputResizer = __decorate([
    registerGObjectClass
], InputResizer);

function groupBy(items, key) {
    const map = new Map();
    for (const item of items) {
        const k = key(item);
        let ls = map.get(k);
        if (ls === undefined) {
            ls = [];
            map.set(k, ls);
        }
        ls.push(item);
    }
    return map;
}

function weighted_matching(costs) {
    const INT_MAX = 2147483647;
    if (costs.length == 0)
        return { cost: 0, assignments: new Int32Array() };
    const n = costs.length + 1;
    const m = costs[0].length + 1;
    if (n > m) {
        throw new Error('Expected n <= m, otherwise not all items on the left hand side can be assigned');
    }
    const u = new Int32Array(n);
    const v = new Int32Array(m);
    const p = new Int32Array(m);
    const ans = new Int32Array(n - 1);
    const dist = new Int32Array(m);
    const pre = new Int32Array(m);
    const done = new Int32Array(m + 1);
    for (let i = 1; i < n; i++) {
        p[0] = i;
        let j0 = 0;
        dist.fill(INT_MAX);
        pre.fill(-1);
        done.fill(0);
        do {
            done[j0] = 1;
            let i0 = p[j0], j1 = 0, delta = INT_MAX;
            for (let j = 1; j < m; j++) {
                if (done[j] === 0) {
                    const cur = costs[i0 - 1][j - 1] - u[i0] - v[j];
                    if (cur < dist[j]) {
                        dist[j] = cur;
                        pre[j] = j0;
                    }
                    if (dist[j] < delta) {
                        delta = dist[j];
                        j1 = j;
                    }
                }
            }
            for (let j = 0; j < m; j++) {
                if (done[j] === 1) {
                    u[p[j]] += delta;
                    v[j] -= delta;
                }
                else {
                    dist[j] -= delta;
                }
            }
            j0 = j1;
        } while (p[j0] !== 0);
        while (j0 !== 0) {
            const j1 = pre[j0];
            p[j0] = p[j1];
            j0 = j1;
        }
    }
    for (let j = 1; j < m; j++) {
        if (p[j] !== 0) {
            ans[p[j] - 1] = j - 1;
        }
    }
    return { cost: -v[0], assignments: ans };
}
function test_hungarian() {
    assert(weighted_matching([
        [10, 20, 30],
        [20, 30, 30],
        [20, 20, 5],
    ]).cost ==
        10 + 30 + 5, '');
    assert(weighted_matching([
        [10, 20, 10000],
        [1, 2, 10000],
        [5, 3, 10000],
    ]).cost ==
        10000 + 1 + 3, '');
}

const Meta$2 = imports.gi.Meta;
const Shell$1 = imports.gi.Shell;
const { main: Main$6 } = imports.ui;
const Signals$1 = imports.signals;
const Me$8 = imports.misc.extensionUtils.getCurrentExtension();
const AuthenticationDialog = imports.ui.components.polkitAgent.AuthenticationDialog;
function matchingCost(desired, found, mismatchCost, skipCost) {
    if (desired !== undefined) {
        return found === desired ? 0 : mismatchCost;
    }
    else {
        return skipCost;
    }
}
const INF_COST = 100000;
const MAX_WINDOW_REASSOCIATION_TIME_MS = 3000;
const WINDOW_RECENTLY_CREATED_TIME_MS = 2000;
function windowMatchingCost(windowInfo, metaWindow, msWindow) {
    var _a;
    const state = msWindow.lifecycleState;
    assert(state.type === 'window' || state.type === 'app-placeholder', 'MsWindow has no matching info');
    const matchingInfo = state.matchingInfo;
    let cost = 0;
    cost += matchingCost(matchingInfo.wmClass, windowInfo.wmClass, INF_COST, 1);
    cost += matchingCost(matchingInfo.pid, windowInfo.pid, 100, 1);
    cost += matchingCost(matchingInfo.title, windowInfo.title, 50, 1);
    cost += matchingCost(matchingInfo.stableSeq, windowInfo.stableSeq, 1, 1);
    const msWindowMeta = state.type === 'window' ? (_a = state.metaWindow) !== null && _a !== void 0 ? _a : undefined : undefined;
    cost += msWindowMeta === metaWindow ? 0 : 5;
    const waiting = state.type === 'app-placeholder'
        ? state.waitingForAppSince !== undefined
        : state.matchedWhileWaiting;
    cost += waiting ? 0 : 200;
    return cost;
}
class MsWindowManager extends MsManager {
    constructor() {
        super();
        this.checkWindowsForAssignationsDebounce = new AsyncDebounce(50, this.checkWindowsForAssignations.bind(this));
        this.windowTracker = Shell$1.WindowTracker.get_default();
        this.msWindowList = [];
        this.msDndManager = new MsDndManager(this);
        this.msResizeManager = new MsResizeManager(this);
        this.msFocusManager = new MsFocusManager(this);
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            const actor = metaWindow.get_compositor_private();
            metaWindow.firstFrameDrawn = false;
            metaWindow.firstFrameDrawnPromise = new Promise((resolve) => {
                actor.connect('first-frame', (_params) => {
                    metaWindow.firstFrameDrawn = true;
                    resolve();
                });
            });
            this.onNewMetaWindow(metaWindow);
        });
        this.observe(global.window_manager, 'size-changed', (wm, actor) => {
            actor.lastResize = Date.now();
        });
    }
    get managedMetaWindows() {
        return new Array().concat(...this.msWindowList.map((w) => w.metaWindows));
    }
    assignWindows() {
        const actors = global
            .get_window_actors()
            .filter((x) => x.metaWindow
            .handledByMaterialShell);
        this.assignNonDialogWindows(actors);
        this.assignDialogWindows(actors);
    }
    assignNonDialogWindows(actors) {
        const assignedMetaWindows = new Set(this.managedMetaWindows);
        const now = new Date().getTime();
        for (const msWindow of this.msWindowList) {
            if (msWindow.lifecycleState.type === 'window' &&
                now - msWindow.lifecycleState.matchedAtTime.getTime() <
                    MAX_WINDOW_REASSOCIATION_TIME_MS &&
                msWindow.lifecycleState.metaWindow !== null) {
                assignedMetaWindows.delete(msWindow.lifecycleState.metaWindow);
            }
        }
        const windowActors = actors.filter((w) => !assignedMetaWindows.has(w.metaWindow) &&
            !this.isMetaWindowDialog(w.metaWindow));
        const candidateMsWindows = this.msWindowList.filter((x) => x.lifecycleState.type === 'app-placeholder' ||
            (x.lifecycleState.type === 'window' &&
                now - x.lifecycleState.matchedAtTime.getTime() <
                    MAX_WINDOW_REASSOCIATION_TIME_MS));
        const groupedMsWindowsByApp = groupBy(candidateMsWindows, (window) => {
            assert(window.lifecycleState.type === 'app-placeholder' ||
                window.lifecycleState.type === 'window', 'unreachable');
            return window.lifecycleState.matchingInfo.appId;
        });
        const groupedMetaWindowsByApp = groupBy(windowActors, (window) => this.windowTracker.get_window_app(window.metaWindow).id);
        let logged = false;
        const logInfoOnce = () => {
            if (logged)
                return;
            logged = true;
            for (const windowActor of actors) {
                Me$8.log(`Meta window: ${buildMetaWindowIdentifier(windowActor.metaWindow)} title='${windowActor.metaWindow.title}' dialog=${this.isMetaWindowDialog(windowActor.metaWindow)}`);
            }
            for (const msWindow of candidateMsWindows) {
                assert(msWindow.lifecycleState.type === 'window' ||
                    msWindow.lifecycleState.type === 'app-placeholder', 'MsWindow has no matching info');
                Me$8.log(`MSWindow: ${JSON.stringify(msWindow.lifecycleState.matchingInfo)} waiting=${msWindow.lifecycleState.type == 'app-placeholder' &&
                    msWindow.lifecycleState.waitingForAppSince !== undefined} workspace=${msWindow.msWorkspace.monitor.index}`);
            }
        };
        for (const [groupKey, windowActorGroup,] of groupedMetaWindowsByApp.entries()) {
            const candidateMsWindows = groupedMsWindowsByApp.get(groupKey) || [];
            const costMatrix = [];
            for (const windowActor of windowActorGroup) {
                const metaWindow = windowActor.metaWindow;
                const windowInfo = {
                    appId: groupKey,
                    wmClass: metaWindow.get_wm_class_instance(),
                    pid: metaWindow.get_pid(),
                    stableSeq: metaWindow.get_stable_sequence(),
                    title: metaWindow.title,
                };
                const costs = candidateMsWindows.map((msWindow) => windowMatchingCost(windowInfo, metaWindow, msWindow));
                for (let i = 0; i < windowActorGroup.length; i++) {
                    costs.push(INF_COST - 1);
                }
                costMatrix.push(costs);
            }
            const { cost: _, assignments } = weighted_matching(costMatrix);
            const msWindowAssignments = new Array(candidateMsWindows.length).fill(null);
            for (let i = 0; i < assignments.length; i++) {
                const idx = assignments[i];
                if (idx < candidateMsWindows.length) {
                    msWindowAssignments[idx] = windowActorGroup[i].metaWindow;
                }
            }
            for (let i = 0; i < candidateMsWindows.length; i++) {
                const msWindow = candidateMsWindows[i];
                if (msWindow.lifecycleState.type === 'window' &&
                    msWindow.lifecycleState.metaWindow !==
                        msWindowAssignments[i]) {
                    logInfoOnce();
                    msWindow.removeAllDialogs();
                    msWindow.unsetWindow();
                }
            }
            for (let i = 0; i < assignments.length; i++) {
                const idx = assignments[i];
                const windowActor = windowActorGroup[i];
                if (idx < candidateMsWindows.length) {
                    const msWindow = candidateMsWindows[idx];
                    if (msWindow.lifecycleState.type === 'app-placeholder') {
                        logInfoOnce();
                        Me$8.log(`Associating ${buildMetaWindowIdentifier(windowActor.metaWindow)} with ${msWindow.windowIdentifier}`);
                        void msWindow
                            .setWindow(windowActor.metaWindow)
                            .catch(logAsyncException);
                    }
                }
                else {
                    logInfoOnce();
                    Me$8.log(`Creating a new MsWindow for ${buildMetaWindowIdentifier(windowActor.metaWindow)}`);
                    this.createNewMsWindow(windowActor.metaWindow, {
                        msWorkspace: Me$8.msWorkspaceManager.determineAppropriateMsWorkspace(windowActor.metaWindow),
                        focus: true,
                        insert: true,
                    });
                }
            }
            const candidateMsWindowsToKill = candidateMsWindows.filter((msWindow) => msWindow.lifecycleState.type === 'app-placeholder' &&
                msWindow.lifecycleState.waitingForAppSince === undefined &&
                !msWindow.persistent &&
                Date.now() - msWindow.createdAt.valueOf() <
                    WINDOW_RECENTLY_CREATED_TIME_MS);
            for (const msWindow of candidateMsWindowsToKill) {
                msWindow.kill();
            }
        }
    }
    assignDialogWindows(actors) {
        var _a, _b, _c, _d;
        const assignedMetaWindows = new Set(this.managedMetaWindows);
        for (const windowActor of actors) {
            if (windowActor.is_destroyed())
                continue;
            if (assignedMetaWindows.has(windowActor.metaWindow))
                continue;
            if (!this.isMetaWindowDialog(windowActor.metaWindow))
                continue;
            const metaWindow = windowActor.metaWindow;
            const app = this.windowTracker.get_window_app(metaWindow);
            if (app === null) {
                continue;
            }
            let root;
            metaWindow.foreach_ancestor((ancestor) => {
                if (!root &&
                    ancestor.msWindow) {
                    root = ancestor;
                }
                return true;
            });
            let msWindowFound = (_a = root === null || root === void 0 ? void 0 : root.msWindow) !== null && _a !== void 0 ? _a : null;
            if (msWindowFound === null) {
                const transientMetaWindow = metaWindow.get_transient_for();
                if (((_b = transientMetaWindow === null || transientMetaWindow === void 0 ? void 0 : transientMetaWindow.msWindow) === null || _b === void 0 ? void 0 : _b.lifecycleState.type) ===
                    'window') {
                    msWindowFound = transientMetaWindow.msWindow;
                }
            }
            if (msWindowFound === null) {
                const pid = metaWindow.get_pid();
                const samePidMsWindowList = this.msWindowList.filter((msWindow) => {
                    var _a;
                    return (msWindow.lifecycleState.type === 'window' &&
                        ((_a = msWindow.lifecycleState.metaWindow) === null || _a === void 0 ? void 0 : _a.get_pid()) ===
                            pid);
                });
                let bestTime = null;
                for (const msWindow of samePidMsWindowList) {
                    if (msWindow.metaWindow) {
                        const userTime = msWindow.metaWindow.get_user_time();
                        if (bestTime == null || userTime > bestTime) {
                            bestTime = userTime;
                            msWindowFound = msWindow;
                        }
                    }
                }
            }
            if (msWindowFound == null && app) {
                const sameAppMsWindowList = this.msWindowList.filter((msWindow) => {
                    return ((msWindow.lifecycleState.type === 'window' ||
                        msWindow.lifecycleState.type ===
                            'app-placeholder') &&
                        msWindow.app.get_id() == app.get_id());
                });
                let bestScore = [0, 0];
                for (const msWindow of sameAppMsWindowList) {
                    const score = [
                        msWindow.lifecycleState.type === 'window' ? 1 : 0,
                        (_d = (_c = msWindow.metaWindow) === null || _c === void 0 ? void 0 : _c.get_user_time()) !== null && _d !== void 0 ? _d : 0,
                    ];
                    if (!msWindowFound ||
                        score[0] > bestScore[0] ||
                        (score[0] == bestScore[0] && score[1] > bestScore[1])) {
                        msWindowFound = msWindow;
                        bestScore = score;
                    }
                }
            }
            if (msWindowFound) {
                msWindowFound.addDialog(metaWindow);
            }
            else {
                this.createNewMsWindow(windowActor.metaWindow, {
                    msWorkspace: Me$8.msWorkspaceManager.determineAppropriateMsWorkspace(windowActor.metaWindow),
                    focus: true,
                    insert: true,
                });
            }
        }
    }
    handleExistingMetaWindows() {
        if (this.managedMetaWindows.length > 0) {
            throw new Error('You should only call this function before any windows have been associated');
        }
        for (const windowActor of global.get_window_actors()) {
            const metaWindow = windowActor.metaWindow;
            metaWindow.firstFrameDrawn = true;
            metaWindow.firstFrameDrawnPromise = Promise.resolve();
            metaWindow.createdAt = metaWindow.user_time;
            metaWindow.handledByMaterialShell = false;
            metaWindow.msWindow = undefined;
            this.onNewMetaWindow(metaWindow);
        }
    }
    onNewMetaWindow(metaWindow) {
        if (Me$8.disableInProgress)
            return;
        metaWindow.createdAt = metaWindow.user_time;
        const actor = metaWindow.get_compositor_private();
        if (!this.handleWindow(metaWindow)) {
            const parent = actor.get_parent();
            if (parent != global.top_window_group) {
                if (parent !== null)
                    parent.remove_child(actor);
                global.top_window_group.add_child(actor);
            }
            return;
        }
        if (metaWindow.handledByMaterialShell)
            return;
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
            this.onMetaWindowUnManaged(metaWindow);
        });
        this.checkWindowsForAssignationsDebounce.schedule();
    }
    onMetaWindowUnManaged(metaWindow) {
        if (Me$8.disableInProgress || Me$8.closing)
            return;
        if (metaWindow.msWindow) {
            const msWindow = metaWindow.msWindow;
            msWindow.metaWindowUnManaged(metaWindow);
        }
    }
    createNewMsWindow(source, msWorkspace, persistent, initialAllocation, matchingInfo, createdAt) {
        const app = source instanceof Meta$2.Window
            ? this.windowTracker.get_window_app(source)
            : source;
        if (app === null) {
            throw new Error('The meta window has no associated app. Cannot create window for an unknown app.');
        }
        if (matchingInfo === undefined) {
            matchingInfo = {
                appId: app.id,
                title: undefined,
                pid: undefined,
                wmClass: undefined,
                stableSeq: undefined,
            };
        }
        else {
            assert(matchingInfo.appId === app.id, 'AppIds do not match');
        }
        const msWindow = new MsWindow({
            app,
            persistent,
            initialAllocation,
            msWorkspace: msWorkspace.msWorkspace,
            lifecycleState: {
                type: 'app-placeholder',
                matchingInfo,
                waitingForAppSince: undefined,
            },
            createdAt: createdAt !== null && createdAt !== void 0 ? createdAt : new Date(),
        });
        if (source instanceof Meta$2.Window) {
            void msWindow.setWindow(source).catch(logAsyncException);
        }
        msWorkspace.msWorkspace.addMsWindowUnchecked(msWindow, msWorkspace.focus, msWorkspace.insert);
        msWindow.connect('request-new-meta-window', () => {
            this.openAppForMsWindow(msWindow);
        });
        msWindow.connect('destroy', () => {
            this.msWindowList.splice(this.msWindowList.indexOf(msWindow), 1);
        });
        this.msWindowList.push(msWindow);
        this.emit('ms-window-created', msWindow);
        return msWindow;
    }
    openApp(app, msWorkspace, insert = false) {
        if (app.can_open_new_window()) {
            const msWindow = Me$8.msWindowManager.createNewMsWindow(app, {
                msWorkspace: msWorkspace,
                focus: true,
                insert: insert,
            });
            assert(msWindow.lifecycleState.type === 'app-placeholder', 'Expected newly created window to be an app placeholder');
            msWindow.placeholder.activate();
        }
        else {
            app.activate();
        }
    }
    async checkWindowsForAssignations() {
        this.assignWindows();
        let anyWaiting = false;
        const now = new Date();
        for (const msWindow of this.msWindowList) {
            if (msWindow.lifecycleState.type === 'app-placeholder' &&
                msWindow.lifecycleState.waitingForAppSince !== undefined) {
                const isAuthenticationDialogDisplayed = Main$6.modalActorFocusStack.length > 0 &&
                    Main$6.modalActorFocusStack[Main$6.modalActorFocusStack.length - 1].actor instanceof AuthenticationDialog;
                if (isAuthenticationDialogDisplayed) {
                    msWindow.lifecycleState.waitingForAppSince = now;
                }
                if (now.getTime() -
                    msWindow.lifecycleState.waitingForAppSince.getTime() >
                    5000) {
                    msWindow.lifecycleState.waitingForAppSince = undefined;
                    msWindow.placeholder.reset();
                    msWindow.kill();
                }
                else {
                    anyWaiting = true;
                }
            }
            if (msWindow.lifecycleState.type === 'window' &&
                now.getTime() -
                    msWindow.lifecycleState.matchedAtTime.getTime() <
                    MAX_WINDOW_REASSOCIATION_TIME_MS) {
                anyWaiting = true;
            }
        }
        if (anyWaiting) {
            this.checkWindowsForAssignationsDebounce.schedule();
        }
    }
    openAppForMsWindow(msWindow) {
        if (msWindow.lifecycleState.type !== 'app-placeholder') {
            throw new Error('MsWindow must be in the app-placeholder state to be able to open a new app in it.');
        }
        if (msWindow.lifecycleState.matchingInfo === undefined) {
            msWindow.lifecycleState.matchingInfo = {
                appId: msWindow.app.id,
                title: undefined,
                pid: undefined,
                wmClass: undefined,
                stableSeq: undefined,
            };
        }
        msWindow.lifecycleState.waitingForAppSince = new Date();
        this.checkWindowsForAssignationsDebounce.schedule();
        const workspaceIndex = Me$8.msWorkspaceManager.primaryMsWorkspaces.indexOf(msWindow.msWorkspace);
        if (msWindow.app.can_open_new_window() &&
            msWindow.app.state == Shell$1.AppState.RUNNING) {
            msWindow.app.open_new_window(workspaceIndex);
        }
        else {
            msWindow.app.launch(0, workspaceIndex, Shell$1.AppLaunchGpu.APP_PREF);
        }
    }
    handleWindow(metaWindow) {
        if (metaWindow.wm_class !== '' &&
            getSettings('layouts')
                .get_string('windows-excluded')
                .split(',')
                .map((item) => item.trim())
                .indexOf(metaWindow.wm_class) > -1) {
            return false;
        }
        const windowRole = metaWindow.get_role();
        if (windowRole !== '' &&
            getSettings('layouts')
                .get_string('roles-excluded')
                .split(',')
                .map((item) => item.trim())
                .indexOf(windowRole) !== -1) {
            return false;
        }
        if (metaWindow.above) {
            metaWindow.stick();
            return false;
        }
        const meta = Meta$2.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }
    isMetaWindowDialog(metaWindow) {
        const dialogTypes = [
            Meta$2.WindowType.DIALOG,
            Meta$2.WindowType.MODAL_DIALOG,
            Meta$2.WindowType.UTILITY,
        ];
        const isFrozen = !(metaWindow.allows_resize() && metaWindow.allows_move());
        const isMaximizedAny = metaWindow.maximized_horizontally ||
            metaWindow.maximized_vertically;
        return (dialogTypes.includes(metaWindow.window_type) ||
            metaWindow.get_transient_for() != null ||
            !metaWindow.resizeable ||
            (isFrozen && !isMaximizedAny));
    }
    destroy() {
        super.destroy();
        this.msDndManager.destroy();
        this.msResizeManager.destroy();
        this.msFocusManager.destroy();
        this.checkWindowsForAssignationsDebounce.cancel();
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            if (metaWindow.handledByMaterialShell)
                delete metaWindow.handledByMaterialShell;
        });
    }
}
Signals$1.addSignalMethods(MsWindowManager.prototype);

const Clutter$6 = imports.gi.Clutter;
const Gio$3 = imports.gi.Gio;
const GLib$6 = imports.gi.GLib;
const St$3 = imports.gi.St;
const { main: Main$5, popupMenu } = imports.ui;
const Me$7 = imports.misc.extensionUtils.getCurrentExtension();
let LayoutSwitcher = class LayoutSwitcher extends St$3.BoxLayout {
    _init(msWorkspace, panelMenuManager) {
        super._init({});
        this.layoutQuickWidgetBin = new St$3.Bin({
            style_class: 'layout-quick-widget-bin',
            y_align: Clutter$6.ActorAlign.CENTER,
        });
        this.tilingIcon = new St$3.Icon({
            style_class: 'mat-panel-button-icon',
        });
        this.switcherButton = new MatPanelButton({
            child: this.tilingIcon,
            style_class: 'mat-panel-button',
            can_focus: true,
            track_hover: true,
        });
        this.switcherButton.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$6.ScrollDirection.UP:
                    this.msWorkspace.nextLayout(-1);
                    break;
                case Clutter$6.ScrollDirection.DOWN:
                    this.msWorkspace.nextLayout(1);
                    break;
            }
        });
        this.add_child(this.layoutQuickWidgetBin);
        this.add_child(this.switcherButton);
        this.msWorkspace = msWorkspace;
        this.menuManager = panelMenuManager;
        this.switcherButton.connect('clicked', (_actor, _button) => {
            this.menu.toggle();
        });
        this.updateLayoutWidget();
        const connectId = this.msWorkspace.connect('tiling-layout-changed', this.updateLayoutWidget.bind(this));
        this.menu = this.buildMenu();
        Main$5.layoutManager.uiGroup.add_actor(this.menu.actor);
        this.menuManager.addMenu(this.menu);
        this.connect('destroy', () => {
            this.msWorkspace.disconnect(connectId);
        });
    }
    updateLayoutWidget() {
        this.layoutQuickWidgetBin.set_child(null);
        if (!this.msWorkspace.layout) {
            return;
        }
        const quickWidget = this.msWorkspace.layout.buildQuickWidget();
        if (quickWidget) {
            this.layoutQuickWidgetBin.set_child(quickWidget);
            this.layoutQuickWidgetBin.show();
        }
        else {
            this.layoutQuickWidgetBin.hide();
        }
        this.tilingIcon.gicon = this.msWorkspace.layout.icon;
    }
    buildMenu() {
        const menu = new popupMenu.PopupMenu(this, 0.5, St$3.Side.TOP);
        menu.actor.add_style_class_name('horizontal-panel-menu');
        menu.actor.hide();
        Object.entries(TilingLayoutByKey).forEach(([layoutKey, layoutConstructor]) => {
            menu.addMenuItem(new TilingLayoutMenuItem(layoutConstructor, this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) != null));
        });
        menu.addMenuItem(new popupMenu.PopupSeparatorMenuItem());
        menu.addMenuItem(new LayoutsToggle(menu));
        return menu;
    }
    setLayout(layoutKey) {
        this.msWorkspace.setLayoutByKey(layoutKey);
    }
    addLayout(layoutKey) {
        if (this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) != null)
            return true;
        const wantedIndex = Me$7.layoutManager.layoutList.findIndex((layout) => {
            return layoutKey === layout.state.key;
        });
        const newState = Me$7.layoutManager.getLayoutByKey(layoutKey)
            .state;
        if (wantedIndex > this.msWorkspace.state.layoutStateList.length) {
            this.msWorkspace.state.layoutStateList.push(newState);
        }
        else {
            this.msWorkspace.state.layoutStateList.splice(wantedIndex, 0, newState);
        }
        Me$7.stateManager.stateChanged();
        return true;
    }
    removeLayout(layoutKey) {
        if (this.msWorkspace.state.layoutStateList.length === 1)
            return false;
        if (this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) === null)
            return true;
        const index = this.msWorkspace.state.layoutStateList.findIndex((layoutState) => layoutState.key === layoutKey);
        this.msWorkspace.state.layoutStateList.splice(index, 1);
        Me$7.stateManager.stateChanged();
        return true;
    }
    vfunc_allocate(...args) {
        const height = Me$7.msThemeManager.getPanelSizeNotScaled() / 2;
        if (this.tilingIcon && this.tilingIcon.get_icon_size() != height) {
            GLib$6.idle_add(GLib$6.PRIORITY_DEFAULT_IDLE, () => {
                this.tilingIcon.set_icon_size(height);
                return GLib$6.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
};
LayoutSwitcher.metaInfo = {
    GTypeName: 'LayoutSwitcher',
};
LayoutSwitcher = __decorate([
    registerGObjectClass
], LayoutSwitcher);
let TilingLayoutMenuItem = class TilingLayoutMenuItem extends popupMenu.PopupSwitchMenuItem {
    _init(layoutConstructor, active, params) {
        super._init(layoutConstructor.label, active, params);
        this.editable = false;
        this.layoutConstructor = layoutConstructor;
        this._icon = new St$3.Icon({
            style_class: 'popup-menu-icon',
            gicon: Gio$3.icon_new_for_string(`${Me$7.path}/assets/icons/tiling/${layoutConstructor.state.key}-symbolic.svg`),
            x_align: Clutter$6.ActorAlign.END,
        });
        this.insert_child_at_index(this._icon, 1);
        this.setEditable(false);
    }
    get layoutSwitcher() {
        const layoutSwitcher = assertNotNull(this._parent).sourceActor;
        assert(layoutSwitcher instanceof LayoutSwitcher, "expected menu's source actor to be a LayoutSwitcher");
        return layoutSwitcher;
    }
    activate(event) {
        if (!this.editable) {
            this.layoutSwitcher.setLayout(this.layoutConstructor.state.key);
            this.emit('activate', event);
        }
        else {
            if (this.state) {
                if (this.layoutSwitcher.removeLayout(this.layoutConstructor.state.key)) {
                    this.toggle();
                }
            }
            else {
                if (this.layoutSwitcher.addLayout(this.layoutConstructor.state.key)) {
                    this.toggle();
                }
            }
        }
        return;
    }
    setEditable(editable) {
        this.editable = editable;
        if (this.editable) {
            this.setSwitcherVisible(true);
            this.setVisible(true);
        }
        else {
            this.setSwitcherVisible(false);
            if (!this.state) {
                this.setVisible(false);
            }
        }
    }
    setSwitcherVisible(visible) {
        if (!this.mapped) {
            return (this._statusBin.opacity = visible ? 255 : 0);
        }
        this._statusBin.ease({
            opacity: visible ? 255 : 0,
            duration: 300,
        });
    }
    setVisible(visible) {
        if (!this.mapped) {
            return (this.height = visible ? -1 : 0);
        }
        if (visible) {
            if (this.height === 0) {
                this.height = -1;
                const height = this.height;
                this.height = 0;
                this.ease({
                    height: height,
                    duration: 300,
                    onComplete: () => {
                        this.height = -1;
                    },
                });
            }
        }
        else {
            this.ease({
                height: 0,
                duration: 300,
            });
        }
    }
};
TilingLayoutMenuItem = __decorate([
    registerGObjectClass
], TilingLayoutMenuItem);
let LayoutsToggle = class LayoutsToggle extends popupMenu.PopupImageMenuItem {
    _init(menu, params) {
        const editText = _('Tweak available layouts');
        const editIcon = Gio$3.icon_new_for_string(`${Me$7.path}/assets/icons/category/settings-symbolic.svg`);
        super._init(editText, editIcon, params);
        this.editText = editText;
        this.editIcon = editIcon;
        this.confirmText = _('Confirm layouts');
        this.confirmIcon = Gio$3.icon_new_for_string(`${Me$7.path}/assets/icons/check-symbolic.svg`);
        this.menu = menu;
        this.editable = false;
    }
    activate(_event) {
        this.toggleEditMode();
    }
    toggleEditMode() {
        this.editable = !this.editable;
        this.menu._getMenuItems().forEach((item) => {
            if (item instanceof TilingLayoutMenuItem) {
                item.setEditable(this.editable);
            }
        });
        if (this.editable) {
            this.label.set_text(this.confirmText);
            this._icon.gicon = this.confirmIcon;
        }
        else {
            this.label.set_text(this.editText);
            this._icon.gicon = this.editIcon;
        }
    }
};
LayoutsToggle = __decorate([
    registerGObjectClass
], LayoutsToggle);

const Clutter$5 = imports.gi.Clutter;
const GnomeDesktop = imports.gi.GnomeDesktop;
const St$2 = imports.gi.St;
const { popupMenu: PopupMenu } = imports.ui;
const Me$6 = imports.misc.extensionUtils.getCurrentExtension();
let HorizontalPanel = class HorizontalPanel extends St$2.BoxLayout {
    _init(msWorkspace) {
        super._init({
            name: 'horizontalPanel',
        });
        this.signalObserver = new SignalObserver();
        this._delegate = this;
        this.updateStyle();
        this.signalObserver.observe(Me$6.msThemeManager, msThemeSignalEnum.HorizontalPanelPositionChanged, this.updateStyle.bind(this));
        this.msWorkspace = msWorkspace;
        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.taskBar = new TaskBar(msWorkspace, this.menuManager);
        this.layoutSwitcher = new LayoutSwitcher(msWorkspace, this.menuManager);
        this.add_child(this.taskBar);
        this.add_child(this.layoutSwitcher);
        this.signalObserver.observe(Me$6.msThemeManager, msThemeSignalEnum.ClockHorizontalChanged, () => {
            if (Me$6.msThemeManager.clockHorizontal) {
                this.createClock();
            }
            else {
                this.removeClock();
            }
        });
        this.connect('destroy', () => {
            this.signalObserver.clear();
        });
        if (Me$6.msThemeManager.clockHorizontal) {
            this.createClock();
        }
    }
    createClock() {
        const clockLabel = new St$2.Label({
            style_class: 'clock-label',
            y_align: Clutter$5.ActorAlign.CENTER,
        });
        this.clockLabel = clockLabel;
        this.clockBin = new St$2.BoxLayout({});
        this.clockBin.add_child(clockLabel);
        this._wallClock = new GnomeDesktop.WallClock();
        const updateClock = () => {
            clockLabel.text = this._wallClock.clock;
        };
        const signalClock = this._wallClock.connect('notify::clock', updateClock);
        clockLabel.connect('notify::mapped', () => {
            if (clockLabel.mapped) {
                updateClock();
                clockLabel.queue_relayout();
            }
        });
        this.insert_child_at_index(this.clockBin, 1);
        clockLabel.connect('destroy', () => {
            this._wallClock.disconnect(signalClock);
            delete this._wallClock;
        });
    }
    updateStyle() {
        this.remove_style_class_name('position-top');
        this.remove_style_class_name('position-bottom');
        switch (Me$6.msThemeManager.horizontalPanelPosition) {
            case HorizontalPanelPositionEnum.TOP: {
                this.add_style_class_name('position-top');
                break;
            }
            case HorizontalPanelPositionEnum.BOTTOM: {
                this.add_style_class_name('position-bottom');
            }
        }
    }
    removeClock() {
        if (!this.clockBin)
            return;
        this.remove_child(this.clockBin);
        this.clockBin.destroy();
        this.clockBin = null;
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = Me$6.msThemeManager.getPanelSize();
        return [height, height];
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const clockWidth = this.clockBin
            ? this.clockBin.get_preferred_width(-1)[1]
            : 0;
        const taskBarBox = new Clutter$5.ActorBox();
        taskBarBox.x1 = contentBox.x1;
        taskBarBox.x2 = Math.max(contentBox.x2 - this.layoutSwitcher.width - clockWidth, 0);
        taskBarBox.y1 = contentBox.y1;
        taskBarBox.y2 = contentBox.y2;
        this.taskBar.allocate(taskBarBox);
        if (this.clockBin) {
            const clockBox = new Clutter$5.ActorBox();
            clockBox.x1 = taskBarBox.x2;
            clockBox.x2 = contentBox.x2 - this.layoutSwitcher.width;
            clockBox.y1 = contentBox.y1;
            clockBox.y2 = contentBox.y2;
            this.clockBin.allocate(clockBox);
        }
        const layoutSwitcherBox = new Clutter$5.ActorBox();
        layoutSwitcherBox.x1 = contentBox.x2 - this.layoutSwitcher.width;
        layoutSwitcherBox.x2 = contentBox.x2;
        layoutSwitcherBox.y1 = contentBox.y1;
        layoutSwitcherBox.y2 = contentBox.y2;
        this.layoutSwitcher.allocate(layoutSwitcherBox);
    }
};
HorizontalPanel = __decorate([
    registerGObjectClass
], HorizontalPanel);

const Clutter$4 = imports.gi.Clutter;
const GLib$5 = imports.gi.GLib;
const { AppSystem } = imports.gi.Shell;
const { main: Main$4 } = imports.ui;
const Me$5 = imports.misc.extensionUtils.getCurrentExtension();
const MAX_FOCUS_HISTORY_LENGTH = 5;
function isMsWindow(argument) {
    return argument instanceof MsWindow;
}
class MsWorkspace extends WithSignals {
    constructor(msWorkspaceManager, monitor, state = {}) {
        super();
        this.tileableList = [];
        this.closing = false;
        this.focusHistory = [];
        this.msWorkspaceManager = msWorkspaceManager;
        this.setMonitor(monitor);
        const initialState = Object.assign({
            external: this.monitor.index !== Main$4.layoutManager.primaryIndex,
            focusedIndex: 0,
            forcedCategory: null,
            msWindowList: [],
            layoutStateList: Me$5.layoutManager.defaultLayoutKeyList.map((layoutKey) => {
                return Me$5.layoutManager.getLayoutByKey(layoutKey).state;
            }),
            layoutKey: Me$5.layoutManager.defaultLayoutKey,
        }, state);
        this._state = Object.assign({}, initialState);
        this.appLauncher = new MsApplicationLauncher(this);
        this.msWorkspaceCategory = new MsWorkspaceCategory(this, initialState.forcedCategory);
        this.msWorkspaceActor = new MsWorkspaceActor(this);
        this.tileableList.push(this.appLauncher);
        const appSys = AppSystem.get_default();
        for (const msWindowData of initialState.msWindowList) {
            let matchingInfo = msWindowData.matchingInfo;
            if (matchingInfo === undefined &&
                msWindowData.metaWindowIdentifier !== null) {
                const parts = msWindowData.metaWindowIdentifier.split('-');
                if (logAssert(parts.length === 3, 'window identifier had an unknown format')) {
                    matchingInfo = {
                        appId: msWindowData.appId,
                        title: undefined,
                        pid: Number(parts[1]),
                        wmClass: parts[0],
                        stableSeq: Number(parts[2]),
                    };
                }
            }
            const app = appSys.lookup_app(msWindowData.appId);
            if (app) {
                Me$5.msWindowManager.createNewMsWindow(app, {
                    msWorkspace: this,
                    focus: false,
                    insert: false,
                }, msWindowData.persistent
                    ? msWindowData.persistent
                    : undefined, {
                    x: msWindowData.x,
                    y: msWindowData.y,
                    width: msWindowData.width,
                    height: msWindowData.height,
                }, matchingInfo, msWindowData.createdAt
                    ? new Date(msWindowData.createdAt)
                    : new Date(new Date().setUTCHours(new Date().getUTCHours() - 24)));
            }
        }
        this.msWorkspaceCategory.refreshCategory();
        this.setLayoutByKey(initialState.layoutKey);
        this.emit('tileableList-changed', this.tileableList);
        this.focusTileable(this.tileableList[initialState.focusedIndex] || null);
        this.connect('tileableList-changed', () => {
            this.msWorkspaceCategory.refreshCategory();
        });
    }
    destroy() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        this.appLauncher.onDestroy();
        this.layout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
        }
        this.destroyed = true;
    }
    get focusedIndex() {
        return this._state.focusedIndex;
    }
    set focusedIndex(index) {
        this._state.focusedIndex = index;
        Me$5.stateManager.stateChanged();
    }
    get state() {
        this._state.msWindowList = this.tileableList
            .filter(isMsWindow)
            .filter((msWindow) => {
            return (!msWindow.app.is_window_backed() &&
                (msWindow.lifecycleState.type === 'app-placeholder' ||
                    msWindow.lifecycleState.type === 'window'));
        })
            .map((msWindow) => {
            return msWindow.state;
        });
        if (this.layout) {
            this._state.layoutStateList[this._state.layoutStateList.findIndex((layoutState) => layoutState.key === this.layout.state.key)] = this.layout.state;
            this._state.layoutKey = this.layout.state.key;
        }
        if (this.msWorkspaceCategory) {
            this._state.forcedCategory =
                this.msWorkspaceCategory.forcedCategory;
        }
        return this._state;
    }
    get tileableFocused() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        return this.tileableList[this.focusedIndex] || null;
    }
    get msWindowList() {
        return this.tileableList.filter(isMsWindow);
    }
    get containFullscreenWindow() {
        return this.msWindowList.some((msWindow) => {
            return msWindow.metaWindow
                ? msWindow.metaWindow.is_fullscreen()
                : false;
        });
    }
    get workspace() {
        if (this.monitorIsExternal)
            return null;
        return this.msWorkspaceManager.getWorkspaceOfMsWorkspace(this);
    }
    close() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        this.closing = true;
        Promise.all(this.msWindowList.map((msWindow) => {
            return msWindow.kill();
        })).then((_params) => {
            this.closing = false;
            this.emit('readyToBeClosed');
        });
    }
    async addMsWindow(msWindow, focus = false, insert = false) {
        if (!msWindow ||
            (msWindow.msWorkspace && msWindow.msWorkspace === this)) {
            return;
        }
        msWindow.setMsWorkspace(this);
        try {
            return await this.addMsWindowUnchecked(msWindow, focus, insert);
        }
        catch (e) {
            return Me$5.logWithStackTrace('addMsWindowUnchecked failed');
        }
    }
    async addMsWindowUnchecked(msWindow, focus = false, insert = false) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.msWorkspaceActor && !msWindow.dragged) {
            reparentActor(msWindow, this.msWorkspaceActor.tileableContainer);
        }
        let insertAt = this.tileableList.length - 1;
        if (insert && this.tileableFocused !== this.appLauncher) {
            insertAt = this.focusedIndex + 1;
        }
        const oldFocused = this.tileableFocused;
        this.tileableList.splice(insertAt, 0, msWindow);
        this.focusedIndex = this.tileableList.indexOf(oldFocused);
        await this.emitTileableListChangedOnce();
        this.msWorkspaceActor.updateUI();
        if (focus) {
            this.focusTileable(msWindow);
        }
    }
    async removeMsWindow(msWindow) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.msWindowList.indexOf(msWindow) === -1)
            return;
        const oldFocused = this.tileableFocused;
        const tileableIndex = this.tileableList.indexOf(msWindow);
        this.tileableList.splice(tileableIndex, 1);
        if (oldFocused === msWindow) {
            let newFocusedIndex;
            const toFocus = this.popTileableFromFocusHistory();
            const chronologicalFocusIndex = toFocus !== undefined
                ? this.tileableList.indexOf(toFocus)
                : undefined;
            if (this.layout.preferredFocusHistory === 'chronological' &&
                chronologicalFocusIndex !== undefined) {
                newFocusedIndex = chronologicalFocusIndex;
            }
            else {
                newFocusedIndex = Math.max(0, Math.min(this.tileableList.length - 1, this.focusedIndex));
                if (chronologicalFocusIndex === this.focusedIndex ||
                    chronologicalFocusIndex === this.focusedIndex - 1) {
                    newFocusedIndex = chronologicalFocusIndex;
                }
                if (newFocusedIndex === this.tileableList.length - 1 &&
                    this.tileableList.length > 1) {
                    newFocusedIndex--;
                }
                if (newFocusedIndex !== chronologicalFocusIndex &&
                    chronologicalFocusIndex !== undefined) {
                    this.pushTileableToFocusHistory(this.tileableList[chronologicalFocusIndex]);
                }
            }
            this.focusedIndex = -1;
            await this.emitTileableListChangedOnce();
            this.focusTileable(this.tileableList[newFocusedIndex]);
        }
        else {
            this.focusedIndex = this.tileableList.indexOf(oldFocused);
            await this.emitTileableListChangedOnce();
        }
        this.msWorkspaceActor.updateUI();
        this.refreshFocus();
    }
    async emitTileableListChangedOnce() {
        if (!this.emitTileableChangedInProgress) {
            this.emitTileableChangedInProgress = new Promise((resolve) => {
                GLib$5.idle_add(GLib$5.PRIORITY_DEFAULT, () => {
                    delete this.emitTileableChangedInProgress;
                    this.emit('tileableList-changed', this.tileableList);
                    resolve();
                    return GLib$5.SOURCE_REMOVE;
                });
            });
        }
        return this.emitTileableChangedInProgress;
    }
    swapTileable(firstTileable, secondTileable) {
        const firstIndex = this.tileableList.indexOf(firstTileable);
        const secondIndex = this.tileableList.indexOf(secondTileable);
        assert(firstIndex !== -1, 'Tileable did not exist in workspace');
        assert(secondIndex !== -1, 'Tileable did not exist in workspace');
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;
        this.emit('tileableList-changed', this.tileableList);
    }
    swapTileableLeft(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1)
            return;
        if (index > 0 && tileable != this.appLauncher) {
            const previousTileable = this.tileableList[index - 1];
            this.swapTileable(tileable, previousTileable);
            this.focusPreviousTileable();
        }
    }
    swapTileableRight(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1)
            return;
        if (index < this.tileableList.length - 1 &&
            tileable != this.appLauncher) {
            const nextTileable = this.tileableList[index + 1];
            if (nextTileable === this.appLauncher) {
                return;
            }
            this.swapTileable(tileable, nextTileable);
            this.focusNextTileable();
        }
    }
    focusNextTileable() {
        if (this.focusedIndex === this.tileableList.length - 1) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(this.tileableList[0]);
                return;
            }
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex + 1]);
    }
    focusPreviousTileable() {
        if (this.focusedIndex === 0) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(this.tileableList[this.tileableList.length - 1]);
                return;
            }
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex - 1]);
    }
    focusAppLauncher() {
        if (!this.tileableList ||
            this.tileableList.length < 2 ||
            this.tileableFocused === this.appLauncher) {
            return;
        }
        this.focusTileable(this.appLauncher);
    }
    focusPreviousTileableFromHistory() {
        const toFocus = this.popTileableFromFocusHistory();
        if (toFocus !== undefined)
            this.focusTileable(toFocus);
    }
    maintainTileableFocusHistory() {
        for (let i = this.focusHistory.length - 1; i >= 0; i--) {
            if (!this.tileableList.includes(this.focusHistory[i])) {
                this.focusHistory.splice(i, 1);
            }
        }
        while (this.focusHistory.length > MAX_FOCUS_HISTORY_LENGTH)
            this.focusHistory.splice(0, 1);
    }
    pushTileableToFocusHistory(tileable) {
        logAssert(this.tileableList.includes(tileable), "Tileable doesn't exist in workspace");
        this.focusHistory.push(tileable);
        this.maintainTileableFocusHistory();
    }
    popTileableFromFocusHistory() {
        this.maintainTileableFocusHistory();
        return this.focusHistory.pop();
    }
    focusTileable(tileable, forced = false) {
        if (!tileable || (tileable === this.tileableFocused && !forced)) {
            return;
        }
        const newFocusIndex = this.tileableList.indexOf(tileable);
        if (newFocusIndex === -1)
            return;
        const oldTileableFocused = this.tileableFocused;
        if (tileable !== oldTileableFocused &&
            oldTileableFocused !== null &&
            oldTileableFocused instanceof MsWindow) {
            this.pushTileableToFocusHistory(oldTileableFocused);
        }
        this.focusedIndex = newFocusIndex;
        if (this.msWorkspaceManager.getActiveMsWorkspace() === this) {
            tileable.grab_key_focus();
        }
        this.emit('tileable-focus-changed', tileable, oldTileableFocused);
    }
    refreshFocus(forced = false) {
        if (this.msWorkspaceManager.getActiveMsWorkspace() !== this &&
            !forced) {
            return;
        }
        const focused = this.tileableFocused;
        if (focused !== null)
            focused.grab_key_focus();
    }
    setTileableAtIndex(tileableToMove, index) {
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        this.tileableList.splice(index, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList);
    }
    nextLayout(direction) {
        this.layout.onDestroy();
        let { key } = this.layout.constructor.state;
        if (!this.state.layoutStateList.find((layoutState) => layoutState.key === key)) {
            key = this.state.layoutStateList[0].key;
        }
        let nextIndex = this.state.layoutStateList.findIndex((layoutState) => layoutState.key === key) + direction;
        if (nextIndex < 0) {
            nextIndex += this.state.layoutStateList.length;
        }
        nextIndex = nextIndex % this.state.layoutStateList.length;
        const newLayoutState = this.state.layoutStateList[nextIndex];
        this.setLayoutByKey(newLayoutState.key);
    }
    setLayoutByKey(layoutKey) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.layout) {
            this.layout.onDestroy();
        }
        this.layout = Me$5.layoutManager.createLayout(this, assertNotNull(this.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey)));
        this.msWorkspaceActor.tileableContainer.set_layout_manager(this.layout);
        this.emit('tiling-layout-changed');
    }
    shouldPanelBeVisible() {
        return !this.containFullscreenWindow &&
            this.msWorkspaceManager &&
            Me$5.layout
            ? Me$5.layout.panelsVisible
            : true;
    }
    shouldCycleTileableNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-windows');
    }
    isDisplayed() {
        if (this.monitorIsExternal) {
            return true;
        }
        else {
            return (this === this.msWorkspaceManager.getActivePrimaryMsWorkspace());
        }
    }
    activate() {
        const workspace = this.workspace;
        if (workspace === null)
            return;
        if (this.tileableFocused instanceof MsWindow &&
            this.tileableFocused.metaWindow &&
            !this.tileableFocused.dragged) {
            workspace.activate_with_focus(this.tileableFocused.metaWindow, global.get_current_time());
        }
        else {
            workspace.activate(global.get_current_time());
            const grab = global.stage.grab(this.tileableFocused);
            this.refreshFocus();
            grab.dismiss();
        }
    }
    setMonitor(monitor) {
        this.monitor = monitor;
        this.monitorIsExternal =
            monitor.index !== Main$4.layoutManager.primaryIndex;
        this.msWindowList.forEach((msWindow) => {
            msWindow.setMsWorkspace(this);
        });
    }
}
let MsWorkspaceActor = class MsWorkspaceActor extends Clutter$4.Actor {
    _init(msWorkspace) {
        super._init({
            clip_to_allocation: true,
            x_expand: true,
            y_expand: true,
        });
        this.msWorkspace = msWorkspace;
        this.tileableContainer = new Clutter$4.Actor({});
        this.panel = new HorizontalPanel(msWorkspace);
        this.add_child(this.tileableContainer);
        this.add_child(this.panel);
        this.updateUI();
    }
    updateUI() {
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
        this.panel.visible =
            this.msWorkspace.shouldPanelBeVisible() && !monitorInFullScreen;
        this.visible = !monitorInFullScreen;
    }
    vfunc_allocate(box) {
        this.set_allocation(box);
        const contentBox = new Clutter$4.ActorBox();
        contentBox.x2 = box.get_width();
        contentBox.y2 = box.get_height();
        const panelPosition = Me$5.msThemeManager.horizontalPanelPosition;
        const panelHeight = this.panel.get_preferred_height(-1)[1];
        const panelBox = new Clutter$4.ActorBox();
        panelBox.x1 = contentBox.x1;
        panelBox.x2 = contentBox.x2;
        panelBox.y1 =
            panelPosition === HorizontalPanelPositionEnum.TOP
                ? contentBox.y1
                : contentBox.y2 - panelHeight;
        panelBox.y2 = panelBox.y1 + panelHeight;
        this.panel.allocate(panelBox);
        const containerBox = contentBox.copy();
        if (this.panel.visible) {
            if (panelPosition === HorizontalPanelPositionEnum.TOP) {
                containerBox.y1 = containerBox.y1 + panelHeight;
            }
            else {
                containerBox.y2 = containerBox.y2 - panelHeight;
            }
        }
        this.tileableContainer.allocate(containerBox);
        for (const actor of this.get_children()) {
            if (actor !== this.panel && actor !== this.tileableContainer) {
                actor.allocate(containerBox);
            }
        }
    }
};
MsWorkspaceActor.metaInfo = {
    GTypeName: 'MsWorkspaceActor',
};
MsWorkspaceActor = __decorate([
    registerGObjectClass
], MsWorkspaceActor);

function isNonNull(x) {
    return x !== null;
}

const Clutter$3 = imports.gi.Clutter;
const GLib$4 = imports.gi.GLib;
const Meta$1 = imports.gi.Meta;
const Shell = imports.gi.Shell;
const { main: Main$3, windowManager: windowManager$1 } = imports.ui;
const Me$4 = imports.misc.extensionUtils.getCurrentExtension();
const WorkspaceTracker = windowManager$1.WorkspaceTracker;
const beforeGnome44 = compareVersions(gnomeVersionNumber, parseVersion('44.0')) < 0;
class MsWorkspaceManager extends MsManager {
    constructor(state = {}) {
        super();
        this.workspaceManager = global.workspace_manager;
        this._state = Object.assign({
            msWorkspaceList: [],
            primaryWorkspaceActiveIndex: this.workspaceManager.get_active_workspace_index(),
        }, state);
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.settings = getSettings('tweaks');
        this.metaWindowFocused = null;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        this.workspaceTracker = Main$3.wm._workspaceTracker;
        WorkspaceTracker.prototype._oldCheckWorkspaces =
            WorkspaceTracker.prototype._checkWorkspaces;
        WorkspaceTracker.prototype._checkWorkspaces = function () {
            const workspaceManager = global.workspace_manager;
            let i;
            const emptyWorkspaces = [];
            if (!Meta$1.prefs_get_dynamic_workspaces()) {
                this._checkWorkspacesId = 0;
                const msWorkspaceManager = global.ms.msWorkspaceManager;
                while (workspaceManager.get_n_workspaces() <
                    msWorkspaceManager.primaryMsWorkspaces.length) {
                    const workspaceIndex = msWorkspaceManager.msWorkspaceList.indexOf(msWorkspaceManager.primaryMsWorkspaces[msWorkspaceManager.primaryMsWorkspaces.length -
                        1]);
                    msWorkspaceManager.removeMsWorkspaceAtIndex(workspaceIndex);
                }
                return false;
            }
            for (i = 0; i < this._workspaces.length; i++) {
                const lastRemoved = this._workspaces[i]._lastRemovedWindow;
                if ((lastRemoved &&
                    (lastRemoved.get_window_type() ==
                        Meta$1.WindowType.SPLASHSCREEN ||
                        lastRemoved.get_window_type() ==
                            Meta$1.WindowType.DIALOG ||
                        lastRemoved.get_window_type() ==
                            Meta$1.WindowType.MODAL_DIALOG)) ||
                    this._workspaces[i]._keepAliveId)
                    emptyWorkspaces[i] = false;
                else
                    emptyWorkspaces[i] = true;
            }
            const sequences = Shell.WindowTracker.get_default().get_startup_sequences();
            for (i = 0; i < sequences.length; i++) {
                const index = sequences[i].get_workspace();
                if (index >= 0 && index <= workspaceManager.n_workspaces)
                    emptyWorkspaces[index] = false;
            }
            const msWindowList = global.ms.msWindowManager.msWindowList;
            for (i = 0; i < msWindowList.length; i++) {
                const msWindow = msWindowList[i];
                if (msWindow.msWorkspace.monitor !=
                    Main$3.layoutManager.primaryMonitor)
                    continue;
                const workspace = global.ms.msWorkspaceManager.getWorkspaceOfMsWorkspace(msWindow.msWorkspace);
                assert(workspace !== null, 'Workspace does not exist');
                emptyWorkspaces[workspace.index()] = false;
            }
            if (!emptyWorkspaces[emptyWorkspaces.length - 1]) {
                workspaceManager.append_new_workspace(false, global.get_current_time());
                emptyWorkspaces.push(true);
            }
            const lastIndex = emptyWorkspaces.length - 1;
            const lastEmptyIndex = emptyWorkspaces.lastIndexOf(false) + 1;
            const activeWorkspaceIndex = workspaceManager.get_active_workspace_index();
            emptyWorkspaces[activeWorkspaceIndex] = false;
            for (i = lastIndex; i >= 0; i--) {
                if (emptyWorkspaces[i] && i != lastEmptyIndex) {
                    workspaceManager.remove_workspace(this._workspaces[i], global.get_current_time());
                }
            }
            this._checkWorkspacesId = 0;
            return false;
        };
        if (this.workspaceTracker._checkWorkspacesId !== 0) {
            if (beforeGnome44) {
                Meta$1.later_remove(this.workspaceTracker._checkWorkspacesId);
            }
            else {
                global.compositor
                    .get_laters()
                    .remove(this.workspaceTracker._checkWorkspacesId);
            }
            this.workspaceTracker._queueCheckWorkspaces();
        }
        this.observe(Main$3.layoutManager, 'monitors-changed', () => {
            this.onMonitorsChanged();
        });
        this.observe(Me$4.msWindowManager.msFocusManager, 'focus-changed', (_, msWindow) => {
            if (msWindow && msWindow.msWorkspace) {
                msWindow.msWorkspace.focusTileable(msWindow);
            }
        });
        this.observe(global.display, 'window-entered-monitor', (display, monitorIndex, window) => {
            this.windowEnteredMonitor(window, monitorIndex);
        });
        this.observe(this.workspaceManager, 'workspace-added', (_, workspaceIndex) => {
            if (this.restoringState)
                return;
            const workspace = this.workspaceManager.get_workspace_by_index(workspaceIndex);
            assert(workspace !== null, 'Workspace does not exist');
            this.setupNewWorkspace(workspace);
        });
        this.observe(this.workspaceManager, 'workspace-removed', (_, workspaceIndex) => {
            this.removeMsWorkspaceAtIndex(workspaceIndex);
        });
        this.observe(global.window_manager, 'switch-workspace', (_, from, to) => {
            if (!this.restoringState) {
                this.emit('switch-workspace', from, to);
                this.stateChanged();
            }
        });
    }
    init() {
        this.refreshMsWorkspaceUI();
    }
    destroy() {
        super.destroy();
        WorkspaceTracker.prototype._checkWorkspaces = WorkspaceTracker.prototype._oldCheckWorkspaces;
        delete WorkspaceTracker.prototype._oldCheckWorkspaces;
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            const workspace = this.workspaceManager.get_workspace_by_index(i);
            delete workspace._keepAliveId;
        }
        for (const msWorkspace of this.msWorkspaceList) {
            msWorkspace.destroy();
        }
    }
    get updatingMonitors() {
        return (this._updatingMonitors ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            this.primaryIndex !== global.display.get_primary_monitor());
    }
    initState() {
        Main$3.layoutManager.monitors
            .filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor)
            .forEach((monitor) => {
            this.createNewMsWorkspace(monitor);
        });
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace = this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }
    }
    restorePreviousState() {
        this.restoringState = true;
        this.removeEmptyWorkspaces();
        const msWorkspaceListToRestore = [...this._state.msWorkspaceList];
        Main$3.layoutManager.monitors
            .filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor)
            .forEach((monitor) => {
            const firstExternalStateIndex = msWorkspaceListToRestore.findIndex((msWorkspaceState) => msWorkspaceState.external);
            this.createNewMsWorkspace(monitor, firstExternalStateIndex > -1
                ? msWorkspaceListToRestore.splice(firstExternalStateIndex, 1)[0]
                : undefined);
        });
        if (msWorkspaceListToRestore.length) {
            msWorkspaceListToRestore.forEach((msWorkspaceState, index) => {
                const workspace = this.workspaceManager.get_workspace_by_index(index) ||
                    this.workspaceManager.append_new_workspace(false, global.get_current_time());
                this.setupNewWorkspace(workspace, msWorkspaceState);
            });
        }
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace = this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }
        if (Meta$1.prefs_get_dynamic_workspaces()) {
            const workspace = this.workspaceManager.append_new_workspace(false, global.get_current_time());
            this.setupNewWorkspace(workspace);
        }
        if (this._state && this._state.primaryWorkspaceActiveIndex) {
            const savedIndex = this._state.primaryWorkspaceActiveIndex;
            if (savedIndex &&
                savedIndex >= 0 &&
                savedIndex < this.workspaceManager.n_workspaces) {
                const workspace = this.workspaceManager.get_workspace_by_index(savedIndex);
                assert(workspace !== null, 'Workspace does not exist');
                workspace.activate(global.get_current_time());
            }
        }
        delete this.restoringState;
    }
    removeEmptyWorkspaces() {
        const emptyWorkspacesSlots = [];
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            emptyWorkspacesSlots[i] = true;
        }
        const windows = global.get_window_actors();
        for (let i = 0; i < windows.length; i++) {
            const actor = windows[i];
            const win = actor.get_meta_window();
            if (win.is_on_all_workspaces())
                continue;
            const workspaceIndex = win.get_workspace().index();
            emptyWorkspacesSlots[workspaceIndex] = false;
        }
        const emptyWorkspaces = emptyWorkspacesSlots
            .map((empty, index) => {
            return empty
                ? this.workspaceManager.get_workspace_by_index(index)
                : null;
        })
            .filter(isNonNull);
        emptyWorkspaces.forEach((workspace) => {
            this.workspaceManager.remove_workspace(workspace, global.get_current_time());
        });
    }
    onMonitorsChanged() {
        this._updatingMonitors = true;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        const externalMonitors = Main$3.layoutManager.monitors.filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor);
        externalMonitors.forEach((externalMonitor) => {
            const msWorkspace = this.msWorkspaceList.find((msWorkspace) => {
                return (msWorkspace.state.external &&
                    !Main$3.layoutManager.monitors.includes(msWorkspace.monitor));
            });
            if (msWorkspace) {
                msWorkspace.setMonitor(externalMonitor);
                if (!Meta$1.prefs_get_dynamic_workspaces()) {
                    const workspace = assertNotNull(this.getWorkspaceOfMsWorkspace(msWorkspace));
                    this.workspaceManager.remove_workspace(workspace, global.get_current_time());
                }
            }
            else {
                this.createNewMsWorkspace(externalMonitor);
            }
        });
        this.msWorkspaceList
            .filter((msWorkspace) => !Main$3.layoutManager.monitors.includes(msWorkspace.monitor))
            .forEach((msWorkspace) => {
            if (!msWorkspace.monitorIsExternal) {
                msWorkspace.setMonitor(assertNotNull(Main$3.layoutManager.primaryMonitor));
            }
            else {
                const monitorIsNowPrimary = msWorkspace.monitor ===
                    Main$3.layoutManager.primaryMonitor;
                const needToReplaceMonitor = monitorIsNowPrimary ||
                    !Main$3.layoutManager.monitors.includes(msWorkspace.monitor);
                const availableMonitor = Main$3.layoutManager.monitors.find((monitor) => {
                    return (monitor != Main$3.layoutManager.primaryMonitor &&
                        !this.msWorkspaceList.find((msWorkspace) => {
                            return msWorkspace.monitor === monitor;
                        }));
                });
                if (needToReplaceMonitor && availableMonitor) {
                    msWorkspace.setMonitor(availableMonitor);
                }
                else {
                    this.msWorkspaceList.splice(this.msWorkspaceList.indexOf(msWorkspace), 1);
                    if (Meta$1.prefs_get_dynamic_workspaces()) {
                        this.msWorkspaceList.splice(this.msWorkspaceList.indexOf(this.primaryMsWorkspaces[this.primaryMsWorkspaces.length - 1]), 1, msWorkspace);
                    }
                    else {
                        this.restoringState = true;
                        this.workspaceManager.append_new_workspace(false, global.get_current_time());
                        this.msWorkspaceList.push(msWorkspace);
                        this.restoringState = false;
                    }
                    msWorkspace.setMonitor(assertNotNull(Main$3.layoutManager.primaryMonitor));
                }
            }
        });
        this._updatingMonitors = false;
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    get primaryMsWorkspaces() {
        if (!this.msWorkspaceList)
            return [];
        return this.msWorkspaceList.filter((msWorkspace) => {
            return !msWorkspace.monitorIsExternal;
        });
    }
    setupNewWorkspace(workspace, initialState) {
        this.createNewMsWorkspace(assertNotNull(Main$3.layoutManager.primaryMonitor), initialState);
        this.observe(workspace, 'window-added', (workspace, window) => {
            this.metaWindowEnteredWorkspace(window, workspace);
        });
    }
    createNewMsWorkspace(monitor, initialState) {
        const msWorkspace = new MsWorkspace(this, monitor, initialState);
        msWorkspace.connect('tileableList-changed', (_) => {
            this.stateChanged();
        });
        msWorkspace.connect('tiling-layout-changed', (_) => {
            Me$4.stateManager.stateChanged();
        });
        msWorkspace.connect('readyToBeClosed', () => {
            const index = this.primaryMsWorkspaces.indexOf(msWorkspace);
            if (this.getActivePrimaryMsWorkspace() === msWorkspace &&
                !msWorkspace.msWindowList.length) {
                if (this.primaryMsWorkspaces[index - 1]) {
                    this.primaryMsWorkspaces[index - 1].activate();
                }
                else if (this.primaryMsWorkspaces[index + 1]) {
                    this.primaryMsWorkspaces[index + 1].activate();
                }
            }
        });
        this.msWorkspaceList.push(msWorkspace);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    removeMsWorkspaceAtIndex(index) {
        const msWorkspaceToDelete = this.primaryMsWorkspaces[index];
        if (msWorkspaceToDelete) {
            const globalIndex = this.msWorkspaceList.indexOf(msWorkspaceToDelete);
            this.msWorkspaceList.splice(globalIndex, 1);
            msWorkspaceToDelete.destroy();
            this.stateChanged();
            this.emit('dynamic-super-workspaces-changed');
        }
    }
    stateChanged() {
        if (this.restoringState ||
            this.updatingMonitors ||
            this.stateChangedTriggered)
            return;
        this.stateChangedTriggered = true;
        GLib$4.idle_add(GLib$4.PRIORITY_DEFAULT, () => {
            this.workspaceTracker._checkWorkspaces();
            Me$4.stateManager.stateChanged();
            this.stateChangedTriggered = false;
            return GLib$4.SOURCE_REMOVE;
        });
    }
    setMsWorkspaceAt(msWorkspaceToMove, toIndex) {
        const sourceIndex = this.msWorkspaceList.indexOf(msWorkspaceToMove);
        const realIndex = this.msWorkspaceList.indexOf(this.primaryMsWorkspaces[toIndex]);
        const workspace = this.workspaceManager.get_workspace_by_index(this.primaryMsWorkspaces.indexOf(msWorkspaceToMove));
        assert(workspace !== null, 'Workspace does not exist');
        this.workspaceManager.reorder_workspace(workspace, toIndex);
        this.msWorkspaceList.splice(sourceIndex, 1);
        this.msWorkspaceList.splice(realIndex, 0, msWorkspaceToMove);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    get state() {
        let msWorkspaceList = this.msWorkspaceList;
        if (Meta$1.prefs_get_dynamic_workspaces()) {
            msWorkspaceList = msWorkspaceList.filter((msWorkspace) => {
                return msWorkspace.msWindowList.length;
            });
        }
        this._state.msWorkspaceList = msWorkspaceList.map((msWorkspace) => {
            return msWorkspace.state;
        });
        this._state.primaryWorkspaceActiveIndex =
            this.workspaceManager.get_active_workspace_index();
        return this._state;
    }
    refreshMsWorkspaceUI() {
        this.msWorkspaceList.forEach((msWorkspace) => {
            msWorkspace.msWorkspaceActor.updateUI();
        });
    }
    getActiveMsWorkspace() {
        const currentMonitorIndex = global.display.get_current_monitor();
        const activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        const msWorkspace = currentMonitorIndex === Main$3.layoutManager.primaryIndex
            ? this.primaryMsWorkspaces[activeWorkspaceIndex]
            : Me$4.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(currentMonitorIndex)[0];
        return msWorkspace;
    }
    getActivePrimaryMsWorkspace() {
        const activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }
    getWorkspaceOfMsWorkspace(msWorkspace) {
        return this.workspaceManager.get_workspace_by_index(this.primaryMsWorkspaces.indexOf(msWorkspace));
    }
    getActiveMsWorkspaceOfMonitor(monitorIndex) {
        if (monitorIndex === Main$3.layoutManager.primaryIndex) {
            return this.getActivePrimaryMsWorkspace();
        }
        else {
            return this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        }
    }
    getMsWorkspacesOfMonitorIndex(monitorIndex) {
        return this.msWorkspaceList.filter((msWorkspace) => {
            return msWorkspace.monitor.index === monitorIndex;
        });
    }
    getMsWorkspaceOfMetaWindow(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        if (windowMonitorIndex !== Main$3.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        }
        else {
            return this.primaryMsWorkspaces[metaWindow.get_workspace().index()];
        }
    }
    getMsWorkspaceOfMsWindow(msWindow) {
        return this.msWorkspaceList.find((msWorkspace) => {
            return msWorkspace.msWindowList.includes(msWindow);
        });
    }
    determineAppropriateMsWorkspace(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();
        if (windowMonitorIndex !== Main$3.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        }
        else {
            return this.primaryMsWorkspaces[currentWindowWorkspace.index()];
        }
    }
    metaWindowEnteredWorkspace(metaWindow, workspace) {
        if (this.updatingMonitors ||
            !metaWindow.get_compositor_private())
            return;
        const msWindow = metaWindow.msWindow;
        if (!msWindow)
            return;
        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];
        if (metaWindow.on_all_workspaces ||
            msWindow.msWorkspace === msWorkspace) {
            return;
        }
        assert(metaWindow.createdAt !== undefined, "Can't tell when this window was created");
        if (msWindow.msWorkspace &&
            msWindow.msWorkspace.workspace &&
            msWindow.msWorkspace != msWorkspace &&
            global.display.get_current_time_roundtrip() - metaWindow.createdAt <
                2000) {
            return metaWindow.change_workspace(msWindow.msWorkspace.workspace);
        }
        this.setWindowToMsWorkspaceWithCreationChaosProtection(msWindow, msWorkspace);
    }
    windowEnteredMonitor(metaWindow, monitorIndex) {
        if (this.updatingMonitors)
            return;
        const currentMsWorkspaceOfMetaWindow = metaWindow.msWindow
            ? metaWindow.msWindow.msWorkspace
            : null;
        const msWorkspace = this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        if (!metaWindow.handledByMaterialShell ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            currentMsWorkspaceOfMetaWindow === msWorkspace ||
            monitorIndex === Main$3.layoutManager.primaryIndex) {
            return;
        }
        if (!msWorkspace || !metaWindow.msWindow) {
            return;
        }
        this.setWindowToMsWorkspaceWithCreationChaosProtection(metaWindow.msWindow, msWorkspace);
    }
    setWindowToMsWorkspaceWithCreationChaosProtection(msWindow, newMsWorkspace, insert = false) {
        assert(msWindow.metaWindow !== null, 'This must be called from an MsWindow with an metaWindow');
        assert(msWindow.metaWindow.createdAt !== undefined, "Can't tell when this window was created");
        const lifetime = global.display.get_current_time_roundtrip() -
            msWindow.metaWindow.createdAt;
        if (lifetime < 200) {
            Async.addTimeout(GLib$4.PRIORITY_DEFAULT, 200, () => {
                if (msWindow.metaWindow != null &&
                    msWindow.metaWindow.get_monitor() ===
                        newMsWorkspace.monitor.index) {
                    this.setWindowToMsWorkspace(msWindow, newMsWorkspace, insert);
                }
                return GLib$4.SOURCE_REMOVE;
            });
        }
        else {
            this.setWindowToMsWorkspace(msWindow, newMsWorkspace, insert);
        }
    }
    setWindowToMsWorkspace(msWindow, newMsWorkspace, insert = false) {
        const oldMsWorkspace = msWindow.msWorkspace;
        if (oldMsWorkspace) {
            if (oldMsWorkspace === newMsWorkspace) {
                return;
            }
            else {
                oldMsWorkspace.removeMsWindow(msWindow);
            }
        }
        newMsWorkspace.addMsWindow(msWindow, true, insert);
        this.stateChanged();
    }
    shouldCycleWorkspacesNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-workspaces');
    }
    _handleWindow(metaWindow) {
        const meta = Meta$1.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }
    activateNextMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex < this.workspaceManager.n_workspaces - 1) {
            this.primaryMsWorkspaces[currentIndex + 1].activate();
            return;
        }
        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[0].activate();
        }
    }
    activatePreviousMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex > 0) {
            this.primaryMsWorkspaces[currentIndex - 1].activate();
            return;
        }
        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[this.workspaceManager.n_workspaces - 1].activate();
        }
    }
    focusMsWorkspace(msWorkspace) {
        if (!msWorkspace)
            return;
        const backend = Clutter$3.get_default_backend();
        const seat = backend.get_default_seat();
        const [containerX, containerY] = msWorkspace.msWorkspaceActor.tileableContainer.get_transformed_position();
        seat.warp_pointer(containerX +
            Math.floor(msWorkspace.msWorkspaceActor.tileableContainer.width / 2), containerY +
            Math.floor(msWorkspace.msWorkspaceActor.tileableContainer.height / 2));
        msWorkspace.refreshFocus();
    }
}

const Me$3 = imports.misc.extensionUtils.getCurrentExtension();
const Gio$2 = imports.gi.Gio;
const GLib$3 = imports.gi.GLib;
const FileTest = GLib$3.FileTest;
const REGISTRY_PATH = `${GLib$3.get_user_cache_dir()}/${Me$3.uuid}-state.json`;
class StateManager {
    constructor() {
        this.state = {};
        this.stateFile = Gio$2.file_new_for_path(REGISTRY_PATH);
    }
    loadRegistry(callback) {
        if (typeof callback !== 'function')
            throw TypeError('`callback` must be a function');
        const serializedState = global.get_persistent_state('s', 'material-shell-state');
        if (serializedState) {
            try {
                this.state = this.updateState(JSON.parse(serializedState.deep_unpack()));
            }
            catch (e) {
                this.state = {};
            }
            return callback(this.state);
        }
        if (GLib$3.file_test(REGISTRY_PATH, FileTest.EXISTS)) {
            this.stateFile.load_contents_async(null, (obj, res) => {
                const file = obj;
                const [success, contents] = file.load_contents_finish(res);
                if (success) {
                    try {
                        this.state = this.updateState(JSON.parse(imports.byteArray.toString(contents)));
                    }
                    catch (e) {
                        Me$3.log(e);
                        this.state = {};
                    }
                }
                callback(this.state);
            });
        }
        else {
            this.state = {};
            callback(this.state);
        }
    }
    updateState(state) {
        if (state) {
            const workspacesState = state['workspaces-state'];
            if (workspacesState) {
                workspacesState.msWorkspaceList =
                    workspacesState.msWorkspaceList || [
                        ...workspacesState.primaryWorkspaceList,
                        ...workspacesState.externalWorkspaces,
                    ];
                workspacesState.msWorkspaceList.map((msWorkspaceState) => {
                    msWorkspaceState.layoutKey =
                        msWorkspaceState.layoutKey ||
                            msWorkspaceState.tilingLayout;
                    delete msWorkspaceState.tilingLayout;
                    return msWorkspaceState;
                });
            }
        }
        return state;
    }
    saveRegistry() {
        const json = JSON.stringify(this.state);
        global.set_persistent_state('material-shell-state', GLib$3.Variant.new_string(json));
    }
    getState(key) {
        return this.state[key];
    }
    setState(key, value) {
        if (value === undefined) {
            delete this.state[key];
        }
        else {
            this.state[key] = value;
        }
        this.saveRegistry();
    }
    stateChanged() {
        if (!Me$3.loaded ||
            Me$3.msWorkspaceManager.updatingMonitors ||
            this.stateChangedTriggered ||
            Me$3.disableInProgress)
            return;
        this.stateChangedTriggered = true;
        GLib$3.idle_add(GLib$3.PRIORITY_DEFAULT, () => {
            this.saveCurrentState();
            this.stateChangedTriggered = false;
            return GLib$3.SOURCE_REMOVE;
        });
    }
    saveCurrentState() {
        if (!Me$3.loaded || Me$3.disableInProgress)
            return;
        if (getSettings('tweaks').get_boolean('enable-persistence')) {
            this.setState('workspaces-state', Me$3.msWorkspaceManager.state);
        }
    }
    destroy() { }
}

const Clutter$2 = imports.gi.Clutter;
const GLib$2 = imports.gi.GLib;
const St$1 = imports.gi.St;
const { main: Main$2 } = imports.ui;
class TooltipManager extends MsManager {
    constructor() {
        super();
    }
    add(actor, params = {}) {
        let actorDestroyed = false;
        actor.set_reactive(true);
        const tooltipCallback = () => {
            let tooltip;
            let left = false;
            let timeoutId;
            const leaveCallback = () => {
                left = true;
                if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                }
                if (timeoutId) {
                    Async.clearTimeoutId(timeoutId);
                    timeoutId = 0;
                }
                if (!actorDestroyed) {
                    actor.disconnect(leaveId);
                    actor.disconnect(destroyId);
                }
                global.stage.disconnect(deactivateId);
            };
            const leaveId = actor.connect('leave-event', leaveCallback);
            const destroyId = actor.connect('destroy', () => {
                actorDestroyed = true;
                leaveCallback();
            });
            const deactivateId = global.stage.connect('deactivate', leaveCallback);
            timeoutId = Async.addTimeout(GLib$2.PRIORITY_DEFAULT, 200, () => {
                timeoutId = 0;
                if (!left) {
                    tooltip = this.createTooltip(actor, params);
                }
                return GLib$2.SOURCE_REMOVE;
            });
        };
        this.observe(actor, 'enter-event', tooltipCallback);
    }
    createTooltip(actor, params) {
        let actorText;
        if (actor instanceof St$1.Label || actor instanceof Clutter$2.Text) {
            const clutterText = actor instanceof St$1.Label
                ? actor.get_clutter_text()
                : actor;
            if (clutterText.get_layout().is_ellipsized()) {
                actorText = clutterText.get_text();
            }
        }
        if (actorText)
            params.text = actorText;
        if (!params.text) {
            return;
        }
        const tooltip = new MatTooltip(actor, params);
        Main$2.layoutManager.addChrome(tooltip);
        tooltip.show();
        return tooltip;
    }
}
var TooltipSide;
(function (TooltipSide) {
    TooltipSide[TooltipSide["LEFT"] = 0] = "LEFT";
    TooltipSide[TooltipSide["TOP"] = 1] = "TOP";
    TooltipSide[TooltipSide["RIGHT"] = 2] = "RIGHT";
    TooltipSide[TooltipSide["BOTTOM"] = 3] = "BOTTOM";
})(TooltipSide || (TooltipSide = {}));
let MatTooltip = class MatTooltip extends St$1.Label {
    _init(sourceActor, params = {}) {
        const allParams = Object.assign({
            text: '',
            relativeActor: null,
            offsetX: 0,
            offsetY: 0,
            side: TooltipSide.BOTTOM,
        }, params);
        super._init({
            text: allParams.text,
            opacity: 0,
            scale_x: 0.8,
            scale_y: 0.8,
            y_align: Clutter$2.ActorAlign.CENTER,
        });
        this.set_pivot_point(0.5, 0.5);
        this.params = allParams;
        this.get_clutter_text().y_align = Clutter$2.ActorAlign.CENTER;
        this.sourceActor = sourceActor;
    }
    show() {
        this.ease({
            opacity: 255,
            scale_x: 1,
            scale_y: 1,
            duration: 300,
        });
    }
    remove() {
        this.ease({
            opacity: 0,
            duration: 500,
            onComplete: () => {
                Main$2.layoutManager.removeChrome(this);
                this.destroy();
            },
        });
    }
    vfunc_allocate(...args) {
        const relativeActor = this.params.relativeActor || this.sourceActor;
        const [stageX, stageY] = relativeActor.get_transformed_position();
        let x, y;
        switch (this.params.side) {
            case TooltipSide.LEFT:
                x = stageX - this.get_width();
                y =
                    stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                break;
            case TooltipSide.TOP:
                x =
                    stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                y = stageY - this.get_height();
                break;
            case TooltipSide.RIGHT:
                x = stageX + relativeActor.get_width();
                y =
                    stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                break;
            case TooltipSide.BOTTOM:
                x =
                    stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                y = stageY + relativeActor.get_height();
                break;
        }
        GLib$2.idle_add(GLib$2.PRIORITY_DEFAULT_IDLE, () => {
            this.set_position(Math.max(Math.round(x + this.params.offsetX), 0), Math.max(Math.round(y + this.params.offsetY), 0));
            return GLib$2.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }
};
MatTooltip.metaInfo = {
    GTypeName: 'MatTooltip',
};
MatTooltip = __decorate([
    registerGObjectClass
], MatTooltip);

const { main: Main$1 } = imports.ui;
const { ExtensionManager, ENABLED_EXTENSIONS_KEY } = imports.ui.extensionSystem;
const Me$2 = imports.misc.extensionUtils.getCurrentExtension();
const incompatibleExtensions = [
    'desktop-icons@csoriano',
    'ubuntu-dock@ubuntu.com',
    'dash-to-dock@micxgx.gmail.com',
    'ding@rastersoft.com',
    'pop-shell@system76.com',
    'improved-workspace-indicator@michaelaquilina.github.io',
];
let originalFunction;
class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction = ExtensionManager.prototype._callExtensionEnable;
        ExtensionManager.prototype._callExtensionEnable = function (uuid, ...args) {
            if (incompatibleExtensions.includes(uuid))
                return;
            originalFunction.apply(this, arguments);
        };
        this.disableExtensions();
    }
    disableExtensions() {
        for (const incompatibleExtension of incompatibleExtensions) {
            try {
                if (Main$1.extensionManager.disableExtension(incompatibleExtension)) {
                    Me$2.log(`Disabled gnome extension ${incompatibleExtension} because it is incompatible with Material Shell`);
                }
            }
            catch (e) {
                Me$2.logFocus('disable error', incompatibleExtension, e);
            }
        }
    }
    destroy() {
        ExtensionManager.prototype._callExtensionEnable = originalFunction;
        originalFunction = null;
    }
}

const Meta = imports.gi.Meta;
const { windowManager } = imports.ui;
class OverrideModule {
    constructor() {
        this.windowManagersFunctionToRestore = [];
        this.overrideWindowManagerFunctions();
        this.orignalMetaWorkspaceOnPrimary =
            Meta.prefs_get_workspaces_only_on_primary;
        Meta.prefs_get_workspaces_only_on_primary = () => true;
    }
    destroy() {
        this.restoreWindowManagersFunctions();
        Meta.prefs_get_workspaces_only_on_primary =
            this.orignalMetaWorkspaceOnPrimary;
    }
    overrideWindowManagerFunctions() {
        this.windowManagersFunctionToRestore = [];
        const _shouldAnimate = windowManager.WindowManager.prototype._shouldAnimate;
        windowManager.WindowManager.prototype._shouldAnimate = function (_actor, _types) {
            return false;
        };
        this.windowManagersFunctionToRestore.push([
            windowManager.WindowManager.prototype._shouldAnimate,
            _shouldAnimate,
        ]);
    }
    restoreWindowManagersFunctions() {
        this.windowManagersFunctionToRestore.forEach((functions) => {
            functions[0] = functions[1];
        });
    }
}

const Gio$1 = imports.gi.Gio;
function getDynamic(settings, key, valueType) {
    switch (valueType) {
        case 'string':
            return settings.get_string(key);
        case 'boolean':
            return settings.get_boolean(key);
    }
}
function setDynamic(settings, key, valueType, value) {
    switch (valueType) {
        case 'string':
            assert(typeof value === 'string', 'invalid value');
            return settings.set_string(key, value);
        case 'boolean':
            assert(typeof value === 'boolean', 'invalid value');
            return settings.set_boolean(key, value);
    }
}
class RequiredSettingsModule {
    constructor() {
        this.mutterSettings = new Gio$1.Settings({
            schema_id: 'org.gnome.mutter',
        });
        this.settingsToForce = [
            {
                schema: 'org.gnome.mutter',
                key: 'workspaces-only-on-primary',
                value: true,
                valueType: 'boolean',
            },
            {
                schema: 'org.gnome.desktop.wm.preferences',
                key: 'button-layout',
                value: 'appmenu:close',
                valueType: 'string',
            },
        ];
        this.signals = [];
        this.settingsToRestore = [];
        this.settingsToForce.forEach((settingToForce) => {
            const setting = new Gio$1.Settings({
                schema_id: settingToForce.schema,
            });
            this.setValueIfDifferent(setting, settingToForce.key, settingToForce.value, settingToForce.valueType);
            const id = setting.connect(`changed::${settingToForce.key}`, () => {
                this.setValueIfDifferent(setting, settingToForce.key, settingToForce.value, settingToForce.valueType);
            });
            this.signals.push({
                from: setting,
                id,
            });
        });
        const bindingSettings = getSettings('bindings');
        this.hotkeysToRemove = bindingSettings.list_keys().map((key) => {
            return bindingSettings.get_strv(key)[0];
        });
        this.keysToRestore = [];
        for (const schema of [
            'org.gnome.desktop.wm.keybindings',
            'org.gnome.shell.keybindings',
            'org.gnome.mutter.keybindings',
            'org.gnome.mutter.wayland.keybindings',
        ]) {
            const setting = new Gio$1.Settings({
                schema_id: schema,
            });
            setting.list_keys().forEach((key) => {
                const shortcut = setting.get_strv(key);
                if (shortcut[0] &&
                    this.hotkeysToRemove.indexOf(shortcut[0]) > -1) {
                    this.keysToRestore.push({
                        setting,
                        key,
                        shortcut,
                    });
                    setting.set_strv(key, ['']);
                }
            });
        }
    }
    destroy() {
        this.signals.forEach((signal) => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.settingsToRestore.forEach((settingToRestore) => {
            const { setting, key, value, valueType } = settingToRestore;
            setDynamic(setting, key, valueType, value);
        });
        this.keysToRestore.forEach((keyToRestore) => {
            keyToRestore.setting.set_strv(keyToRestore.key, keyToRestore.shortcut);
        });
        this.keysToRestore = [];
    }
    setValueIfDifferent(setting, key, value, valueType) {
        const prevVal = getDynamic(setting, key, valueType);
        if (prevVal !== value) {
            this.settingsToRestore.push({
                setting,
                key,
                value: prevVal,
                valueType,
            });
            setDynamic(setting, key, valueType, value);
        }
    }
}

const GLib$1 = imports.gi.GLib;
const Me$1 = imports.misc.extensionUtils.getCurrentExtension();
const DEBUG = true;
const FOCUS_ONLY = false;
let indent = 0;
function initDebug() {
    const AddLogToFunctions = function (prototype) {
        if (!DEBUG)
            return;
        for (const key of Object.getOwnPropertyNames(prototype)) {
            if (key === 'constructor')
                continue;
            const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor) {
                const value = descriptor.value;
                if (typeof value === 'function') {
                    prototype[key] = function (...args) {
                        Me$1.log(`${prototype.constructor.name}.${key} (${Array.from(args)
                            .map((param) => {
                            try {
                                return param.toString();
                            }
                            catch (_e) {
                                return '';
                            }
                        })
                            .join(',')})`);
                        indent++;
                        try {
                            const result = value.apply(this, args);
                            return result;
                        }
                        finally {
                            indent--;
                        }
                    };
                }
            }
        }
    };
    Me$1.logWithStackTrace = function (...args) {
        Me$1.log(...args, new Error().stack);
    };
    Me$1.log = function (...args) {
        if (!DEBUG || FOCUS_ONLY)
            return;
        const fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';
        GLib$1.log_structured(domain, GLib$1.LogLevelFlags.LEVEL_MESSAGE, fields);
    };
    Me$1.logFocus = function (...args) {
        if (!DEBUG)
            return;
        const fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';
        GLib$1.log_structured(domain, GLib$1.LogLevelFlags.LEVEL_MESSAGE, fields);
    };
    let doLogTick = false;
    const startLogTick = function () {
        doLogTick = true;
        logTick();
    };
    function logTick() {
        GLib$1.idle_add(GLib$1.PRIORITY_DEFAULT, () => {
            if (doLogTick) {
                logTick();
            }
            return GLib$1.SOURCE_REMOVE;
        });
    }
    const stopLogTick = function () {
        doLogTick = false;
    };
    Me$1.logBlank = function () {
        for (let i = 0; i < 50; i++) {
            Me$1.logFocus('');
        }
    };
    if (DEBUG) {
        GLib$1.idle_add(GLib$1.PRIORITY_DEFAULT, () => {
            const objects = [];
            objects
                .filter((object) => object)
                .forEach((object) => AddLogToFunctions(object.prototype));
            return false;
        });
    }
}

const Clutter$1 = imports.gi.Clutter;
function polyfillClutter() {
    const OldClutter = Clutter$1;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Down'))
        OldClutter.KEY_Down = OldClutter.Down;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Right'))
        OldClutter.KEY_Right = OldClutter.Right;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Left'))
        OldClutter.KEY_Left = OldClutter.Left;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Up'))
        OldClutter.KEY_Up = OldClutter.Up;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Escape'))
        OldClutter.KEY_Escape = OldClutter.Escape;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_ISO_Left_Tab'))
        OldClutter.KEY_ISO_Left_Tab = OldClutter.ISO_Left_Tab;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_KP_Enter'))
        OldClutter.KEY_KP_Enter = OldClutter.KP_Enter;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Return'))
        OldClutter.KEY_Return = OldClutter.Return;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Tab'))
        OldClutter.KEY_Tab = OldClutter.Tab;
}

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Clutter = imports.gi.Clutter;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const St = imports.gi.St;
const { main: Main } = imports.ui;
const Signals = imports.signals;
let disableIncompatibleExtensionsModule;
let modules;
let _startupPreparedId;
let _splashscreenTimeoutId;
let _closingId;
let splashscreenCalled;
let splashScreens = [];
const oldOverview = Main.overview;
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    global.ms = Me;
    Me.showSplashScreens = showSplashScreens;
    Me.hideSplashScreens = hideSplashScreens;
    Me.closing = false;
    Me.locked = false;
    splashscreenCalled = false;
}
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    if (Me.locked) {
        Me.locked = false;
        Me.layout.panel.enable();
        oldOverview.isDummy = true;
        return;
    }
    Signals.addSignalMethods(Me);
    polyfillClutter();
    initDebug();
    _closingId = global.display.connect('closing', () => {
        Me.closing = true;
    });
    Me.monitorsLength = Main.layoutManager.monitors.length;
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();
    GLib.idle_add(GLib.PRIORITY_LOW, () => {
        disableIncompatibleExtensionsModule =
            new DisableIncompatibleExtensionsModule();
        Me.stateManager.loadRegistry((state) => {
            modules = [new RequiredSettingsModule(), new OverrideModule()];
            Me.tooltipManager = new TooltipManager();
            Me.layoutManager = new LayoutManager();
            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager(state['workspaces-state']);
            Me.msNotificationManager = new MsNotificationManager();
            modules = [...modules, (Me.hotKeysModule = new HotKeysModule())];
            Me.msThemeManager = new MsThemeManager();
            Me.msThemeManager.regenerateStylesheet();
            if (getSettings('tweaks').get_boolean('enable-persistence')) {
                Me.msWorkspaceManager.restorePreviousState();
            }
            else {
                Me.msWorkspaceManager.initState();
            }
            new MsMain();
            Me.msWindowManager.handleExistingMetaWindows();
            if (Main.layoutManager._startingUp) {
                _startupPreparedId = Main.layoutManager.connect('startup-complete', () => loaded(true));
            }
            else {
                loaded(false);
            }
        });
        return GLib.SOURCE_REMOVE;
    });
}
function loaded(disconnect) {
    log('----------------');
    log('EXTENSION LOADED');
    log('----------------');
    if (disconnect && _startupPreparedId !== undefined) {
        Main.layoutManager.disconnect(_startupPreparedId);
    }
    Me.loaded = true;
    Me.locked = false;
    if (oldOverview.visible)
        oldOverview.toggle();
    oldOverview.isDummy = true;
    Me.emit('extension-loaded');
    Me.msNotificationManager.check();
    if (splashscreenCalled) {
        if (_splashscreenTimeoutId) {
            Async.clearTimeoutId(_splashscreenTimeoutId);
            _splashscreenTimeoutId = 0;
        }
        Async.addTimeout(GLib.PRIORITY_DEFAULT, 1000, () => {
            hideSplashScreens();
            return GLib.SOURCE_REMOVE;
        });
    }
    log('--------------------');
    log('END EXTENSION LOADED');
    log('--------------------');
}
function disable() {
    log('-----------------');
    log('DISABLE EXTENSION');
    log('-----------------');
    if (Main.sessionMode.currentMode === 'unlock-dialog') {
        Me.locked = true;
        Me.layout.panel.disable();
    }
    else {
        Me.disableInProgress = true;
        Async.clearAllPendingTimeout();
        if (!modules)
            return;
        if (_closingId !== undefined) {
            global.display.disconnect(_closingId);
        }
        Me.emit('extension-disable');
        modules.reverse().forEach((module) => {
            module.destroy();
        });
        Me.tooltipManager.destroy();
        Me.layoutManager.destroy();
        Me.msWorkspaceManager.destroy();
        Me.msWindowManager.destroy();
        Me.layout.destroy();
        Me.msThemeManager.destroy();
        disableIncompatibleExtensionsModule.destroy();
        Me.stateManager.destroy();
        Me.loaded = false;
        delete Me.disableInProgress;
    }
    log('---------------------');
    log('END DISABLE EXTENSION');
    log('---------------------');
}
function showSplashScreens() {
    log('show splashscreen');
    splashscreenCalled = true;
    Main.layoutManager.monitors.forEach((monitor) => {
        const icon = new St.Icon({
            gicon: Gio.icon_new_for_string(`${Me.path}/assets/icons/on-dark-small.svg`),
            icon_size: 200,
        });
        const splashscreen = new St.Bin({
            style_class: 'ms-splashscreen',
            style: 'background: rgb(25,25,25)',
            child: icon,
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });
        Main.layoutManager.addChrome(splashscreen);
        splashScreens.push(splashscreen);
    });
    _splashscreenTimeoutId = Async.addTimeout(GLib.PRIORITY_DEFAULT, 5000, () => {
        _splashscreenTimeoutId = 0;
        hideSplashScreens();
        return GLib.SOURCE_REMOVE;
    });
}
function hideSplashScreens() {
    if (splashScreens.length < 1)
        return GLib.SOURCE_REMOVE;
    splashScreens.forEach((splashscreen) => {
        splashscreen.ease({
            opacity: 0,
            duration: 800,
            mode: Clutter.AnimationMode.EASE_IN_QUAD,
            onComplete: () => {
                Main.layoutManager.removeChrome(splashscreen);
                splashscreen.destroy();
            },
        });
    });
    splashScreens = [];
    splashscreenCalled = false;
}
