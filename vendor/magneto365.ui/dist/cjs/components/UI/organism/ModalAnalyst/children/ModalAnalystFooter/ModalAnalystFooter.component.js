'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var ModalAnalystFooter_module = require('./ModalAnalystFooter.module.scss.js');
var ModalAnalystFooter_constants = require('./ModalAnalystFooter.constants.js');
var ModalAnalyst_constants = require('../../ModalAnalyst.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var footer = _a.footer, handleClose = _a.handleClose, name = _a.name, data = _a.data, setStep = _a.setStep;
    var _b = footer || {}, hasTopDivider = _b.hasTopDivider, actions = _b.actions;
    var _c = React.useState(Array.from({ length: (actions === null || actions === void 0 ? void 0 : actions.length) || 0 }, function (_, i) { return ({
        title: (actions === null || actions === void 0 ? void 0 : actions.length) ? actions[i].title : '',
        loading: false
    }); })), loading = _c[0], setLoading = _c[1];
    var getLoading = React.useCallback(function (action) { var _a; return (_a = loading.find(function (localAction) { return localAction.title === action.title; })) === null || _a === void 0 ? void 0 : _a.loading; }, [loading]);
    var setterLoading = React.useCallback(function (title, value) {
        return loading.map(function (localAction) { return (localAction.title === title ? tslib_es6.__assign(tslib_es6.__assign({}, localAction), { loading: value }) : localAction); });
    }, [loading]);
    var handleOnClick = React.useCallback(function (_a) {
        var action = _a.action, title = _a.title;
        return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
            var _b, newStep, closeModal;
            return tslib_es6.__generator(this, function (_c) {
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
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({
            styles: ModalAnalystFooter_module,
            cls: ['modal-analyst-footer', hasTopDivider && 'modal-analyst-footer--top-divider']
        }) }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) {
        var _a, _b, _c, _d, _e;
        return (React__default["default"].createElement("button", { key: action.title, onClick: function () { return handleOnClick(action); }, type: "button", className: classNameManager_util.get({
                styles: ModalAnalystFooter_module,
                cls: [
                    'modal-analyst-footer__button',
                    "modal-analyst-footer__button--".concat(action.type),
                    getLoading(action) && 'modal-analyst-footer__button--loading'
                ]
            }) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({
                    styles: ModalAnalystFooter_module,
                    cls: [
                        'modal-analyst-footer__prefix-icon-container',
                        action.loading && 'modal-analyst-footer__prefix-icon-container--active',
                        (action.prefixIcon || getLoading(action)) && 'modal-analyst-footer__prefix-icon-container--margin-right'
                    ]
                }) },
                React__default["default"].createElement("span", { className: classNameManager_util.get({
                        styles: ModalAnalystFooter_module,
                        cls: [
                            'modal-analyst-footer__prefix-loading',
                            getLoading(action) && 'modal-analyst-footer__prefix-loading--active',
                            !action.prefixIcon && getLoading(action) && 'modal-analyst-footer__prefix-loading--empty-icon'
                        ]
                    }) },
                    React__default["default"].createElement(Icon_component.IconItem, { icon: ModalAnalystFooter_constants.LOADING_ICONS[action.type], size: 20, showDefaultFallback: false })),
                React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ showDefaultFallback: false, className: classNameManager_util.get({
                        styles: ModalAnalystFooter_module,
                        cls: [
                            'modal-analyst-footer__prefix-icon',
                            getLoading(action) && 'modal-analyst-footer__prefix-icon--inactive',
                            (_a = action.prefixIcon) === null || _a === void 0 ? void 0 : _a.className
                        ]
                    }) }, action.prefixIcon, { icon: ((_b = action.prefixIcon) === null || _b === void 0 ? void 0 : _b.icon) && ModalAnalyst_constants.MODAL_ICONS[(_c = action.prefixIcon) === null || _c === void 0 ? void 0 : _c.icon]
                        ? ModalAnalyst_constants.MODAL_ICONS[(_d = action.prefixIcon) === null || _d === void 0 ? void 0 : _d.icon]
                        : (_e = action.prefixIcon) === null || _e === void 0 ? void 0 : _e.icon }))),
            React__default["default"].createElement("span", null, action.title)));
    })));
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystFooter = Component;

exports.ModalAnalystFooter = ModalAnalystFooter;
//# sourceMappingURL=ModalAnalystFooter.component.js.map
