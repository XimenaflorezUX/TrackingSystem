'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var Avatar_component = require('../../atoms/Avatar/Avatar.component.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Collapse_component = require('../../atoms/Collapse/Collapse.component.js');
var ArrowDown3 = require('../../../../assets/ArrowDown3.svg.js');
var repeat = require('../../../../assets/repeat.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
var Typography_component = require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var AccountSelect_module = require('./AccountSelect.module.scss.js');
var Tooltip_component = require('../Tooltip/Tooltip.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AccountSelect_module);
var Component = function (_a) {
    var profileImage = _a.profileImage, user = _a.user, emails = _a.emails, labels = _a.labels, onSelectAccount = _a.onSelectAccount, className = _a.className;
    var _b = React.useState(false), accountsOpen = _b[0], setAccountsOpen = _b[1];
    return (React__default["default"].createElement("div", { className: cx('account-select', className) },
        React__default["default"].createElement("div", { className: cx('user-info') },
            React__default["default"].createElement(Avatar_component.Avatar, tslib_es6.__assign({}, profileImage)),
            React__default["default"].createElement("div", { className: cx('user-info__name') },
                React__default["default"].createElement(Typography_component.Typography.Text, { color: "grey-800", size: 'md-2', strong: true }, user.name),
                React__default["default"].createElement(Typography_component.Typography.Text, { color: "grey-800", size: 'md-2' }, user.lastName))),
        emails.length > 0 && (React__default["default"].createElement(Collapse_component.Collapse, { className: cx('collapse'), open: accountsOpen, onChangeOpen: setAccountsOpen },
            React__default["default"].createElement(Collapse_component.Collapse.Header, { className: cx('collapse__header') },
                React__default["default"].createElement(Typography_component.Typography.Text, { color: "grey-800", size: 'md-2', strong: accountsOpen }, labels.sectionTitle),
                React__default["default"].createElement(Collapse_component.Collapse.Toggler, null,
                    React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown3, size: 16 }))),
            React__default["default"].createElement(Collapse_component.Collapse.Body, { className: cx('collapse__body') }, emails.map(function (account) { return (React__default["default"].createElement("button", { key: account.id, onClick: function () { return onSelectAccount(account); } },
                React__default["default"].createElement(Tooltip_component, { title: labels.tooltips.currentAccount, visible: account.isCurrent },
                    React__default["default"].createElement(Typography_component.Typography.Text, { color: "".concat(account.isCurrent ? 'grey-800' : 'grey-600'), size: 'md-2', strong: account.isCurrent }, account.email)),
                !account.isCurrent && (React__default["default"].createElement(Tooltip_component, { title: labels.tooltips.changeAccount, position: "left" },
                    React__default["default"].createElement(Icon_component.IconItem, { icon: repeat, size: 16 }))))); }))))));
};
var AccountSelect = Component;

exports.AccountSelect = AccountSelect;
//# sourceMappingURL=AccountSelect.component.js.map
