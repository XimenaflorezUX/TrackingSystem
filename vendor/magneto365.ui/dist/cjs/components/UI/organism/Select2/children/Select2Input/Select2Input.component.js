'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ArrowLeft2 = require('../../../../../../assets/ArrowLeft2.svg.js');
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
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
var Input_component = require('../../../../molecules/Input/Input.component.js');
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
var Select2Input_module = require('./Select2Input.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b, _c;
    var clickOut = _a.clickOut, placeholder = _a.placeholder, searchValue = _a.searchValue, disabled = _a.disabled, handleSearch = _a.handleSearch, setClickOut = _a.setClickOut, disableList = _a.disableList, icon = _a.icon, valueSelected = _a.valueSelected, isMultiple = _a.isMultiple, name = _a.name, setTerm = _a.setTerm;
    var arrowRotate = React.useMemo(function () {
        return classNameManager_util.get({
            styles: Select2Input_module,
            cls: [
                'select2-input__suffix-icon',
                clickOut ? 'select2-input__suffix-icon--rotate-arrow' : 'select2-input__suffix-icon--static-arrow'
            ]
        });
    }, [clickOut]);
    var label = React.useMemo(function () {
        var _a, _b;
        if (isMultiple) {
            return React__default["default"].createElement("span", null, placeholder);
        }
        if ((_a = valueSelected[0]) === null || _a === void 0 ? void 0 : _a.name) {
            return (React__default["default"].createElement("span", { className: Select2Input_module['select-label'] },
                React__default["default"].createElement("span", null, placeholder),
                React__default["default"].createElement("span", null, (_b = valueSelected[0]) === null || _b === void 0 ? void 0 : _b.name)));
        }
        return React__default["default"].createElement("span", null, placeholder);
    }, [isMultiple, placeholder, valueSelected]);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: Select2Input_module, cls: ['select2-input'] }) },
        React__default["default"].createElement("div", { style: { display: clickOut ? 'block' : 'none' } },
            React__default["default"].createElement(Input_component, { type: "text", value: searchValue, placeholder: placeholder, name: name || placeholder, hideIcon: true, onChange: handleSearch, disabled: disabled, autoFocus: clickOut })),
        React__default["default"].createElement("button", { style: { display: clickOut ? 'none' : 'flex' }, type: "button", onClick: function () { return setClickOut(!clickOut); }, disabled: disableList || disabled, className: classNameManager_util.get({
                styles: Select2Input_module,
                cls: ['select2-input__button', (disableList || disabled) && 'select2-input__button--disabled']
            }) },
            React__default["default"].createElement("span", null,
                icon && React__default["default"].createElement("img", { src: icon, alt: "select-icon" }),
                React__default["default"].createElement("p", { className: classNameManager_util.get({
                        styles: Select2Input_module,
                        cls: [
                            'select2-input__button-text',
                            valueSelected.length
                                ? 'select2-input__button-text--selected'
                                : 'select2-input__button-text--placeholder'
                        ]
                    }) },
                    ((_b = valueSelected[0]) === null || _b === void 0 ? void 0 : _b.img) && React__default["default"].createElement("img", { src: (_c = valueSelected[0]) === null || _c === void 0 ? void 0 : _c.img, alt: "selected-img" }),
                    label)),
            !setTerm && React__default["default"].createElement("img", { src: ArrowLeft2, alt: "arrow-icon", className: arrowRotate }))));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Input = Component;

exports.Select2Input = Select2Input;
//# sourceMappingURL=Select2Input.component.js.map
