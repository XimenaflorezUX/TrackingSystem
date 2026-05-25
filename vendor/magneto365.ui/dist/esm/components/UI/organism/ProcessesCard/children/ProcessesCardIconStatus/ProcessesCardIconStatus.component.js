import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import ClockLineBlack from '../../../../../../assets/clock-line-black.svg.js';
import DocumentForwardBlack from '../../../../../../assets/document-forward-black.svg.js';
import DocumentSearchBlack from '../../../../../../assets/document-search-black.svg.js';
import PeopleBlack from '../../../../../../assets/People-black.svg.js';
import UserRemoveBlack from '../../../../../../assets/user-remove-black.svg.js';
import UserTickBlack from '../../../../../../assets/user-tick-black.svg.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from '../../ProcessesCard.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var status = _a.status, props = __rest(_a, ["status"]);
    var iconByStatus = function (status) {
        var icons = {
            Discarded: UserRemoveBlack,
            Finalists: PeopleBlack,
            Hired: UserTickBlack,
            Pending: ClockLineBlack,
            Sent: DocumentForwardBlack,
            Validation: DocumentSearchBlack,
            Canceled: UserRemoveBlack
        };
        return icons[status];
    };
    return (React.createElement("img", __assign({ className: cx('processes-card__icon-status', "processes-color-icon--".concat(status)), src: iconByStatus(status), alt: "icons-status" }, props)));
};
var ProcessesCardIconStatus = Component;

export { ProcessesCardIconStatus };
//# sourceMappingURL=ProcessesCardIconStatus.component.js.map
