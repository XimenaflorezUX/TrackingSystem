import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
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
import styles from './ModalAnalystHeader.module.scss.js';
import { MODAL_ICONS } from '../../ModalAnalyst.constants.js';

var Component = function (_a) {
    var header = _a.header;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['modal-analyst-header'] }) },
        (header === null || header === void 0 ? void 0 : header.prefixIcon) && (React.createElement(IconItem, __assign({ showDefaultFallback: false, size: 20 }, header === null || header === void 0 ? void 0 : header.prefixIcon, { icon: (header === null || header === void 0 ? void 0 : header.prefixIcon.icon) && MODAL_ICONS[header === null || header === void 0 ? void 0 : header.prefixIcon.icon]
                ? MODAL_ICONS[header === null || header === void 0 ? void 0 : header.prefixIcon.icon]
                : header.prefixIcon.icon }))),
        React.createElement("h2", null, header === null || header === void 0 ? void 0 : header.title),
        (header === null || header === void 0 ? void 0 : header.suffixIcon) && (React.createElement(IconItem, __assign({ showDefaultFallback: false, size: 20 }, header === null || header === void 0 ? void 0 : header.suffixIcon, { icon: (header === null || header === void 0 ? void 0 : header.suffixIcon.icon) && MODAL_ICONS[header === null || header === void 0 ? void 0 : header.suffixIcon.icon]
                ? MODAL_ICONS[header === null || header === void 0 ? void 0 : header.suffixIcon.icon]
                : header.suffixIcon.icon })))));
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystHeader = Component;

export { ModalAnalystHeader };
//# sourceMappingURL=ModalAnalystHeader.component.js.map
