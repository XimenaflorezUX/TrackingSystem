import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import { FlatLoader } from '../../../../atoms/FlatLoader/FlatLoader.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './UserTermSubmit.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var isLoading = _a.isLoading, children = _a.children, className = _a.className, props = __rest(_a, ["isLoading", "children", "className"]);
    return (React.createElement("button", __assign({ className: cx('user-term-submit', className) }, props),
        isLoading && React.createElement(FlatLoader, { color: "white", secondColor: "transparent" }),
        children));
};
var UserTermSubmit = Component;

export { UserTermSubmit };
//# sourceMappingURL=UserTermSubmit.component.js.map
