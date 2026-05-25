import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from '../../ProcessesCard.module.scss.js';
import ArrowRightBlack from '../../../../../../assets/ArrowRight-black.svg.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, status = _a.status, props = __rest(_a, ["className", "status"]);
    return (React.createElement("img", __assign({ className: cx('processes-card__arrow-left', "processes-color-icon--".concat(status), className), src: ArrowRightBlack }, props)));
};
var ProcessesCardArrow = Component;

export { ProcessesCardArrow };
//# sourceMappingURL=ProcessesCardArrow.component.js.map
