'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var ArrowDown2 = require('../../../../../../assets/ArrowDown2.svg.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var stub_util = require('../../../../../../shared/utils/common/stub.util.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
var generateID_util = require('../../../../../../utils/generateID/generateID.util.js');
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
var SelectInput_module = require('./SelectInput.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SelectInput_module);
var getDefaulSelected = function (selected) {
    return selected.map(function (select) { return select.value; }).join(', ');
};
var Component = function (_a) {
    var _b = _a.onChange, onChange = _b === void 0 ? stub_util.stubTrue : _b, _c = _a.value, value = _c === void 0 ? '' : _c, className = _a.className, _d = _a.onClick, onClick = _d === void 0 ? stub_util.stubUndefined : _d, _e = _a.open, open = _e === void 0 ? false : _e, _f = _a.actionIcon, actionIcon = _f === void 0 ? ArrowDown2 : _f, _g = _a.selected, selected = _g === void 0 ? [] : _g, _h = _a.getLabel, getLabel = _h === void 0 ? getDefaulSelected : _h, readOnly = _a.readOnly, disabled = _a.disabled, _j = _a.placeholder, placeholder = _j === void 0 ? '' : _j, _k = _a.type, type = _k === void 0 ? 'text' : _k, rest = tslib_es6.__rest(_a, ["onChange", "value", "className", "onClick", "open", "actionIcon", "selected", "getLabel", "readOnly", "disabled", "placeholder", "type"]);
    var ref = React.useRef({ onChange: onChange, id: generateID_util.generateID() });
    React.useEffect(function () {
        ref.current.onChange = onChange;
    }, [onChange]);
    React.useEffect(function () {
        if (!open)
            ref.current.onChange({
                target: {
                    value: ''
                }
            });
    }, [open]);
    if (!readOnly) {
        return (React__default["default"].createElement("div", { className: cx('select-input', className, {
                'select-input--with-icon': actionIcon !== undefined,
                'select-input--no-placeholder': placeholder.length === 0,
                'select-input--disabled': disabled
            }), onClick: function () { return (disabled ? null : onClick()); }, "data-name": "select-input", "data-selected": selected.length > 0, "data-is-open": open },
            React__default["default"].createElement(Input_component, tslib_es6.__assign({ name: ref.current.id, disabled: disabled, value: open ? value : getLabel(selected), onChange: onChange, actionIcon: actionIcon, placeholder: placeholder, type: type }, rest))));
    }
    return (React__default["default"].createElement("button", { className: cx('select-button', { 'select-button--disabled': disabled }, className), disabled: disabled, onClick: onClick, "data-name": "select-button", "data-selected": selected.length > 0, "data-is-open": open, type: "button" },
        React__default["default"].createElement("div", { className: cx('select-button__input') },
            placeholder.length > 0 ? (React__default["default"].createElement("span", { className: cx('select-button__placeholder', {
                    'select-button__placeholder--open': open,
                    'select-button__placeholder--selected': selected.length > 0
                }) }, placeholder)) : null,
            selected.length > 0 ? (React__default["default"].createElement("span", { className: cx('select-button__value', {
                    'select-button__placeholder--open': open
                }) }, getLabel(selected))) : null),
        actionIcon ? React__default["default"].createElement(Icon_component.IconItem, { icon: actionIcon, size: 20 }) : null));
};
var SelectInput = Component;

exports.SelectInput = SelectInput;
//# sourceMappingURL=SelectInput.component.js.map
