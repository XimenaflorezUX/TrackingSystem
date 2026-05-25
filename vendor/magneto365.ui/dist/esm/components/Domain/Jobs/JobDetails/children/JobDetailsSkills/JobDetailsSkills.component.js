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
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import { Skill } from '../../../../../UI/atoms/Skill/Skill.component.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobDetailsSkills.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsSkills = function (_a) {
    var children = _a.children, className = _a.className, skills = _a.skills;
    return (React.createElement("section", { className: cx('skills', className) },
        children,
        React.createElement("ul", { className: cx('skills__list') }, skills.map(function (_a) {
            var name = _a.name, score = _a.score, id = _a.id;
            return (React.createElement("li", { key: id },
                React.createElement(Skill, { name: name, score: score })));
        }))));
};

export { JobDetailsSkills };
//# sourceMappingURL=JobDetailsSkills.component.js.map
