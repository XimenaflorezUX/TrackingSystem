'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var starBoldYellow = require('../../../../assets/starBoldYellow.svg.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var RatingBadge_module = require('./RatingBadge.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(RatingBadge_module);
var Component = function (_a) {
    var score = _a.score;
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-rating-badge') },
        React__default["default"].createElement("div", { className: cx('magneto-ui-rating-badge__container') },
            React__default["default"].createElement("img", { src: starBoldYellow, alt: starBoldYellow, className: cx('magneto-ui-rating-badge__icon') }),
            React__default["default"].createElement("span", { className: cx('magneto-ui-rating-badge__score') }, score))));
};
/**
 * Atom UI component of Rating Badge
 */
var RatingBadge = Component;

exports.RatingBadge = RatingBadge;
//# sourceMappingURL=RatingBadge.component.js.map
