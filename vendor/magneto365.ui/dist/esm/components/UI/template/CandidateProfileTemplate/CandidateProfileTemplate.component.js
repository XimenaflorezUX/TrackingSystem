import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { CandidateProfileTemplateHeader } from './children/CandidateProfileTemplateHeader/CandidateProfileTemplateHeader.component.js';
import { CandidateProfileTemplateMainNav } from './children/CandidateProfileTemplateMainNav/CandidateProfileTemplateMainNav.component.js';
import { CandidateProfileTemplateNav } from './children/CandidateProfileTemplateNav/CandidateProfileTemplateNav.component.js';
import { CandidateProfileTemplateProfile } from './children/CandidateProfileTemplateProfile/CandidateProfileTemplateProfile.component.js';
import { CandidateProfileTemplateScreen } from './children/CandidateProfileTemplateScreen/CandidateProfileTemplateScreen.component.js';
import * as CandidateProfileTemplate_context from './CandidateProfileTemplate.context.js';
import { Provider } from './CandidateProfileTemplate.context.js';
import styles from './CandidateProfileTemplate.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, onChangeScreen = _a.onChangeScreen, screens = _a.screens;
    return (React.createElement(Provider, { screens: screens, onChangeScreen: onChangeScreen },
        React.createElement("div", { className: cx('magneto-ui-candidate-profile-page') }, children)));
};
/**
 * Template UI component of Candidate Profile.
 */
var CandidateProfileTemplate = Object.assign(Component, __assign({ Header: CandidateProfileTemplateHeader, MainNav: CandidateProfileTemplateMainNav, Nav: CandidateProfileTemplateNav, Profile: CandidateProfileTemplateProfile, Screen: CandidateProfileTemplateScreen }, CandidateProfileTemplate_context));

export { CandidateProfileTemplate };
//# sourceMappingURL=CandidateProfileTemplate.component.js.map
