'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
var drawer_constants = require('../../../../constants/stories/drawer.constants.js');
var headers_constants = require('../../../../constants/stories/headers.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
var Drawer_component = require('../../molecules/Drawer/Drawer.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
var HeaderDrawerTabs_components = require('../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.components.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var ListIconLink_component = require('../../molecules/ListIconLink/ListIconLink.component.js');
var ListMenuItems_component = require('../../molecules/ListMenuItems/ListMenuItems.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
require('../../molecules/SortMenu/SortMenu.component.js');
require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../molecules/UserMenu/UserMenu.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var drawerMenu_module = require('./drawerMenu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var headerDrawerProps = _a.headerDrawerProps, listMenuProps = _a.listMenuProps, createAccountButton = _a.createAccountButton, loginButton = _a.loginButton, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose;
    var buttonTextSignUp = createAccountButton.buttonText, onSignUpClick = createAccountButton.onClick, loadingState = createAccountButton.loadingState;
    var buttonTextLogin = loginButton.buttonText, onLogInClick = loginButton.onClick;
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
    };
    return (React__default["default"].createElement("div", { className: drawerMenu_module['magneto-ui-drawer-menu'] },
        React__default["default"].createElement(Drawer_component.Drawer, { isOpen: isOpen, onClose: handleClose },
            React__default["default"].createElement(HeaderDrawerTabs_components.HeaderDrawerTabs, tslib_es6.__assign({}, headerDrawerProps, { logoProps: common_constants.logoProps, leftTabStyle: headers_constants.DrawerLeftTabStyles, rightTabStyle: headers_constants.DrawerRightTabStyles })),
            React__default["default"].createElement("div", { className: drawerMenu_module['menu-container'] },
                React__default["default"].createElement(ListMenuItems_component.ListMenuItems, tslib_es6.__assign({}, listMenuProps))),
            React__default["default"].createElement("div", { className: drawerMenu_module.actionsContainer },
                React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ buttonSize: "full" }, headers_constants.CreateAccountButton, { buttonText: buttonTextSignUp, onClick: onSignUpClick, loadingState: loadingState })),
                React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ buttonSize: "full" }, common_constants.LoginButton, { buttonText: buttonTextLogin, onClick: onLogInClick })),
                React__default["default"].createElement(ListIconLink_component.ListIconLink, { listIcon: drawer_constants.ListIcon, size: 34, spacing: 20 })))));
};
var DrawerMenu = Component;

exports.DrawerMenu = DrawerMenu;
//# sourceMappingURL=DrawerMenu.component.js.map
