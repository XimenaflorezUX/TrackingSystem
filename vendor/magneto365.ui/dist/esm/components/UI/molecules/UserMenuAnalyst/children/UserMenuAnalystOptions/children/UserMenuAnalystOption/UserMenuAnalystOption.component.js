import { __assign } from '../../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect, useCallback } from 'react';
import { getOptionType } from './UserMenuAnalystOption.constants.js';
import './children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import './children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import './children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import { UserMenuAnalystOptionActions } from './children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import ArrowLeft2 from '../../../../../../../../assets/ArrowLeft2.svg.js';
import '../../../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../../atoms/Button/Button.component.js';
import '../../../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../../constants/img.constants.js';
import '../../../../../../../../utils/date/dateInput.util.js';
import '../../../../../../atoms/Field/Field.component.js';
import '../../../../../../atoms/Typography/Typography.component.js';
import '../../../../../../atoms/Typography/Typography.interface.js';
import '../../../../../../atoms/InputFile/InputFile.component.js';
import { MenuDropdown } from '../../../../../../atoms/MenuDropdown/MenuDropdown.component.js';
import '../../../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../../../atoms/Radio/Radio.interface.js';
import '../../../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../../../constants/jobDetails.constants.js';
import '../../../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../../../hooks/useMediaQuery/index.js';
import { userMenuAnalystIcons } from '../../../../UserMenuAnalyst.constants.js';
import { UserMenuAnalystTitle } from '../UserMenuAnalystTitle/UserMenuAnalystTitle.component.js';
import styles from './UserMenuAnalystOption.module.scss.js';

var Component = function (_a) {
    var _b;
    var classNames = _a.classNames, option = _a.option, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, isOpen = _a.isOpen, _c = _a.queryString, queryString = _c === void 0 ? {} : _c;
    var _d = useState(false), isOpenDropdown = _d[0], setIsOpenDropdown = _d[1];
    useEffect(function () {
        setIsOpenDropdown(false);
    }, [isOpen]);
    var url = useCallback(function (option) {
        if (option.data && !Array.isArray(option.data) && typeof option.data === 'string') {
            var hasParams = option.data.includes('?');
            var delimiter = option.useQueryString !== false && (queryString || (option === null || option === void 0 ? void 0 : option.selfQueryString)) && hasParams ? '&' : '';
            var queryStringParams = Object.entries(__assign(__assign({}, queryString), option === null || option === void 0 ? void 0 : option.selfQueryString))
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
        var OptionType = getOptionType(option.type);
        if (!OptionType)
            return null;
        return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-option__object'] }) },
            React.createElement(OptionType, { className: CNM.get({ styles: styles, cls: [classNames === null || classNames === void 0 ? void 0 : classNames.link] }), option: option, url: url(option), handleModal: handleModal, handleMenuOpen: handleMenuOpen, prefix: React.createElement(UserMenuAnalystOptionActions, { actions: option.prefix || [], getUrl: url, handleModal: handleModal, handleMenuOpen: handleMenuOpen, option: option }), suffix: React.createElement(UserMenuAnalystOptionActions, { actions: option.suffix || [], getUrl: url, handleModal: handleModal, handleMenuOpen: handleMenuOpen, option: option }) })));
    }
    return (React.createElement(MenuDropdown, { title: React.createElement(UserMenuAnalystTitle, { title: option.title || '', subTitle: option.subTitle }), opened: isOpenDropdown, onClick: function () { return setIsOpenDropdown(!isOpenDropdown); }, listClassName: CNM.get({ styles: styles, cls: ['user-menu-analyst-option__dropdown-list'] }), suffixIcon: { icon: ArrowLeft2, className: CNM.get({ styles: styles, cls: ['user-menu-analyst-option__arrow'] }) }, prefixIcon: {
            icon: option.icon && userMenuAnalystIcons[option.icon] ? userMenuAnalystIcons[option.icon] : option.icon
        }, className: CNM.get({
            styles: styles,
            cls: [
                'user-menu-analyst-option__dropdown',
                isOpenDropdown && 'user-menu-analyst-option__dropdown--open',
                classNames === null || classNames === void 0 ? void 0 : classNames.dropdown
            ]
        }) }, (_b = option.data) === null || _b === void 0 ? void 0 : _b.map(function (item, i) {
        var _a;
        return (React.createElement(React.Fragment, { key: "option-".concat(item.title, "-").concat(i) },
            item.title && (React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-option__dropdown-title'] }) }, item.title)), (_a = item === null || item === void 0 ? void 0 : item.children) === null || _a === void 0 ? void 0 :
            _a.map(function (child, j) { return (React.createElement(Component, { key: "option-".concat(child.title, "-").concat(j), classNames: {
                    link: (classNames === null || classNames === void 0 ? void 0 : classNames.link) || '',
                    dropdown: (classNames === null || classNames === void 0 ? void 0 : classNames.dropdown) || ''
                }, option: child, queryString: queryString, handleModal: handleModal, handleMenuOpen: handleMenuOpen })); })));
    })));
};
/**
 * Molecule UI grand child component of menu dropdown
 */
var UserMenuAnalystOption = Component;

export { UserMenuAnalystOption };
//# sourceMappingURL=UserMenuAnalystOption.component.js.map
