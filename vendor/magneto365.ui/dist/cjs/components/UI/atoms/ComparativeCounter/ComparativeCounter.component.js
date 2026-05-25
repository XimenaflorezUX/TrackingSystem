'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var ComparativeCounter_module = require('./ComparativeCounter.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var nf = new Intl.NumberFormat('de-DE');
var Component = function (_a) {
    var _b = _a.current, current = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 0 : _c, _d = _a.position, position = _d === void 0 ? 'left' : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var currentHigherMax = React.useMemo(function () {
        return current > max;
    }, [current, max]);
    return (React__default["default"].createElement("p", { style: { textAlign: position }, className: "".concat(ComparativeCounter_module["".concat(common_constants.classMUI, "-comparative-counter")], " ").concat(currentHigherMax ? ComparativeCounter_module['error-label'] : '', " ").concat(className) },
        nf.format(current),
        React__default["default"].createElement("span", null,
            " / ",
            nf.format(max))));
};
var ComparativeCounter = Component;

exports.ComparativeCounter = ComparativeCounter;
//# sourceMappingURL=ComparativeCounter.component.js.map
