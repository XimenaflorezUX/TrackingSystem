import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import ArrowDownBlue from '../../../../assets/arrowDownBlue.svg.js';
import UserRoundedBlue from '../../../../assets/userRoundedBlue.svg.js';
import '../BarChart/enums.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import '../Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import styles from './UserMenuButtonAnalyst.module.scss.js';

var Component = function (_a) {
    var className = _a.className, title = _a.title, onClick = _a.onClick, user = _a.user;
    var userInfo = useMediaQuery(React.createElement("span", null, "".concat(user, " | ").concat(title)), {
        sm: null
    });
    return (React.createElement("button", { className: CNM.get({ styles: styles, cls: ['user-menu-button-analyst', className] }), onClick: onClick },
        React.createElement(IconItem, { icon: UserRoundedBlue, size: 20 }),
        userInfo,
        React.createElement(IconItem, { icon: ArrowDownBlue, size: 16 })));
};
/**
 * Atom UI component of user menu button analyst
 */
var UserMenuButtonAnalyst = Component;

export { UserMenuButtonAnalyst };
//# sourceMappingURL=UserMenuButtonAnalyst.component.js.map
