import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobDetailsHeader.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsHeader = function (_a) {
    var title = _a.title, className = _a.className, _b = _a.classNames, classNames = _b === void 0 ? {} : _b, publishedDate = _a.publishedDate, children = _a.children;
    return (React.createElement("section", { className: cx('header', className) },
        React.createElement(Typography.Paragraph, { className: cx('header__title', classNames.title) }, title),
        React.createElement("section", { className: classNames.info }, children),
        React.createElement(Typography.Text, { className: cx('header__publish-date', classNames.publishDate) }, publishedDate)));
};

export { JobDetailsHeader };
//# sourceMappingURL=JobDetailsHeader.component.js.map
