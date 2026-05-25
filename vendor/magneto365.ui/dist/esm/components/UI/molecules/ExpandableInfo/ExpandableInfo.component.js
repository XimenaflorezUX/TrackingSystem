import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { ExpandableInfoAction } from './children/ExpandableInfoAction/ExpandableInfoAction.component.js';
import './children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import { ExpandableInfoMessage } from './children/ExpandableInfoMessage/ExpandableInfoMessage.component.js';
import { ExpandableInfoModal } from './children/ExpandableInfoModal/ExpandableInfoModal.component.js';
import { ExpandableInfoPopover } from './children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import { EExpandableInfoSize } from './ExpandableInfo.interface.js';
import '../../atoms/BarChart/enums.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import styles from './ExpandableInfo.module.scss.js';

var Component = function (_a) {
    var actions = _a.actions, details = _a.details, floating = _a.floating, message = _a.message, prefixIcon = _a.prefixIcon, _b = _a.size, size = _b === void 0 ? 'large' : _b, suffixIcon = _a.suffixIcon, summary = _a.summary, title = _a.title, _c = _a.variant, variant = _c === void 0 ? 'white' : _c;
    var togglerProps = useMemo(function () { return ({
        details: details,
        title: title,
        summary: summary,
        variant: variant,
        size: size,
        prefixIcon: prefixIcon,
        suffixIcon: suffixIcon
    }); }, [details, title, summary, variant, size, prefixIcon, suffixIcon]);
    var container = useMediaQuery(React.createElement(ExpandableInfoPopover, { details: details, toggler: togglerProps }), {
        sm: React.createElement(ExpandableInfoModal, { details: details, toggler: togglerProps })
    });
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info'] }) },
        React.createElement("div", { className: CNM.get({
                styles: styles,
                cls: [
                    'expandable-info__container',
                    "expandable-info__container--".concat(variant),
                    "expandable-info__container--".concat(size),
                    floating && 'expandable-info__container--floating'
                ]
            }) },
            container,
            size === EExpandableInfoSize.LARGE && (React.createElement(React.Fragment, null,
                actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info__actions'] }) }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) { return action && React.createElement(ExpandableInfoAction, __assign({ key: action.title }, action)); }))),
                React.createElement(ExpandableInfoMessage, __assign({ variant: variant }, message)))))));
};
/**
 * Molecule UI component for expandable info
 */
var ExpandableInfo = Component;

export { ExpandableInfo };
//# sourceMappingURL=ExpandableInfo.component.js.map
