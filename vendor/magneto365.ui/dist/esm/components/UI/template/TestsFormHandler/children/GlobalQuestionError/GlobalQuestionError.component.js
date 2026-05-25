import React from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import InfoRed from '../../../../../../assets/info-circle-red.svg.js';
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
import styles from './GlobalQuestionError.module.scss.js';

var GlobalQuestionError = function (_a) {
    var errorText = _a.errorText;
    return (React.createElement("div", { className: styles['question__error'] },
        React.createElement(IconItem, { icon: InfoRed, size: 18 }),
        React.createElement("div", { className: styles['question__error-text'] }, errorText)));
};

export { GlobalQuestionError as default };
//# sourceMappingURL=GlobalQuestionError.component.js.map
