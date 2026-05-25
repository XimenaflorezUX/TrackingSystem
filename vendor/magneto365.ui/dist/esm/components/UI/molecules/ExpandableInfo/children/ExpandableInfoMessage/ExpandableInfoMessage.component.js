import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import { EXPANDABLE_INFO_MESSAGE_ICONS } from './ExpandableInfoMessage.constants.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './ExpandableInfoMessage.module.scss.js';
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
    var className = _a.className, title = _a.title, prefixIcon = _a.prefixIcon, variant = _a.variant;
    var icon = useCallback(function (icon) {
        if (icon) {
            if (Object.keys(EXPANDABLE_INFO_MESSAGE_ICONS).includes(icon) && variant) {
                return EXPANDABLE_INFO_MESSAGE_ICONS[icon][variant];
            }
            return icon;
        }
        return;
    }, [variant]);
    if (!title)
        return null;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-message', className] }) },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-message__container'] }) },
            prefixIcon && React.createElement(IconItem, __assign({ size: 16 }, prefixIcon, { icon: icon(prefixIcon.icon) })),
            React.createElement("span", { className: CNM.get({
                    styles: styles,
                    cls: ['expandable-info-message__text', "expandable-info-message__text--".concat(variant)]
                }) }, title))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoMessage = Component;

export { ExpandableInfoMessage };
//# sourceMappingURL=ExpandableInfoMessage.component.js.map
