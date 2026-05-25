import React from 'react';
import ArrowRight2 from '../../../../../../../assets/ArrowRight2.svg.js';
import '../../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../../UI/atoms/Button/Button.component.js';
import { ButtonLink } from '../../../../../../UI/atoms/ButtonLink/ButtonLink.component.js';
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
import '../../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../../constants/jobDetails.constants.js';
import '../../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../../hooks/useMediaQuery/index.js';
import styles from './JobsFaqsLink.module.scss.js';

var JobsFaqsLink = function (_a) {
    var text = _a.text, href = _a.href, isButtonLink = _a.isButtonLink;
    var classes = isButtonLink ? styles['magneto-ui-faqs--buttonLink'] : styles['magneto-ui-faqs--link'];
    return (React.createElement(ButtonLink, { buttonText: text, href: href, iconSize: 16, prefixIcon: ArrowRight2, target: "_blank", className: classes }));
};

export { JobsFaqsLink };
//# sourceMappingURL=JobsFaqsLink.component.js.map
