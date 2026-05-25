import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './CollapseHeader.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement("header", __assign({ className: cx('magneto-ui-collapse-header', className) }, props), children));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseHeader = Component;

export { CollapseHeader };
//# sourceMappingURL=CollapseHeader.component.js.map
