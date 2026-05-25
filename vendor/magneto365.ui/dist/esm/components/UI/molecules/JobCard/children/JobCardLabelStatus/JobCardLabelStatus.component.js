import React from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import { JOB_CARD_LABEL_STATUS_COLOR } from './JobCardLabelStatus.constant.js';
import { Typography } from '../../../../atoms/Typography/Typography.component.js';
import style from './JobCardLabelStatus.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(style);
var JobCardLabelStatus = function (_a) {
    var status = _a.status, text = _a.text;
    return (React.createElement("div", { className: cx('magneto-ui-job-card-label-status', "magneto-ui-job-card-label-status--".concat(status)) },
        React.createElement(IconItem, { icon: JOB_CARD_LABEL_STATUS_COLOR[status], alt: "icon", size: 16 }),
        React.createElement(Typography.Text, { weight: "normal", size: "sm-2", color: "grey-800" }, text)));
};

export { JobCardLabelStatus as default };
//# sourceMappingURL=JobCardLabelStatus.component.js.map
