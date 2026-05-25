'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var miniArrowGrayDown = require('../../../../../../assets/miniArrowGrayDown.svg.js');
var miniArrowGrayUp = require('../../../../../../assets/miniArrowGrayUp.svg.js');
var CandidateProfileTemplate_context = require('../../CandidateProfileTemplate.context.js');
var CandidateProfileTemplateProfile_module = require('./CandidateProfileTemplateProfile.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileTemplateProfile_module);
var customScrollbarButtonsStyle = {
    '--custom-scrollbar-thumb-down-background': "url(".concat(miniArrowGrayDown, ")"),
    '--custom-scrollbar-thumb-up-background': "url(".concat(miniArrowGrayUp, ")")
};
var Component = function (_a) {
    var children = _a.children, containerRef = _a.containerRef, getContainer = _a.getContainer;
    var _b = React.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = React.useState(true), isInTop = _c[0], setIsInTop = _c[1];
    var _d = CandidateProfileTemplate_context.useCandidateProfile(), isProfileOpen = _d.isProfileOpen, setIsProfileOpen = _d.setIsProfileOpen, navHeight = _d.navHeight, headerHeight = _d.headerHeight;
    var containerVars = React.useMemo(function () {
        return (tslib_es6.__assign(tslib_es6.__assign({}, customScrollbarButtonsStyle), { '--nav-height': "".concat(navHeight, "px"), '--header-height': "".concat(headerHeight, "px") }));
    }, [headerHeight, navHeight]);
    var handleOnChangeOpen = React.useCallback(function (localIsOpen) {
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
    React.useEffect(function () {
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
    React.useEffect(function () {
        if (scrolled) {
            setIsProfileOpen(false);
        }
    }, [scrolled, setIsProfileOpen]);
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-candidate-profile-template-profile'), style: containerVars }, React__default["default"].Children.map(children, function (child) {
        if (React__default["default"].isValidElement(child)) {
            return React__default["default"].cloneElement(child, {
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

exports.CandidateProfileTemplateProfile = CandidateProfileTemplateProfile;
//# sourceMappingURL=CandidateProfileTemplateProfile.component.js.map
