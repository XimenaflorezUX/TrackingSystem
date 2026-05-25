import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import { Loading } from '../Loading/Loading.component.js';
import styles from './MainButton.modules.scss.js';
import { toCSSVariables } from '../../../../shared/utils/Function.js';
import { LoadingProps } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';

var Component = function (_a) {
    var buttonType = _a.buttonType, buttonSize = _a.buttonSize, buttonText = _a.buttonText, buttonStyles = _a.buttonStyles, loadingState = _a.loadingState, iconProps = _a.iconProps, isMobile = _a.isMobile, className = _a.className, _b = _a.title, title = _b === void 0 ? '' : _b, disabled = _a.disabled, onClick = _a.onClick;
    var stylesValue = useMemo(function () { return toCSSVariables(buttonStyles); }, [buttonStyles]);
    var renderContent = function () {
        if (loadingState) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Loading, __assign({}, LoadingProps)),
                !isMobile && React.createElement("p", null, buttonText)));
        }
        return (React.createElement(React.Fragment, null,
            iconProps && React.createElement(IconItem, __assign({}, iconProps)),
            !isMobile && React.createElement("p", null, buttonText)));
    };
    return (React.createElement("button", { className: "".concat(styles.MainButtonComponent, " ").concat(className, " ").concat(disabled ? styles.disabled : ''), type: buttonType, style: stylesValue, onClick: onClick, "data-button-size": buttonSize, "data-is-mobile": isMobile, title: title ? title : buttonText, disabled: disabled }, renderContent()));
};
/**
 * Atom UI component of button for general purpose
 */
var MainButton = Component;

export { MainButton };
//# sourceMappingURL=MainButton.component.js.map
