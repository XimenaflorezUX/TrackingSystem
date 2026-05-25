'use strict';

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var LoadingDots_module = require('./LoadingDots.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(LoadingDots_module);
var LoadingDots = function (_a) {
    var className = _a.className, classNames = _a.classNames, props = tslib_es6.__rest(_a, ["className", "classNames"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({ className: cx(LoadingDots_module.dots, className) }, props),
        React__default["default"].createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot }),
        React__default["default"].createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot }),
        React__default["default"].createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot })));
};

module.exports = LoadingDots;
//# sourceMappingURL=LoadingDots.component.js.map
