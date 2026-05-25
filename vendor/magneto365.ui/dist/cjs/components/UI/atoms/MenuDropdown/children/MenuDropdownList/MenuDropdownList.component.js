'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var MenuDropdownList_module = require('./MenuDropdownList.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, listClassName = _a.listClassName, opened = _a.opened;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: MenuDropdownList_module, cls: ['menu-dropdown-list', opened && 'menu-dropdown-list--visible'] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({
                styles: MenuDropdownList_module,
                cls: ['menu-dropdown-list__container', opened && 'menu-dropdown-list__container--visible']
            }) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({
                    styles: MenuDropdownList_module,
                    cls: ['menu-dropdown-list__children', opened && 'menu-dropdown-list__children--visible', listClassName]
                }) }, children))));
};
/**
 * Atom UI child component of menu dropdown
 */
var MenuDropdownList = Component;

exports.MenuDropdownList = MenuDropdownList;
//# sourceMappingURL=MenuDropdownList.component.js.map
