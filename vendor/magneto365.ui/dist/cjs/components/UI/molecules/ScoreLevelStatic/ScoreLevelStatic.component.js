'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var generateID_util = require('../../../../utils/generateID/generateID.util.js');
var ScoreLevelStatic_module = require('./ScoreLevelStatic.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var name = _a.name, scoreValue = _a.scoreValue, levels = _a.levels, color = _a.color;
    var labelScore = React.useMemo(function () {
        return levels[scoreValue - 1];
    }, [levels, scoreValue]);
    var setDinamycColor = React.useCallback(function (value) {
        var bkgColor = color || 'rgb(26, 50, 76)';
        var props = {
            backgroundColor: bkgColor
        };
        if (value <= scoreValue) {
            return tslib_es6.__assign({}, props);
        }
        return { backgroundColor: '#c4c4c4' };
    }, [color, scoreValue]);
    return (React__default["default"].createElement("div", { className: ScoreLevelStatic_module['magneto-ui-score-level'] },
        React__default["default"].createElement("p", null, name),
        React__default["default"].createElement("div", { className: ScoreLevelStatic_module['magneto-ui-score-level__summary'] },
            React__default["default"].createElement("div", null, levels.map(function (_, index) { return (React__default["default"].createElement("span", { style: setDinamycColor(index + 1), key: generateID_util.generateID() })); })),
            React__default["default"].createElement("p", null, labelScore))));
};
var ScoreLevelStatic = Component;

exports.ScoreLevelStatic = ScoreLevelStatic;
//# sourceMappingURL=ScoreLevelStatic.component.js.map
