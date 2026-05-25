import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import { Typography } from '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import { iconJobDetailsSubTitle } from '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobDetailsSubTitle.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsSubTitle = function (_a) {
    var className = _a.className, icon = _a.icon, children = _a.children;
    return (React.createElement(Typography.Paragraph, { className: cx('title', className) },
        icon && React.createElement(IconItem, { icon: iconJobDetailsSubTitle[icon], size: 16, alt: 'subtitle-icon' }),
        React.createElement(Typography.Text, { strong: true }, children)));
};

export { JobDetailsSubTitle };
//# sourceMappingURL=JobDetailsSubTitle.component.js.map
