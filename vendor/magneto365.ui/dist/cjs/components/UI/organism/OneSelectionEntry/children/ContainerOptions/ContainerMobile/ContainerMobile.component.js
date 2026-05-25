'use strict';

var React = require('react');
var SelectItem_component = require('../../SelectItem/SelectItem.component.js');
var common_constants = require('../../../../../../../constants/stories/common.constants.js');
require('../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../constants/img.constants.js');
require('../../../../../atoms/BarChart/enums.js');
require('../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../atoms/Button/Button.component.js');
require('../../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../../utils/date/dateInput.util.js');
require('../../../../../atoms/Field/Field.component.js');
require('../../../../../atoms/Typography/Typography.component.js');
require('../../../../../atoms/Typography/Typography.interface.js');
require('../../../../../atoms/InputFile/InputFile.component.js');
require('../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../constants/jobDetails.constants.js');
require('../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../hooks/useMediaQuery/index.js');
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
    var listOptions = _a.listOptions, addValue = _a.addValue, dropDownTitle = _a.dropDownTitle, selectedValue = _a.selectedValue;
    var _b = React.useState(false), openOptions = _b[0], setOpenOptions = _b[1];
    var selectValue = function (value) {
        addValue(value);
        setOpenOptions(false);
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(DropDownButton_component, { title: dropDownTitle, onClick: function () { return setOpenOptions(true); } }),
        React__default["default"].createElement("div", { style: { zIndex: 99999999 } },
            React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: openOptions, onClose: function () { return setOpenOptions(false); } },
                React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options")]) },
                    React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options__menu")]) },
                        React__default["default"].createElement("div", { className: "".concat(ContainerMobile_module["".concat(common_constants.classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React__default["default"].createElement(SelectItem_component, { selected: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.id) === value.id, key: value.id, onClick: function () { return selectValue(value.id); }, text: value.label })); }))))))));
};

module.exports = ContainerDesktop;
//# sourceMappingURL=ContainerMobile.component.js.map
