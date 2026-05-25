import React from 'react';
import styles from '../../AlertsPanel.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import Trash from '../../../../../../assets/trash.svg.js';
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

var cx = classNames.bind(styles);
var AlertsPanelItem = function (_a) {
    var text = _a.text, onDelete = _a.onDelete, className = _a.className;
    return (React.createElement("li", { className: cx('alerts-panel__item', className) },
        React.createElement("span", { className: cx('alerts-panel__item-text', className) }, text),
        onDelete && (React.createElement("button", { onClick: onDelete, className: cx('alerts-panel__item-button', className) },
            React.createElement(IconItem, { icon: Trash })))));
};

export { AlertsPanelItem };
//# sourceMappingURL=AlertsPanelItem.component.js.map
