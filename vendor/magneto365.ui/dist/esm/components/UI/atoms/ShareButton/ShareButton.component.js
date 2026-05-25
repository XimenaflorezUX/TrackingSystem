import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import styles from './ShareButton.module.scss.js';
import { iconJobDetailsAction } from '../../../../constants/jobDetails.constants.js';

var Component = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, buttonTitle = _a.buttonTitle, buttonText = _a.buttonText, detailUrl = _a.detailUrl, addHover = _a.addHover, onCopySuccess = _a.onCopySuccess, icon = _a.icon;
    var handleCopyClick = function () {
        if (detailUrl) {
            navigator.clipboard.writeText(detailUrl).then(function () { return onCopySuccess === null || onCopySuccess === void 0 ? void 0 : onCopySuccess(); });
        }
    };
    return (React.createElement("button", { className: "".concat(styles['magneto-ui-share-button'], " ").concat(addHover && styles['hover-effect'], " ").concat(className), type: "button", onClick: handleCopyClick, title: buttonTitle },
        React.createElement("div", { className: styles['button-content'] },
            React.createElement(IconItem, { size: 20, icon: icon && iconJobDetailsAction[icon], hover: addHover }),
            buttonText && React.createElement("p", { className: styles['magneto-ui-share-button__mobile-text'] }, buttonText))));
};
var ShareButton = Component;

export { ShareButton };
//# sourceMappingURL=ShareButton.component.js.map
