import React, { forwardRef } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './LineaRecord.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var className = _a.className;
    return React.createElement("div", { className: cx('magneto-ui-line-record', className), ref: ref });
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var Line = Object.assign(Component, {});

export { Line };
//# sourceMappingURL=LineaRecord.component.js.map
