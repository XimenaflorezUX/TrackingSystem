import React from 'react';
import styles from './CategoryMenuList.module.scss.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { ButtonLink } from '../../../../atoms/ButtonLink/ButtonLink.component.js';
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

var Component = function (_a) {
    var list = _a.list, isOpen = _a.isOpen;
    if (!list.length)
        return null;
    return (React.createElement("div", { className: "".concat(styles["magneto-ui-category-menu-list"], " ").concat(isOpen ? styles["magneto-ui-category-menu-list--is-open"] : '') }, list.map(function (_a) {
        var id = _a.id, name = _a.name, href = _a.href, onClick = _a.onClick;
        return (React.createElement(ButtonLink, { key: id, onClick: onClick, href: href, className: styles["magneto-ui-category-menu-list-listItem"], buttonText: name }));
    })));
};
var CategoryMenuList = Component;

export { CategoryMenuList };
//# sourceMappingURL=CategoryMenuList.component.js.map
