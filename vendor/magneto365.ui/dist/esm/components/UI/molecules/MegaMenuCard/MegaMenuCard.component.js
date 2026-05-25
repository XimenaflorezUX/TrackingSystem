import React, { useCallback } from 'react';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Image from '../../atoms/Image/Image.component.js';
import styles from './MegaMenuCard.module.scss.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { numberToCurrency } from '../../../../utils/currency/currency.util.js';

var MegaMenuCard = function (_a) {
    var title = _a.title, logo = _a.logo, icon = _a.icon, quotas = _a.quotas, onClick = _a.onClick, className = _a.className, showRigthArrow = _a.showRigthArrow, href = _a.href, target = _a.target;
    var handleClick = useCallback(function (event) {
        if (onClick != null) {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    var rigthArrow = (React.createElement("div", { className: styles["magneto-ui-mega-menu-card__arrow"] },
        React.createElement(IconItem, { icon: ArrowRight2, size: 16 })));
    var arrow = useMediaQuery(showRigthArrow && rigthArrow, {
        md: rigthArrow
    });
    return (React.createElement("a", { className: "".concat(styles["magneto-ui-mega-menu-card"], " ").concat(className ? className : ''), onClick: handleClick, href: href, target: target },
        icon && (React.createElement("div", { className: styles["magneto-ui-mega-menu-card__icon"] },
            React.createElement(IconItem, { icon: icon, size: 16 }))),
        logo && (React.createElement("div", { className: styles["magneto-ui-mega-menu-card__logo"] },
            React.createElement(Image, { image: logo, alt: 'logo', className: styles["magneto-ui-mega-menu-card__logo"] }))),
        React.createElement("div", { className: styles["magneto-ui-mega-menu-card__content"] },
            React.createElement("div", { className: styles["magneto-ui-mega-menu-card__title"] }, title),
            React.createElement("div", { className: styles["magneto-ui-mega-menu-card__quotas"] }, "".concat(numberToCurrency(quotas, false), " cupos"))),
        arrow));
};

export { MegaMenuCard as default };
//# sourceMappingURL=MegaMenuCard.component.js.map
