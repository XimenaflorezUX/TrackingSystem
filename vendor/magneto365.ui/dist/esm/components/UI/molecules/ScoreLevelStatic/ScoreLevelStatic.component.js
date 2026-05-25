import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo, useCallback } from 'react';
import { generateID } from '../../../../utils/generateID/generateID.util.js';
import styles from './ScoreLevelStatic.module.scss.js';

var Component = function (_a) {
    var name = _a.name, scoreValue = _a.scoreValue, levels = _a.levels, color = _a.color;
    var labelScore = useMemo(function () {
        return levels[scoreValue - 1];
    }, [levels, scoreValue]);
    var setDinamycColor = useCallback(function (value) {
        var bkgColor = color || 'rgb(26, 50, 76)';
        var props = {
            backgroundColor: bkgColor
        };
        if (value <= scoreValue) {
            return __assign({}, props);
        }
        return { backgroundColor: '#c4c4c4' };
    }, [color, scoreValue]);
    return (React.createElement("div", { className: styles['magneto-ui-score-level'] },
        React.createElement("p", null, name),
        React.createElement("div", { className: styles['magneto-ui-score-level__summary'] },
            React.createElement("div", null, levels.map(function (_, index) { return (React.createElement("span", { style: setDinamycColor(index + 1), key: generateID() })); })),
            React.createElement("p", null, labelScore))));
};
var ScoreLevelStatic = Component;

export { ScoreLevelStatic };
//# sourceMappingURL=ScoreLevelStatic.component.js.map
