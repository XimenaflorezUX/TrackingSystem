import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './ProcessesCard.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { ProcessesCardSection } from './children/ProcessesCardSection/ProcessesCardSection.component.js';
import { ProcessesCardStatus } from './children/ProcessesCardStatus/ProcessesCardStatus.component.js';
import { ProcessesCardBrand } from './children/ProcessesCardBrand/ProcessesCardBrand.component.js';
import { ProcessesCardTitle } from './children/ProcessesCardTitle/ProcessesCardTitle.component.js';
import { ProcessesCardText } from './children/ProcessesCardText/ProcessesCardText.component.js';
import { ProcessesCardArrow } from './children/ProcessesCardArrow/ProcessesCardArrow.component.js';
import { ProcessesCardIconStatus } from './children/ProcessesCardIconStatus/ProcessesCardIconStatus.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, props = __rest(_a, ["children", "className", "isSelected"]);
    return (React.createElement("button", __assign({}, props, { className: cx('processes-card', className, { 'processes-card--is-selected': isSelected }), type: "button" }), children));
};
var ProcessesCard = Object.assign(Component, {
    IconStatus: ProcessesCardIconStatus,
    Section: ProcessesCardSection,
    Status: ProcessesCardStatus,
    Brand: ProcessesCardBrand,
    Arrow: ProcessesCardArrow,
    Title: ProcessesCardTitle,
    Text: ProcessesCardText
});

export { ProcessesCard };
//# sourceMappingURL=ProcessesCard.component.js.map
