import React, { useCallback } from 'react';
import { MenuIcon } from '../MenuIcon/MenuIcon.component.js';
import style from './ListSortMenu.module.scss.js';

var ListSortMenu = function (_a) {
    var orderFields = _a.orderFields, setFilter = _a.setFilter, textOrderFilter = _a.textOrderFilter, setShowPopover = _a.setShowPopover;
    var handleClick = useCallback(function (key) {
        setFilter({ key: key });
        setShowPopover(false);
    }, [setFilter, setShowPopover]);
    return (React.createElement("div", { className: style['magneto-ui-menu-filter'] }, orderFields.map(function (_a, i) {
        var field = _a.field, label = _a.label, iconUrl = _a.iconUrl;
        return (React.createElement(MenuIcon, { key: "".concat(field, "-").concat(i), text: label, icon: iconUrl, type: "button", onClick: function () { return handleClick(field); }, isActive: label === textOrderFilter }));
    })));
};

export { ListSortMenu as default };
//# sourceMappingURL=ListSortMenu.component.js.map
