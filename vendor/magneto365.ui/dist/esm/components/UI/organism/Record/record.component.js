import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import styles from './record.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { TitleRecord } from './children/TitleRecord/TitleRecord.component.js';
import { HeadeRecord } from './children/HeaderRecord/HeaderRecord.component.js';
import { BodyRecord } from './children/BodyRecord/BodyRecord.component.js';
import DateComponent from './children/DateRecord/DateRecord.component.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: cx('magneto-ui-record') }, props, { ref: ref }), children));
};
var Component = forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var Record = Object.assign(Component, {
    Title: TitleRecord,
    Header: HeadeRecord,
    Body: BodyRecord,
    Date: DateComponent
});

export { Record };
//# sourceMappingURL=record.component.js.map
