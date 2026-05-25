'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SimilarCard_module = require('./SimilarCard.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var SimilarCardLogo_component = require('./children/SimilarCardLogo/SimilarCardLogo.component.js');
var SimilarCardIcon_component = require('./children/SimlarCardIcon/SimilarCardIcon.component.js');
var SimilarCardText_component = require('./children/SimilarCardText/SimilarCardText.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SimilarCard_module);
var Component = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? 'jobLink' : _b, _c = _a.jobUrlSlug, jobUrlSlug = _c === void 0 ? '#' : _c, className = _a.className;
    return (React__default["default"].createElement("a", { className: cx("similar-card", className), href: jobUrlSlug, title: title }, children));
};
var SimilarCard = Object.assign(Component, {
    Text: SimilarCardText_component.SimilarCardText,
    Logo: SimilarCardLogo_component.SimilarCardLogo,
    Icon: SimilarCardIcon_component.SimilarCardIcon
});

exports.SimilarCard = SimilarCard;
//# sourceMappingURL=SimilarCard.component.js.map
