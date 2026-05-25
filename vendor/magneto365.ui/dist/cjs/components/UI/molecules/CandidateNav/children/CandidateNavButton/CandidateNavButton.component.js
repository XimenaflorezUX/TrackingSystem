'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateNav_context = require('../../CandidateNav.context.js');
var CandidateNavButton_module = require('./CandidateNavButton.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cs = classNames_util.classNames.bind(CandidateNavButton_module);
var Component = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, toggler = _a.toggler, onClick = _a.onClick, variant = _a.variant, props = tslib_es6.__rest(_a, ["children", "className", "toggler", "onClick", "variant"]);
    var onChangeOpen = CandidateNav_context.useCandidateNav().onChangeOpen;
    var handlerOnClick = React.useCallback(function (evt) {
        if (toggler) {
            evt.stopPropagation();
            onChangeOpen();
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    }, [toggler, onChangeOpen, onClick]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, props, { className: cs('magneto-ui-candidate-nav-button', (_b = {},
            _b["magneto-ui-candidate-nav-button--".concat(variant)] = !!variant,
            _b), className), onClick: handlerOnClick }), children));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavButton = Component;

exports.CandidateNavButton = CandidateNavButton;
//# sourceMappingURL=CandidateNavButton.component.js.map
