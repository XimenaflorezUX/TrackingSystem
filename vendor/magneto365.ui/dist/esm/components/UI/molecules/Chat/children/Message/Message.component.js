import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './Message.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, to = _a.to, classNames = _a.classNames, className = _a.className, renderLeft = _a.renderLeft, renderRight = _a.renderRight, rest = __rest(_a, ["children", "to", "classNames", "className", "renderLeft", "renderRight"]);
    return (React.createElement("article", __assign({ className: cx('bubble-container', className, {
            'message-left': to === 'left',
            'message-right': to === 'right',
        }) }, rest), renderLeft === null || renderLeft === void 0 ? void 0 :
        renderLeft(),
        React.createElement("span", { className: cx('bubble-message', classNames === null || classNames === void 0 ? void 0 : classNames.content) }, children), renderRight === null || renderRight === void 0 ? void 0 :
        renderRight()));
};
var Message = Component;

export { Message };
//# sourceMappingURL=Message.component.js.map
