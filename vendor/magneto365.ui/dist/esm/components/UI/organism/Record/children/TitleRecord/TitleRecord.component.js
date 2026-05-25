import React, { forwardRef, Fragment } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import styles from './TitleRecord.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var className = _a.className, title = _a.title, children = _a.children, icon = _a.icon;
    return (React.createElement(Fragment, null, children ? (children) : (React.createElement("div", { className: cx('magneto-ui-title-record', className), ref: ref },
        icon && React.createElement(IconItem, { icon: icon, size: 18 }),
        title))));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var TitleRecord = Object.assign(Component, {});

export { TitleRecord };
//# sourceMappingURL=TitleRecord.component.js.map
