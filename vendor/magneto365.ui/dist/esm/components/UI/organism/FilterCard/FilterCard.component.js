import { __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo, Fragment } from 'react';
import { FilterSearchItem } from '../../molecules/FilterSearchItem/FilterSearchItem.component.js';
import { Switch } from '../../atoms/Switch/Switch.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import styles from './FilterCard.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Add from '../../../../assets/Add.svg.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import SmallClose from '../../../../assets/SmallClose.svg.js';
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
import { getFieldIcon } from '../../../../utils/icons/iconMapping.utils.js';
import { useFilterCard } from '../../../hooks/filters/useFilterCard.js';
import { useFilterRendering } from '../../../hooks/filters/useFilterRendering.js';

var FilterCard = function (_a) {
    var label = _a.label, values = _a.values, renderType = _a.renderType, _b = _a.searchPlaceholder, searchPlaceholder = _b === void 0 ? '' : _b, _c = _a.switchText, switchText = _c === void 0 ? '' : _c, setIsApplied = _a.setIsApplied, index = _a.index, setCurrentOpenFilter = _a.setCurrentOpenFilter, showFilters = _a.showFilters, horizontal = _a.horizontal, props = __rest(_a, ["label", "values", "renderType", "searchPlaceholder", "switchText", "setIsApplied", "index", "setCurrentOpenFilter", "showFilters", "horizontal"]);
    var _d = useFilterCard({
        values: values,
        renderType: renderType,
        setIsApplied: setIsApplied,
        index: index,
        setCurrentOpenFilter: setCurrentOpenFilter,
        showFilters: showFilters,
        horizontal: horizontal,
        field: props.field
    }), state = _d.state, computed = _d.computed, positions = _d.positions, handlers = _d.handlers;
    var options = state.options, showItems = state.showItems, showMobileDrawer = state.showMobileDrawer, showTooltip = state.showTooltip, buttonRef = state.buttonRef;
    var isMobile = computed.isMobile, hasSearch = computed.hasSearch, hasTotal = computed.hasTotal, appliedOption = computed.appliedOption, appliedValue = computed.appliedValue, hasntOptions = computed.hasntOptions, isInteractiveSection = computed.isInteractiveSection;
    var popoverPosition = positions.popoverPosition, tooltipPosition = positions.tooltipPosition;
    var handleSearch = handlers.handleSearch, handleShowItems = handlers.handleShowItems, handleCloseMobileDrawer = handlers.handleCloseMobileDrawer, handleOptionSelected = handlers.handleOptionSelected, handleRemove = handlers.handleRemove, handleMouseEnter = handlers.handleMouseEnter, handleMouseLeave = handlers.handleMouseLeave, handleTouchStart = handlers.handleTouchStart, handleTouchEnd = handlers.handleTouchEnd;
    var _e = useFilterRendering({
        options: options,
        appliedOption: appliedOption,
        hasntOptions: hasntOptions,
        hasTotal: hasTotal,
        handleOptionSelected: handleOptionSelected,
        props: {
            field: props.field,
            multiple: props.multiple,
            loading: props.loading,
            type: props.type,
            dataType: props.dataType
        }
    }), optionsToRender = _e.optionsToRender, horizontalOptionsToRender = _e.horizontalOptionsToRender;
    // CSS variables for positioning (avoid inline styles)
    var positionVars = useMemo(function () {
        return ({
            '--popover-top': "".concat(popoverPosition.top, "px"),
            '--popover-left': "".concat(popoverPosition.left, "px"),
            '--tooltip-top': "".concat(tooltipPosition.top, "px"),
            '--tooltip-left': "".concat(tooltipPosition.left, "px")
        });
    }, [popoverPosition.top, popoverPosition.left, tooltipPosition.top, tooltipPosition.left]);
    if (!values.length)
        return React.createElement(Fragment, null);
    // Horizontal layout
    if (horizontal) {
        var icon = getFieldIcon(props.field, props.icon);
        return (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal'], style: positionVars },
            React.createElement("button", { ref: buttonRef, className: "".concat(styles['magneto-ui-horizontal-filter-button'], " ").concat(appliedValue ? styles.applied : ''), onClick: appliedValue ? undefined : handleShowItems, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd },
                React.createElement(IconItem, { icon: icon, size: 20, className: !appliedValue ? styles['magneto-ui-horizontal-filter-button--grayscale'] : '' }),
                React.createElement("span", null, appliedValue ? appliedValue.label : label),
                appliedValue ? (React.createElement("span", { onClick: handleRemove },
                    React.createElement(IconItem, { icon: SmallClose, size: 17 }))) : (React.createElement(IconItem, { icon: Add, size: 19 }))),
            showTooltip && (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__tooltip'] }, appliedValue ? appliedValue.label : label)),
            showItems && !isMobile && (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__popover-wrapper'], "data-popover-index": index },
                React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__popover'] },
                    hasSearch && (React.createElement("div", { className: styles['magneto-ui-filter-card__search'] },
                        React.createElement(FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
                    React.createElement("div", { className: styles['magneto-ui-filter-card_options'] }, horizontalOptionsToRender)))),
            React.createElement(MobileDrawer, { isOpen: showMobileDrawer, onClose: handleCloseMobileDrawer },
                React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__drawer-content'] },
                    React.createElement("h3", null, label),
                    hasSearch && (React.createElement("div", { className: styles['magneto-ui-filter-card__search'] },
                        React.createElement(FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
                    React.createElement("div", { className: styles['magneto-ui-filter-card_options'] }, horizontalOptionsToRender)))));
    }
    return (React.createElement("article", { className: "".concat(styles["magneto-ui-filter-card"], " ").concat(hasSearch && showItems && isInteractiveSection ? styles.hasSearch : '') },
        React.createElement("div", { className: "".concat(styles["magneto-ui-filter-card_header"], " ").concat(styles[showItems ? '--open' : '']), onClick: isInteractiveSection ? handleShowItems : undefined },
            React.createElement("p", null, label),
            switchText && (React.createElement(Switch, { title: switchText, setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true })),
            isInteractiveSection && (React.createElement(IconItem, { icon: ArrowDown2, size: 16, className: styles["magneto-ui-filter-card_header--arrow"] }))),
        showItems && isInteractiveSection && hasSearch && (React.createElement("div", { className: styles['magneto-ui-filter-card__search'] },
            React.createElement(FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
        showItems && React.createElement("div", { className: styles['magneto-ui-filter-card_options'] }, optionsToRender)));
};

export { FilterCard };
//# sourceMappingURL=FilterCard.component.js.map
