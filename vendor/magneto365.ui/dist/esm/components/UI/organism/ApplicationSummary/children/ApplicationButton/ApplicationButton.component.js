import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './ApplicationButton.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, props = __rest(_a, ["className", "children", "variant"]);
    return (React.createElement("button", __assign({}, props, { className: cx('button-summary', variant, className) }), children));
};
var ApplicationButton = Component;

export { ApplicationButton };
//# sourceMappingURL=ApplicationButton.component.js.map
