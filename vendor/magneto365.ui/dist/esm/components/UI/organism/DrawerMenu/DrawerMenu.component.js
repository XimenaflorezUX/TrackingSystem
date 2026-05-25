import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps, LoginButton } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { ListIcon } from '../../../../constants/stories/drawer.constants.js';
import { DrawerLeftTabStyles, DrawerRightTabStyles, CreateAccountButton } from '../../../../constants/stories/headers.constants.js';
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
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.components.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { ListIconLink } from '../../molecules/ListIconLink/ListIconLink.component.js';
import { ListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
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
import style from './drawerMenu.module.scss.js';

var Component = function (_a) {
    var headerDrawerProps = _a.headerDrawerProps, listMenuProps = _a.listMenuProps, createAccountButton = _a.createAccountButton, loginButton = _a.loginButton, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose;
    var buttonTextSignUp = createAccountButton.buttonText, onSignUpClick = createAccountButton.onClick, loadingState = createAccountButton.loadingState;
    var buttonTextLogin = loginButton.buttonText, onLogInClick = loginButton.onClick;
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
    };
    return (React.createElement("div", { className: style['magneto-ui-drawer-menu'] },
        React.createElement(Drawer, { isOpen: isOpen, onClose: handleClose },
            React.createElement(HeaderDrawerTabs, __assign({}, headerDrawerProps, { logoProps: logoProps, leftTabStyle: DrawerLeftTabStyles, rightTabStyle: DrawerRightTabStyles })),
            React.createElement("div", { className: style['menu-container'] },
                React.createElement(ListMenuItems, __assign({}, listMenuProps))),
            React.createElement("div", { className: style.actionsContainer },
                React.createElement(MainButton, __assign({ buttonSize: "full" }, CreateAccountButton, { buttonText: buttonTextSignUp, onClick: onSignUpClick, loadingState: loadingState })),
                React.createElement(MainButton, __assign({ buttonSize: "full" }, LoginButton, { buttonText: buttonTextLogin, onClick: onLogInClick })),
                React.createElement(ListIconLink, { listIcon: ListIcon, size: 34, spacing: 20 })))));
};
var DrawerMenu = Component;

export { DrawerMenu };
//# sourceMappingURL=DrawerMenu.component.js.map
