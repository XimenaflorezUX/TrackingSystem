'use strict';

var React = require('react');
var index = require('../../../../../hoc/withClickOut/index.js');
require('../../../../../hooks/useMediaQuery/index.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var More1 = require('../../../../../../assets/More1.svg.js');
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
var Popover_component = require('../../../../atoms/Popover/Popover.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../Actions/Actions.component.js');
require('../../../AlertJobModal/AlertJobModal.component.js');
require('../../../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../CandidateNav/CandidateNav.component.js');
require('../../../CandidateProfile/CandidateProfile.component.js');
require('../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../ExpandableInfo/ExpandableInfo.interface.js');
require('../../../SharePopover/SharePopover.js');
require('../JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../Modal/Modal.component.js');
require('../../../SimilarCard/SimilarCard.component.js');
require('../../../SortMenu/SortMenu.component.js');
require('../../../TimelineEvent/TimelineEvent.interface.js');
require('../../../UserMenu/UserMenu.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../JobDetails/JobDetails.component.js');
require('../../../Chat/Chat.component.js');
var VacantOption_component = require('../../../VacantOption/VacantOption.component.js');
var JobCardOption_module = require('./JobCardOption.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobCardOption_module);
var JobCardOption = function (_a) {
    var _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? stub_util.stubUndefined : _c, menu = _a.menu;
    var ref = React.useRef(null);
    var toggle = function () { return setClickOut(function (prev) { return !prev; }); };
    React.useEffect(function () {
        var _a;
        var onBlurWindow = function () {
            setClickOut(false);
        };
        (_a = window === null || window === void 0 ? void 0 : window.addEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        return function () {
            var _a;
            (_a = window === null || window === void 0 ? void 0 : window.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        };
    }, [setClickOut]);
    return (React__default["default"].createElement(Popover_component.Popover, { className: cx('popover', { 'popover--open': clickOut }), content: React__default["default"].createElement("div", { onBlur: toggle, ref: ref }, menu.map(function (option) { return (React__default["default"].createElement(VacantOption_component, { key: option.label, onClick: toggle, option: option })); })), show: clickOut, widthBase: 35, positionX: "left", positionY: "bottom" },
        React__default["default"].createElement("button", { type: "button", className: cx('button'), onClick: function () {
                setClickOut(function (prev) {
                    var _a;
                    if (!prev) {
                        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                    return !prev;
                });
            } },
            React__default["default"].createElement(Icon_component.IconItem, { icon: More1, size: 18 }))));
};
var JobCardOption$1 = index(JobCardOption);

module.exports = JobCardOption$1;
//# sourceMappingURL=JobCardOption.component.js.map
