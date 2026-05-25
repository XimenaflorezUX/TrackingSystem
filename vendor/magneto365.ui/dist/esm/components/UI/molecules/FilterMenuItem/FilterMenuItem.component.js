import { __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo, Fragment, useCallback } from 'react';
import SmallClose from '../../../../assets/SmallClose.svg.js';
import { formatNumber } from '../../../../shared/utils/common/formatNumbers.util.js';
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
import styles from './FilterMenuItem.module.scss.js';

var FilterMenuItem = function (_a) {
    var id = _a.id, label = _a.label, total = _a.total, field = _a.field, multiple = _a.multiple, loading = _a.loading, type = _a.type, isApplied = _a.isApplied, hasTotal = _a.hasTotal, _b = _a.isSearched, isSearched = _b === void 0 ? false : _b, customClass = _a.customClass, customId = _a.customId, _c = _a.hiddenCount, hiddenCount = _c === void 0 ? false : _c, setIsApplied = _a.setIsApplied, props = __rest(_a, ["id", "label", "total", "field", "multiple", "loading", "type", "isApplied", "hasTotal", "isSearched", "customClass", "customId", "hiddenCount", "setIsApplied"]);
    var displayOutput = useMemo(function () {
        if (isApplied)
            return React.createElement(IconItem, { icon: SmallClose, size: 17 });
        if (!hasTotal || hiddenCount)
            return React.createElement(Fragment, null);
        return React.createElement("div", { className: styles['magneto-ui-filter-item__counter'] }, formatNumber(total));
    }, [total, isApplied, hasTotal, hiddenCount]);
    var disabled = useMemo(function () {
        return isSearched || isApplied || hiddenCount ? false : !total;
    }, [total, isApplied, isSearched, hiddenCount]);
    var className = useMemo(function () {
        return isApplied ? styles.selected : isSearched ? styles.isSearched : hiddenCount ? '' : !total && styles.disabled;
    }, [total, isApplied, isSearched, hiddenCount]);
    var handleClick = useCallback(function () {
        var customId = type === 'RANGE' ? { id: id, from: props.from, to: props.to } : id;
        setIsApplied({ id: customId, field: field, isApplied: isApplied, multiple: multiple });
    }, [setIsApplied, id, field, isApplied, multiple, type, props.from, props.to]);
    if (loading)
        return React.createElement("div", { className: styles.skeleton });
    return (React.createElement("button", { id: customId, className: "".concat(styles['magneto-ui-filter-item'], " ").concat(className, " ").concat(customClass ? customClass : ''), title: label, onClick: handleClick, disabled: disabled },
        React.createElement("span", null, label),
        displayOutput));
};

export { FilterMenuItem };
//# sourceMappingURL=FilterMenuItem.component.js.map
