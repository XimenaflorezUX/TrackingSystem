import React from 'react';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import Warning3D from '../../../../../../assets/warning-3d.svg.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import styles from './JobDetailsFraud.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsFraud = function (_a) {
    var children = _a.children, renderTitle = _a.renderTitle, className = _a.className;
    return (React.createElement("section", { role: "alert", "aria-live": "assertive", className: cx('fraud', className), "data-testid": "job-details-fraud" },
        React.createElement("header", { className: cx('fraud__header') },
            React.createElement(IconItem, { icon: Warning3D, alt: "warning" }),
            React.createElement(Typography.Title, { level: 2 }, renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle())),
        React.createElement("section", null, children)));
};

export { JobDetailsFraud };
//# sourceMappingURL=JobDetailsFraud.component.js.map
