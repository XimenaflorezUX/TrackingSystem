import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './TextArea.module.scss.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { ComparativeCounter } from '../../atoms/ComparativeCounter/ComparativeCounter.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var TextArea = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, name = _a.name, placeholder = _a.placeholder, error = _a.error, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.hasCounter, hasCounter = _e === void 0 ? false : _e, _f = _a.maxCounterValue, maxCounterValue = _f === void 0 ? 0 : _f, props = __rest(_a, ["value", "onChange", "name", "placeholder", "error", "rows", "disabled", "hasCounter", "maxCounterValue"]);
    var _g = useState(false), onFocus = _g[0], setOnFocus = _g[1];
    var _h = useState(true), showPlaceholder = _h[0], setShowPlaceholder = _h[1];
    var _j = useState(''), inputValue = _j[0], setInputValue = _j[1];
    useEffect(function () {
        if (value && hasCounter) {
            setInputValue(value);
        }
    }, [hasCounter, value]);
    var handleChange = useCallback(function (e) {
        onChange(e);
        setInputValue(e.target.value);
    }, [onChange]);
    var haveValueOrFocus = useMemo(function () {
        if (value !== null)
            return onFocus || (value === null || value === void 0 ? void 0 : value.length) > 0;
    }, [onFocus, value]);
    var handleScroll = useCallback(function (event) {
        var scrollTop = event.target.scrollTop;
        if (!!scrollTop !== showPlaceholder)
            return;
        setShowPlaceholder(scrollTop === 0);
    }, [showPlaceholder]);
    return (React.createElement("div", { className: styles["".concat(classMUI, "-text-area")] },
        React.createElement("div", { className: styles["".concat(classMUI, "-text-area--container")] },
            showPlaceholder && (React.createElement("label", { htmlFor: name, style: {
                    top: haveValueOrFocus ? '5px' : '10px',
                    fontSize: haveValueOrFocus ? '12px' : '14px'
                }, className: styles["".concat(classMUI, "-text-area--container__label")] }, placeholder)),
            React.createElement("textarea", __assign({}, props, { disabled: disabled, className: styles["".concat(classMUI, "-text-area--container__text-area")], name: name, value: value, onChange: handleChange, onFocus: function () { return setOnFocus(true); }, onBlur: function () { return setOnFocus(false); }, onScroll: handleScroll, id: name, rows: rows }))),
        React.createElement("div", { className: styles["".concat(classMUI, "-text-area__footer")] },
            React.createElement("span", { className: styles["".concat(classMUI, "-text-area--container__error")] }, error),
            hasCounter && React.createElement(ComparativeCounter, { current: inputValue === null || inputValue === void 0 ? void 0 : inputValue.length, max: maxCounterValue }))));
};

export { TextArea as default };
//# sourceMappingURL=TextArea.component.js.map
