import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import { useMediaQuery } from '../../hooks/useMediaQuery/index.js';
import React from 'react';
import DesktopSideCards from './withSideCards.desktop.js';
import MobileSideCards from './withSideCardsMobile.js';
import MobileSideCardsDrawer from './withSideCardsDrawer.mobile.js';

var withMegaMenuSideCards = function (WrappedComponent) {
    var Component = function (_a) {
        var sideProps = _a.sideProps, wrapperProps = _a.wrapperProps, _b = _a.withDrawerAction, withDrawerAction = _b === void 0 ? true : _b, _c = _a.showContent, showContent = _c === void 0 ? false : _c;
        var renderCards = useMediaQuery(React.createElement(DesktopSideCards, __assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps })), {
            md: withDrawerAction ? (React.createElement(MobileSideCardsDrawer, __assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps }))) : (React.createElement(MobileSideCards, __assign({}, { WrappedComponent: WrappedComponent, sideProps: sideProps, wrapperProps: wrapperProps, showContent: showContent })))
        });
        return renderCards;
    };
    return Component;
};

export { withMegaMenuSideCards as default };
//# sourceMappingURL=withSideCards.js.map
