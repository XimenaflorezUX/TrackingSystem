import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './FlatLoader.module.scss.js';

var Component = function (_a) {
    var color = _a.color, size = _a.size, secondColor = _a.secondColor;
    var loadingSize = useMemo(function () {
        if (size) {
            return {
                width: "".concat(size, "px"),
                height: "".concat(size, "px")
            };
        }
        return {
            width: '15px',
            height: '15px'
        };
    }, [size]);
    return (React.createElement("div", { style: __assign(__assign({}, loadingSize), { border: "2px solid ".concat(color || '#090467'), borderBottomColor: secondColor || 'white' }), className: styles["".concat(classMUI, "-flat-loader")] }));
};
var FlatLoader = Component;

export { FlatLoader };
//# sourceMappingURL=FlatLoader.component.js.map
