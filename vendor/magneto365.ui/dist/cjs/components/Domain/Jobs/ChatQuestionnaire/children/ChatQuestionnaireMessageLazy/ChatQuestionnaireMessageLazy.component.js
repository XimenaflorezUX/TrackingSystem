'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Chat_component = require('../../../../../UI/molecules/Chat/Chat.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var waitFor = function (ms) {
    return new Promise(function (res) {
        setTimeout(function () { return res(undefined); }, ms);
    });
};
var ChatQuestionnaireMessageLazy = function (_a) {
    var children = _a.children, _b = _a.waitFor, waitForTime = _b === void 0 ? 500 : _b, onLoad = _a.onLoad;
    var _c = React.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var onLoadRef = React.useRef(onLoad);
    React.useEffect(function () {
        onLoadRef.current = onLoad;
    }, [onLoad]);
    React.useEffect(function () {
        function wait() {
            var _a;
            return tslib_es6.__awaiter(this, void 0, void 0, function () {
                return tslib_es6.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, waitFor(waitForTime)];
                        case 1:
                            _b.sent();
                            setIsLoading(false);
                            (_a = onLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(onLoadRef);
                            return [2 /*return*/];
                    }
                });
            });
        }
        wait();
    }, [waitForTime]);
    if (isLoading)
        return React__default["default"].createElement(Chat_component.Chat.LoadingDots, null);
    return React__default["default"].createElement(React__default["default"].Fragment, null, children);
};

exports.ChatQuestionnaireMessageLazy = ChatQuestionnaireMessageLazy;
//# sourceMappingURL=ChatQuestionnaireMessageLazy.component.js.map
