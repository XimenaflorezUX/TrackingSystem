'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MegaMenuSideCards_module = require('./MegaMenuSideCards.module.scss.js');
var ArrowRightWhite = require('../../../../assets/ArrowRightWhite.svg.js');
var MegaMenuCard_component = require('../MegaMenuCard/MegaMenuCard.component.js');
var ButtonLink_component = require('../../atoms/ButtonLink/ButtonLink.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuSideCards = function (_a) {
    var jobs = _a.jobs, action = _a.action, onSelectCard = _a.onSelectCard, initValue = _a.initValue, _b = _a.maxCards, maxCards = _b === void 0 ? 10 : _b, cardsRef = _a.cardsRef;
    var _c = React.useState(initValue || 0), selected = _c[0], setSelected = _c[1];
    var handleClick = React.useCallback(function (index) { return function () {
        setSelected(index);
        onSelectCard && onSelectCard(index);
    }; }, [onSelectCard]);
    React.useImperativeHandle(cardsRef, function () { return ({
        setSelectedCard: function (index) { return setSelected(index); }
    }); });
    return (React__default["default"].createElement("ul", { className: "".concat(MegaMenuSideCards_module["mega-menu-side-cards"]) },
        jobs &&
            jobs.slice(0, maxCards).map(function (job, key) { return (React__default["default"].createElement("li", { key: key },
                React__default["default"].createElement(MegaMenuCard_component, tslib_es6.__assign({}, job, { showRigthArrow: selected == key, className: "".concat(MegaMenuSideCards_module["mega-menu-side-cards__card"], " ").concat(selected == key ? MegaMenuSideCards_module["mega-menu-side-cards__card--selected"] : ''), onClick: onSelectCard ? handleClick(key) : undefined })))); }),
        action && (React__default["default"].createElement("li", null,
            React__default["default"].createElement(ButtonLink_component.ButtonLink, { href: action.url, buttonText: action.label, onClick: action.onClick, className: "".concat(MegaMenuSideCards_module["mega-menu-side-cards__action"]), prefixIcon: ArrowRightWhite })))));
};

module.exports = MegaMenuSideCards;
//# sourceMappingURL=MegaMenuSideCards.component.js.map
