import React from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import ArrowDown2 from '../../../../../../assets/ArrowDown2.svg.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../../../constants/stories/common.constants.js';
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
import style from './DropDownButton.module.scss.js';

var DropDownButton = function (_a) {
    var onClick = _a.onClick, title = _a.title;
    return (React.createElement("button", { className: "".concat(style["".concat(classMUI, "-drop-down-button")]), type: "button", onClick: onClick },
        title,
        React.createElement(IconItem, { icon: ArrowDown2, alt: "arrow-icon" })));
};

export { DropDownButton as default };
//# sourceMappingURL=DropDownButton.component.js.map
