import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
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
import { MenuDropdown } from '../../../../atoms/MenuDropdown/MenuDropdown.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import '../../../../molecules/Actions/Actions.component.js';
import '../../../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../molecules/CandidateProfile/CandidateProfile.component.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../molecules/SharePopover/SharePopover.js';
import '../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { MenuIcon } from '../../../../molecules/MenuIcon/MenuIcon.component.js';
import '../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../molecules/Modal/Modal.component.js';
import '../../../../molecules/SimilarCard/SimilarCard.component.js';
import '../../../../molecules/SortMenu/SortMenu.component.js';
import '../../../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../../molecules/UserMenu/UserMenu.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../molecules/JobDetails/JobDetails.component.js';
import '../../../../molecules/Chat/Chat.component.js';
import { navMenuAnalystIcons } from '../../NavMenuAnalyst.constants.js';
import styles from './NavMenuAnalystOption.module.scss.js';

var Component = function (_a) {
    var _b;
    var isDrawerOpen = _a.isDrawerOpen, isFullWidth = _a.isFullWidth, isOpenedFromHeader = _a.isOpenedFromHeader, _c = _a.isParentOpen, isParentOpen = _c === void 0 ? true : _c, isScrollAnimated = _a.isScrollAnimated, onDropdownClick = _a.onDropdownClick, onOptionClick = _a.onOptionClick, _d = _a.openedDropdown, openedDropdown = _d === void 0 ? false : _d, option = _a.option, path = _a.path, _e = _a.queryString, queryString = _e === void 0 ? {} : _e;
    var _f = option.useQueryString, useQueryString = _f === void 0 ? true : _f, _g = option.rel, rel = _g === void 0 ? 'noreferrer' : _g, _h = option.target, target = _h === void 0 ? '_self' : _h;
    var _j = useState(openedDropdown), isOpenDropdown = _j[0], setIsOpenDropdown = _j[1];
    var _k = useState(false), scrolledToOption = _k[0], setScrolledToOption = _k[1];
    var optionRef = useRef(null);
    useEffect(function () {
        if (optionRef.current && isOpenDropdown && isScrollAnimated) {
            setTimeout(function () {
                var _a;
                (_a = optionRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }, [isOpenDropdown, isScrollAnimated, openedDropdown]);
    useEffect(function () {
        setIsOpenDropdown(openedDropdown);
    }, [openedDropdown, isDrawerOpen, isParentOpen, isOpenedFromHeader]);
    useEffect(function () {
        if (isDrawerOpen) {
            setScrolledToOption(false);
        }
    }, [isDrawerOpen]);
    var getPathname = useCallback(function (url) {
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
    var isActive = useCallback(function (option) {
        var pathName = getPathname(path) || window.location.pathname;
        if (option.data && typeof option.data === 'string') {
            return pathName === getPathname(option.data);
        }
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return isActive(subChild); }); });
        }
        return false;
    }, [path, getPathname]);
    var childrenActive = useCallback(function (option) {
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return isActive(subChild); }); });
        }
        return false;
    }, [isActive]);
    var handleDropdownClick = useCallback(function () {
        if (isFullWidth && !scrolledToOption) {
            setScrolledToOption(true);
        }
        if (onDropdownClick) {
            onDropdownClick(option);
        }
        setIsOpenDropdown(!isOpenDropdown);
    }, [isOpenDropdown, onDropdownClick, option, isFullWidth, scrolledToOption]);
    var icons = useCallback(function (active, icons) {
        if (active) {
            return icons === null || icons === void 0 ? void 0 : icons.active;
        }
        return icons === null || icons === void 0 ? void 0 : icons.normal;
    }, []);
    var url = useMemo(function () {
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
    var linkStyles = CNM.get({
        styles: styles,
        cls: [
            'nav-menu-analyst-option__link',
            isFullWidth && 'nav-menu-analyst-option__link--full-menu',
            isActive(option) && 'nav-menu-analyst-option__link--active'
        ]
    });
    var dropdownStyles = CNM.get({
        styles: styles,
        cls: [
            'nav-menu-analyst-option__dropdown',
            isFullWidth && 'nav-menu-analyst-option__dropdown--full-menu',
            ((childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option))) &&
                'nav-menu-analyst-option__dropdown--active',
            (!isOpenDropdown || !isFullWidth) && !childrenActive(option) && 'nav-menu-analyst-option__dropdown--hover'
        ]
    });
    if (!Array.isArray(option.data)) {
        return (React.createElement(MenuIcon, { text: option.title || '', icon: icons(isActive(option), option.icons), iconProps: { fallbackIcon: (_b = option.icons) === null || _b === void 0 ? void 0 : _b.fallbackIcon, showDefaultFallback: false }, iconSize: 18, url: url, className: linkStyles, type: typeof option.data === 'function' || onOptionClick ? 'button' : 'link', onClick: onOptionClick
                ? function () { return onOptionClick(option); }
                : typeof option.data === 'function'
                    ? function () { return option.data(option); }
                    : undefined, target: target, rel: rel }));
    }
    return (React.createElement("div", { title: option.title, ref: optionRef },
        React.createElement(MenuDropdown, { className: dropdownStyles, listClassName: CNM.get({
                styles: styles,
                cls: ['nav-menu-analyst-option__dropdown-list']
            }), opened: !isParentOpen ? false : (isActive(option) && isFullWidth && isOpenDropdown) || (isOpenDropdown && isFullWidth), onClick: handleDropdownClick, title: option.title || '', prefixIcon: {
                icon: icons((childrenActive(option) && !isFullWidth) || (!isOpenDropdown && childrenActive(option)), option.icons),
                size: 18
            } }, option.data.map(function (item, i) { return (React.createElement(React.Fragment, { key: "option-".concat(item.title, "-").concat(i) },
            item.title && (React.createElement("p", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-option__dropdown-title'] }) }, item.title)),
            item.children.map(function (child, j) { return (React.createElement(Component, { key: "option-".concat(child.title, "-").concat(j), option: __assign(__assign({}, child), { icons: child.icon ? navMenuAnalystIcons[child.icon] : __assign({}, child.icons) }), isFullWidth: isFullWidth, isOpenedFromHeader: isOpenedFromHeader, path: path, openedDropdown: !scrolledToOption ? childrenActive(child) && !isOpenedFromHeader && isOpenDropdown : false, isDrawerOpen: isDrawerOpen, isScrollAnimated: isScrollAnimated, isParentOpen: isOpenDropdown, onDropdownClick: onDropdownClick, onOptionClick: onOptionClick, queryString: queryString })); }))); }))));
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystOption = Component;

export { NavMenuAnalystOption };
//# sourceMappingURL=NavMenuAnalystOption.component.js.map
