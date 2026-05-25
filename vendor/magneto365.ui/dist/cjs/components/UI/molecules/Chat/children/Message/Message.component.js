'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Message_module = require('./Message.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Message_module);
var Component = function (_a) {
    var children = _a.children, to = _a.to, classNames = _a.classNames, className = _a.className, renderLeft = _a.renderLeft, renderRight = _a.renderRight, rest = tslib_es6.__rest(_a, ["children", "to", "classNames", "className", "renderLeft", "renderRight"]);
    return (React__default["default"].createElement("article", tslib_es6.__assign({ className: cx('bubble-container', className, {
            'message-left': to === 'left',
            'message-right': to === 'right',
        }) }, rest), renderLeft === null || renderLeft === void 0 ? void 0 :
        renderLeft(),
        React__default["default"].createElement("span", { className: cx('bubble-message', classNames === null || classNames === void 0 ? void 0 : classNames.content) }, children), renderRight === null || renderRight === void 0 ? void 0 :
        renderRight()));
};
var Message = Component;

exports.Message = Message;
//# sourceMappingURL=Message.component.js.map
