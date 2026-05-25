import React from 'react';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import QuestionCircle from '../../../../../../assets/question-cirlce.svg.js';
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
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobsFaqs.module.scss.js';

var JobsFaqs = function (_a) {
    var roundEdges = _a.roundEdges, title = _a.title, children = _a.children;
    var borderRadius = roundEdges ? styles['magneto-ui-faqs-rounded-corners'] : '';
    return (React.createElement("div", { className: "".concat(styles["magneto-ui-faqs"], " ").concat(borderRadius) },
        React.createElement("div", { className: styles['magneto-ui-faqs__content'] },
            title && (React.createElement("div", { className: styles['magneto-ui-faqs__content--title'] },
                React.createElement(IconItem, { alt: title, icon: QuestionCircle, hover: false, size: 16 }),
                React.createElement("h3", null, title))),
            React.createElement("div", { className: styles['magneto-ui-faqs__content--children'] }, children))));
};

export { JobsFaqs };
//# sourceMappingURL=JobsFaqs.component.js.map
