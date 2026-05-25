'use strict';

var React = require('react');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Image_component = require('../../atoms/Image/Image.component.js');
var MegaMenuCard_module = require('./MegaMenuCard.module.scss.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var currency_util = require('../../../../utils/currency/currency.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuCard = function (_a) {
    var title = _a.title, logo = _a.logo, icon = _a.icon, quotas = _a.quotas, onClick = _a.onClick, className = _a.className, showRigthArrow = _a.showRigthArrow, href = _a.href, target = _a.target;
    var handleClick = React.useCallback(function (event) {
        if (onClick != null) {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    var rigthArrow = (React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__arrow"] },
        React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowRight2, size: 16 })));
    var arrow = index.useMediaQuery(showRigthArrow && rigthArrow, {
        md: rigthArrow
    });
    return (React__default["default"].createElement("a", { className: "".concat(MegaMenuCard_module["magneto-ui-mega-menu-card"], " ").concat(className ? className : ''), onClick: handleClick, href: href, target: target },
        icon && (React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__icon"] },
            React__default["default"].createElement(Icon_component.IconItem, { icon: icon, size: 16 }))),
        logo && (React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__logo"] },
            React__default["default"].createElement(Image_component, { image: logo, alt: 'logo', className: MegaMenuCard_module["magneto-ui-mega-menu-card__logo"] }))),
        React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__content"] },
            React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__title"] }, title),
            React__default["default"].createElement("div", { className: MegaMenuCard_module["magneto-ui-mega-menu-card__quotas"] }, "".concat(currency_util.numberToCurrency(quotas, false), " cupos"))),
        arrow));
};

module.exports = MegaMenuCard;
//# sourceMappingURL=MegaMenuCard.component.js.map
