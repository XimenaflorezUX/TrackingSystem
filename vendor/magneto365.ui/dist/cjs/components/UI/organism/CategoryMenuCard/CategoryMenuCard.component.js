'use strict';

var React = require('react');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var CategoryMenuCard_module = require('./CategoryMenuCard.module.scss.js');
var CategoryMenuList_component = require('./children/CategoryMenuList/CategoryMenuList.component.js');
var index = require('../../../hoc/withClickOut/index.js');
require('../../../hooks/useMediaQuery/index.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
var vacantPositionsCategory_constants = require('../../../../constants/stories/vacantPositionsCategory.constants.js');
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
var getIcons_util = require('../../../../utils/icons/getIcons.util.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CategoryMenuCard = function (_a) {
    var name = _a.name, icon = _a.icon, clickOut = _a.clickOut, _b = _a.setClickOut, setClickOut = _b === void 0 ? function () { return ({}); } : _b, list = _a.list;
    var downArrow = (React__default["default"].createElement("div", { className: "".concat(CategoryMenuCard_module["magneto-ui-category-menu-container-card__arrow"], "\n       ").concat(clickOut ? CategoryMenuCard_module["magneto-ui-category-menu-container-card__arrow--rotate-arrow"] : '') },
        React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown2, size: 16 })));
    var handleToggle = function () {
        setClickOut(!clickOut);
    };
    return (React__default["default"].createElement("div", { className: CategoryMenuCard_module['magneto-ui-category-menu-container'], onClick: handleToggle },
        React__default["default"].createElement("div", { className: "".concat(CategoryMenuCard_module["magneto-ui-category-menu-container-card"], " \n        ").concat(clickOut ? CategoryMenuCard_module["magneto-ui-category-menu-container-card--is-open"] : '') },
            icon && (React__default["default"].createElement("div", { className: CategoryMenuCard_module["magneto-ui-category-menu-container-card__icon"] },
                React__default["default"].createElement(Icon_component.IconItem, { icon: getIcons_util.getIcon(vacantPositionsCategory_constants.programaticIcons, icon), size: 16 }))),
            React__default["default"].createElement("div", { className: CategoryMenuCard_module["magneto-ui-category-menu-container-card__content"] },
                React__default["default"].createElement("div", { className: CategoryMenuCard_module["magneto-ui-category-menu-container-card__title"] }, name)),
            downArrow),
        React__default["default"].createElement(CategoryMenuList_component.CategoryMenuList, { list: list, isOpen: clickOut })));
};
var CategoryMenuCard_component = index(CategoryMenuCard);

module.exports = CategoryMenuCard_component;
//# sourceMappingURL=CategoryMenuCard.component.js.map
