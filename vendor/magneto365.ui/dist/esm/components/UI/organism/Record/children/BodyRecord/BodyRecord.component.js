import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import styles from './BodyRecord.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { Line } from '../LineRecord/LineaRecord.component.js';
import { TitleRecord } from '../TitleRecord/TitleRecord.component.js';
import { HeadeRecord } from '../HeaderRecord/HeaderRecord.component.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement("div", __assign({ className: cx('magneto-ui-record') }, props, { ref: ref }),
        React.createElement(Line, null),
        React.createElement("div", { className: cx('magneto-ui-record_children') }, children)));
};
var Component = forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var BodyRecord = Object.assign(Component, { Title: TitleRecord, Header: HeadeRecord });

export { BodyRecord };
//# sourceMappingURL=BodyRecord.component.js.map
