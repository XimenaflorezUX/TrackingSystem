import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useImperativeHandle } from 'react';
import style from './MegaMenuSideCards.module.scss.js';
import ArrowRightWhite from '../../../../assets/ArrowRightWhite.svg.js';
import MegaMenuCard from '../MegaMenuCard/MegaMenuCard.component.js';
import { ButtonLink } from '../../atoms/ButtonLink/ButtonLink.component.js';

var MegaMenuSideCards = function (_a) {
    var jobs = _a.jobs, action = _a.action, onSelectCard = _a.onSelectCard, initValue = _a.initValue, _b = _a.maxCards, maxCards = _b === void 0 ? 10 : _b, cardsRef = _a.cardsRef;
    var _c = useState(initValue || 0), selected = _c[0], setSelected = _c[1];
    var handleClick = useCallback(function (index) { return function () {
        setSelected(index);
        onSelectCard && onSelectCard(index);
    }; }, [onSelectCard]);
    useImperativeHandle(cardsRef, function () { return ({
        setSelectedCard: function (index) { return setSelected(index); }
    }); });
    return (React.createElement("ul", { className: "".concat(style["mega-menu-side-cards"]) },
        jobs &&
            jobs.slice(0, maxCards).map(function (job, key) { return (React.createElement("li", { key: key },
                React.createElement(MegaMenuCard, __assign({}, job, { showRigthArrow: selected == key, className: "".concat(style["mega-menu-side-cards__card"], " ").concat(selected == key ? style["mega-menu-side-cards__card--selected"] : ''), onClick: onSelectCard ? handleClick(key) : undefined })))); }),
        action && (React.createElement("li", null,
            React.createElement(ButtonLink, { href: action.url, buttonText: action.label, onClick: action.onClick, className: "".concat(style["mega-menu-side-cards__action"]), prefixIcon: ArrowRightWhite })))));
};

export { MegaMenuSideCards as default };
//# sourceMappingURL=MegaMenuSideCards.component.js.map
