import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './CandidateProfile.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { Collapse } from '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import * as index from './children/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? true : _b, onChangeOpen = _a.onChangeOpen, open = _a.open, props = __rest(_a, ["children", "className", "defaultOpen", "onChangeOpen", "open"]);
    return (React.createElement(Collapse.Provider, { defaultOpen: defaultOpen, open: open, onChangeOpen: onChangeOpen },
        React.createElement("article", __assign({ className: cx('magneto-ui-candidate-profile', className) }, props), children)));
};
/**
 * Molecule UI component of candidate profile
 */
var CandidateProfile = Object.assign(Component, index);

export { CandidateProfile };
//# sourceMappingURL=CandidateProfile.component.js.map
