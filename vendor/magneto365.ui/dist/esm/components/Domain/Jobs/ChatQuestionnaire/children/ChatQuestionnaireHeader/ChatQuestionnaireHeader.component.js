import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import Robot from '../../../../../../assets/img/3d-robot-music.webp.js';
import ArrowLeft2 from '../../../../../../assets/ArrowLeft2.svg.js';
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
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './ChatQuestionnaireHeader.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaireHeader = function (_a) {
    var classNames = _a.classNames, children = _a.children, onBack = _a.onBack, rest = __rest(_a, ["classNames", "children", "onBack"]);
    return (React.createElement("header", __assign({}, rest, { className: cx('header', rest.className) }),
        React.createElement("button", { type: "button", onClick: function () { return onBack === null || onBack === void 0 ? void 0 : onBack(); }, className: cx('clean-button', classNames === null || classNames === void 0 ? void 0 : classNames.iconBack), "aria-label": "Go back" },
            React.createElement(IconItem, { icon: ArrowLeft2, size: 20 })),
        React.createElement(IconItem, { icon: Robot, size: 49, className: classNames === null || classNames === void 0 ? void 0 : classNames.iconLogo }),
        React.createElement(Typography.Title, { size: "md-2", weight: "bold", color: "grey-700", className: classNames === null || classNames === void 0 ? void 0 : classNames.title, level: 3 }, children)));
};

export { ChatQuestionnaireHeader };
//# sourceMappingURL=ChatQuestionnaireHeader.component.js.map
