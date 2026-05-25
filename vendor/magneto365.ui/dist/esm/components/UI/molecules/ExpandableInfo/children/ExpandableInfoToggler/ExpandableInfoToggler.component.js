import { __spreadArray, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback, useMemo } from 'react';
import { EXPANDABLE_INFO_TOGGLER_ICONS } from './ExpandableInfoToggler.constants.js';
import ArrowDown2 from '../../../../../../assets/ArrowDown2.svg.js';
import ArrowDownWhite from '../../../../../../assets/arrowDownWhite.svg.js';
import { EExpandableInfoSize } from '../../ExpandableInfo.interface.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './ExpandableInfoToggler.module.scss.js';
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
    var details = _a.details, onToggle = _a.onToggle, prefixIcon = _a.prefixIcon, size = _a.size, suffixIcon = _a.suffixIcon, summary = _a.summary, title = _a.title, _b = _a.variant, variant = _b === void 0 ? 'white' : _b;
    var styleGenerator = useCallback(function (base) {
        return CNM.get({
            styles: styles,
            cls: __spreadArray(__spreadArray([], base, true), ["".concat(base.at(0), "--").concat(variant)], false)
        });
    }, [variant]);
    var icon = useCallback(function (icon) {
        if (icon) {
            if (Object.keys(EXPANDABLE_INFO_TOGGLER_ICONS).includes(icon)) {
                return EXPANDABLE_INFO_TOGGLER_ICONS[icon];
            }
            return icon;
        }
        return;
    }, []);
    var Component = useMemo(function () { return (details ? 'button' : 'div'); }, [details]);
    var componentProps = useMemo(function () {
        var className = styleGenerator([
            'expandable-info-toggler__container',
            !details && 'expandable-info-toggler__container--no-details',
            "expandable-info-toggler__container--".concat(size)
        ]);
        if (!details)
            return { className: className };
        return {
            className: className,
            onClick: function () { return onToggle(); }
        };
    }, [details, onToggle, size, styleGenerator]);
    var baseSuffixIcon = useMemo(function () { return (variant === 'blue' ? ArrowDownWhite : ArrowDown2); }, [variant]);
    return (React.createElement(Component, __assign({}, componentProps),
        prefixIcon && React.createElement(IconItem, __assign({ size: 16 }, prefixIcon, { icon: icon(prefixIcon.icon) })),
        React.createElement("span", { className: styleGenerator(['expandable-info-toggler__text']) }, title + ':'),
        React.createElement("div", { className: CNM.get({
                styles: styles,
                cls: [
                    'expandable-info-toggler__summary',
                    (size === EExpandableInfoSize.SMALL || suffixIcon) && 'expandable-info-toggler__summary--small',
                    size === EExpandableInfoSize.LARGE && (details || suffixIcon) && 'expandable-info-toggler__summary--large'
                ]
            }) },
            React.createElement("span", { className: styleGenerator(['expandable-info-toggler__text', "expandable-info-toggler__text--".concat(size)]) }, summary),
            React.createElement(IconItem, __assign({ icon: baseSuffixIcon, size: !suffixIcon ? 20 : 16 }, suffixIcon)))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoToggler = Component;

export { ExpandableInfoToggler };
//# sourceMappingURL=ExpandableInfoToggler.component.js.map
