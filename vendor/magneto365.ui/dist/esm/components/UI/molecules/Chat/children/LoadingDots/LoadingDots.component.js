import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './LoadingDots.module.scss.js';

var cx = classNames.bind(styles);
var LoadingDots = function (_a) {
    var className = _a.className, classNames = _a.classNames, props = __rest(_a, ["className", "classNames"]);
    return (React.createElement("div", __assign({ className: cx(styles.dots, className) }, props),
        React.createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot }),
        React.createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot }),
        React.createElement("span", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dot })));
};

export { LoadingDots as default };
//# sourceMappingURL=LoadingDots.component.js.map
