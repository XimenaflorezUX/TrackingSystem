'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
var MenuDropdown_component = require('../../../../atoms/MenuDropdown/MenuDropdown.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
require('../../../../molecules/Actions/Actions.component.js');
require('../../../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../molecules/SharePopover/SharePopover.js');
require('../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var MenuIcon_component = require('../../../../molecules/MenuIcon/MenuIcon.component.js');
require('../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../molecules/Modal/Modal.component.js');
require('../../../../molecules/SimilarCard/SimilarCard.component.js');
require('../../../../molecules/SortMenu/SortMenu.component.js');
require('../../../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../../molecules/UserMenu/UserMenu.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../molecules/JobDetails/JobDetails.component.js');
require('../../../../molecules/Chat/Chat.component.js');
var NavMenuAnalyst_constants = require('../../NavMenuAnalyst.constants.js');
var NavMenuAnalystOption_module = require('./NavMenuAnalystOption.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b;
    var isDrawerOpen = _a.isDrawerOpen, isFullWidth = _a.isFullWidth, isOpenedFromHeader = _a.isOpenedFromHeader, _c = _a.isParentOpen, isParentOpen = _c === void 0 ? true : _c, isScrollAnimated = _a.isScrollAnimated, onDropdownClick = _a.onDropdownClick, onOptionClick = _a.onOptionClick, _d = _a.openedDropdown, openedDropdown = _d === void 0 ? false : _d, option = _a.option, path = _a.path, _e = _a.queryString, queryString = _e === void 0 ? {} : _e;
    var _f = option.useQueryString, useQueryString = _f === void 0 ? true : _f, _g = option.rel, rel = _g === void 0 ? 'noreferrer' : _g, _h = option.target, target = _h === void 0 ? '_self' : _h;
    var _j = React.useState(openedDropdown), isOpenDropdown = _j[0], setIsOpenDropdown = _j[1];
    var _k = React.useState(false), scrolledToOption = _k[0], setScrolledToOption = _k[1];
    var optionRef = React.useRef(null);
    React.useEffect(function () {
        if (optionRef.current && isOpenDropdown && isScrollAnimated) {
            setTimeout(function () {
                var _a;
                (_a = optionRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }, [isOpenDropdown, isScrollAnimated, openedDropdown]);
    React.useEffect(function () {
        setIsOpenDropdown(openedDropdown);
    }, [openedDropdown, isDrawerOpen, isParentOpen, isOpenedFromHeader]);
    React.useEffect(function () {
        if (isDrawerOpen) {
            setScrolledToOption(false);
        }
    }, [isDrawerOpen]);
    var getPathname = React.useCallback(function (url) {
        try {
            if (!url)
                return null;
            if (url.startsWith('/'))
                return url;
            return new URL(url).pathname;
        }
        catch (error) {
            return null;
        }
    }, []);
    var isActive = React.useCallback(function (option) {
        var pathName = getPathname(path) || window.location.pathname;
        if (option.data && typeof option.data === 'string') {
            return pathName === getPathname(option.data);
        }
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return isActive(subChild); }); });
        }
        return false;
    }, [path, getPathname]);
    var childrenActive = React.useCallback(function (option) {
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return isActive(subChild); }); });
        }
        return false;
    }, [isActive]);
    var handleDropdownClick = React.useCallback(function () {
        if (isFullWidth && !scrolledToOption) {
            setScrolledToOption(true);
        }
        if (onDropdownClick) {
            onDropdownClick(option);
        }
        setIsOpenDropdown(!isOpenDropdown);
    }, [isOpenDropdown, onDropdownClick, option, isFullWidth, scrolledToOption]);
    var icons = React.useCallback(function (active, icons) {
        if (active) {
            return icons === null || icons === void 0 ? void 0 : icons.active;
        }
        return icons === null || icons === void 0 ? void 0 : icons.normal;
    }, []);
    var url = React.useMemo(function () {
        var _a;
        if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
            var hasParams = (_a = option.data) === null || _a === void 0 ? void 0 : _a.includes('?');
            var delimiter = useQueryString && queryString && hasParams ? '&' : '';
            var queryStringParams = Object.entries(queryString)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
            })
                .join('&');
            return useQueryString && queryStringParams
                ? "".concat(option.data).concat(hasParams ? delimiter : '?').concat(queryStringParams)
                : option.data;
        }
    }, [option.data, queryString, useQueryString]);
    var linkStyles = classNameManager_util.get({
        styles: NavMenuAnalystOption_module,
        cls: [
            'nav-menu-analyst-option__link',
            isFullWidth && 'nav-menu-analyst-option__link--full-menu',
            isActive(option) && 'nav-menu-analyst-option__link--active'
        ]
    });
    var dropdownStyles = classNameManager_util.get({
        styles: NavMenuAnalystOption_module,
        cls: [
            'nav-menu-analyst-option__dropdown',
            isFullWidth && 'nav-menu-analyst-option__dropdown--full-menu',
            ((childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option))) &&
                'nav-menu-analyst-option__dropdown--active',
            (!isOpenDropdown || !isFullWidth) && !childrenActive(option) && 'nav-menu-analyst-option__dropdown--hover'
        ]
    });
    if (!Array.isArray(option.data)) {
        return (React__default["default"].createElement(MenuIcon_component.MenuIcon, { text: option.title || '', icon: icons(isActive(option), option.icons), iconProps: { fallbackIcon: (_b = option.icons) === null || _b === void 0 ? void 0 : _b.fallbackIcon, showDefaultFallback: false }, iconSize: 18, url: url, className: linkStyles, type: typeof option.data === 'function' || onOptionClick ? 'button' : 'link', onClick: onOptionClick
                ? function () { return onOptionClick(option); }
                : typeof option.data === 'function'
                    ? function () { return option.data(option); }
                    : undefined, target: target, rel: rel }));
    }
    return (React__default["default"].createElement("div", { title: option.title, ref: optionRef },
        React__default["default"].createElement(MenuDropdown_component.MenuDropdown, { className: dropdownStyles, listClassName: classNameManager_util.get({
                styles: NavMenuAnalystOption_module,
                cls: ['nav-menu-analyst-option__dropdown-list']
            }), opened: !isParentOpen ? false : (isActive(option) && isFullWidth && isOpenDropdown) || (isOpenDropdown && isFullWidth), onClick: handleDropdownClick, title: option.title || '', prefixIcon: {
                icon: icons((childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option)), option.icons),
                size: 18
            } }, option.data.map(function (item, i) { return (React__default["default"].createElement(React__default["default"].Fragment, { key: "option-".concat(item.title, "-").concat(i) },
            item.title && (React__default["default"].createElement("p", { className: classNameManager_util.get({ styles: NavMenuAnalystOption_module, cls: ['nav-menu-analyst-option__dropdown-title'] }) }, item.title)),
            item.children.map(function (child, j) { return (React__default["default"].createElement(Component, { key: "option-".concat(child.title, "-").concat(j), option: tslib_es6.__assign(tslib_es6.__assign({}, child), { icons: child.icon ? NavMenuAnalyst_constants.navMenuAnalystIcons[child.icon] : tslib_es6.__assign({}, child.icons) }), isFullWidth: isFullWidth, isOpenedFromHeader: isOpenedFromHeader, path: path, openedDropdown: !scrolledToOption ? childrenActive(child) && !isOpenedFromHeader && isOpenDropdown : false, isDrawerOpen: isDrawerOpen, isScrollAnimated: isScrollAnimated, isParentOpen: isOpenDropdown, onDropdownClick: onDropdownClick, onOptionClick: onOptionClick, queryString: queryString })); }))); }))));
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystOption = Component;

exports.NavMenuAnalystOption = NavMenuAnalystOption;
//# sourceMappingURL=NavMenuAnalystOption.component.js.map
