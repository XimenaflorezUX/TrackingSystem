import { __assign, __spreadArray } from '../../node_modules/tslib/tslib.es6.js';

var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.listenersMap = {};
    }
    /**
     *
     * @param eventType Event Type to subscribe
     * @param listener Callback that execute each time that dispatch function
     * is called with event type subscribed
     * @returns unsubscribe function
     */
    EventDispatcher.prototype.subscribe = function (eventType, listener) {
        var _a;
        var _this = this;
        var listeners = this.listenersMap[eventType] || [];
        this.listenersMap = __assign(__assign({}, this.listenersMap), (_a = {}, _a[eventType] = __spreadArray(__spreadArray([], listeners, true), [listener], false), _a));
        // unsubscribe function
        return function () {
            var _a;
            var _b;
            _this.listenersMap = __assign(__assign({}, _this.listenersMap), (_a = {}, _a[eventType] = (_b = _this.listenersMap[eventType]) === null || _b === void 0 ? void 0 : _b.filter(function (l) { return l !== listener; }), _a));
        };
    };
    /**
     *
     * @param eventType Event Type to dispatch data
     * @param payload Data
     */
    EventDispatcher.prototype.dispatch = function (eventType, payload) {
        var listeners = this.listenersMap[eventType] || [];
        listeners.forEach(function (cb) { return cb(payload); });
    };
    return EventDispatcher;
}());

export { EventDispatcher as default };
//# sourceMappingURL=eventDispatcher.util.js.map
