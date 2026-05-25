import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useEffect, useCallback } from 'react';
import { NavMenuAnalystDivider } from './children/NavMenuAnalystDivider/NavMenuAnalystDivider.component.js';
import { NavMenuAnalystOption } from './children/NavMenuAnalystOption/NavMenuAnalystOption.component.js';
import IsoLogoMagnetoDark from '../../../../assets/logoMagnetoDarkMobile.svg.js';
import MiniArrowGrayDown from '../../../../assets/miniArrowGrayDown.svg.js';
import MiniArrowGrayUp from '../../../../assets/miniArrowGrayUp.svg.js';
import '../../atoms/BarChart/enums.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoPropsDark } from '../../../../constants/stories/common.constants.js';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { navMenuAnalystIcons } from './NavMenuAnalyst.constants.js';
import styles from './NavMenuAnalyst.module.scss.js';
import { useAnalyst } from '../../template/AnalystTemplate/AnalystTemplate.context.js';

var Component = function (_a) {
    var _b, _c;
    var activeDropdown = _a.activeDropdown, _d = _a.className, className = _d === void 0 ? '' : _d, defaultRegion = _a.defaultRegion, footer = _a.footer, isDrawerOpen = _a.isDrawerOpen, isFullWidth = _a.isFullWidth, isOpenedFromHeader = _a.isOpenedFromHeader, isScrollAnimated = _a.isScrollAnimated, _e = _a.logoProps, logoProps = _e === void 0 ? __assign({ fallbackImage: logoPropsDark.logo }, logoPropsDark) : _e, onDropdownClick = _a.onDropdownClick, path = _a.path, queryString = _a.queryString, regions = _a.regions, sections = _a.sections, setIsDrawerOpen = _a.setIsDrawerOpen;
    var containerRef = useRef(null);
    var handleRegionModal = useAnalyst().handleRegionModal;
    useEffect(function () {
        if (containerRef.current) {
            if (!activeDropdown || !isDrawerOpen) {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [activeDropdown, isDrawerOpen]);
    var childrenActive = useCallback(function (option) {
        if (option.title === (activeDropdown === null || activeDropdown === void 0 ? void 0 : activeDropdown.title)) {
            return true;
        }
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return childrenActive(subChild); }); });
        }
        return false;
    }, [activeDropdown]);
    var handleRegionModalClick = useCallback(function () {
        setIsDrawerOpen && setIsDrawerOpen(false);
        handleRegionModal(true);
    }, [setIsDrawerOpen, handleRegionModal]);
    var customScrollbarButtonsStyle = {
        '--custom-scrollbar-thumb-down-background': "url(".concat(MiniArrowGrayDown, ")"),
        '--custom-scrollbar-thumb-up-background': "url(".concat(MiniArrowGrayUp, ")")
    };
    return (React.createElement("div", { className: CNM.get({
            styles: styles,
            cls: ['nav-menu-analyst', isFullWidth && 'nav-menu-analyst--full-menu', className]
        }) },
        isFullWidth && (React.createElement("header", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__header'] }) },
            React.createElement(LogoComponent, __assign({ fallbackImage: logoPropsDark.logo }, logoProps)))),
        React.createElement("div", { ref: containerRef, style: customScrollbarButtonsStyle, className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__container'] }) },
            React.createElement("div", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__sections'] }) }, sections.map(function (section, i) { return (React.createElement("div", { key: "section-".concat(section.title, "-").concat(i), className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__section'] }) },
                React.createElement(NavMenuAnalystDivider, { title: section.title, isFullWidth: isFullWidth }),
                section.children.map(function (child, j) { return (React.createElement("div", { key: "section-option-".concat(child.title, "-").concat(j) },
                    React.createElement(NavMenuAnalystOption, { option: __assign(__assign({}, child), { icons: child.icon ? navMenuAnalystIcons[child.icon] : __assign({}, child.icons) }), isFullWidth: isFullWidth, path: path, openedDropdown: childrenActive(child) && isDrawerOpen, isDrawerOpen: isDrawerOpen, isOpenedFromHeader: isOpenedFromHeader, isScrollAnimated: isScrollAnimated, onDropdownClick: onDropdownClick, queryString: queryString }))); }))); })),
            regions && regions.length > 0 && defaultRegion && (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__region'] }) },
                React.createElement(NavMenuAnalystOption, { isFullWidth: isFullWidth, onOptionClick: handleRegionModalClick, option: {
                        icons: {
                            fallbackIcon: IsoLogoMagnetoDark,
                            normal: ((_b = regions.find(function (r) { return r.lang === defaultRegion; })) === null || _b === void 0 ? void 0 : _b.flag) ||
                                (regions && regions.length > 0 ? regions[0].flag : '')
                        },
                        title: ((_c = regions.find(function (r) { return r.lang === defaultRegion; })) === null || _c === void 0 ? void 0 : _c.name) ||
                            (regions && regions.length > 0 ? regions[0].name : '')
                    } }))),
            React.createElement("footer", { className: CNM.get({
                    styles: styles,
                    cls: ['nav-menu-analyst__footer', isFullWidth && 'nav-menu-analyst__footer--full-menu']
                }) }, footer.map(function (option, i) { return (React.createElement("div", { key: "footer-section-".concat(option.title, "-").concat(i), className: CNM.get({ styles: styles, cls: ['nav-menu-analyst__footer-section'] }) },
                React.createElement(NavMenuAnalystDivider, { title: option.title, isFullWidth: isFullWidth, showMobile: false }),
                option.children.map(function (child, j) { return (React.createElement(NavMenuAnalystOption, { key: "footer-option-".concat(child.title, "-").concat(j), option: child, isFullWidth: isFullWidth, queryString: queryString })); }))); })))));
};
/**
 * Organism UI component of navigation menu analyst
 */
var NavMenuAnalyst = Component;

export { NavMenuAnalyst };
//# sourceMappingURL=NavMenuAnalyst.component.js.map
