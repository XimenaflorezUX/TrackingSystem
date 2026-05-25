'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SimilarCard_module = require('../../SimilarCard.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SimilarCard_module);
var Component = function (_a) {
    var customText = _a.customText, className = _a.className, headingType = _a.headingType;
    if (!(customText === null || customText === void 0 ? void 0 : customText.length))
        return null;
    return (React__default["default"].createElement("p", { className: cx(SimilarCard_module['similar-card__text'], className) }, customText.map(function (_a, index) {
        var value = _a.value, fontWeight = _a.fontWeight, _b = _a.lineBreak, lineBreak = _b === void 0 ? false : _b;
        var isFirst = index === 0;
        var Tag = isFirst && headingType ? headingType : 'span';
        return (React__default["default"].createElement(React.Fragment, { key: "custom-text-".concat(index) },
            React__default["default"].createElement(Tag, { className: SimilarCard_module["similar-card__text--".concat(fontWeight)] }, value),
            lineBreak && React__default["default"].createElement("br", null)));
    })));
};
var SimilarCardText = Component;

exports.SimilarCardText = SimilarCardText;
//# sourceMappingURL=SimilarCardText.component.js.map
