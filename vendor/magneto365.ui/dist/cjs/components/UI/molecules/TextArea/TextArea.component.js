'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var TextArea_module = require('./TextArea.module.scss.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var ComparativeCounter_component = require('../../atoms/ComparativeCounter/ComparativeCounter.component.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TextArea = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, name = _a.name, placeholder = _a.placeholder, error = _a.error, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.hasCounter, hasCounter = _e === void 0 ? false : _e, _f = _a.maxCounterValue, maxCounterValue = _f === void 0 ? 0 : _f, props = tslib_es6.__rest(_a, ["value", "onChange", "name", "placeholder", "error", "rows", "disabled", "hasCounter", "maxCounterValue"]);
    var _g = React.useState(false), onFocus = _g[0], setOnFocus = _g[1];
    var _h = React.useState(true), showPlaceholder = _h[0], setShowPlaceholder = _h[1];
    var _j = React.useState(''), inputValue = _j[0], setInputValue = _j[1];
    React.useEffect(function () {
        if (value && hasCounter) {
            setInputValue(value);
        }
    }, [hasCounter, value]);
    var handleChange = React.useCallback(function (e) {
        onChange(e);
        setInputValue(e.target.value);
    }, [onChange]);
    var haveValueOrFocus = React.useMemo(function () {
        if (value !== null)
            return onFocus || (value === null || value === void 0 ? void 0 : value.length) > 0;
    }, [onFocus, value]);
    var handleScroll = React.useCallback(function (event) {
        var scrollTop = event.target.scrollTop;
        if (!!scrollTop !== showPlaceholder)
            return;
        setShowPlaceholder(scrollTop === 0);
    }, [showPlaceholder]);
    return (React__default["default"].createElement("div", { className: TextArea_module["".concat(common_constants.classMUI, "-text-area")] },
        React__default["default"].createElement("div", { className: TextArea_module["".concat(common_constants.classMUI, "-text-area--container")] },
            showPlaceholder && (React__default["default"].createElement("label", { htmlFor: name, style: {
                    top: haveValueOrFocus ? '5px' : '10px',
                    fontSize: haveValueOrFocus ? '12px' : '14px'
                }, className: TextArea_module["".concat(common_constants.classMUI, "-text-area--container__label")] }, placeholder)),
            React__default["default"].createElement("textarea", tslib_es6.__assign({}, props, { disabled: disabled, className: TextArea_module["".concat(common_constants.classMUI, "-text-area--container__text-area")], name: name, value: value, onChange: handleChange, onFocus: function () { return setOnFocus(true); }, onBlur: function () { return setOnFocus(false); }, onScroll: handleScroll, id: name, rows: rows }))),
        React__default["default"].createElement("div", { className: TextArea_module["".concat(common_constants.classMUI, "-text-area__footer")] },
            React__default["default"].createElement("span", { className: TextArea_module["".concat(common_constants.classMUI, "-text-area--container__error")] }, error),
            hasCounter && React__default["default"].createElement(ComparativeCounter_component.ComparativeCounter, { current: inputValue === null || inputValue === void 0 ? void 0 : inputValue.length, max: maxCounterValue }))));
};

module.exports = TextArea;
//# sourceMappingURL=TextArea.component.js.map
