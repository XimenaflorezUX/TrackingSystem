import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, useCallback } from 'react';
import { generateID } from '../../../../utils/generateID/generateID.util.js';
import Trash from '../../../../assets/trash.svg.js';
import styles from './ScoreLevel.module.scss.js';

var Component = function (_a) {
    var name = _a.name, onChange = _a.onChange, removeSkill = _a.removeSkill, scoreValue = _a.scoreValue, levels = _a.levels, color = _a.color, id = _a.id;
    var _b = useState(scoreValue || 1), score = _b[0], setScore = _b[1];
    var _c = useState(0), spanHover = _c[0], setSpanHover = _c[1];
    var labelScore = useMemo(function () {
        return levels[score - 1];
    }, [levels, score]);
    var handleScoreChange = useCallback(function (newScore) {
        setScore(newScore);
        if (id) {
            onChange({ name: name, level: newScore, id: id });
            return;
        }
        onChange({ name: name, level: newScore });
    }, [id, name, onChange]);
    var setDinamycColor = useCallback(function (value) {
        var bkgColor = color || '#090467';
        var props = {
            backgroundColor: bkgColor
        };
        if (value <= score) {
            return __assign({}, props);
        }
        if (value <= spanHover) {
            return __assign(__assign({}, props), { opacity: '0.4' });
        }
        return { backgroundColor: '#c4c4c4' };
    }, [color, score, spanHover]);
    return (React.createElement("div", { className: styles['magneto-ui-score-level'] },
        React.createElement("p", { className: styles['magneto-ui-score-level__p'] }, name),
        React.createElement("div", { className: styles['magneto-ui-score-level__summary'] },
            React.createElement("div", null, levels.map(function (_, index) { return (React.createElement("span", { onMouseOver: function () { return setSpanHover(index + 1); }, onMouseLeave: function () { return setSpanHover(0); }, style: setDinamycColor(index + 1), key: generateID(), onClick: function () { return handleScoreChange(index + 1); } })); })),
            React.createElement("p", null, labelScore)),
        React.createElement("button", { className: styles['magneto-ui-score-level__delete-action'], onClick: function () { return removeSkill(name); }, type: "button" },
            React.createElement("img", { src: Trash, alt: "remove-skill-icon" }))));
};
var ScoreLevel = Component;

export { ScoreLevel };
//# sourceMappingURL=ScoreLevel.component.js.map
