import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import React, { useState } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { Collapse } from '../../atoms/Collapse/Collapse.component.js';
import ArrowDown3 from '../../../../assets/ArrowDown3.svg.js';
import Repeat from '../../../../assets/repeat.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import { Typography } from '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './AccountSelect.module.scss.js';
import Tooltip from '../Tooltip/Tooltip.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var profileImage = _a.profileImage, user = _a.user, emails = _a.emails, labels = _a.labels, onSelectAccount = _a.onSelectAccount, className = _a.className;
    var _b = useState(false), accountsOpen = _b[0], setAccountsOpen = _b[1];
    return (React.createElement("div", { className: cx('account-select', className) },
        React.createElement("div", { className: cx('user-info') },
            React.createElement(Avatar, __assign({}, profileImage)),
            React.createElement("div", { className: cx('user-info__name') },
                React.createElement(Typography.Text, { color: "grey-800", size: 'md-2', strong: true }, user.name),
                React.createElement(Typography.Text, { color: "grey-800", size: 'md-2' }, user.lastName))),
        emails.length > 0 && (React.createElement(Collapse, { className: cx('collapse'), open: accountsOpen, onChangeOpen: setAccountsOpen },
            React.createElement(Collapse.Header, { className: cx('collapse__header') },
                React.createElement(Typography.Text, { color: "grey-800", size: 'md-2', strong: accountsOpen }, labels.sectionTitle),
                React.createElement(Collapse.Toggler, null,
                    React.createElement(IconItem, { icon: ArrowDown3, size: 16 }))),
            React.createElement(Collapse.Body, { className: cx('collapse__body') }, emails.map(function (account) { return (React.createElement("button", { key: account.id, onClick: function () { return onSelectAccount(account); } },
                React.createElement(Tooltip, { title: labels.tooltips.currentAccount, visible: account.isCurrent },
                    React.createElement(Typography.Text, { color: "".concat(account.isCurrent ? 'grey-800' : 'grey-600'), size: 'md-2', strong: account.isCurrent }, account.email)),
                !account.isCurrent && (React.createElement(Tooltip, { title: labels.tooltips.changeAccount, position: "left" },
                    React.createElement(IconItem, { icon: Repeat, size: 16 }))))); }))))));
};
var AccountSelect = Component;

export { AccountSelect };
//# sourceMappingURL=AccountSelect.component.js.map
