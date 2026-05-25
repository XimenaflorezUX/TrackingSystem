import { __rest, __assign } from '../../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../../shared/utils/common/classNames.util.js';
import WarningHex from '../../../../../../../assets/warning-hex.svg.js';
import { IconItem } from '../../../../../../UI/atoms/Icon/Icon.component.js';
import '../../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../constants/img.constants.js';
import '../../../../../../../utils/date/dateInput.util.js';
import '../../../../../../UI/atoms/Field/Field.component.js';
import { Typography } from '../../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../../constants/jobDetails.constants.js';
import '../../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../../hooks/useMediaQuery/index.js';
import styles from './JobDetailsFraudLink.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsFraudLink = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React.createElement(Typography.Link, __assign({ strong: true, className: cx('fraud-link', className) }, rest),
        React.createElement(IconItem, { icon: WarningHex, size: 16, alt: "warning" }),
        children));
};

export { JobDetailsFraudLink };
//# sourceMappingURL=JobDetailsFraudLink.component.js.map
