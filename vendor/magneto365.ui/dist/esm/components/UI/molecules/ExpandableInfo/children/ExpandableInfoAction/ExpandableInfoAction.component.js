import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo, useCallback } from 'react';
import { EXPANDABLE_INFO_ACTION_ICONS } from './ExpandableInfoAction.constants.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './ExpandableInfoAction.module.scss.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var className = _a.className, loading = _a.loading, onAction = _a.onAction, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, title = _a.title, _b = _a.variant, variant = _b === void 0 ? 'blue' : _b;
    var isUrl = useMemo(function () { return onAction && typeof onAction === 'string'; }, [onAction]);
    var Component = useMemo(function () { return (isUrl ? 'a' : 'button'); }, [isUrl]);
    var componentProps = useMemo(function () {
        var className = CNM.get({
            styles: styles,
            cls: ['expandable-info-action__button', "expandable-info-action__button--".concat(variant)]
        });
        if (isUrl)
            return { className: className, href: onAction };
        return {
            className: className,
            onClick: onAction
        };
    }, [isUrl, onAction, variant]);
    var icon = useCallback(function (icon) {
        if (loading) {
            return EXPANDABLE_INFO_ACTION_ICONS.loading[variant];
        }
        if (icon) {
            if (Object.keys(EXPANDABLE_INFO_ACTION_ICONS).includes(icon)) {
                return EXPANDABLE_INFO_ACTION_ICONS[icon][variant];
            }
            return icon;
        }
        return;
    }, [loading, variant]);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-action', className] }) },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-action__container'] }) },
            React.createElement(Component, __assign({}, componentProps),
                (prefixIcon || loading) && React.createElement(IconItem, __assign({ size: 12 }, prefixIcon, { icon: icon(prefixIcon === null || prefixIcon === void 0 ? void 0 : prefixIcon.icon) })),
                React.createElement("span", { className: CNM.get({ styles: styles, cls: ['expandable-info-action__title'] }) }, title),
                suffixIcon && React.createElement(IconItem, __assign({ size: 12 }, suffixIcon, { icon: icon(suffixIcon.icon) }))))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoAction = Component;

export { ExpandableInfoAction };
//# sourceMappingURL=ExpandableInfoAction.component.js.map
