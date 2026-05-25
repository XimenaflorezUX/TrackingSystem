import React, { useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './ComparativeCounter.module.scss.js';

var nf = new Intl.NumberFormat('de-DE');
var Component = function (_a) {
    var _b = _a.current, current = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 0 : _c, _d = _a.position, position = _d === void 0 ? 'left' : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var currentHigherMax = useMemo(function () {
        return current > max;
    }, [current, max]);
    return (React.createElement("p", { style: { textAlign: position }, className: "".concat(styles["".concat(classMUI, "-comparative-counter")], " ").concat(currentHigherMax ? styles['error-label'] : '', " ").concat(className) },
        nf.format(current),
        React.createElement("span", null,
            " / ",
            nf.format(max))));
};
var ComparativeCounter = Component;

export { ComparativeCounter };
//# sourceMappingURL=ComparativeCounter.component.js.map
