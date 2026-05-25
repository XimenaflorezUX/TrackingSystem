import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import Broom from '../../../../assets/Broom.svg.js';
import FilterIcon from '../../../../assets/filter-search.svg.js';
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
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import { Switch } from '../../atoms/Switch/Switch.component.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './FilterHeader.modules.scss.js';

var FilterHeader = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, filterSummary = _a.filterSummary, totalApplied = _a.totalApplied, clearFilters = _a.clearFilters, switchText = _a.switchText;
    var mainBtnProps = useMemo(function () {
        return {
            buttonText: buttonText,
            title: buttonText,
            iconProps: { icon: Broom, size: 18 },
            className: styles['magneto-ui-filter-header_btn'],
            disabled: !totalApplied,
            onClick: function () { return clearFilters(); }
        };
    }, [buttonText, totalApplied, clearFilters]);
    var displayBtnClear = useMemo(function () {
        return (React.createElement("div", { className: styles['magneto-ui-filter-header_clean'] },
            React.createElement(MainButton, __assign({}, mainBtnProps)),
            typeof totalApplied === 'number' && (React.createElement("span", { className: !totalApplied ? styles.disabled : '' }, "(".concat(totalApplied, ")")))));
    }, [totalApplied, mainBtnProps]);
    var displayFilterSummary = useMemo(function () {
        return React.createElement("span", { className: styles['magneto-ui-filter-header_summary'] }, filterSummary);
    }, [filterSummary]);
    return (React.createElement("article", { className: styles['magneto-ui-filter-header'] },
        React.createElement("div", { className: styles['magneto-ui-filter-header_title'] },
            React.createElement("p", null,
                React.createElement(IconItem, { icon: FilterIcon, size: 16 }),
                title),
            displayBtnClear),
        switchText && (React.createElement(Switch
        //TODO: review isActive, setIsActive
        , { 
            //TODO: review isActive, setIsActive
            title: switchText, className: styles['magneto-ui-filter-header_switch'], setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true })),
        displayFilterSummary));
};

export { FilterHeader };
//# sourceMappingURL=FilterHeader.component.js.map
