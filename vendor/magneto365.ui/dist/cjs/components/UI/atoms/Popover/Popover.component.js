'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var popover_module = require('./popover.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, content = _a.content, positionX = _a.positionX, positionY = _a.positionY, show = _a.show, staticContent = _a.staticContent, _b = _a.className, className = _b === void 0 ? '' : _b;
    var showMenu = show ? 'show' : 'hidden';
    var staticContentClass = staticContent ? popover_module['static-content'] : '';
    var _c = React.useState(false), hideComponent = _c[0], setHideComponent = _c[1];
    React.useEffect(function () {
        if (show) {
            setHideComponent(true);
            return;
        }
        var timer = setTimeout(function () {
            setHideComponent(false);
        }, 300);
        return function () { return clearTimeout(timer); };
    }, [show]);
    return (React__default["default"].createElement("div", { className: [popover_module['magneto-ui-popover-container'], staticContentClass, className].join(' ') },
        React__default["default"].createElement("div", { className: "".concat(popover_module['magneto-ui-popover'], " ").concat(popover_module[positionX], " ").concat(popover_module[positionY], " ").concat(popover_module[showMenu]) }, hideComponent && content),
        React__default["default"].createElement("div", { className: popover_module['magneto-ui-popover-children'] }, children)));
};
/**
 * Atom Ui component of popover
 *
 */
var Popover = Component;

exports.Popover = Popover;
//# sourceMappingURL=Popover.component.js.map
