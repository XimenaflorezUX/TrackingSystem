'use strict';

var tslib_es6 = require('../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ReactDOM = require('react-dom');
var Close = require('../../../../../../../assets/Close.svg.js');
require('../../../../../atoms/BarChart/enums.js');
require('../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../atoms/Button/Button.component.js');
require('../../../../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../../../../constants/stories/common.constants.js');
require('../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../constants/img.constants.js');
require('../../../../../../../utils/date/dateInput.util.js');
require('../../../../../atoms/Field/Field.component.js');
require('../../../../../atoms/Typography/Typography.component.js');
require('../../../../../atoms/Typography/Typography.interface.js');
require('../../../../../atoms/InputFile/InputFile.component.js');
var InputSearch_component = require('../../../../../atoms/InputSearch/InputSearch.component.js');
require('../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../constants/jobDetails.constants.js');
var Tag_component = require('../../../../../atoms/Tag/Tag.component.js');
require('../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../hooks/useMediaQuery/index.js');
var container_context = require('../../../../../../context/container/container.context.js');
var SelectItem_component = require('../../SelectItem/SelectItem.component.js');
var DropDownButton_component = require('../../DropDownButton/DropDownButton.component.js');
var ContainerDesktop_module = require('./ContainerDesktop.module.scss.js');
var useContainerDesktop = require('./hooks/useContainerDesktop.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var ContainerDesktop = function (_a) {
    var inputSearchProps = _a.inputSearchProps, selectedValues = _a.selectedValues, listOptions = _a.listOptions, removeValueToArray = _a.removeValueToArray, addValueToArray = _a.addValueToArray, numberOfSelectable = _a.numberOfSelectable, dropDownTitle = _a.dropDownTitle;
    var _b = useContainerDesktop({ numberOfSelectable: numberOfSelectable, selectedValues: selectedValues }), containerOptions = _b.containerOptions, menuPosition = _b.menuPosition, toggleDropdown = _b.toggleDropdown, limitOfSelectable = _b.limitOfSelectable, inputRef = _b.inputRef, isOpen = _b.isOpen, dropdownRef = _b.dropdownRef;
    var container = React.useContext(container_context.ContainerContext).container;
    var hideComponent = React.useMemo(function () {
        return isOpen ? ContainerDesktop_module['hide'] : '';
    }, [isOpen]);
    return (React__default["default"].createElement("div", { style: { zIndex: 999999 } },
        limitOfSelectable && (React__default["default"].createElement("div", { className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options-drop-down-container")], " ").concat(hideComponent, " "), ref: inputRef },
            React__default["default"].createElement(DropDownButton_component, { title: dropDownTitle, onClick: toggleDropdown }))),
        React__default["default"].createElement("div", { className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options-tags-container")], " ").concat(hideComponent) }, selectedValues.map(function (itemSelected) { return (React__default["default"].createElement(Tag_component, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#FFF", onClick: function () { return removeValueToArray(itemSelected); } })); })),
        React__default["default"].createElement("div", { ref: containerOptions, className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options")]) }, isOpen &&
            container &&
            ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { style: {
                    position: 'absolute',
                    top: "".concat(menuPosition.top - 60, "px "),
                    left: "".concat(menuPosition.left, "px"),
                    width: "".concat(menuPosition.width, "px"),
                    zIndex: 999999
                }, ref: dropdownRef, className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options__menu")]) },
                inputSearchProps && React__default["default"].createElement(InputSearch_component, tslib_es6.__assign({}, inputSearchProps)),
                React__default["default"].createElement("div", { className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options__menu--tags")]) }, selectedValues.map(function (itemSelected) { return (React__default["default"].createElement(Tag_component, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#F4F4FA", onClick: function () { return removeValueToArray(itemSelected); } })); })),
                React__default["default"].createElement("div", { className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React__default["default"].createElement(SelectItem_component, { disable: !limitOfSelectable || selectedValues.includes(value), key: value.id, onClick: function () { return addValueToArray(value); }, text: value.name })); }))), container))));
};

module.exports = ContainerDesktop;
//# sourceMappingURL=ContainerDesktop.component.js.map
