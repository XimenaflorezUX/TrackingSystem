import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback, useMemo } from 'react';
import { BAR_LOADER_PREFIX } from './BarLoader.constants.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import styles from './BarLoader.module.scss.js';

var Component = function (_a) {
    var className = _a.className, color = _a.color, percent = _a.percent;
    var validateCompleted = useCallback(function (value) {
        if (!value)
            return 0;
        var numValue = Number(value);
        if (isNaN(numValue) || numValue < 0)
            return 0;
        if (numValue > 100)
            return 100;
        return numValue;
    }, []);
    var barColor = useMemo(function () {
        var _a;
        return (_a = {}, _a["".concat(BAR_LOADER_PREFIX, "-color")] = color, _a);
    }, [color]);
    var barCompleted = useMemo(function () {
        var _a;
        return (_a = {}, _a["".concat(BAR_LOADER_PREFIX, "-completed")] = "".concat(validateCompleted(percent), "%"), _a);
    }, [percent, validateCompleted]);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: [className] }) },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['bar-loader'] }), style: __assign(__assign({}, barColor), barCompleted) },
            React.createElement("div", { className: CNM.get({
                    styles: styles,
                    cls: ['bar-loader__bar', percent !== undefined ? 'bar-loader__bar--completed' : 'bar-loader__bar--animated']
                }) }))));
};
/**
 * UI Atom component of Bar Loader
 */
var BarLoader = Component;

export { BarLoader };
//# sourceMappingURL=BarLoader.component.js.map
