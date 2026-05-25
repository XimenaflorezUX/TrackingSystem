'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateProfileTemplate_context = require('../../CandidateProfileTemplate.context.js');
var CandidateProfileTemplateNav_module = require('./CandidateProfileTemplateNav.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileTemplateNav_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    var setNavHeight = CandidateProfileTemplate_context.useCandidateProfile().setNavHeight;
    var navRef = React.useRef(null);
    var handleOnShow = React.useCallback(function (openedNavOptions) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 360) {
            setTimeout(function () {
                var _a;
                setNavHeight(openedNavOptions ? 320 : ((_a = navRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 111);
            }, 300);
        }
        else {
            setNavHeight(openedNavOptions ? 320 : 111);
        }
    }, [setNavHeight]);
    React.useEffect(function () {
        var handleResize = function () {
            if (!navRef.current)
                return;
            setNavHeight(navRef.current.offsetHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleOnShow, setNavHeight]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({}, props, { ref: navRef, className: cx('magneto-ui-candidate-profile-template-nav', className) }), React__default["default"].Children.map(children, function (child) {
        if (React__default["default"].isValidElement(child)) {
            return React__default["default"].cloneElement(child, { onShow: handleOnShow });
        }
        return child;
    })));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateNav = Component;

exports.CandidateProfileTemplateNav = CandidateProfileTemplateNav;
//# sourceMappingURL=CandidateProfileTemplateNav.component.js.map
