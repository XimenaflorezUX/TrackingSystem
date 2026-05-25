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
import { iconJobDetailSummaryMap } from '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobDetailsSummary.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsSummary = function (_a) {
    var children = _a.children, items = _a.items, className = _a.className, classNames = _a.classNames;
    return (React.createElement("ul", { className: cx('summary', className) },
        children,
        items.map(function (_a) {
            var id = _a.id, icon = _a.icon, label = _a.label;
            return (React.createElement("li", { className: cx('summary__item', classNames === null || classNames === void 0 ? void 0 : classNames.item), key: id },
                React.cloneElement(iconJobDetailSummaryMap[icon], { className: cx('summary__icon', classNames === null || classNames === void 0 ? void 0 : classNames.icon) }),
                React.createElement(Typography.Text, { className: cx('summary__label', classNames === null || classNames === void 0 ? void 0 : classNames.label) }, label)));
        })));
};

export { JobDetailsSummary };
//# sourceMappingURL=JobDetailsSummary.component.js.map
