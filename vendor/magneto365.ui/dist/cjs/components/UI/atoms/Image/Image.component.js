'use strict';

var React = require('react');
var Image_module = require('./Image.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Image = function (_a) {
    var image = _a.image, alt = _a.alt, playIcon = _a.playIcon, className = _a.className;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("img", { src: image, alt: alt, loading: "lazy", className: className }),
        playIcon && React__default["default"].createElement("div", { className: Image_module['magneto-ui-play-button'] }, playIcon)));
};

module.exports = Image;
//# sourceMappingURL=Image.component.js.map
