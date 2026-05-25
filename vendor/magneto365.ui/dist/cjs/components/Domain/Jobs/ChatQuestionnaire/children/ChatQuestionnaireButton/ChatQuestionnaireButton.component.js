'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ChatQuestionnaireButton_module = require('./ChatQuestionnaireButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireButton_module);
var ChatQuestionnaireButton = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'grey' : _b, className = _a.className, rest = tslib_es6.__rest(_a, ["children", "variant", "className"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, rest, { className: cx('button', "button--".concat(variant), className) }), children));
};

exports.ChatQuestionnaireButton = ChatQuestionnaireButton;
//# sourceMappingURL=ChatQuestionnaireButton.component.js.map
