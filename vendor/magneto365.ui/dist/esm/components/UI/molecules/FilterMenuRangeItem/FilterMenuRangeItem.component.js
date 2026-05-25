import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import styles from './FilterMenuRangeItem.module.scss.js';
import FilterEdit from '../../../../assets/filter-edit.svg.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
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
import { DEFAULT_RANGE_ERRORS, MAPPER_RANGE_TYPE } from './FilterMenuRangeItem.constant.js';

var FilterMenuRangeItem = function (_a) {
    var to = _a.to, from = _a.from, loading = _a.loading, id = _a.id, separatorText = _a.separatorText, field = _a.field, isApplied = _a.isApplied, multiple = _a.multiple, setIsApplied = _a.setIsApplied, props = __rest(_a, ["to", "from", "loading", "id", "separatorText", "field", "isApplied", "multiple", "setIsApplied"]);
    var _b = useState(DEFAULT_RANGE_ERRORS), error = _b[0], setError = _b[1];
    var dataType = (['date', 'number'].includes(props.dataType || '') ? props.dataType : 'number');
    var _c = useState({
        from: MAPPER_RANGE_TYPE[dataType].transformDefaultValue(from),
        to: MAPPER_RANGE_TYPE[dataType].transformDefaultValue(to)
    }), values = _c[0], setValues = _c[1];
    var onApply = useCallback(function () {
        var _a;
        if (!values.from || !values.to) {
            setError({ from: !values.from, to: !values.to });
            return;
        }
        var validator = (_a = MAPPER_RANGE_TYPE[dataType]) === null || _a === void 0 ? void 0 : _a.validator;
        var resultValidation = validator === null || validator === void 0 ? void 0 : validator(values.from, values.to);
        if (resultValidation) {
            setError(resultValidation);
            return;
        }
        setError(DEFAULT_RANGE_ERRORS);
        var customId = { id: id, from: values.from, to: values.to };
        setIsApplied({ id: customId, field: field, isApplied: isApplied, multiple: multiple });
    }, [id, values, setIsApplied, field, isApplied, multiple, dataType]);
    var onChange = useCallback(function (key, value) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[key] = value, _a)));
    }, [values]);
    if (loading)
        return React.createElement("div", { className: styles.skeleton });
    return (React.createElement("div", { className: styles['range-filter'] },
        React.createElement("input", { className: "".concat(styles['range-filter__input'], " ").concat((error === null || error === void 0 ? void 0 : error.from) ? styles['range-filter__input--error'] : ''), type: dataType, value: values.from, onChange: function (e) {
                onChange('from', e.target.value);
                if (error)
                    setError(DEFAULT_RANGE_ERRORS);
            } }),
        separatorText && React.createElement("span", { className: styles['range-filter__separator'] }, separatorText),
        React.createElement("input", { className: "".concat(styles['range-filter__input'], "  ").concat((error === null || error === void 0 ? void 0 : error.to) ? styles['range-filter__input--error'] : ''), type: dataType, value: values.to, onChange: function (e) {
                onChange('to', e.target.value);
                if (error)
                    setError(DEFAULT_RANGE_ERRORS);
            } }),
        React.createElement("button", { className: styles['range-filter__button'], onClick: onApply, "aria-label": "Aplicar filtro" },
            React.createElement(IconItem, { icon: FilterEdit, size: 17 }))));
};

export { FilterMenuRangeItem };
//# sourceMappingURL=FilterMenuRangeItem.component.js.map
