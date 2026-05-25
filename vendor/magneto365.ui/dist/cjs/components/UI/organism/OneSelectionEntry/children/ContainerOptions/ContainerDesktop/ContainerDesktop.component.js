'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var SelectItem_component = require('../../SelectItem/SelectItem.component.js');
var common_constants = require('../../../../../../../constants/stories/common.constants.js');
require('../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../constants/img.constants.js');
var container_context = require('../../../../../../context/container/container.context.js');
var DropDownButton_component = require('../../DropDownButton/DropDownButton.component.js');
var ContainerDesktop_module = require('./ContainerDesktop.module.scss.js');
var useContainerDesktop = require('./hooks/useContainerDesktop.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var ContainerDesktop = function (_a) {
    var listOptions = _a.listOptions, addValue = _a.addValue, dropDownTitle = _a.dropDownTitle, selectedValue = _a.selectedValue;
    var _b = useContainerDesktop({ addValue: addValue }), containerOptions = _b.containerOptions, menuPosition = _b.menuPosition, toggleDropdown = _b.toggleDropdown, isOpen = _b.isOpen, dropdownRef = _b.dropdownRef, inputRef = _b.inputRef, selectValue = _b.selectValue;
    var container = React.useContext(container_context.ContainerContext).container;
    return (React__default["default"].createElement("div", { style: { zIndex: 999999 } },
        React__default["default"].createElement("div", { ref: inputRef },
            React__default["default"].createElement(DropDownButton_component, { title: dropDownTitle, onClick: toggleDropdown })),
        React__default["default"].createElement("div", { ref: containerOptions, className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options")]) }, isOpen &&
            container &&
            ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { style: {
                    position: 'absolute',
                    top: "".concat(menuPosition.top - 8, "px "),
                    left: "".concat(menuPosition.left, "px"),
                    width: "".concat(menuPosition.width, "px"),
                    zIndex: 999999
                }, ref: dropdownRef, className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options__menu")]) },
                React__default["default"].createElement("div", { className: "".concat(ContainerDesktop_module["".concat(common_constants.classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React__default["default"].createElement(SelectItem_component, { selected: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.id) === value.id, disable: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.id) === value.id, key: value.id, onClick: function () { return selectValue(value.id); }, text: value.label })); }))), container))));
};

module.exports = ContainerDesktop;
//# sourceMappingURL=ContainerDesktop.component.js.map
