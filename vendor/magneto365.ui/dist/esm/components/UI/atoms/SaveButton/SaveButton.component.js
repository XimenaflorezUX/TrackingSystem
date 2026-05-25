import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import styles from './SaveButton.module.scss.js';
import ArchiveAdd from '../../../../assets/ArchiveAdd.svg.js';
import ArchiveRemove from '../../../../assets/ArchiveRemove.svg.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var isSaved = _a.isSaved, buttonText = _a.buttonText, buttonTitle = _a.buttonTitle, addHover = _a.addHover, onClick = _a.onClick, _b = _a.isAuthenticated, isAuthenticated = _b === void 0 ? false : _b, _c = _a.iconSize, iconSize = _c === void 0 ? 20 : _c;
    return isAuthenticated ? (React.createElement("button", { className: cx('magneto-ui-save-button', { 'hover-effect': addHover }), type: "button", onClick: onClick, "aria-label": buttonTitle },
        React.createElement("div", { className: cx('button-content') },
            React.createElement(IconItem, { size: iconSize, icon: isSaved ? ArchiveRemove : ArchiveAdd, hover: addHover }),
            buttonText && React.createElement("p", { className: cx('magneto-ui-save-button__mobile-text') }, buttonText)))) : null;
};
/**
 * UI Atom Component of Save Button
 */
var SaveButton = Component;

export { SaveButton };
//# sourceMappingURL=SaveButton.component.js.map
