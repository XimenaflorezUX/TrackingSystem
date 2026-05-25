import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import Star from '../../../../../../assets/Star-yellow.svg.js';
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
import styles from './JobDetailsSuggested.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsSuggested = function (_a) {
    var title = _a.title, classNames = _a.classNames, tag = _a.tag, children = _a.children, _b = _a.behavior, behavior = _b === void 0 ? 'showcase' : _b, renderFooter = _a.renderFooter;
    return children ? (React.createElement("section", { className: cx("suggested-jobs-container", { tab__container: behavior === 'tab' }, classNames === null || classNames === void 0 ? void 0 : classNames.container) },
        React.createElement("div", { className: cx('suggested-jobs-container__header', classNames === null || classNames === void 0 ? void 0 : classNames.header) },
            React.createElement(Typography.Title, null, title),
            tag && (React.createElement("div", { className: cx('suggested-jobs-container__tag', classNames === null || classNames === void 0 ? void 0 : classNames.tag) },
                React.createElement(IconItem, { icon: Star, size: 18 }),
                tag))),
        React.createElement("div", { className: cx('suggested-jobs-container__body', { tab__body: behavior === 'tab' }, classNames === null || classNames === void 0 ? void 0 : classNames.body) }, children),
        React.createElement("div", { className: cx('suggested-jobs-container__footer', classNames === null || classNames === void 0 ? void 0 : classNames.footer) }, renderFooter()))) : null;
};

export { JobDetailsSuggested };
//# sourceMappingURL=JobDetailsSuggested.component.js.map
