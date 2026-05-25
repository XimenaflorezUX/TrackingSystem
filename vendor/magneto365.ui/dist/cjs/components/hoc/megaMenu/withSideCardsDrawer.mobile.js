'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../UI/atoms/BarChart/enums.js');
require('../../../utils/classNameManager/classNameManager.util.js');
require('../../UI/atoms/Button/Button.component.js');
require('../../UI/atoms/Collapse/Collapse.component.js');
require('../../../constants/stories/DatePicker.constants.js');
require('../../../constants/stories/jobVideo.constants.js');
require('../../../constants/stories/megaMenu.constants.js');
require('../../../constants/stories/sideFilter.constants.js');
require('../../../constants/stories/vacancies.constants.js');
require('../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../constants/img.constants.js');
require('../../../utils/date/dateInput.util.js');
require('../../UI/atoms/Field/Field.component.js');
require('../../UI/atoms/Typography/Typography.component.js');
require('../../UI/atoms/Typography/Typography.interface.js');
require('../../UI/atoms/InputFile/InputFile.component.js');
require('../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../UI/atoms/Radio/Radio.interface.js');
require('../../UI/atoms/Radio/Radio.constants.js');
require('../../../constants/jobDetails.constants.js');
require('../../UI/atoms/Toggle/Toggle.component.js');
require('../../hooks/useMediaQuery/index.js');
require('../../UI/molecules/Actions/Actions.component.js');
require('../../UI/molecules/AlertJobModal/AlertJobModal.component.js');
require('../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../context/container/container.context.js');
require('../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../UI/molecules/CandidateNav/CandidateNav.component.js');
require('../../UI/molecules/CandidateProfile/CandidateProfile.component.js');
require('../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../UI/molecules/SharePopover/SharePopover.js');
require('../../UI/molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var MegaMenuDrawerItem_component = require('../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../UI/template/MegaMenu/MegaMenu.context.js');
var MegaMenuSideCards_component = require('../../UI/molecules/MegaMenuSideCards/MegaMenuSideCards.component.js');
require('../../UI/molecules/Modal/Modal.component.js');
require('../../UI/molecules/SimilarCard/SimilarCard.component.js');
require('../../UI/molecules/SortMenu/SortMenu.component.js');
require('../../UI/molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../UI/molecules/UserMenu/UserMenu.component.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../UI/molecules/JobDetails/JobDetails.component.js');
require('../../UI/molecules/Chat/Chat.component.js');
var withSideCards_module = require('./withSideCards.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MobileSideCardsDrawer = function (_a) {
    var WrappedComponent = _a.WrappedComponent, sideProps = _a.sideProps, wrapperProps = _a.wrapperProps;
    var _b = React.useState(false), showDrawer = _b[0], setShowDrawer = _b[1];
    var _c = React.useState(''), title = _c[0], setTitle = _c[1];
    var updateDrawerContent = React.useCallback(function (index) {
        var _a, _b;
        if (sideProps.onSelectCard)
            sideProps.onSelectCard(index);
        setTitle((_b = (_a = sideProps.jobs.at(index)) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }, [sideProps]);
    var toogleDrawer = React.useCallback(function () { return setShowDrawer(!showDrawer); }, [showDrawer]);
    var onSelectSideCard = React.useCallback(function (index) {
        updateDrawerContent(index);
        toogleDrawer();
    }, [toogleDrawer, updateDrawerContent]);
    return (React__default["default"].createElement("div", { className: withSideCards_module['mega-menu-side-container'] },
        React__default["default"].createElement(MegaMenuSideCards_component, tslib_es6.__assign({}, sideProps, { onSelectCard: onSelectSideCard })),
        React__default["default"].createElement(MegaMenuDrawerItem_component.MegaMenuDrawerItem.Drawer, { isOpen: showDrawer, toggleDrawer: toogleDrawer, content: React__default["default"].createElement("div", { className: withSideCards_module['mega-menu-side-container__main'] },
                React__default["default"].createElement(WrappedComponent, tslib_es6.__assign({}, wrapperProps))), title: title })));
};

module.exports = MobileSideCardsDrawer;
//# sourceMappingURL=withSideCardsDrawer.mobile.js.map
