'use strict';

var React = require('react');
var Swipe_interface = require('./Swipe.interface.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
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
var SwipeLeft = require('../../../../assets/gif/SwipeLeft.gif.js');
var SwipeRight = require('../../../../assets/gif/SwipeRight.gif.js');
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
var Swipe_module = require('./Swipe.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Swipe = function (_a) {
    var onSwipeLeft = _a.onSwipeLeft, onSwipeRight = _a.onSwipeRight, children = _a.children, openModal = _a.openModal, onCloseModal = _a.onCloseModal, modalConfirmText = _a.modalConfirmText, modalLeftText = _a.modalLeftText, modalRightText = _a.modalRightText, modalTitle = _a.modalTitle;
    var _b = React.useState(0), startX = _b[0], setStartX = _b[1];
    var _c = React.useState(0), endX = _c[0], setEndX = _c[1];
    var _d = React.useState(false), isSwiping = _d[0], setIsSwiping = _d[1];
    var _e = React.useState(null), swipe = _e[0], setSwipe = _e[1];
    var restoreValues = React.useCallback(function () {
        setIsSwiping(false);
        setStartX(0);
        setEndX(0);
    }, []);
    var handleTouchStart = React.useCallback(function (event) {
        var touch = event.touches[0];
        setStartX(touch.clientX);
        setIsSwiping(true);
    }, []);
    var handleTouchMove = React.useCallback(function (event) {
        if (!isSwiping)
            return;
        var touch = event.touches[0];
        setEndX(touch.clientX);
    }, [isSwiping]);
    var handleTouchEnd = React.useCallback(function () {
        if ([startX, endX].includes(0))
            return;
        restoreValues();
        var deltaX = endX - startX;
        var deltaAbs = Math.abs(deltaX);
        deltaAbs > 40 && setSwipe(deltaX > 0 ? Swipe_interface.SwipeMode.RIGHT : Swipe_interface.SwipeMode.LEFT);
    }, [endX, restoreValues, startX]);
    React.useEffect(function () {
        if (swipe == null || !onSwipeRight || !onSwipeLeft)
            return;
        setSwipe(null);
        swipe == Swipe_interface.SwipeMode.RIGHT ? onSwipeRight() : onSwipeLeft();
    }, [isSwiping, onSwipeLeft, onSwipeRight, swipe]);
    var swipeGif = React.useCallback(function (image, title) { return (React__default["default"].createElement("div", { className: Swipe_module["magneto-ui-swipe__image--content"] },
        React__default["default"].createElement("p", { className: Swipe_module["magneto-ui-swipe__image--title"] }, title),
        React__default["default"].createElement("img", { src: image, height: 130 }))); }, []);
    var hiddenModal = React.useCallback(function () {
        onCloseModal && onCloseModal();
    }, [onCloseModal]);
    return (React__default["default"].createElement("div", { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, className: "swipe" },
        children,
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: openModal !== null && openModal !== void 0 ? openModal : false, onClose: hiddenModal },
            React__default["default"].createElement("p", { className: Swipe_module["magneto-ui-swipe__modal--title"] }, modalTitle),
            React__default["default"].createElement("div", { className: Swipe_module["magneto-ui-swipe__modal"] },
                swipeGif(SwipeLeft, modalLeftText),
                swipeGif(SwipeRight, modalRightText)),
            React__default["default"].createElement(MainButton_component.MainButton, { buttonType: "button", buttonText: modalConfirmText, buttonSize: "full", className: Swipe_module["magneto-ui-swipe__modal--action"], onClick: hiddenModal, buttonStyles: {
                    buttonColor: '#090467',
                    textColor: '#FFFFFF',
                    spacing: '25px'
                } }))));
};

module.exports = Swipe;
//# sourceMappingURL=Swipe.component.js.map
