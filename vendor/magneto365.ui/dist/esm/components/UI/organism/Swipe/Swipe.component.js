import React, { useState, useCallback, useEffect } from 'react';
import { SwipeMode } from './Swipe.interface.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import SwipeLeft from '../../../../assets/gif/SwipeLeft.gif.js';
import SwipeRight from '../../../../assets/gif/SwipeRight.gif.js';
import '../../molecules/Modal/Modal.component.js';
import '../../molecules/SimilarCard/SimilarCard.component.js';
import '../../molecules/SortMenu/SortMenu.component.js';
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
import style from './Swipe.module.scss.js';

var Swipe = function (_a) {
    var onSwipeLeft = _a.onSwipeLeft, onSwipeRight = _a.onSwipeRight, children = _a.children, openModal = _a.openModal, onCloseModal = _a.onCloseModal, modalConfirmText = _a.modalConfirmText, modalLeftText = _a.modalLeftText, modalRightText = _a.modalRightText, modalTitle = _a.modalTitle;
    var _b = useState(0), startX = _b[0], setStartX = _b[1];
    var _c = useState(0), endX = _c[0], setEndX = _c[1];
    var _d = useState(false), isSwiping = _d[0], setIsSwiping = _d[1];
    var _e = useState(null), swipe = _e[0], setSwipe = _e[1];
    var restoreValues = useCallback(function () {
        setIsSwiping(false);
        setStartX(0);
        setEndX(0);
    }, []);
    var handleTouchStart = useCallback(function (event) {
        var touch = event.touches[0];
        setStartX(touch.clientX);
        setIsSwiping(true);
    }, []);
    var handleTouchMove = useCallback(function (event) {
        if (!isSwiping)
            return;
        var touch = event.touches[0];
        setEndX(touch.clientX);
    }, [isSwiping]);
    var handleTouchEnd = useCallback(function () {
        if ([startX, endX].includes(0))
            return;
        restoreValues();
        var deltaX = endX - startX;
        var deltaAbs = Math.abs(deltaX);
        deltaAbs > 40 && setSwipe(deltaX > 0 ? SwipeMode.RIGHT : SwipeMode.LEFT);
    }, [endX, restoreValues, startX]);
    useEffect(function () {
        if (swipe == null || !onSwipeRight || !onSwipeLeft)
            return;
        setSwipe(null);
        swipe == SwipeMode.RIGHT ? onSwipeRight() : onSwipeLeft();
    }, [isSwiping, onSwipeLeft, onSwipeRight, swipe]);
    var swipeGif = useCallback(function (image, title) { return (React.createElement("div", { className: style["magneto-ui-swipe__image--content"] },
        React.createElement("p", { className: style["magneto-ui-swipe__image--title"] }, title),
        React.createElement("img", { src: image, height: 130 }))); }, []);
    var hiddenModal = useCallback(function () {
        onCloseModal && onCloseModal();
    }, [onCloseModal]);
    return (React.createElement("div", { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, className: "swipe" },
        children,
        React.createElement(MobileDrawer, { isOpen: openModal !== null && openModal !== void 0 ? openModal : false, onClose: hiddenModal },
            React.createElement("p", { className: style["magneto-ui-swipe__modal--title"] }, modalTitle),
            React.createElement("div", { className: style["magneto-ui-swipe__modal"] },
                swipeGif(SwipeLeft, modalLeftText),
                swipeGif(SwipeRight, modalRightText)),
            React.createElement(MainButton, { buttonType: "button", buttonText: modalConfirmText, buttonSize: "full", className: style["magneto-ui-swipe__modal--action"], onClick: hiddenModal, buttonStyles: {
                    buttonColor: '#090467',
                    textColor: '#FFFFFF',
                    spacing: '25px'
                } }))));
};

export { Swipe as default };
//# sourceMappingURL=Swipe.component.js.map
