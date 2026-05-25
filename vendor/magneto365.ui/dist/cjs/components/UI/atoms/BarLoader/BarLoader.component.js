'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var BarLoader_constants = require('./BarLoader.constants.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
var BarLoader_module = require('./BarLoader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, color = _a.color, percent = _a.percent;
    var validateCompleted = React.useCallback(function (value) {
        if (!value)
            return 0;
        var numValue = Number(value);
        if (isNaN(numValue) || numValue < 0)
            return 0;
        if (numValue > 100)
            return 100;
        return numValue;
    }, []);
    var barColor = React.useMemo(function () {
        var _a;
        return (_a = {}, _a["".concat(BarLoader_constants.BAR_LOADER_PREFIX, "-color")] = color, _a);
    }, [color]);
    var barCompleted = React.useMemo(function () {
        var _a;
        return (_a = {}, _a["".concat(BarLoader_constants.BAR_LOADER_PREFIX, "-completed")] = "".concat(validateCompleted(percent), "%"), _a);
    }, [percent, validateCompleted]);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: BarLoader_module, cls: [className] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: BarLoader_module, cls: ['bar-loader'] }), style: tslib_es6.__assign(tslib_es6.__assign({}, barColor), barCompleted) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({
                    styles: BarLoader_module,
                    cls: ['bar-loader__bar', percent !== undefined ? 'bar-loader__bar--completed' : 'bar-loader__bar--animated']
                }) }))));
};
/**
 * UI Atom component of Bar Loader
 */
var BarLoader = Component;

exports.BarLoader = BarLoader;
//# sourceMappingURL=BarLoader.component.js.map
