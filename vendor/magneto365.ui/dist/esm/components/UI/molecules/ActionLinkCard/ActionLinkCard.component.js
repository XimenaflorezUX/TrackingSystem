import React from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import Building5 from '../../../../assets/Building5.svg.js';
import styles from './ActionLinkCard.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
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
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var title = _a.title, name = _a.name, redirectUrl = _a.redirectUrl, className = _a.className;
    return (React.createElement("section", { className: cx('action-link-card', className) },
        React.createElement("a", { href: redirectUrl, className: cx('action-link-card__link'), target: "_blank", rel: "noopener noreferrer", onClick: function (e) { return e.stopPropagation(); } },
            React.createElement("div", { className: cx('action-link-card__content') },
                React.createElement(IconItem, { icon: Building5, hover: false, size: 20 }),
                React.createElement("div", { className: cx('action-link-card__info') },
                    React.createElement("span", null, title),
                    React.createElement("p", null, name))),
            React.createElement(IconItem, { icon: ArrowRight2, hover: false, size: 20 }))));
};
var ActionLinkCard = Component;

export { ActionLinkCard };
//# sourceMappingURL=ActionLinkCard.component.js.map
