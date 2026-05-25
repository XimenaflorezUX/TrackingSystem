import React, { useRef, useEffect } from 'react';
import { useCandidateProfile } from '../../CandidateProfileTemplate.context.js';
import styles from './CandidateProfileTemplateHeader.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children;
    var setHeaderHeight = useCandidateProfile().setHeaderHeight;
    var headerRef = useRef(null);
    useEffect(function () {
        var handleResize = function () {
            if (!headerRef.current)
                return;
            setHeaderHeight(headerRef.current.offsetHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [setHeaderHeight]);
    return (React.createElement("div", { ref: headerRef, className: cx('magneto-ui-candidate-profile-template-header') }, children));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateHeader = Component;

export { CandidateProfileTemplateHeader };
//# sourceMappingURL=CandidateProfileTemplateHeader.component.js.map
