'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var generateID_util = require('../../../../utils/generateID/generateID.util.js');
var trash = require('../../../../assets/trash.svg.js');
var ScoreLevel_module = require('./ScoreLevel.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var name = _a.name, onChange = _a.onChange, removeSkill = _a.removeSkill, scoreValue = _a.scoreValue, levels = _a.levels, color = _a.color, id = _a.id;
    var _b = React.useState(scoreValue || 1), score = _b[0], setScore = _b[1];
    var _c = React.useState(0), spanHover = _c[0], setSpanHover = _c[1];
    var labelScore = React.useMemo(function () {
        return levels[score - 1];
    }, [levels, score]);
    var handleScoreChange = React.useCallback(function (newScore) {
        setScore(newScore);
        if (id) {
            onChange({ name: name, level: newScore, id: id });
            return;
        }
        onChange({ name: name, level: newScore });
    }, [id, name, onChange]);
    var setDinamycColor = React.useCallback(function (value) {
        var bkgColor = color || '#090467';
        var props = {
            backgroundColor: bkgColor
        };
        if (value <= score) {
            return tslib_es6.__assign({}, props);
        }
        if (value <= spanHover) {
            return tslib_es6.__assign(tslib_es6.__assign({}, props), { opacity: '0.4' });
        }
        return { backgroundColor: '#c4c4c4' };
    }, [color, score, spanHover]);
    return (React__default["default"].createElement("div", { className: ScoreLevel_module['magneto-ui-score-level'] },
        React__default["default"].createElement("p", { className: ScoreLevel_module['magneto-ui-score-level__p'] }, name),
        React__default["default"].createElement("div", { className: ScoreLevel_module['magneto-ui-score-level__summary'] },
            React__default["default"].createElement("div", null, levels.map(function (_, index) { return (React__default["default"].createElement("span", { onMouseOver: function () { return setSpanHover(index + 1); }, onMouseLeave: function () { return setSpanHover(0); }, style: setDinamycColor(index + 1), key: generateID_util.generateID(), onClick: function () { return handleScoreChange(index + 1); } })); })),
            React__default["default"].createElement("p", null, labelScore)),
        React__default["default"].createElement("button", { className: ScoreLevel_module['magneto-ui-score-level__delete-action'], onClick: function () { return removeSkill(name); }, type: "button" },
            React__default["default"].createElement("img", { src: trash, alt: "remove-skill-icon" }))));
};
var ScoreLevel = Component;

exports.ScoreLevel = ScoreLevel;
//# sourceMappingURL=ScoreLevel.component.js.map
