import React from 'react';
import styles from './DateRecord.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var DateComponent = function (_a) {
    var className = _a.className, date = _a.date;
    if (!date)
        return null;
    var fecha = new Date(date);
    var formateada = new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(fecha);
    return React.createElement("div", { className: cx('magneto-ui-DateRecord', className) }, formateada);
};

export { DateComponent as default };
//# sourceMappingURL=DateRecord.component.js.map
