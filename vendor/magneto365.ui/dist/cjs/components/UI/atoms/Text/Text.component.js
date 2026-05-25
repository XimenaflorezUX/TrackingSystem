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
var Text_module = require('./Text.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TextCustom = function (_a) {
    var text = _a.text, customText = _a.customText, className = _a.className;
    var textRender = React.useMemo(function () {
        return (customText === null || customText === void 0 ? void 0 : customText.length) ? (React__default["default"].createElement("span", { className: className }, customText.map(function (_a, index) {
            var value = _a.value, fontWeight = _a.fontWeight, _b = _a.lineBreak, lineBreak = _b === void 0 ? false : _b;
            return (React__default["default"].createElement(React.Fragment, { key: "custom-text-".concat(index) },
                React__default["default"].createElement("span", { className: Text_module["".concat(common_constants.classMUI, "-").concat(fontWeight)] }, value),
                lineBreak && React__default["default"].createElement("br", null)));
        }))) : (React__default["default"].createElement("p", { className: className }, text));
    }, [text, customText, className]);
    return React__default["default"].createElement(React__default["default"].Fragment, null, textRender);
};

exports.TextCustom = TextCustom;
//# sourceMappingURL=Text.component.js.map
