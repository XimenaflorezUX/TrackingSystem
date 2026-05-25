import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
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
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './SearchButton.module.scss.js';

var Component = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement("div", { className: styles['search-button'] },
        props.searchValue && React.createElement("div", { className: styles['search-button__badge'] }),
        React.createElement(MainButton, __assign({ onClick: props.onClick }, props))));
};
var SearchButton = Component;

export { SearchButton };
//# sourceMappingURL=SearchButton.component.js.map
