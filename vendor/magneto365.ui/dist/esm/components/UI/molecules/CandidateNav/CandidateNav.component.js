import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { CandidateNavButton } from './children/CandidateNavButton/CandidateNavButton.component.js';
import './children/CandidateNavButton/CandidateNavButton.interface.js';
import { CandidateNavOption } from './children/CandidateNavOption/CandidateNavOption.component.js';
import { CandidateNavOptions } from './children/CandidateNavOptions/CandidateNavOptions.component.js';
import { CandidateNavStep } from './children/CandidateNavStep/CandidateNavStep.component.js';
import * as CandidateNav_context from './CandidateNav.context.js';
import { Provider } from './CandidateNav.context.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './CandidateNav.module.scss.js';

var cs = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement(Provider, null,
        React.createElement("div", __assign({ className: cs('magneto-ui-candidate-nav', className) }, props), children)));
};
/**
 *  Molecule UI component of Candidate Nav
 */
var CandidateNav = Object.assign(Component, __assign({ Button: CandidateNavButton, Option: CandidateNavOption, Options: CandidateNavOptions, Step: CandidateNavStep }, CandidateNav_context));

export { CandidateNav };
//# sourceMappingURL=CandidateNav.component.js.map
