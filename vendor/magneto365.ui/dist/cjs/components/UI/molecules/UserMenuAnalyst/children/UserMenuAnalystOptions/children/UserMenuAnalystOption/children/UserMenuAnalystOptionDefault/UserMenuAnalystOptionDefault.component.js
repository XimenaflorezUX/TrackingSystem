'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserMenuAnalystOption_constants = require('../../UserMenuAnalystOption.constants.js');
require('../../../../../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../../../../atoms/Button/Button.component.js');
require('../../../../../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../../../../constants/img.constants.js');
require('../../../../../../../../../../utils/date/dateInput.util.js');
require('../../../../../../../../atoms/Field/Field.component.js');
require('../../../../../../../../atoms/Typography/Typography.component.js');
require('../../../../../../../../atoms/Typography/Typography.interface.js');
require('../../../../../../../../atoms/InputFile/InputFile.component.js');
require('../../../../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../../../../constants/jobDetails.constants.js');
require('../../../../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../../../../hooks/useMediaQuery/index.js');
require('../../../../../../../Actions/Actions.component.js');
require('../../../../../../../AlertJobModal/AlertJobModal.component.js');
require('../../../../../../../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../../../../../context/container/container.context.js');
require('../../../../../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../../../../CandidateNav/CandidateNav.component.js');
require('../../../../../../../CandidateProfile/CandidateProfile.component.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../../../../ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../../../../SharePopover/SharePopover.js');
require('../../../../../../../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var MenuIcon_component = require('../../../../../../../MenuIcon/MenuIcon.component.js');
require('../../../../../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../../../../Modal/Modal.component.js');
require('../../../../../../../SimilarCard/SimilarCard.component.js');
require('../../../../../../../SortMenu/SortMenu.component.js');
require('../../../../../../../TimelineEvent/TimelineEvent.interface.js');
require('../../../../../../../UserMenu/UserMenu.component.js');
var UserMenuAnalyst_constants = require('../../../../../../UserMenuAnalyst.constants.js');
require('../UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../UserMenuAnalystOption.interface.js');
require('../../../../../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../../../../JobDetails/JobDetails.component.js');
require('../../../../../../../Chat/Chat.component.js');
var UserMenuAnalystOptionDefault_module = require('./UserMenuAnalystOptionDefault.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, option = _a.option, prefix = _a.prefix, suffix = _a.suffix, url = _a.url;
    var _b = option.rel, rel = _b === void 0 ? 'noreferrer' : _b, _c = option.target, target = _c === void 0 ? '_self' : _c;
    var handleOnClick = React.useCallback(function () {
        if (option.modal && handleModal && handleMenuOpen) {
            handleMenuOpen(false);
            return handleModal(option.modal.name, true, option.modal.data);
        }
        if (typeof option.data === 'function' && handleMenuOpen) {
            handleMenuOpen(false);
            return option.data(option);
        }
    }, [handleModal, handleMenuOpen, option]);
    return (React__default["default"].createElement("span", { className: classNameManager_util.get({
            styles: UserMenuAnalystOptionDefault_module,
            cls: [UserMenuAnalystOption_constants.getOptionTypeStyles(option.type), 'user-menu-analyst-option-default', className]
        }) },
        prefix,
        React__default["default"].createElement(MenuIcon_component.MenuIcon, { className: classNameManager_util.get({
                styles: UserMenuAnalystOptionDefault_module,
                cls: ['user-menu-analyst-option-default__container']
            }), text: option.title || '', icon: option.icon && UserMenuAnalyst_constants.userMenuAnalystIcons[option.icon] ? UserMenuAnalyst_constants.userMenuAnalystIcons[option.icon] : option.icon, iconProps: { showDefaultFallback: false }, iconSize: 18, url: url, type: typeof option.data === 'function' || option.modal ? 'button' : 'link', onClick: handleOnClick, target: target, rel: rel }),
        suffix));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionDefault = React__default["default"].memo(Component);

exports.UserMenuAnalystOptionDefault = UserMenuAnalystOptionDefault;
//# sourceMappingURL=UserMenuAnalystOptionDefault.component.js.map
