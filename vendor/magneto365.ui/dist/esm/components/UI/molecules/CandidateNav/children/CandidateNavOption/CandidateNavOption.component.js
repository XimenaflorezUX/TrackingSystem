import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useCandidateNav } from '../../CandidateNav.context.js';
import styles from './CandidateNavOption.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cs = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var onChangeOpen = useCandidateNav().onChangeOpen;
    return (React.createElement("li", __assign({}, props, { className: cs('magneto-ui-candidate-nav-option', className) }), React.Children.map(children, function (child) {
        return React.isValidElement(child) ? React.cloneElement(child, { handleOptionsVisibility: onChangeOpen }) : child;
    })));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavOption = Component;

export { CandidateNavOption };
//# sourceMappingURL=CandidateNavOption.component.js.map
