'use strict';

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var MegaMenuPopover_module = require('./MegaMenuPopover.module.scss.js');
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var popoverClassName = 'magneto-ui-mega-menu-popover';
var MegaMenuPopover = function (_a) {
    var children = _a.children, popoverRef = _a.popoverRef;
    var _b = React.useState(false), showContent = _b[0], setShowContent = _b[1];
    var jobAction = MegaMenu_context.useMegaMenuJobs().jobAction;
    var handleShowContent = React.useCallback(function (show) { return function (event) {
        event.preventDefault();
        event.stopPropagation();
        setShowContent(show);
    }; }, []);
    React.useImperativeHandle(popoverRef, function () { return ({
        setShow: function (show) { return setShowContent(show); }
    }); });
    React.useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = showContent ? 'hidden' : 'auto';
    }, [showContent]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        jobAction && (React__default["default"].createElement("button", { className: "".concat(MegaMenuPopover_module["".concat(popoverClassName, "__action")]), onClick: handleShowContent(!showContent) },
            React__default["default"].createElement("p", { className: "".concat(MegaMenuPopover_module["".concat(popoverClassName, "__action--text")]) }, jobAction.label),
            React__default["default"].createElement(Icon_component.IconItem, { className: "".concat(MegaMenuPopover_module["".concat(popoverClassName, "__action--icon")], " ").concat(showContent ? MegaMenuPopover_module["".concat(popoverClassName, "__action--icon-reverse")] : ''), icon: ArrowDown2, alt: "arrow-icon", size: 16 }))),
        React__default["default"].createElement("div", { className: "".concat(MegaMenuPopover_module["".concat(popoverClassName, "__dropdown")], " ").concat(showContent ? MegaMenuPopover_module["".concat(popoverClassName, "__dropdown--open")] : '') },
            React__default["default"].createElement("div", { className: MegaMenuPopover_module["".concat(popoverClassName, "__shadow")], onClick: handleShowContent(false) }),
            React__default["default"].createElement("div", { className: MegaMenuPopover_module["".concat(popoverClassName, "__content")], onClick: function (event) {
                    event.stopPropagation();
                } }, children))));
};

module.exports = MegaMenuPopover;
//# sourceMappingURL=MegaMenuPopover.component.js.map
