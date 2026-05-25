import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import styles from './Link.modules.scss.js';
import { IconItem } from '../Icon/Icon.component.js';
import { toCSSVariables } from '../../../../shared/utils/Function.js';

var Component = function (_a) {
    var type = _a.type, href = _a.href, text = _a.text, title = _a.title, iconProps = _a.iconProps, linkStyles = _a.linkStyles, isMobile = _a.isMobile, rel = _a.rel, target = _a.target;
    var stylesValue = useMemo(function () { return toCSSVariables(linkStyles); }, [linkStyles]);
    return (React.createElement("a", { className: styles.linkComponent, style: stylesValue, href: href, title: title ? title : text, "data-link-type": type, "data-is-mobile": isMobile, rel: rel, target: target },
        iconProps && React.createElement(IconItem, __assign({}, iconProps)),
        !isMobile && React.createElement("p", null, text)));
};
/**
 * Atomic UI component for Link
 */
var Link = Component;

export { Link };
//# sourceMappingURL=Link.component.js.map
