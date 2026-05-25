'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var index = require('../../hooks/useMediaQuery/index.js');
var React = require('react');
var withSideCards_desktop = require('./withSideCards.desktop.js');
var withSideCardsMobile = require('./withSideCardsMobile.js');
var withSideCardsDrawer_mobile = require('./withSideCardsDrawer.mobile.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var withMegaMenuSideCards = function (WrappedComponent) {
    var Component = function (_a) {
        var sideProps = _a.sideProps, wrapperProps = _a.wrapperProps, _b = _a.withDrawerAction, withDrawerAction = _b === void 0 ? true : _b, _c = _a.showContent, showContent = _c === void 0 ? false : _c;
        var renderCards = index.useMediaQuery(React__default["default"].createElement(withSideCards_desktop, tslib_es6.__assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps })), {
            md: withDrawerAction ? (React__default["default"].createElement(withSideCardsDrawer_mobile, tslib_es6.__assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps }))) : (React__default["default"].createElement(withSideCardsMobile, tslib_es6.__assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps, showContent: showContent })))
        });
        return renderCards;
    };
    return Component;
};

module.exports = withMegaMenuSideCards;
//# sourceMappingURL=withSideCards.js.map
