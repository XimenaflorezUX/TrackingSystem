import { __assign, __awaiter, __generator } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './ModalAnalystFooter.module.scss.js';
import { LOADING_ICONS } from './ModalAnalystFooter.constants.js';
import { MODAL_ICONS } from '../../ModalAnalyst.constants.js';

var Component = function (_a) {
    var footer = _a.footer, handleClose = _a.handleClose, name = _a.name, data = _a.data, setStep = _a.setStep;
    var _b = footer || {}, hasTopDivider = _b.hasTopDivider, actions = _b.actions;
    var _c = useState(Array.from({ length: (actions === null || actions === void 0 ? void 0 : actions.length) || 0 }, function (_, i) { return ({
        title: (actions === null || actions === void 0 ? void 0 : actions.length) ? actions[i].title : '',
        loading: false
    }); })), loading = _c[0], setLoading = _c[1];
    var getLoading = useCallback(function (action) { var _a; return (_a = loading.find(function (localAction) { return localAction.title === action.title; })) === null || _a === void 0 ? void 0 : _a.loading; }, [loading]);
    var setterLoading = useCallback(function (title, value) {
        return loading.map(function (localAction) { return (localAction.title === title ? __assign(__assign({}, localAction), { loading: value }) : localAction); });
    }, [loading]);
    var handleOnClick = useCallback(function (_a) {
        var action = _a.action, title = _a.title;
        return __awaiter(void 0, void 0, void 0, function () {
            var _b, newStep, closeModal;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(action && !loading.some(function (action) { return action.loading; }))) return [3 /*break*/, 2];
                        setLoading(setterLoading(title, true));
                        return [4 /*yield*/, action(data)];
                    case 1:
                        _b = (_c.sent()) || { step: 0, closeModal: false }, newStep = _b.step, closeModal = _b.closeModal;
                        setLoading(setterLoading(title, false));
                        if (newStep) {
                            setStep(newStep);
                        }
                        if (closeModal) {
                            handleClose(name, false, data);
                            setStep(0);
                        }
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }, [setStep, handleClose, setterLoading, loading, name, data]);
    return (React.createElement("div", { className: CNM.get({
            styles: styles,
            cls: ['modal-analyst-footer', hasTopDivider && 'modal-analyst-footer--top-divider']
        }) }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) {
        var _a, _b, _c, _d, _e;
        return (React.createElement("button", { key: action.title, onClick: function () { return handleOnClick(action); }, type: "button", className: CNM.get({
                styles: styles,
                cls: [
                    'modal-analyst-footer__button',
                    "modal-analyst-footer__button--".concat(action.type),
                    getLoading(action) && 'modal-analyst-footer__button--loading'
                ]
            }) },
            React.createElement("div", { className: CNM.get({
                    styles: styles,
                    cls: [
                        'modal-analyst-footer__prefix-icon-container',
                        action.loading && 'modal-analyst-footer__prefix-icon-container--active',
                        (action.prefixIcon || getLoading(action)) && 'modal-analyst-footer__prefix-icon-container--margin-right'
                    ]
                }) },
                React.createElement("span", { className: CNM.get({
                        styles: styles,
                        cls: [
                            'modal-analyst-footer__prefix-loading',
                            getLoading(action) && 'modal-analyst-footer__prefix-loading--active',
                            !action.prefixIcon && getLoading(action) && 'modal-analyst-footer__prefix-loading--empty-icon'
                        ]
                    }) },
                    React.createElement(IconItem, { icon: LOADING_ICONS[action.type], size: 20, showDefaultFallback: false })),
                React.createElement(IconItem, __assign({ showDefaultFallback: false, className: CNM.get({
                        styles: styles,
                        cls: [
                            'modal-analyst-footer__prefix-icon',
                            getLoading(action) && 'modal-analyst-footer__prefix-icon--inactive',
                            (_a = action.prefixIcon) === null || _a === void 0 ? void 0 : _a.className
                        ]
                    }) }, action.prefixIcon, { icon: ((_b = action.prefixIcon) === null || _b === void 0 ? void 0 : _b.icon) && MODAL_ICONS[(_c = action.prefixIcon) === null || _c === void 0 ? void 0 : _c.icon]
                        ? MODAL_ICONS[(_d = action.prefixIcon) === null || _d === void 0 ? void 0 : _d.icon]
                        : (_e = action.prefixIcon) === null || _e === void 0 ? void 0 : _e.icon }))),
            React.createElement("span", null, action.title)));
    })));
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystFooter = Component;

export { ModalAnalystFooter };
//# sourceMappingURL=ModalAnalystFooter.component.js.map
