'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
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
var Logo_component = require('../../atoms/Logo/Logo.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
var Breadcrumbs_component = require('../../molecules/Breadcrumbs/Breadcrumbs.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
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
var UserMenuWrapperAnalyst_component = require('../../molecules/UserMenuWrapperAnalyst/UserMenuWrapperAnalyst.component.js');
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var HeaderAnalyst_module = require('./HeaderAnalyst.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(HeaderAnalyst_module);
var Component = function (_a) {
    var breadCrumbProps = _a.breadCrumbProps, _b = _a.className, className = _b === void 0 ? '' : _b, handleModal = _a.handleModal, legend = _a.legend, _c = _a.logoProps, logoProps = _c === void 0 ? tslib_es6.__assign({ fallbackImage: common_constants.logoPropsDark.logo }, common_constants.logoPropsDark) : _c, onMainMenuClick = _a.onMainMenuClick, userMenuProps = _a.userMenuProps, notificationBell = _a.notificationBell;
    var headerLogo = index.useMediaQuery(React__default["default"].createElement("a", { href: logoProps.href, rel: logoProps.rel, target: logoProps.target },
        React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({ fallbackImage: common_constants.logoPropsDark.logo }, logoProps))), {
        sm: (React__default["default"].createElement("a", { href: logoProps.href, rel: logoProps.rel, target: logoProps.target },
            React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({ fallbackImage: common_constants.logoPropsDark.isoType }, logoProps, { isoView: true }))))
    });
    var headerBreadCrumb = index.useMediaQuery(breadCrumbProps && React__default["default"].createElement(Breadcrumbs_component.Breadcrumbs, tslib_es6.__assign({}, breadCrumbProps)), {
        sm: null
    });
    return (React__default["default"].createElement("header", { className: cx('magneto-ui-header-analyst', className) },
        React__default["default"].createElement("div", { className: cx('magneto-ui-header-analyst__container') },
            React__default["default"].createElement("div", { className: cx('magneto-ui-header-analyst__main-menu') },
                React__default["default"].createElement("div", { className: cx('magneto-ui-header-analyst__logo') },
                    React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ onClick: onMainMenuClick }, common_constants.MenuButtonAnalystProps)),
                    headerLogo),
                legend && React__default["default"].createElement("span", { className: cx('magneto-ui-header-analyst__legend') }, legend)),
            React__default["default"].createElement("div", { className: cx('magneto-ui-header-analyst__user-menu') },
                notificationBell,
                React__default["default"].createElement(UserMenuWrapperAnalyst_component.UserMenuWrapperAnalyst, tslib_es6.__assign({}, userMenuProps, { handleModal: handleModal })))),
        React__default["default"].createElement("div", { className: cx('magneto-ui-header-analyst__container') }, headerBreadCrumb)));
};
/**
 * Organism UI component of header analyst
 */
var HeaderAnalyst = Component;

exports.HeaderAnalyst = HeaderAnalyst;
//# sourceMappingURL=HeaderAnalyst.component.js.map
