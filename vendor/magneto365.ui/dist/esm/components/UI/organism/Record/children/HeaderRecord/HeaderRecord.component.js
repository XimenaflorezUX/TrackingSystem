import React, { forwardRef } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './HeaderRecord.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: cx('magneto-ui-headerRecord', className), ref: ref }, children));
};
var Component = forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var HeadeRecord = Object.assign(Component, {});

export { HeadeRecord };
//# sourceMappingURL=HeaderRecord.component.js.map
