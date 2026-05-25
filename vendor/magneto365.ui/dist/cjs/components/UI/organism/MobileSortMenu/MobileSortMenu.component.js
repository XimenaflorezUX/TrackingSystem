'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ListSortMenu_component = require('../../molecules/ListSortMenu/ListSortMenu.component.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
var sortBar_constants = require('../../../../constants/stories/sortBar.constants.js');
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
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
require('../../molecules/SortMenu/SortMenu.component.js');
require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../molecules/UserMenu/UserMenu.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var MobileSortMenu_module = require('./MobileSortMenu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MobileSortMenu = function (_a) {
    var isOpen = _a.isOpen, orderFields = _a.orderFields, orderByText = _a.orderByText, textOrderFilter = _a.textOrderFilter, _b = _a.titleBtnOrder, titleBtnOrder = _b === void 0 ? '' : _b, onClose = _a.onClose, setFilter = _a.setFilter, orderFilter = _a.orderFilter, setShowPopover = _a.setShowPopover;
    var listMenuProps = React.useMemo(function () {
        return {
            orderFields: orderFields,
            setFilter: setFilter,
            setShowPopover: setShowPopover,
            textOrderFilter: textOrderFilter
        };
    }, [orderFields, textOrderFilter, setFilter, setShowPopover]);
    return (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: isOpen, onClose: onClose },
        React__default["default"].createElement("div", { className: MobileSortMenu_module['magneto-ui-order-container'] },
            React__default["default"].createElement("p", { className: MobileSortMenu_module['magneto-ui-order-text'] }, orderByText),
            React__default["default"].createElement("button", { className: "".concat(MobileSortMenu_module['magneto-ui-btn-order']), title: titleBtnOrder, onClick: orderFilter },
                React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, sortBar_constants.iconFilterOrder)))),
        React__default["default"].createElement(ListSortMenu_component, tslib_es6.__assign({}, listMenuProps))));
};

module.exports = MobileSortMenu;
//# sourceMappingURL=MobileSortMenu.component.js.map
