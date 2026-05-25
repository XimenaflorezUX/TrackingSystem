import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoPropsDark, MenuButtonAnalystProps } from '../../../../constants/stories/common.constants.js';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import { Breadcrumbs } from '../../molecules/Breadcrumbs/Breadcrumbs.component.js';
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
import { UserMenuWrapperAnalyst } from '../../molecules/UserMenuWrapperAnalyst/UserMenuWrapperAnalyst.component.js';
import '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import styles from './HeaderAnalyst.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var breadCrumbProps = _a.breadCrumbProps, _b = _a.className, className = _b === void 0 ? '' : _b, handleModal = _a.handleModal, legend = _a.legend, _c = _a.logoProps, logoProps = _c === void 0 ? __assign({ fallbackImage: logoPropsDark.logo }, logoPropsDark) : _c, onMainMenuClick = _a.onMainMenuClick, userMenuProps = _a.userMenuProps, notificationBell = _a.notificationBell;
    var headerLogo = useMediaQuery(React.createElement("a", { href: logoProps.href, rel: logoProps.rel, target: logoProps.target },
        React.createElement(LogoComponent, __assign({ fallbackImage: logoPropsDark.logo }, logoProps))), {
        sm: (React.createElement("a", { href: logoProps.href, rel: logoProps.rel, target: logoProps.target },
            React.createElement(LogoComponent, __assign({ fallbackImage: logoPropsDark.isoType }, logoProps, { isoView: true }))))
    });
    var headerBreadCrumb = useMediaQuery(breadCrumbProps && React.createElement(Breadcrumbs, __assign({}, breadCrumbProps)), {
        sm: null
    });
    return (React.createElement("header", { className: cx('magneto-ui-header-analyst', className) },
        React.createElement("div", { className: cx('magneto-ui-header-analyst__container') },
            React.createElement("div", { className: cx('magneto-ui-header-analyst__main-menu') },
                React.createElement("div", { className: cx('magneto-ui-header-analyst__logo') },
                    React.createElement(MainButton, __assign({ onClick: onMainMenuClick }, MenuButtonAnalystProps)),
                    headerLogo),
                legend && React.createElement("span", { className: cx('magneto-ui-header-analyst__legend') }, legend)),
            React.createElement("div", { className: cx('magneto-ui-header-analyst__user-menu') },
                notificationBell,
                React.createElement(UserMenuWrapperAnalyst, __assign({}, userMenuProps, { handleModal: handleModal })))),
        React.createElement("div", { className: cx('magneto-ui-header-analyst__container') }, headerBreadCrumb)));
};
/**
 * Organism UI component of header analyst
 */
var HeaderAnalyst = Component;

export { HeaderAnalyst };
//# sourceMappingURL=HeaderAnalyst.component.js.map
