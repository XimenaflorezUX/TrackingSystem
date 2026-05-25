'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var Avatar_modules = require('./Avatar.modules.scss.js');
var User = require('../../../../assets/User.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var userImage = _a.userImage, fallbackImage = _a.fallbackImage, onClick = _a.onClick;
    var _b = React.useState(false), imageError = _b[0], setImageError = _b[1];
    var handleError = function () {
        setImageError(true);
    };
    return (React__default["default"].createElement("div", { className: Avatar_modules.avatarComponent, onClick: onClick },
        userImage && !imageError && React__default["default"].createElement("img", { src: userImage, alt: "User Avatar", loading: "lazy", onError: handleError }),
        (!userImage || imageError) && (React__default["default"].createElement("div", { className: Avatar_modules['magneto-ui-default-avatar'] },
            React__default["default"].createElement(Icon_component.IconItem, { icon: fallbackImage || User, hover: false })))));
};
/**
 * UI Atom component of Avatar
 */
var Avatar = Component;

exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.component.js.map
