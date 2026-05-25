'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Setting4 = require('../../../../assets/Setting4.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
var sortBar_constants = require('../../../../constants/stories/sortBar.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
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
var Tooltip_component = require('../../molecules/Tooltip/Tooltip.component.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var MenuIcon_component = require('../../molecules/MenuIcon/MenuIcon.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
var SortMenu_component = require('../../molecules/SortMenu/SortMenu.component.js');
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
var MobileSortMenu_component = require('../../organism/MobileSortMenu/MobileSortMenu.component.js');
var SortBar_module = require('./SortBar.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SortBar = function (_a) {
    var textSortButton = _a.textSortButton, mainTitle = _a.mainTitle, filterSummary = _a.filterSummary, textOrderFilter = _a.textOrderFilter, orderFields = _a.orderFields, orderByText = _a.orderByText, loading = _a.loading, _b = _a.titleBtnOrder, titleBtnOrder = _b === void 0 ? '' : _b, setIsFiltersOpen = _a.setIsFiltersOpen, orderFilter = _a.orderFilter, setFilter = _a.setFilter, emptyVacant = _a.emptyVacant, infoMessageQuotas = _a.infoMessageQuotas, widthInfoMessage = _a.widthInfoMessage, _c = _a.horizontal, horizontal = _c === void 0 ? false : _c;
    var _d = React.useState(false), showMenu = _d[0], setShowMenu = _d[1];
    var _e = React.useState(false), rotateOrderIcon = _e[0], setRotateOrderIcon = _e[1];
    var tooltip = index.useMediaQuery(React__default["default"].createElement(Tooltip_component, { title: infoMessageQuotas || '', position: "bottom", width: widthInfoMessage },
        React__default["default"].createElement("div", { className: "".concat(SortBar_module['magneto-ui-tooltip-quotas']) },
            React__default["default"].createElement("span", null, "?"))), { sm: React__default["default"].createElement(React.Fragment, null) });
    var sortMenu = index.useMediaQuery(React__default["default"].createElement(SortMenu_component, { orderFields: orderFields, textOrderFilter: textOrderFilter, setFilter: setFilter, loading: loading }), {
        md: (React__default["default"].createElement("button", { className: SortBar_module['magneto-ui-btn-menu'], title: textOrderFilter, onClick: function () { return setShowMenu(true); } },
            React__default["default"].createElement("p", { className: SortBar_module['magneto-ui-btn-text'] }, textOrderFilter),
            React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, sortBar_constants.menuSortButton))))
    });
    var mainTitleByMediaQuery = index.useMediaQuery(React__default["default"].createElement("h1", { className: SortBar_module['magneto-ui-main-title'] }, mainTitle), {
        md: React__default["default"].createElement(React.Fragment, null)
    });
    var handleOrder = React.useCallback(function () {
        orderFilter();
        setRotateOrderIcon(!rotateOrderIcon);
    }, [rotateOrderIcon, orderFilter]);
    var sortBarButtonAltRender = React.useMemo(function () {
        if (emptyVacant)
            return;
        return (React__default["default"].createElement("div", { className: SortBar_module['magneto-ui-section-menu'] },
            sortMenu,
            React__default["default"].createElement("button", { className: "".concat(SortBar_module['magneto-ui-btn-order'], " ").concat(SortBar_module.hidden), title: titleBtnOrder, onClick: handleOrder },
                React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ isRotate: rotateOrderIcon }, sortBar_constants.iconFilterOrder)))));
    }, [emptyVacant, sortMenu, titleBtnOrder, handleOrder, rotateOrderIcon]);
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("div", { className: SortBar_module['magneto-ui-sort-menu'] },
            React__default["default"].createElement("div", { className: SortBar_module['magneto-ui-section-filter'] },
                !horizontal && (React__default["default"].createElement(MenuIcon_component.MenuIcon, { type: "button", text: textSortButton, icon: Setting4, onClick: setIsFiltersOpen, size: 17, isActive: true })),
                mainTitleByMediaQuery,
                React__default["default"].createElement("p", { className: "".concat(SortBar_module['magneto-ui-btn-text'], " ").concat(horizontal ? '' : SortBar_module.hidden) }, filterSummary),
                infoMessageQuotas && tooltip),
            sortBarButtonAltRender),
        React__default["default"].createElement(MobileSortMenu_component, { isOpen: showMenu, orderFields: orderFields, orderByText: orderByText, textOrderFilter: textOrderFilter, titleBtnOrder: titleBtnOrder, onClose: function () { return setShowMenu(!showMenu); }, setFilter: setFilter, orderFilter: orderFilter, setShowPopover: setShowMenu })));
};

module.exports = SortBar;
//# sourceMappingURL=SortBar.component.js.map
