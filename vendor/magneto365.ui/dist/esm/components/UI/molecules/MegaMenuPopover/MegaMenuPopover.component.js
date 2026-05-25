import React, { useState, useCallback, useImperativeHandle, useEffect } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import styles from './MegaMenuPopover.module.scss.js';
import { useMegaMenuJobs } from '../../template/MegaMenu/MegaMenu.context.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';

var popoverClassName = 'magneto-ui-mega-menu-popover';
var MegaMenuPopover = function (_a) {
    var children = _a.children, popoverRef = _a.popoverRef;
    var _b = useState(false), showContent = _b[0], setShowContent = _b[1];
    var jobAction = useMegaMenuJobs().jobAction;
    var handleShowContent = useCallback(function (show) { return function (event) {
        event.preventDefault();
        event.stopPropagation();
        setShowContent(show);
    }; }, []);
    useImperativeHandle(popoverRef, function () { return ({
        setShow: function (show) { return setShowContent(show); }
    }); });
    useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = showContent ? 'hidden' : 'auto';
    }, [showContent]);
    return (React.createElement(React.Fragment, null,
        jobAction && (React.createElement("button", { className: "".concat(styles["".concat(popoverClassName, "__action")]), onClick: handleShowContent(!showContent) },
            React.createElement("p", { className: "".concat(styles["".concat(popoverClassName, "__action--text")]) }, jobAction.label),
            React.createElement(IconItem, { className: "".concat(styles["".concat(popoverClassName, "__action--icon")], " ").concat(showContent ? styles["".concat(popoverClassName, "__action--icon-reverse")] : ''), icon: ArrowDown2, alt: "arrow-icon", size: 16 }))),
        React.createElement("div", { className: "".concat(styles["".concat(popoverClassName, "__dropdown")], " ").concat(showContent ? styles["".concat(popoverClassName, "__dropdown--open")] : '') },
            React.createElement("div", { className: styles["".concat(popoverClassName, "__shadow")], onClick: handleShowContent(false) }),
            React.createElement("div", { className: styles["".concat(popoverClassName, "__content")], onClick: function (event) {
                    event.stopPropagation();
                } }, children))));
};

export { MegaMenuPopover as default };
//# sourceMappingURL=MegaMenuPopover.component.js.map
