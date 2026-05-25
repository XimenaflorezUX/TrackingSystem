import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from '../../AlertJobModal.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import ArrowRightWhite from '../../../../../../assets/ArrowRightWhite.svg.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
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

var cx = classNames.bind(styles);
var AlertJobModalButton = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.icon, icon = _b === void 0 ? ArrowRightWhite : _b, _c = _a.sizeIcon, sizeIcon = _c === void 0 ? 14 : _c, buttonProps = __rest(_a, ["className", "children", "icon", "sizeIcon"]);
    return (React.createElement("button", __assign({ className: cx('alert-modal__button', className) }, buttonProps),
        React.createElement("p", null, children),
        React.createElement(IconItem, { alt: "arrow-icon", hover: false, icon: icon, size: sizeIcon })));
};

export { AlertJobModalButton };
//# sourceMappingURL=AlertJobModalButton.component.js.map
