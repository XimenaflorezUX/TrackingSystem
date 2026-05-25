import { __assign } from '../../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { useFieldContext } from '../../../../Field.context.js';
import { classNames } from '../../../../../../../../shared/utils/common/classNames.util.js';
import '../../../../../BarChart/enums.js';
import '../../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../Button/Button.component.js';
import '../../../../../Collapse/Collapse.component.js';
import '../../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../../constants/img.constants.js';
import '../../../../../../../../utils/date/dateInput.util.js';
import '../../../../Field.component.js';
import '../../../../../Typography/Typography.component.js';
import '../../../../../Typography/Typography.interface.js';
import '../../../../../InputFile/InputFile.component.js';
import '../../../../../Paragraph/Paragraph.component.js';
import '../../../../../Radio/Radio.interface.js';
import '../../../../../Radio/Radio.constants.js';
import '../../../../../../../../constants/jobDetails.constants.js';
import '../../../../../Toggle/Toggle.component.js';
import '../../../../../../../hooks/useMediaQuery/index.js';
import '../../../../../../molecules/Actions/Actions.component.js';
import '../../../../../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../../../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../../../context/container/container.context.js';
import '../../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../../../molecules/SharePopover/SharePopover.js';
import '../../../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../../../molecules/Modal/Modal.component.js';
import '../../../../../../molecules/SimilarCard/SimilarCard.component.js';
import '../../../../../../molecules/SortMenu/SortMenu.component.js';
import '../../../../../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../../../../molecules/UserMenu/UserMenu.component.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../../../molecules/JobDetails/JobDetails.component.js';
import '../../../../../../molecules/Chat/Chat.component.js';
import styles from './FieldListResponsive.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a) {
    var children = _a.children;
    var _b = useFieldContext(), isFocused = _b.isFocused, isMobile = _b.isMobile, setIsFocused = _b.setIsFocused;
    var Container = useMemo(function () { return (isMobile ? MobileDrawer : React.Fragment); }, [isMobile]);
    var mobileProps = useMemo(function () {
        return isMobile && {
            isOpen: isFocused,
            onClose: function () { return setIsFocused(false); },
            className: cx('magneto-ui-field-list-responsive'),
            modalClassName: cx('magneto-ui-field-list-responsive')
        };
    }, [isFocused, isMobile, setIsFocused]);
    return React.createElement(Container, __assign({}, mobileProps), children);
};
var FieldListResponsive = BaseComponent;

export { FieldListResponsive };
//# sourceMappingURL=FieldListResponsive.component.js.map
