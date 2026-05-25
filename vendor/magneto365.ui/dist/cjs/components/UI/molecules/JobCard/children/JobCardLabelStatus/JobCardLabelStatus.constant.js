'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Checked = require('../../../../../../assets/Checked.svg.js');
var UrgentYellowBold = require('../../../../../../assets/UrgentYellowBold.svg.js');
var warningYellowBold = require('../../../../../../assets/warningYellowBold.svg.js');
var JobCardLabelStatus_interface = require('./JobCardLabelStatus.interface.js');

var _a;
var JOB_CARD_LABEL_STATUS_COLOR = (_a = {},
    _a[JobCardLabelStatus_interface.JobsCardLabelStatusEnum.APPLIED] = Checked,
    _a[JobCardLabelStatus_interface.JobsCardLabelStatusEnum.PENDING] = warningYellowBold,
    _a[JobCardLabelStatus_interface.JobsCardLabelStatusEnum.REQUIRED] = UrgentYellowBold,
    _a);

exports.JOB_CARD_LABEL_STATUS_COLOR = JOB_CARD_LABEL_STATUS_COLOR;
//# sourceMappingURL=JobCardLabelStatus.constant.js.map
