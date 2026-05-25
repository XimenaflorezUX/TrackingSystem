'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
require('../../../../molecules/Actions/Actions.component.js');
require('../../../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../molecules/SharePopover/SharePopover.js');
require('../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../molecules/Modal/Modal.component.js');
require('../../../../molecules/SimilarCard/SimilarCard.component.js');
require('../../../../molecules/SortMenu/SortMenu.component.js');
require('../../../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../../molecules/UserMenu/UserMenu.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../molecules/JobDetails/JobDetails.component.js');
require('../../../../molecules/Chat/Chat.component.js');
var Select2Input_component = require('../Select2Input/Select2Input.component.js');
var Select2List_component = require('../Select2List/Select2List.component.js');
var Select2Mobile_module = require('./Select2Mobile.module.scss.js');
var Select2Tags_component = require('../Select2Tags/Select2Tags.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, disabled = _a.disabled, disableList = _a.disableList, handleChange = _a.handleChange, handleSearch = _a.handleSearch, haveTags = _a.haveTags, icon = _a.icon, isMobile = _a.isMobile, isMultiple = _a.isMultiple, limitSelections = _a.limitSelections, list = _a.list, placeholder = _a.placeholder, removeValue = _a.removeValue, searchValue = _a.searchValue, _b = _a.setClickOut, setClickOut = _b === void 0 ? function () { return ({}); } : _b, valueSelected = _a.valueSelected, render = _a.render, setTerm = _a.setTerm;
    var _c = React.useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    React.useEffect(function () {
        if ((isMultiple && limitSelections === valueSelected.length) || valueSelected.length) {
            setIsModalOpen(false);
        }
    }, [disableList, isMultiple, limitSelections, valueSelected]);
    var handleVisible = React.useCallback(function (visible) {
        setIsModalOpen(visible);
    }, []);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Select2Input_component.Select2Input, { searchValue: searchValue, placeholder: placeholder, clickOut: false, disabled: disabled, handleSearch: handleSearch, setClickOut: function () { return handleVisible(true); }, disableList: disableList, isMultiple: isMultiple, icon: icon, valueSelected: valueSelected, setTerm: setTerm }),
        React__default["default"].createElement(Select2Tags_component.Select2Tags, { onRemove: removeValue, tags: valueSelected, visible: haveTags }),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: isModalOpen && !disableList, onClose: function () { return handleVisible(false); }, className: classNameManager_util.get({ styles: Select2Mobile_module, cls: ['select2-desktop', className] }) },
            React__default["default"].createElement(Select2Input_component.Select2Input, { searchValue: searchValue, placeholder: placeholder, clickOut: true, disabled: disabled, handleSearch: handleSearch, setClickOut: setClickOut, disableList: disableList, icon: icon, valueSelected: valueSelected, name: "".concat(placeholder, "-mobile"), isMultiple: isMultiple, setTerm: setTerm }),
            React__default["default"].createElement(Select2Tags_component.Select2Tags, { onRemove: removeValue, tags: valueSelected, visible: haveTags }),
            React__default["default"].createElement(Select2List_component.Select2List, { disabledList: disableList, isMobile: isMobile, list: list, onSelected: handleChange, selected: valueSelected, render: render, visible: true }))));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Mobile = Component;

exports.Select2Mobile = Select2Mobile;
//# sourceMappingURL=Select2Mobile.component.js.map
