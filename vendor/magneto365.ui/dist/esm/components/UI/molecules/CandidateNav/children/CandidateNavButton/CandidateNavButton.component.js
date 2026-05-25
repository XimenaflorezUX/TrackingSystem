import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import { useCandidateNav } from '../../CandidateNav.context.js';
import styles from './CandidateNavButton.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cs = classNames.bind(styles);
var Component = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, toggler = _a.toggler, onClick = _a.onClick, variant = _a.variant, props = __rest(_a, ["children", "className", "toggler", "onClick", "variant"]);
    var onChangeOpen = useCandidateNav().onChangeOpen;
    var handlerOnClick = useCallback(function (evt) {
        if (toggler) {
            evt.stopPropagation();
            onChangeOpen();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    }, [toggler, onChangeOpen, onClick]);
    return (React.createElement("button", __assign({}, props, { className: cs('magneto-ui-candidate-nav-button', (_b = {},
            _b["magneto-ui-candidate-nav-button--".concat(variant)] = !!variant,
            _b), className), onClick: handlerOnClick }), children));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavButton = Component;

export { CandidateNavButton };
//# sourceMappingURL=CandidateNavButton.component.js.map
