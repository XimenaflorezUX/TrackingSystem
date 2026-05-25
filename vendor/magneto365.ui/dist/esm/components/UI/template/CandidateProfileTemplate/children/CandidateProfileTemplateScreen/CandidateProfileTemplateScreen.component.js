import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useCandidateProfile } from '../../CandidateProfileTemplate.context.js';
import styles from './CandidateProfileTemplateScreen.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var props = __rest(_a, []);
    var _b = useCandidateProfile(), activeScreen = _b.activeScreen, screens = _b.screens, navHeight = _b.navHeight;
    var Screen = (screens[activeScreen] || {}).component;
    return (React.createElement("div", { className: cx('magneto-ui-candidate-profile-template-screen'), style: {
            '--nav-height': "".concat(navHeight, "px")
        } },
        React.createElement(Screen, __assign({}, props))));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateScreen = Component;

export { CandidateProfileTemplateScreen };
//# sourceMappingURL=CandidateProfileTemplateScreen.component.js.map
