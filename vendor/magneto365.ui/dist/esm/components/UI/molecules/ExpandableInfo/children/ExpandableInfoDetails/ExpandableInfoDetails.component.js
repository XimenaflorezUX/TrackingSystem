import React, { useCallback } from 'react';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './ExpandableInfoDetails.module.scss.js';
import { ExpandableInfoAction } from '../ExpandableInfoAction/ExpandableInfoAction.component.js';
import '../ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import '../../../Actions/Actions.component.js';
import '../../../AlertJobModal/AlertJobModal.component.js';
import '../../../AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../CandidateNav/CandidateNav.component.js';
import '../../../CandidateProfile/CandidateProfile.component.js';
import '../../ExpandableInfo.interface.js';
import '../../../SharePopover/SharePopover.js';
import '../../../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../Modal/Modal.component.js';
import '../../../SimilarCard/SimilarCard.component.js';
import '../../../SortMenu/SortMenu.component.js';
import '../../../TimelineEvent/TimelineEvent.interface.js';
import '../../../UserMenu/UserMenu.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../JobDetails/JobDetails.component.js';
import '../../../Chat/Chat.component.js';
import '../ExpandableInfoPopover/ExpandableInfoPopover.component.js';

var Component = function (_a) {
    var sections = _a.sections, footer = _a.footer;
    var sectionStyles = useCallback(function (multiple) {
        return CNM.get({
            styles: styles,
            cls: ['expandable-info-details__section', multiple && 'expandable-info-details__section--multiple']
        });
    }, []);
    var subSectionStyles = useCallback(function (initial) {
        return CNM.get({
            styles: styles,
            cls: ['expandable-info-details__sub-section', initial && 'expandable-info-details__sub-section--initial']
        });
    }, []);
    var itemStyles = useCallback(function (first) {
        return CNM.get({
            styles: styles,
            cls: ['expandable-info-details__item', first && 'expandable-info-details__item--first']
        });
    }, []);
    var textStyles = useCallback(function (bold) {
        return CNM.get({
            styles: styles,
            cls: ['expandable-info-details__text', bold && 'expandable-info-details__text--bold']
        });
    }, []);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-details'] }) },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-details__container'] }) }, sections === null || sections === void 0 ? void 0 :
            sections.map(function (section, index) {
                var _a, _b;
                return (React.createElement("div", { key: "eids-".concat(index), className: sectionStyles(((_a = section === null || section === void 0 ? void 0 : section.children) === null || _a === void 0 ? void 0 : _a.length) > 1) }, (_b = section === null || section === void 0 ? void 0 : section.children) === null || _b === void 0 ? void 0 : _b.map(function (subSection, subIndex) {
                    var _a;
                    return (React.createElement("div", { key: "eidss-".concat(subIndex), className: subSectionStyles(index === 0) },
                        React.createElement("div", { className: itemStyles(index === 0) },
                            React.createElement("span", { className: textStyles(true) }, subSection.title),
                            React.createElement("span", { className: textStyles(false) }, subSection.summary)),
                        React.createElement("div", null, (_a = subSection.content) === null || _a === void 0 ? void 0 : _a.map(function (content, lastIndex) { return (React.createElement("div", { key: "eidsi-".concat(lastIndex), className: itemStyles(false) },
                            React.createElement("span", { className: textStyles(false) }, content.title),
                            React.createElement("span", { className: textStyles(false) }, content.summary))); }))));
                })));
            }),
            (footer === null || footer === void 0 ? void 0 : footer.title) && footer.onAction && (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['expandable-info-details__footer'] }) },
                React.createElement(ExpandableInfoAction, { variant: "white", title: footer === null || footer === void 0 ? void 0 : footer.title, onAction: footer === null || footer === void 0 ? void 0 : footer.onAction, className: CNM.get({ styles: styles, cls: ['expandable-info-details__action'] }) }))))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoDetails = Component;

export { ExpandableInfoDetails };
//# sourceMappingURL=ExpandableInfoDetails.component.js.map
