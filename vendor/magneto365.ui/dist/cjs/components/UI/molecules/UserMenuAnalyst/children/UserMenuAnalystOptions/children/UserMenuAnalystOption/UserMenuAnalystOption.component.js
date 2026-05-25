'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var UserMenuAnalystOption_constants = require('./UserMenuAnalystOption.constants.js');
require('./children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('./children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('./children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
var UserMenuAnalystOptionActions_component = require('./children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
var ArrowLeft2 = require('../../../../../../../../assets/ArrowLeft2.svg.js');
require('../../../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../../atoms/Button/Button.component.js');
require('../../../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../../constants/img.constants.js');
require('../../../../../../../../utils/date/dateInput.util.js');
require('../../../../../../atoms/Field/Field.component.js');
require('../../../../../../atoms/Typography/Typography.component.js');
require('../../../../../../atoms/Typography/Typography.interface.js');
require('../../../../../../atoms/InputFile/InputFile.component.js');
var MenuDropdown_component = require('../../../../../../atoms/MenuDropdown/MenuDropdown.component.js');
require('../../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../../constants/jobDetails.constants.js');
require('../../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../../hooks/useMediaQuery/index.js');
var UserMenuAnalyst_constants = require('../../../../UserMenuAnalyst.constants.js');
var UserMenuAnalystTitle_component = require('../UserMenuAnalystTitle/UserMenuAnalystTitle.component.js');
var UserMenuAnalystOption_module = require('./UserMenuAnalystOption.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b;
    var classNames = _a.classNames, option = _a.option, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, isOpen = _a.isOpen, _c = _a.queryString, queryString = _c === void 0 ? {} : _c;
    var _d = React.useState(false), isOpenDropdown = _d[0], setIsOpenDropdown = _d[1];
    React.useEffect(function () {
        setIsOpenDropdown(false);
    }, [isOpen]);
    var url = React.useCallback(function (option) {
        if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
            var hasParams = option.data.includes('?');
            var delimiter = option.useQueryString !== false && (queryString || (option === null || option === void 0 ? void 0 : option.selfQueryString)) && hasParams ? '&' : '';
            var queryStringParams = Object.entries(tslib_es6.__assign(tslib_es6.__assign({}, queryString), option === null || option === void 0 ? void 0 : option.selfQueryString))
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
            })
                .join('&');
            return option.useQueryString !== false && queryStringParams
                ? "".concat(option.data).concat(hasParams ? delimiter : '?').concat(queryStringParams)
                : option.data;
        }
    }, [queryString]);
    if (!Array.isArray(option.data)) {
        var OptionType = UserMenuAnalystOption_constants.getOptionType(option.type);
        if (!OptionType)
            return null;
        return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalystOption_module, cls: ['user-menu-analyst-option__object'] }) },
            React__default["default"].createElement(OptionType, { className: classNameManager_util.get({ styles: UserMenuAnalystOption_module, cls: [classNames === null || classNames === void 0 ? void 0 : classNames.link] }), option: option, url: url(option), handleModal: handleModal, handleMenuOpen: handleMenuOpen, prefix: React__default["default"].createElement(UserMenuAnalystOptionActions_component.UserMenuAnalystOptionActions, { actions: option.prefix || [], getUrl: url, handleModal: handleModal, handleMenuOpen: handleMenuOpen, option: option }), suffix: React__default["default"].createElement(UserMenuAnalystOptionActions_component.UserMenuAnalystOptionActions, { actions: option.suffix || [], getUrl: url, handleModal: handleModal, handleMenuOpen: handleMenuOpen, option: option }) })));
    }
    return (React__default["default"].createElement(MenuDropdown_component.MenuDropdown, { title: React__default["default"].createElement(UserMenuAnalystTitle_component.UserMenuAnalystTitle, { title: option.title || '', subTitle: option.subTitle }), opened: isOpenDropdown, onClick: function () { return setIsOpenDropdown(!isOpenDropdown); }, listClassName: classNameManager_util.get({ styles: UserMenuAnalystOption_module, cls: ['user-menu-analyst-option__dropdown-list'] }), suffixIcon: { icon: ArrowLeft2, className: classNameManager_util.get({ styles: UserMenuAnalystOption_module, cls: ['user-menu-analyst-option__arrow'] }) }, prefixIcon: {
            icon: option.icon && UserMenuAnalyst_constants.userMenuAnalystIcons[option.icon] ? UserMenuAnalyst_constants.userMenuAnalystIcons[option.icon] : option.icon
        }, className: classNameManager_util.get({
            styles: UserMenuAnalystOption_module,
            cls: [
                'user-menu-analyst-option__dropdown',
                isOpenDropdown && 'user-menu-analyst-option__dropdown--open',
                classNames === null || classNames === void 0 ? void 0 : classNames.dropdown
            ]
        }) }, (_b = option.data) === null || _b === void 0 ? void 0 : _b.map(function (item, i) {
        var _a;
        return (React__default["default"].createElement(React__default["default"].Fragment, { key: "option-".concat(item.title, "-").concat(i) },
            item.title && (React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalystOption_module, cls: ['user-menu-analyst-option__dropdown-title'] }) }, item.title)), (_a = item === null || item === void 0 ? void 0 : item.children) === null || _a === void 0 ? void 0 :
            _a.map(function (child, j) { return (React__default["default"].createElement(Component, { key: "option-".concat(child.title, "-").concat(j), classNames: {
                    link: (classNames === null || classNames === void 0 ? void 0 : classNames.link) || '',
                    dropdown: (classNames === null || classNames === void 0 ? void 0 : classNames.dropdown) || ''
                }, option: child, queryString: queryString, handleModal: handleModal, handleMenuOpen: handleMenuOpen })); })));
    })));
};
/**
 * Molecule UI grand child component of menu dropdown
 */
var UserMenuAnalystOption = Component;

exports.UserMenuAnalystOption = UserMenuAnalystOption;
//# sourceMappingURL=UserMenuAnalystOption.component.js.map
