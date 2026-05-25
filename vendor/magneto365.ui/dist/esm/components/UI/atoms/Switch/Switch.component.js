import React, { useState, useEffect, useCallback } from 'react';
import styles from './Switch.module.scss.js';

var Switch = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.setIsActive, setIsActive = _c === void 0 ? function () { return null; } : _c, _d = _a.title, title = _d === void 0 ? '' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.isDisabled, isDisabled = _f === void 0 ? false : _f;
    var _g = useState(isActive), checked = _g[0], setChecked = _g[1];
    useEffect(function () {
        setChecked(isActive);
    }, [isActive]);
    var handleChange = useCallback(function () {
        if (isDisabled)
            return;
        setChecked(function (state) { return !state; });
        setIsActive(!isActive);
    }, [isDisabled, setIsActive, isActive]);
    return (React.createElement("div", { className: "".concat(styles['magneto-ui-switch_container'], " ").concat(className) },
        React.createElement("label", { className: styles['magneto-ui-switch'] },
            React.createElement("input", { type: "checkbox", onChange: handleChange, checked: checked, role: "switch" }),
            React.createElement("span", { className: "".concat(styles['magneto-ui-slider'], " ").concat(styles['magneto-ui-round']) })),
        title && React.createElement("p", null, title)));
};

export { Switch };
//# sourceMappingURL=Switch.component.js.map
