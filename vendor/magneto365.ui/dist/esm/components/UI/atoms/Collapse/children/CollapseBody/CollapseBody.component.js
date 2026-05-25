import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useCollapse } from '../../Collapse.context.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './CollapseBody.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var open = useCollapse().open;
    return (React.createElement("div", __assign({}, props, { className: cx('magneto-ui-collapse-body', {
            'magneto-ui-collapse-body--visible': open
        }) }),
        React.createElement("div", { className: cx('magneto-ui-collapse-body__container', {
                'magneto-ui-collapse-body__container--visible': open
            }) },
            React.createElement("div", { className: cx('magneto-ui-collapse-body__content', {
                    'magneto-ui-collapse-body__content--visible': open
                }, className) }, children))));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseBody = Component;

export { CollapseBody };
//# sourceMappingURL=CollapseBody.component.js.map
