'use strict';

var React = require('react');
var MenuSearch_module = require('./MenuSearch.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MenuSearch = function (_a) {
    var children = _a.children, content = _a.content, show = _a.show, handleOnBlur = _a.handleOnBlur;
    var onBlur = React.useCallback(function () {
        handleOnBlur && handleOnBlur();
    }, [handleOnBlur]);
    return (React__default["default"].createElement("div", { className: MenuSearch_module['magneto-ui-menu-search'], onBlur: onBlur },
        React__default["default"].createElement("div", { className: MenuSearch_module['magneto-ui-menu-search_container'] },
            children,
            React__default["default"].createElement("div", { className: "".concat(MenuSearch_module['magneto-ui-menu-search_content'], " ").concat(show && MenuSearch_module.open) }, content))));
};

module.exports = MenuSearch;
//# sourceMappingURL=MenuSearch.component.js.map
