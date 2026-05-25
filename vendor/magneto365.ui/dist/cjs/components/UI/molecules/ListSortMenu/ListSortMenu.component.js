'use strict';

var React = require('react');
var MenuIcon_component = require('../MenuIcon/MenuIcon.component.js');
var ListSortMenu_module = require('./ListSortMenu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ListSortMenu = function (_a) {
    var orderFields = _a.orderFields, setFilter = _a.setFilter, textOrderFilter = _a.textOrderFilter, setShowPopover = _a.setShowPopover;
    var handleClick = React.useCallback(function (key) {
        setFilter({ key: key });
        setShowPopover(false);
    }, [setFilter, setShowPopover]);
    return (React__default["default"].createElement("div", { className: ListSortMenu_module['magneto-ui-menu-filter'] }, orderFields.map(function (_a, i) {
        var field = _a.field, label = _a.label, iconUrl = _a.iconUrl;
        return (React__default["default"].createElement(MenuIcon_component.MenuIcon, { key: "".concat(field, "-").concat(i), text: label, icon: iconUrl, type: "button", onClick: function () { return handleClick(field); }, isActive: label === textOrderFilter }));
    })));
};

module.exports = ListSortMenu;
//# sourceMappingURL=ListSortMenu.component.js.map
