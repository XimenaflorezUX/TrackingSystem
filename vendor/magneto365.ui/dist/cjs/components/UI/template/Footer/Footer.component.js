'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var logoMagneto = require('../../../../assets/logo-magneto.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
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
var Logo_component = require('../../atoms/Logo/Logo.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
require('../../organism/AlertsPanel/AlertsPanel.component.js');
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
var MagnetoResolution_component = require('../../molecules/MagnetoResolution/MagnetoResolution.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
var RightsReservedText_component = require('../../molecules/RightsReservedText/RightsReservedText.component.js');
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
require('../../organism/ApplicationSummary/ApplicationSummary.component.js');
require('../../organism/CategoryMenuCard/CategoryMenuCard.component.js');
var FooterMenuLinks_component = require('../../organism/FooterMenuLinks/FooterMenuLinks.component.js');
require('../../../Domain/Jobs/SimilarJobs/index.js');
require('../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
var MagnetoSocialMedia_component = require('../../organism/MagnetoSocialMedia/MagnetoSocialMedia.component.js');
require('../../organism/Swipe/Swipe.interface.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
require('../AnalystTemplate/AnalystTemplate.context.js');
require('../../organism/ProcessesCard/ProcessesCard.component.js');
require('../../organism/Select/Select.component.js');
require('../../organism/Select2/Select2.component.js');
require('../../organism/UserTerms/UserTerms.component.js');
require('../../organism/Carousel/Carousel.component.js');
require('../../organism/Record/record.component.js');
var Footer_module = require('./Footer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Footer = function (_a) {
    var followText = _a.followText, magnetoResolutionProps = _a.magnetoResolutionProps, rightsReservedProps = _a.rightsReservedProps, menuFooterLink = _a.menuFooterLink, showFooter = _a.showFooter;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, showFooter !== false ? (React__default["default"].createElement("footer", { className: "".concat(Footer_module["".concat(common_constants.classMUI, "-footer")]) },
        React__default["default"].createElement("div", { className: "".concat(Footer_module["".concat(common_constants.classMUI, "-footer__row1")]) },
            React__default["default"].createElement("div", { className: "".concat(Footer_module["".concat(common_constants.classMUI, "-footer__row1--column1")]) },
                React__default["default"].createElement(Logo_component.LogoComponent, { alt: "magneto logo", logo: logoMagneto }),
                React__default["default"].createElement(MagnetoSocialMedia_component, { followText: followText }),
                React__default["default"].createElement(RightsReservedText_component, tslib_es6.__assign({}, rightsReservedProps))),
            React__default["default"].createElement("div", { className: "".concat(Footer_module["".concat(common_constants.classMUI, "-footer__row1--column2")]) },
                React__default["default"].createElement(FooterMenuLinks_component, tslib_es6.__assign({}, menuFooterLink)))),
        React__default["default"].createElement("div", { className: "".concat(Footer_module["".concat(common_constants.classMUI, "-footer__resolution")]) },
            React__default["default"].createElement(MagnetoResolution_component, tslib_es6.__assign({}, magnetoResolutionProps))))) : (React__default["default"].createElement(React.Fragment, null))));
};

module.exports = Footer;
//# sourceMappingURL=Footer.component.js.map
