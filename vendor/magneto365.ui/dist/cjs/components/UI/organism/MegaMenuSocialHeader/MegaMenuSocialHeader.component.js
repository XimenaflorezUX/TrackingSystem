'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MegaMenuTabs_component = require('../../molecules/MegaMenuSocialTabs/MegaMenuTabs.component.js');
var React = require('react');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var arrowDownWhite = require('../../../../assets/arrowDownWhite.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
var drawer_constants = require('../../../../constants/stories/drawer.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var MegaMenuSocialHeader_modules = require('./MegaMenuSocialHeader.modules.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
var Popover_component = require('../../atoms/Popover/Popover.component.js');
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
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var ListIconLink_component = require('../../molecules/ListIconLink/ListIconLink.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, promo = _a.promo, tabsPrefix = _a.tabsPrefix;
    var _c = React.useState(false), showHelpOptions = _c[0], setShowHelpOptions = _c[1];
    var _d = MegaMenu_context.useMegaMenuSocialHeader(), helpOptions = _d.helpOptions, blog = _d.blog, helpAction = _d.helpAction;
    var isCandidate = variant === 'candidate';
    var variantClass = isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header--candidate'] : '';
    var arrowIcon = isCandidate ? arrowDownWhite : ArrowDown2;
    var promoSection = React.useMemo(function () {
        return promo && (React__default["default"].createElement("div", { className: MegaMenuSocialHeader_modules['mega-menu-social-header__promo'] },
            React__default["default"].createElement("span", null, promo.content),
            React__default["default"].createElement("a", { href: promo.linkUrl, className: MegaMenuSocialHeader_modules['mega-menu-social-header__promo-link'] }, promo.linkText)));
    }, [promo]);
    var linkButton = React.useMemo(function () {
        return blog && (React__default["default"].createElement("a", { title: blog.label, className: "".concat(MegaMenuSocialHeader_modules['mega-menu-social-header__blog'], " ").concat(isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header__blog--candidate'] : ''), href: blog.url, target: '_blank', rel: "noreferrer" },
            React__default["default"].createElement("p", null, blog.label)));
    }, [blog, isCandidate]);
    var handleClickHelpOption = React.useCallback(function (show) { return function () {
        setShowHelpOptions(show);
    }; }, []);
    var makeHelpOption = React.useMemo(function () { return (React__default["default"].createElement("ul", { className: MegaMenuSocialHeader_modules['mega-menu-social-header__help--options'] }, helpOptions &&
        helpOptions.length > 0 &&
        helpOptions.map(function (option, key) { return (React__default["default"].createElement("li", { key: key, className: MegaMenuSocialHeader_modules['mega-menu-social-header__help--option'] },
            React__default["default"].createElement("a", { href: option.url },
                React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow icon", hover: false, icon: megaMenu_constants.megaMenuHelpIcons[key], size: 16 }),
                React__default["default"].createElement("p", { className: MegaMenuSocialHeader_modules['mega-menu-social-header__help--option-text'] }, option.label)))); }))); }, [helpOptions]);
    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuSocialHeader_modules['mega-menu-social-header'], " ").concat(variantClass) },
        React__default["default"].createElement("div", { className: "".concat(MegaMenuSocialHeader_modules['mega-menu-social-header__tabs-wrapper'], " ").concat(isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header__tabs-wrapper--candidate'] : '') },
            isCandidate && tabsPrefix && (React__default["default"].createElement("span", { className: MegaMenuSocialHeader_modules['mega-menu-social-header__tabs-prefix'] }, tabsPrefix)),
            React__default["default"].createElement(MegaMenuTabs_component, { className: isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header__tabs--candidate'] : '', showArrows: !isCandidate })),
        isCandidate && promoSection,
        React__default["default"].createElement("div", { className: MegaMenuSocialHeader_modules['mega-menu-social-header__options'] },
            React__default["default"].createElement(ListIconLink_component.ListIconLink, { listIcon: drawer_constants.ListMegaMenu, size: 20, spacing: 10, className: isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header__icons--candidate'] : '' }),
            linkButton,
            React__default["default"].createElement(Popover_component.Popover, { positionY: 'bottom', positionX: 'left', content: makeHelpOption, show: showHelpOptions, widthBase: 60, className: "".concat(MegaMenuSocialHeader_modules['mega-menu-social-header__help'], " ").concat(showHelpOptions ? '' : MegaMenuSocialHeader_modules['mega-menu-social-header__help--hidden']) },
                React__default["default"].createElement(React__default["default"].Fragment, null, helpAction && (React__default["default"].createElement("button", { onClick: handleClickHelpOption(!showHelpOptions), onBlur: handleClickHelpOption(false), className: "".concat(MegaMenuSocialHeader_modules['mega-menu-social-header__help--button'], " ").concat(isCandidate ? MegaMenuSocialHeader_modules['mega-menu-social-header__help--button-candidate'] : '') },
                    React__default["default"].createElement("p", null, helpAction.label),
                    React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow icon", hover: false, icon: arrowIcon, size: 14 }))))))));
};
var MegaMenuSocialHeader = Component;

exports.MegaMenuSocialHeader = MegaMenuSocialHeader;
//# sourceMappingURL=MegaMenuSocialHeader.component.js.map
