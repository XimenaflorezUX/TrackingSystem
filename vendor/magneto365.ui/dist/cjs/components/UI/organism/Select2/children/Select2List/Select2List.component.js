'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var Select2List_module = require('./Select2List.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var disabledList = _a.disabledList, isMobile = _a.isMobile, list = _a.list, onSelected = _a.onSelected, selected = _a.selected, visible = _a.visible, render = _a.render;
    var itemStyles = React.useCallback(function (localId) {
        return classNameManager_util.get({
            styles: Select2List_module,
            cls: [
                'select2-list__item',
                (selected === null || selected === void 0 ? void 0 : selected.some(function (_a) {
                    var id = _a.id;
                    return id === localId;
                }))
                    ? 'select2-list__item--is-selected'
                    : 'select2-list__item--not-selected'
            ]
        });
    }, [selected]);
    var renderComponent = React.useCallback(function (props, index) {
        if (render)
            return render(tslib_es6.__assign({}, props), index);
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            (props === null || props === void 0 ? void 0 : props.img) && React__default["default"].createElement("img", { src: props.img, alt: "list-img" }), props === null || props === void 0 ? void 0 :
            props.name));
    }, [render]);
    if (!visible)
        return null;
    if (!list.length)
        return null;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: Select2List_module, cls: ['select2-list', !isMobile && 'select2-list--desktop'] }) }, list.map(function (_a, index) {
        var props = tslib_es6.__rest(_a, []);
        return (React__default["default"].createElement("button", { type: "button", key: props === null || props === void 0 ? void 0 : props.id, onClick: function () { return onSelected(props); }, disabled: (selected === null || selected === void 0 ? void 0 : selected.some(function (_a) {
                var id = _a.id;
                return id === (props === null || props === void 0 ? void 0 : props.id);
            })) || disabledList, className: itemStyles(props === null || props === void 0 ? void 0 : props.id) }, renderComponent(props, index)));
    })));
};
/**
 * Molecule UI child component of select 2
 */
var Select2List = Component;

exports.Select2List = Select2List;
//# sourceMappingURL=Select2List.component.js.map
