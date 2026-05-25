import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { Avatar } from '../../../../atoms/Avatar/Avatar.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import { RatingBadge } from '../../../../atoms/RatingBadge/RatingBadge.component.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './CandidateProfileAvatar.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var fallbackImage = _a.fallbackImage, onClick = _a.onClick, score = _a.score, userImage = _a.userImage, props = __rest(_a, ["fallbackImage", "onClick", "score", "userImage"]);
    return (React.createElement("div", __assign({ className: cx('magneto-ui-candidate-profile-avatar') }, props),
        React.createElement("picture", { className: cx('magneto-ui-candidate-profile-avatar__picture') },
            React.createElement(Avatar, { userImage: userImage, fallbackImage: fallbackImage, onClick: onClick })),
        score && (React.createElement("div", { className: cx('magneto-ui-candidate-profile-avatar__score') },
            React.createElement(RatingBadge, { score: score })))));
};
/**
 * Molecule UI component child of candidate profile
 */
var CandidateProfileAvatar = Component;

export { CandidateProfileAvatar };
//# sourceMappingURL=CandidateProfileAvatar.component.js.map
