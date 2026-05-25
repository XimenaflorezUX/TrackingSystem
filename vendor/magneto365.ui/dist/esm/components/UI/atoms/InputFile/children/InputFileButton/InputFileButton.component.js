import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import style from './InputFileButton.module.scss.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement("button", __assign({ className: cx('magneto-ui-input-file-button', className) }, props), children));
};
/**
 * Atom UI child component of Input File
 */
var InputFileButton = Component;

export { InputFileButton };
//# sourceMappingURL=InputFileButton.component.js.map
