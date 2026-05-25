import React from 'react';
import styles from './HorizontalBar.module.scss.js';

var Component = function (_a) {
    var value = _a.value, _b = _a.maxPercentage, maxPercentage = _b === void 0 ? 10 : _b, classNames = _a.classNames, text = _a.text;
    var percentage = (value / maxPercentage) * 100;
    var isBarTooSmall = percentage < maxPercentage / 10;
    return (React.createElement("div", { className: "".concat(styles['magneto-ui-horizontal-bar'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.bar) },
        React.createElement("p", { className: "".concat(styles['magneto-ui-horizontal-bar__bar-text'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.text) }, text),
        React.createElement("div", { className: "".concat(styles['magneto-ui-horizontal-bar__container'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.container) },
            React.createElement("div", { className: "".concat(styles['magneto-ui-horizontal-bar__fill'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.fill), style: {
                    width: "".concat(percentage, "%")
                } }, !isBarTooSmall && (React.createElement("div", { className: "".concat(styles['magneto-ui-horizontal-bar__value'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.value) }, value))))));
};
var HorizontalBar = Component;

export { HorizontalBar };
//# sourceMappingURL=HorizontalBar.component.js.map
