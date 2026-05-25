'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FilterSearchItem_component = require('../../molecules/FilterSearchItem/FilterSearchItem.component.js');
var Switch_component = require('../../atoms/Switch/Switch.component.js');
var MobileDrawer_component = require('../../molecules/MobileDrawer/MobileDrawer.component.js');
var FilterCard_module = require('./FilterCard.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Add = require('../../../../assets/Add.svg.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var SmallClose = require('../../../../assets/SmallClose.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
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
var iconMapping_utils = require('../../../../utils/icons/iconMapping.utils.js');
var useFilterCard = require('../../../hooks/filters/useFilterCard.js');
var useFilterRendering = require('../../../hooks/filters/useFilterRendering.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterCard = function (_a) {
    var label = _a.label, values = _a.values, renderType = _a.renderType, _b = _a.searchPlaceholder, searchPlaceholder = _b === void 0 ? '' : _b, _c = _a.switchText, switchText = _c === void 0 ? '' : _c, setIsApplied = _a.setIsApplied, index = _a.index, setCurrentOpenFilter = _a.setCurrentOpenFilter, showFilters = _a.showFilters, horizontal = _a.horizontal, props = tslib_es6.__rest(_a, ["label", "values", "renderType", "searchPlaceholder", "switchText", "setIsApplied", "index", "setCurrentOpenFilter", "showFilters", "horizontal"]);
    var _d = useFilterCard.useFilterCard({
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
    var _e = useFilterRendering.useFilterRendering({
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
    var positionVars = React.useMemo(function () {
        return ({
            '--popover-top': "".concat(popoverPosition.top, "px"),
            '--popover-left': "".concat(popoverPosition.left, "px"),
            '--tooltip-top': "".concat(tooltipPosition.top, "px"),
            '--tooltip-left': "".concat(tooltipPosition.left, "px")
        });
    }, [popoverPosition.top, popoverPosition.left, tooltipPosition.top, tooltipPosition.left]);
    if (!values.length)
        return React__default["default"].createElement(React.Fragment, null);
    // Horizontal layout
    if (horizontal) {
        var icon = iconMapping_utils.getFieldIcon(props.field, props.icon);
        return (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card-horizontal'], style: positionVars },
            React__default["default"].createElement("button", { ref: buttonRef, className: "".concat(FilterCard_module['magneto-ui-horizontal-filter-button'], " ").concat(appliedValue ? FilterCard_module.applied : ''), onClick: appliedValue ? undefined : handleShowItems, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd },
                React__default["default"].createElement(Icon_component.IconItem, { icon: icon, size: 20, className: !appliedValue ? FilterCard_module['magneto-ui-horizontal-filter-button--grayscale'] : '' }),
                React__default["default"].createElement("span", null, appliedValue ? appliedValue.label : label),
                appliedValue ? (React__default["default"].createElement("span", { onClick: handleRemove },
                    React__default["default"].createElement(Icon_component.IconItem, { icon: SmallClose, size: 17 }))) : (React__default["default"].createElement(Icon_component.IconItem, { icon: Add, size: 19 }))),
            showTooltip && (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card-horizontal__tooltip'] }, appliedValue ? appliedValue.label : label)),
            showItems && !isMobile && (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card-horizontal__popover-wrapper'], "data-popover-index": index },
                React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card-horizontal__popover'] },
                    hasSearch && (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card__search'] },
                        React__default["default"].createElement(FilterSearchItem_component.FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
                    React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card_options'] }, horizontalOptionsToRender)))),
            React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: showMobileDrawer, onClose: handleCloseMobileDrawer },
                React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card-horizontal__drawer-content'] },
                    React__default["default"].createElement("h3", null, label),
                    hasSearch && (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card__search'] },
                        React__default["default"].createElement(FilterSearchItem_component.FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
                    React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card_options'] }, horizontalOptionsToRender)))));
    }
    return (React__default["default"].createElement("article", { className: "".concat(FilterCard_module["magneto-ui-filter-card"], " ").concat(hasSearch && showItems && isInteractiveSection ? FilterCard_module.hasSearch : '') },
        React__default["default"].createElement("div", { className: "".concat(FilterCard_module["magneto-ui-filter-card_header"], " ").concat(FilterCard_module[showItems ? '--open' : '']), onClick: isInteractiveSection ? handleShowItems : undefined },
            React__default["default"].createElement("p", null, label),
            switchText && (React__default["default"].createElement(Switch_component.Switch, { title: switchText, setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true })),
            isInteractiveSection && (React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown2, size: 16, className: FilterCard_module["magneto-ui-filter-card_header--arrow"] }))),
        showItems && isInteractiveSection && hasSearch && (React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card__search'] },
            React__default["default"].createElement(FilterSearchItem_component.FilterSearchItem, { loading: props.loading, placeholder: searchPlaceholder, handleSearch: handleSearch }))),
        showItems && React__default["default"].createElement("div", { className: FilterCard_module['magneto-ui-filter-card_options'] }, optionsToRender)));
};

exports.FilterCard = FilterCard;
//# sourceMappingURL=FilterCard.component.js.map
