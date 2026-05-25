import { __assign, __rest } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './Select2List.module.scss.js';

var Component = function (_a) {
    var disabledList = _a.disabledList, isMobile = _a.isMobile, list = _a.list, onSelected = _a.onSelected, selected = _a.selected, visible = _a.visible, render = _a.render;
    var itemStyles = useCallback(function (localId) {
        return CNM.get({
            styles: styles,
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
    var renderComponent = useCallback(function (props, index) {
        if (render)
            return render(__assign({}, props), index);
        return (React.createElement(React.Fragment, null,
            (props === null || props === void 0 ? void 0 : props.img) && React.createElement("img", { src: props.img, alt: "list-img" }), props === null || props === void 0 ? void 0 :
            props.name));
    }, [render]);
    if (!visible)
        return null;
    if (!list.length)
        return null;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['select2-list', !isMobile && 'select2-list--desktop'] }) }, list.map(function (_a, index) {
        var props = __rest(_a, []);
        return (React.createElement("button", { type: "button", key: props === null || props === void 0 ? void 0 : props.id, onClick: function () { return onSelected(props); }, disabled: (selected === null || selected === void 0 ? void 0 : selected.some(function (_a) {
                var id = _a.id;
                return id === (props === null || props === void 0 ? void 0 : props.id);
            })) || disabledList, className: itemStyles(props === null || props === void 0 ? void 0 : props.id) }, renderComponent(props, index)));
    })));
};
/**
 * Molecule UI child component of select 2
 */
var Select2List = Component;

export { Select2List };
//# sourceMappingURL=Select2List.component.js.map
