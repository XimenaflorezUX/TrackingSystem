'use strict';

var React = require('react');
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
require('../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../constants/jobDetails.constants.js');
var Tag_component = require('../../../../../atoms/Tag/Tag.component.js');
require('../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../hooks/useMediaQuery/index.js');
var SelectItem_component = require('../../SelectItem/SelectItem.component.js');
require('../../../../../molecules/Actions/Actions.component.js');
require('../../../../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../../../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../../../../context/container/container.context.js');
require('../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../../molecules/SharePopover/SharePopover.js');
require('../../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../../molecules/Modal/Modal.component.js');
require('../../../../../molecules/SimilarCard/SimilarCard.component.js');
require('../../../../../molecules/SortMenu/SortMenu.component.js');
require('../../../../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../../../molecules/UserMenu/UserMenu.component.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../../molecules/JobDetails/JobDetails.component.js');
require('../../../../../molecules/Chat/Chat.component.js');
var ContainerMobile_module = require('./ContainerMobile.module.scss.js');
var DropDownButton_component = require('../../DropDownButton/DropDownButton.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ContainerDesktop = function (_a) {
    var selectedValues = _a.selectedValues, listOptions = _a.listOptions, removeValueToArray = _a.removeValueToArray, addValueToArray = _a.addValueToArray, dropDownTitle = _a.dropDownTitle, numberOfSelectable = _a.numberOfSelectable;
    var _b = React.useState(false), openOptions = _b[0], setOpenOptions = _b[1];
    var limitOfSelectable = React.useMemo(function () {
        return selectedValues.length < numberOfSelectable;
    }, [numberOfSelectable, selectedValues.length]);
    React.useEffect(function () {
        if (!limitOfSelectable) {
            setOpenOptions(false);
        }
    }, [limitOfSelectable]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        limitOfSelectable && React__default["default"].createElement(DropDownButton_component, { title: dropDownTitle, onClick: function () { return setOpenOptions(true); } }),
        React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options-tags-container")]) }, selectedValues.map(function (itemSelected) { return (React__default["default"].createElement(Tag_component, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#FFF", onClick: function () { return removeValueToArray(itemSelected); } })); })),
        React__default["default"].createElement("div", { style: { zIndex: 99999999 } },
            React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: openOptions, onClose: function () { return setOpenOptions(false); } },
                React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options")]) },
                    React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options__menu")]) },
                        React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options__menu--tags")]) }, selectedValues.map(function (itemSelected) { return (React__default["default"].createElement(Tag_component, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#F4F4FA", onClick: function () { return removeValueToArray(itemSelected); } })); })),
                        React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React__default["default"].createElement(SelectItem_component, { disable: !limitOfSelectable || selectedValues.includes(value), key: value.id, onClick: function () { return addValueToArray(value); }, text: value.name })); }))))))));
};

module.exports = ContainerDesktop;
//# sourceMappingURL=ContainerMobile.component.js.map
