import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import '../../UI/atoms/BarChart/enums.js';
import '../../../utils/classNameManager/classNameManager.util.js';
import '../../UI/atoms/Button/Button.component.js';
import '../../UI/atoms/Collapse/Collapse.component.js';
import '../../../constants/stories/DatePicker.constants.js';
import '../../../constants/stories/jobVideo.constants.js';
import '../../../constants/stories/megaMenu.constants.js';
import '../../../constants/stories/sideFilter.constants.js';
import '../../../constants/stories/vacancies.constants.js';
import '../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../constants/img.constants.js';
import '../../../utils/date/dateInput.util.js';
import '../../UI/atoms/Field/Field.component.js';
import '../../UI/atoms/Typography/Typography.component.js';
import '../../UI/atoms/Typography/Typography.interface.js';
import '../../UI/atoms/InputFile/InputFile.component.js';
import '../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../UI/atoms/Radio/Radio.interface.js';
import '../../UI/atoms/Radio/Radio.constants.js';
import '../../../constants/jobDetails.constants.js';
import '../../UI/atoms/Toggle/Toggle.component.js';
import '../../hooks/useMediaQuery/index.js';
import '../../UI/molecules/Actions/Actions.component.js';
import '../../UI/molecules/AlertJobModal/AlertJobModal.component.js';
import '../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../context/container/container.context.js';
import '../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../UI/molecules/CandidateNav/CandidateNav.component.js';
import '../../UI/molecules/CandidateProfile/CandidateProfile.component.js';
import '../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../UI/molecules/SharePopover/SharePopover.js';
import '../../UI/molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { MegaMenuDrawerItem } from '../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../UI/template/MegaMenu/MegaMenu.context.js';
import MegaMenuSideCards from '../../UI/molecules/MegaMenuSideCards/MegaMenuSideCards.component.js';
import '../../UI/molecules/Modal/Modal.component.js';
import '../../UI/molecules/SimilarCard/SimilarCard.component.js';
import '../../UI/molecules/SortMenu/SortMenu.component.js';
import '../../UI/molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../UI/molecules/UserMenu/UserMenu.component.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../UI/molecules/JobDetails/JobDetails.component.js';
import '../../UI/molecules/Chat/Chat.component.js';
import styles from './withSideCards.module.scss.js';

var MobileSideCardsDrawer = function (_a) {
    var WrappedComponent = _a.WrappedComponent, sideProps = _a.sideProps, wrapperProps = _a.wrapperProps;
    var _b = useState(false), showDrawer = _b[0], setShowDrawer = _b[1];
    var _c = useState(''), title = _c[0], setTitle = _c[1];
    var updateDrawerContent = useCallback(function (index) {
        var _a, _b;
        if (sideProps.onSelectCard)
            sideProps.onSelectCard(index);
        setTitle((_b = (_a = sideProps.jobs.at(index)) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }, [sideProps]);
    var toogleDrawer = useCallback(function () { return setShowDrawer(!showDrawer); }, [showDrawer]);
    var onSelectSideCard = useCallback(function (index) {
        updateDrawerContent(index);
        toogleDrawer();
    }, [toogleDrawer, updateDrawerContent]);
    return (React.createElement("div", { className: styles['mega-menu-side-container'] },
        React.createElement(MegaMenuSideCards, __assign({}, sideProps, { onSelectCard: onSelectSideCard })),
        React.createElement(MegaMenuDrawerItem.Drawer, { isOpen: showDrawer, toggleDrawer: toogleDrawer, content: React.createElement("div", { className: styles['mega-menu-side-container__main'] },
                React.createElement(WrappedComponent, __assign({}, wrapperProps))), title: title })));
};

export { MobileSideCardsDrawer as default };
//# sourceMappingURL=withSideCardsDrawer.mobile.js.map
