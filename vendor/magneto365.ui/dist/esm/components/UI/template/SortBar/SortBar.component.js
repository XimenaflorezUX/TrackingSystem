import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, Fragment, useCallback, useMemo } from 'react';
import Setting4 from '../../../../assets/Setting4.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import { menuSortButton, iconFilterOrder } from '../../../../constants/stories/sortBar.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import Tooltip from '../../molecules/Tooltip/Tooltip.component.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { MenuIcon } from '../../molecules/MenuIcon/MenuIcon.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import '../../molecules/SimilarCard/SimilarCard.component.js';
import SortMenu from '../../molecules/SortMenu/SortMenu.component.js';
import '../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../molecules/UserMenu/UserMenu.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import MobileSortMenu from '../../organism/MobileSortMenu/MobileSortMenu.component.js';
import styles from './SortBar.module.scss.js';

var SortBar = function (_a) {
    var textSortButton = _a.textSortButton, mainTitle = _a.mainTitle, filterSummary = _a.filterSummary, textOrderFilter = _a.textOrderFilter, orderFields = _a.orderFields, orderByText = _a.orderByText, loading = _a.loading, _b = _a.titleBtnOrder, titleBtnOrder = _b === void 0 ? '' : _b, setIsFiltersOpen = _a.setIsFiltersOpen, orderFilter = _a.orderFilter, setFilter = _a.setFilter, emptyVacant = _a.emptyVacant, infoMessageQuotas = _a.infoMessageQuotas, widthInfoMessage = _a.widthInfoMessage, _c = _a.horizontal, horizontal = _c === void 0 ? false : _c;
    var _d = useState(false), showMenu = _d[0], setShowMenu = _d[1];
    var _e = useState(false), rotateOrderIcon = _e[0], setRotateOrderIcon = _e[1];
    var tooltip = useMediaQuery(React.createElement(Tooltip, { title: infoMessageQuotas || '', position: "bottom", width: widthInfoMessage },
        React.createElement("div", { className: "".concat(styles['magneto-ui-tooltip-quotas']) },
            React.createElement("span", null, "?"))), { sm: React.createElement(Fragment, null) });
    var sortMenu = useMediaQuery(React.createElement(SortMenu, { orderFields: orderFields, textOrderFilter: textOrderFilter, setFilter: setFilter, loading: loading }), {
        md: (React.createElement("button", { className: styles['magneto-ui-btn-menu'], title: textOrderFilter, onClick: function () { return setShowMenu(true); } },
            React.createElement("p", { className: styles['magneto-ui-btn-text'] }, textOrderFilter),
            React.createElement(IconItem, __assign({}, menuSortButton))))
    });
    var mainTitleByMediaQuery = useMediaQuery(React.createElement("h1", { className: styles['magneto-ui-main-title'] }, mainTitle), {
        md: React.createElement(Fragment, null)
    });
    var handleOrder = useCallback(function () {
        orderFilter();
        setRotateOrderIcon(!rotateOrderIcon);
    }, [rotateOrderIcon, orderFilter]);
    var sortBarButtonAltRender = useMemo(function () {
        if (emptyVacant)
            return;
        return (React.createElement("div", { className: styles['magneto-ui-section-menu'] },
            sortMenu,
            React.createElement("button", { className: "".concat(styles['magneto-ui-btn-order'], " ").concat(styles.hidden), title: titleBtnOrder, onClick: handleOrder },
                React.createElement(IconItem, __assign({ isRotate: rotateOrderIcon }, iconFilterOrder)))));
    }, [emptyVacant, sortMenu, titleBtnOrder, handleOrder, rotateOrderIcon]);
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: styles['magneto-ui-sort-menu'] },
            React.createElement("div", { className: styles['magneto-ui-section-filter'] },
                !horizontal && (React.createElement(MenuIcon, { type: "button", text: textSortButton, icon: Setting4, onClick: setIsFiltersOpen, size: 17, isActive: true })),
                mainTitleByMediaQuery,
                React.createElement("p", { className: "".concat(styles['magneto-ui-btn-text'], " ").concat(horizontal ? '' : styles.hidden) }, filterSummary),
                infoMessageQuotas && tooltip),
            sortBarButtonAltRender),
        React.createElement(MobileSortMenu, { isOpen: showMenu, orderFields: orderFields, orderByText: orderByText, textOrderFilter: textOrderFilter, titleBtnOrder: titleBtnOrder, onClose: function () { return setShowMenu(!showMenu); }, setFilter: setFilter, orderFilter: orderFilter, setShowPopover: setShowMenu })));
};

export { SortBar as default };
//# sourceMappingURL=SortBar.component.js.map
