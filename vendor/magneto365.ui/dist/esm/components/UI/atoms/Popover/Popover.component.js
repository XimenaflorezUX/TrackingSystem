import React, { useState, useEffect } from 'react';
import style from './popover.module.scss.js';

var Component = function (_a) {
    var children = _a.children, content = _a.content, positionX = _a.positionX, positionY = _a.positionY, show = _a.show, staticContent = _a.staticContent, _b = _a.className, className = _b === void 0 ? '' : _b;
    var showMenu = show ? 'show' : 'hidden';
    var staticContentClass = staticContent ? style['static-content'] : '';
    var _c = useState(false), hideComponent = _c[0], setHideComponent = _c[1];
    useEffect(function () {
        if (show) {
            setHideComponent(true);
            return;
        }
        var timer = setTimeout(function () {
            setHideComponent(false);
        }, 300);
        return function () { return clearTimeout(timer); };
    }, [show]);
    return (React.createElement("div", { className: [style['magneto-ui-popover-container'], staticContentClass, className].join(' ') },
        React.createElement("div", { className: "".concat(style['magneto-ui-popover'], " ").concat(style[positionX], " ").concat(style[positionY], " ").concat(style[showMenu]) }, hideComponent && content),
        React.createElement("div", { className: style['magneto-ui-popover-children'] }, children)));
};
/**
 * Atom Ui component of popover
 *
 */
var Popover = Component;

export { Popover };
//# sourceMappingURL=Popover.component.js.map
