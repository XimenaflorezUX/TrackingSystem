import React from 'react';
import styles from './AlertJobStatus.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { TextCustom } from '../../atoms/Text/Text.component.js';
import { AlertJobStatusContainer } from './children/AlertJobStatusContainer/AlertJobStatusContainer.component.js';
import { AlertJobStatusIcon } from './children/AlertJobStatusIcon/AlertJobStatusIcon.component.js';
import { AlertJobStatusButton } from './children/AlertJobStatusButton/AlertJobStatusButton.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, type = _a.type;
    return React.createElement("div", { className: cx('alert-job', className, type) }, children);
};
var AlertJobStatus = Object.assign(Component, {
    Container: AlertJobStatusContainer,
    Icon: AlertJobStatusIcon,
    Button: AlertJobStatusButton,
    Text: TextCustom
});

export { AlertJobStatus };
//# sourceMappingURL=AlertJobStatus.component.js.map
