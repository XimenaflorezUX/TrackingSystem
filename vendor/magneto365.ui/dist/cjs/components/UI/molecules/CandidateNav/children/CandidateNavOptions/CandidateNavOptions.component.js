'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var miniArrowGrayDown = require('../../../../../../assets/miniArrowGrayDown.svg.js');
var miniArrowGrayUp = require('../../../../../../assets/miniArrowGrayUp.svg.js');
var CandidateNav_context = require('../../CandidateNav.context.js');
var CandidateNavOptions_module = require('./CandidateNavOptions.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cs = classNames_util.classNames.bind(CandidateNavOptions_module);
var customScrollbarButtonsStyle = {
    '--custom-scrollbar-thumb-down-background': "url(".concat(miniArrowGrayDown, ")"),
    '--custom-scrollbar-thumb-up-background': "url(".concat(miniArrowGrayUp, ")")
};
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    var _b = CandidateNav_context.useCandidateNav(), showOptions = _b.showOptions, onChangeOpen = _b.onChangeOpen;
    var wrapperRef = React.useRef(null);
    var listRef = React.useRef(null);
    React.useEffect(function () {
        var _a;
        var handleClickOutside = function (event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onChangeOpen(false);
            }
        };
        if (showOptions !== false) {
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            document.addEventListener('click', handleClickOutside);
        }
        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showOptions, onChangeOpen]);
    React.useEffect(function () {
        var _a;
        if (showOptions) {
            (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showOptions]);
    return (React__default["default"].createElement("div", { ref: wrapperRef, className: cs('magneto-ui-candidate-nav-options', {
            'magneto-ui-candidate-nav-options--visible': showOptions
        }), style: tslib_es6.__assign({ gridTemplateRows: showOptions ? '1fr' : '0fr' }, customScrollbarButtonsStyle), tabIndex: -1 },
        React__default["default"].createElement("div", { className: cs('magneto-ui-candidate-nav-options__container', {
                'magneto-ui-candidate-nav-options__container--visible': showOptions
            }) },
            React__default["default"].createElement("div", { className: cs('magneto-ui-candidate-nav-options__content', {
                    'magneto-ui-candidate-nav-options__content--visible': showOptions
                }) },
                React__default["default"].createElement("div", { className: cs('magneto-ui-candidate-nav-options__closable-area'), onClick: function () { return onChangeOpen(false); } },
                    React__default["default"].createElement("button", { className: cs('magneto-ui-candidate-nav-options__line') })),
                React__default["default"].createElement("ul", tslib_es6.__assign({}, props, { ref: listRef, className: cs('magneto-ui-candidate-nav-options__list', className) }), children)))));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavOptions = Component;

exports.CandidateNavOptions = CandidateNavOptions;
//# sourceMappingURL=CandidateNavOptions.component.js.map
