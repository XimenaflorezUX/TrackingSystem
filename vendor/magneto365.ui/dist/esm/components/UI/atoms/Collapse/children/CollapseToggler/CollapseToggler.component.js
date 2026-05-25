import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import { useCollapse } from '../../Collapse.context.js';
import styles from './CollapseToggler.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, props = __rest(_a, ["children", "className", "onClick"]);
    var _b = useCollapse(), open = _b.open, onChangeOpen = _b.onChangeOpen;
    var handleOnClick = useCallback(function (evt) {
        if (onClick)
            onClick(evt);
        onChangeOpen(!open);
    }, [open, onChangeOpen, onClick]);
    return (React.createElement("button", __assign({}, props, { onClick: handleOnClick, className: cx('magneto-ui-collapse-toggler', className) }), children));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseToggler = Component;

export { CollapseToggler };
//# sourceMappingURL=CollapseToggler.component.js.map
