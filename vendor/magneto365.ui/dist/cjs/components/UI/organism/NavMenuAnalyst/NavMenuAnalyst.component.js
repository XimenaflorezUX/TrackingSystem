'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var NavMenuAnalystDivider_component = require('./children/NavMenuAnalystDivider/NavMenuAnalystDivider.component.js');
var NavMenuAnalystOption_component = require('./children/NavMenuAnalystOption/NavMenuAnalystOption.component.js');
var logoMagnetoDarkMobile = require('../../../../assets/logoMagnetoDarkMobile.svg.js');
var miniArrowGrayDown = require('../../../../assets/miniArrowGrayDown.svg.js');
var miniArrowGrayUp = require('../../../../assets/miniArrowGrayUp.svg.js');
require('../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var NavMenuAnalyst_constants = require('./NavMenuAnalyst.constants.js');
var NavMenuAnalyst_module = require('./NavMenuAnalyst.module.scss.js');
var AnalystTemplate_context = require('../../template/AnalystTemplate/AnalystTemplate.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b, _c;
    var activeDropdown = _a.activeDropdown, _d = _a.className, className = _d === void 0 ? '' : _d, defaultRegion = _a.defaultRegion, footer = _a.footer, isDrawerOpen = _a.isDrawerOpen, isFullWidth = _a.isFullWidth, isOpenedFromHeader = _a.isOpenedFromHeader, isScrollAnimated = _a.isScrollAnimated, _e = _a.logoProps, logoProps = _e === void 0 ? tslib_es6.__assign({ fallbackImage: common_constants.logoPropsDark.logo }, common_constants.logoPropsDark) : _e, onDropdownClick = _a.onDropdownClick, path = _a.path, queryString = _a.queryString, regions = _a.regions, sections = _a.sections, setIsDrawerOpen = _a.setIsDrawerOpen;
    var containerRef = React.useRef(null);
    var handleRegionModal = AnalystTemplate_context.useAnalyst().handleRegionModal;
    React.useEffect(function () {
        if (containerRef.current) {
            if (!activeDropdown || !isDrawerOpen) {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [activeDropdown, isDrawerOpen]);
    var childrenActive = React.useCallback(function (option) {
        if (option.title === (activeDropdown === null || activeDropdown === void 0 ? void 0 : activeDropdown.title)) {
            return true;
        }
        if (option.data && Array.isArray(option.data)) {
            return option.data.some(function (child) { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.some(function (subChild) { return childrenActive(subChild); }); });
        }
        return false;
    }, [activeDropdown]);
    var handleRegionModalClick = React.useCallback(function () {
        setIsDrawerOpen && setIsDrawerOpen(false);
        handleRegionModal(true);
    }, [setIsDrawerOpen, handleRegionModal]);
    var customScrollbarButtonsStyle = {
        '--custom-scrollbar-thumb-down-background': "url(".concat(miniArrowGrayDown, ")"),
        '--custom-scrollbar-thumb-up-background': "url(".concat(miniArrowGrayUp, ")")
    };
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({
            styles: NavMenuAnalyst_module,
            cls: ['nav-menu-analyst', isFullWidth && 'nav-menu-analyst--full-menu', className]
        }) },
        isFullWidth && (React__default["default"].createElement("header", { className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__header'] }) },
            React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({ fallbackImage: common_constants.logoPropsDark.logo }, logoProps)))),
        React__default["default"].createElement("div", { ref: containerRef, style: customScrollbarButtonsStyle, className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__container'] }) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__sections'] }) }, sections.map(function (section, i) { return (React__default["default"].createElement("div", { key: "section-".concat(section.title, "-").concat(i), className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__section'] }) },
                React__default["default"].createElement(NavMenuAnalystDivider_component.NavMenuAnalystDivider, { title: section.title, isFullWidth: isFullWidth }),
                section.children.map(function (child, j) { return (React__default["default"].createElement("div", { key: "section-option-".concat(child.title, "-").concat(j) },
                    React__default["default"].createElement(NavMenuAnalystOption_component.NavMenuAnalystOption, { option: tslib_es6.__assign(tslib_es6.__assign({}, child), { icons: child.icon ? NavMenuAnalyst_constants.navMenuAnalystIcons[child.icon] : tslib_es6.__assign({}, child.icons) }), isFullWidth: isFullWidth, path: path, openedDropdown: childrenActive(child) && isDrawerOpen, isDrawerOpen: isDrawerOpen, isOpenedFromHeader: isOpenedFromHeader, isScrollAnimated: isScrollAnimated, onDropdownClick: onDropdownClick, queryString: queryString }))); }))); })),
            regions && regions.length > 0 && defaultRegion && (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__region'] }) },
                React__default["default"].createElement(NavMenuAnalystOption_component.NavMenuAnalystOption, { isFullWidth: isFullWidth, onOptionClick: handleRegionModalClick, option: {
                        icons: {
                            fallbackIcon: logoMagnetoDarkMobile,
                            normal: ((_b = regions.find(function (r) { return r.lang === defaultRegion; })) === null || _b === void 0 ? void 0 : _b.flag) ||
                                (regions && regions.length > 0 ? regions[0].flag : '')
                        },
                        title: ((_c = regions.find(function (r) { return r.lang === defaultRegion; })) === null || _c === void 0 ? void 0 : _c.name) ||
                            (regions && regions.length > 0 ? regions[0].name : '')
                    } }))),
            React__default["default"].createElement("footer", { className: classNameManager_util.get({
                    styles: NavMenuAnalyst_module,
                    cls: ['nav-menu-analyst__footer', isFullWidth && 'nav-menu-analyst__footer--full-menu']
                }) }, footer.map(function (option, i) { return (React__default["default"].createElement("div", { key: "footer-section-".concat(option.title, "-").concat(i), className: classNameManager_util.get({ styles: NavMenuAnalyst_module, cls: ['nav-menu-analyst__footer-section'] }) },
                React__default["default"].createElement(NavMenuAnalystDivider_component.NavMenuAnalystDivider, { title: option.title, isFullWidth: isFullWidth, showMobile: false }),
                option.children.map(function (child, j) { return (React__default["default"].createElement(NavMenuAnalystOption_component.NavMenuAnalystOption, { key: "footer-option-".concat(child.title, "-").concat(j), option: child, isFullWidth: isFullWidth, queryString: queryString })); }))); })))));
};
/**
 * Organism UI component of navigation menu analyst
 */
var NavMenuAnalyst = Component;

exports.NavMenuAnalyst = NavMenuAnalyst;
//# sourceMappingURL=NavMenuAnalyst.component.js.map
