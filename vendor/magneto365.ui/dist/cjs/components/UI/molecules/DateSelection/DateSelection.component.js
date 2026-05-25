'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DateOptions = require('../../atoms/DateOptions/DateOptions.js');
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
require('../Actions/Actions.component.js');
require('../AlertJobModal/AlertJobModal.component.js');
require('../AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../MobileDrawer/MobileDrawer.component.js');
require('../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../CandidateNav/CandidateNav.component.js');
require('../CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../ExpandableInfo/ExpandableInfo.interface.js');
require('../SharePopover/SharePopover.js');
require('../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../Modal/Modal.component.js');
require('../SimilarCard/SimilarCard.component.js');
require('../SortMenu/SortMenu.component.js');
require('../TimelineEvent/TimelineEvent.interface.js');
require('../UserMenu/UserMenu.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../JobDetails/JobDetails.component.js');
require('../Chat/Chat.component.js');
var DateSelection_module = require('./DateSelection.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var applyLabel = _a.applyLabel, cancelLabel = _a.cancelLabel, dateOptions = _a.dateOptions, disabled = _a.disabled, isOpen = _a.isOpen, onClose = _a.onClose, onApplyCallback = _a.onApplyCallback, selectionHeader = _a.selectionHeader, initialValue = _a.initialValue;
    var _b = React.useState(initialValue), initialSelectedOption = _b[0], setInitialSelectedOption = _b[1];
    var _c = React.useState(initialValue), selectedOption = _c[0], setSelectedOption = _c[1];
    var handleOptionClick = function (optionValue) {
        setSelectedOption(optionValue);
    };
    var onCancelClick = function () {
        setSelectedOption(initialSelectedOption);
        onClose();
    };
    var onApplyClick = function () {
        setInitialSelectedOption(selectedOption);
        onApplyCallback(selectedOption);
        onClose();
    };
    React.useEffect(function () {
        if (disabled) {
            setSelectedOption(null);
            setInitialSelectedOption(null);
        }
    }, [disabled]);
    return (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: isOpen, onClose: onClose, className: DateSelection_module['magneto-ui--date-selection'] },
        React__default["default"].createElement("div", { className: DateSelection_module['magneto-ui--date-selection__header'] },
            React__default["default"].createElement("h2", null, selectionHeader)),
        React__default["default"].createElement("div", { className: DateSelection_module['magneto-ui--date-selection__options'] },
            React__default["default"].createElement(DateOptions.DateOptions, { handleOnClick: handleOptionClick, optionsList: dateOptions, selected: selectedOption })),
        React__default["default"].createElement("div", { className: DateSelection_module['magneto-ui--date-selection__btn--wrapper'] },
            React__default["default"].createElement("button", { className: DateSelection_module['magneto-ui--date-selection__cancel-btn'], onClick: onCancelClick }, cancelLabel),
            React__default["default"].createElement("button", { className: DateSelection_module['magneto-ui--date-selection__apply-btn'], onClick: onApplyClick }, applyLabel))));
};
var DateSelection = Component;

exports.DateSelection = DateSelection;
//# sourceMappingURL=DateSelection.component.js.map
