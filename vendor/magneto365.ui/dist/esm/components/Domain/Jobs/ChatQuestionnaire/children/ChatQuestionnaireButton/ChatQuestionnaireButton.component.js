import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './ChatQuestionnaireButton.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaireButton = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'grey' : _b, className = _a.className, rest = __rest(_a, ["children", "variant", "className"]);
    return (React.createElement("button", __assign({}, rest, { className: cx('button', "button--".concat(variant), className) }), children));
};

export { ChatQuestionnaireButton };
//# sourceMappingURL=ChatQuestionnaireButton.component.js.map
