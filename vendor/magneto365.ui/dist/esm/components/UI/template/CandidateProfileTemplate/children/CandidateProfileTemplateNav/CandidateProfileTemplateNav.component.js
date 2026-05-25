import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useCallback, useEffect } from 'react';
import { useCandidateProfile } from '../../CandidateProfileTemplate.context.js';
import styles from './CandidateProfileTemplateNav.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var setNavHeight = useCandidateProfile().setNavHeight;
    var navRef = useRef(null);
    var handleOnShow = useCallback(function (openedNavOptions) {
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
    useEffect(function () {
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
    return (React.createElement("div", __assign({}, props, { ref: navRef, className: cx('magneto-ui-candidate-profile-template-nav', className) }), React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onShow: handleOnShow });
        }
        return child;
    })));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateNav = Component;

export { CandidateProfileTemplateNav };
//# sourceMappingURL=CandidateProfileTemplateNav.component.js.map
