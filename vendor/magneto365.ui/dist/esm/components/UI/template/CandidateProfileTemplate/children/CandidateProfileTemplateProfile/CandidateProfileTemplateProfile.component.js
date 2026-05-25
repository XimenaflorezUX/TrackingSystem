import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import MiniArrowGrayDown from '../../../../../../assets/miniArrowGrayDown.svg.js';
import MiniArrowGrayUp from '../../../../../../assets/miniArrowGrayUp.svg.js';
import { useCandidateProfile } from '../../CandidateProfileTemplate.context.js';
import styles from './CandidateProfileTemplateProfile.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var customScrollbarButtonsStyle = {
    '--custom-scrollbar-thumb-down-background': "url(".concat(MiniArrowGrayDown, ")"),
    '--custom-scrollbar-thumb-up-background': "url(".concat(MiniArrowGrayUp, ")")
};
var Component = function (_a) {
    var children = _a.children, containerRef = _a.containerRef, getContainer = _a.getContainer;
    var _b = useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = useState(true), isInTop = _c[0], setIsInTop = _c[1];
    var _d = useCandidateProfile(), isProfileOpen = _d.isProfileOpen, setIsProfileOpen = _d.setIsProfileOpen, navHeight = _d.navHeight, headerHeight = _d.headerHeight;
    var containerVars = useMemo(function () {
        return (__assign(__assign({}, customScrollbarButtonsStyle), { '--nav-height': "".concat(navHeight, "px"), '--header-height': "".concat(headerHeight, "px") }));
    }, [headerHeight, navHeight]);
    var handleOnChangeOpen = useCallback(function (localIsOpen) {
        setIsProfileOpen(localIsOpen);
        var containerElement = (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) || (getContainer === null || getContainer === void 0 ? void 0 : getContainer());
        if (containerElement && containerElement.scrollTop > 0 && localIsOpen) {
            setIsInTop(localIsOpen);
            containerElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else if (window.scrollY > 0 && localIsOpen) {
            setIsInTop(localIsOpen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [containerRef, getContainer, setIsProfileOpen]);
    useEffect(function () {
        var containerElement = (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) || (getContainer === null || getContainer === void 0 ? void 0 : getContainer());
        var handleScroll = function () {
            if (scrolled && !isInTop)
                return;
            var scrollY = containerElement ? containerElement.scrollTop : window.scrollY;
            setScrolled(scrollY > 0);
        };
        if (containerElement) {
            containerElement.addEventListener('scroll', handleScroll);
        }
        else {
            window.addEventListener('scroll', handleScroll);
        }
        return function () {
            if (containerElement) {
                containerElement.removeEventListener('scroll', handleScroll);
            }
            else {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [containerRef, getContainer, isInTop, scrolled]);
    useEffect(function () {
        if (scrolled) {
            setIsProfileOpen(false);
        }
    }, [scrolled, setIsProfileOpen]);
    return (React.createElement("div", { className: cx('magneto-ui-candidate-profile-template-profile'), style: containerVars }, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                className: cx('magneto-ui-candidate-profile-template-profile__container'),
                onChangeOpen: handleOnChangeOpen,
                open: isProfileOpen
            });
        }
        return child;
    })));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateProfile = Component;

export { CandidateProfileTemplateProfile };
//# sourceMappingURL=CandidateProfileTemplateProfile.component.js.map
