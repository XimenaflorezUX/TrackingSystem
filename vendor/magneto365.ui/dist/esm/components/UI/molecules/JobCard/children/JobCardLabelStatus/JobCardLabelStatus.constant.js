import Checked from '../../../../../../assets/Checked.svg.js';
import UrgentYellowBold from '../../../../../../assets/UrgentYellowBold.svg.js';
import WarningYellowBold from '../../../../../../assets/warningYellowBold.svg.js';
import { JobsCardLabelStatusEnum } from './JobCardLabelStatus.interface.js';

var _a;
var JOB_CARD_LABEL_STATUS_COLOR = (_a = {},
    _a[JobsCardLabelStatusEnum.APPLIED] = Checked,
    _a[JobsCardLabelStatusEnum.PENDING] = WarningYellowBold,
    _a[JobsCardLabelStatusEnum.REQUIRED] = UrgentYellowBold,
    _a);

export { JOB_CARD_LABEL_STATUS_COLOR };
//# sourceMappingURL=JobCardLabelStatus.constant.js.map
