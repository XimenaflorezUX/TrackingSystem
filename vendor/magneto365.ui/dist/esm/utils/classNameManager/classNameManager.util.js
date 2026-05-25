import { __spreadArray } from '../../node_modules/tslib/tslib.es6.js';
import { classMUI } from '../../constants/stories/common.constants.js';
import '../../constants/stories/DatePicker.constants.js';
import '../../constants/stories/jobVideo.constants.js';
import '../../constants/stories/megaMenu.constants.js';
import '../../constants/stories/sideFilter.constants.js';
import '../../constants/stories/vacancies.constants.js';
import '../../constants/stories/vacantPositionsCategory.constants.js';
import '../../constants/img.constants.js';

var CNM = /** @class */ (function () {
    function CNM() {
    }
    CNM.get = function (_a) {
        var cls = _a.cls, styles = _a.styles;
        var appliedStyles = styles || {};
        var validClassNames = CNM.getValidClassNames(cls.flat(Infinity));
        if (validClassNames.length === 0)
            return '';
        var classNamesArray = CNM.classNamesToArray.apply(CNM, __spreadArray([appliedStyles], validClassNames, false));
        return classNamesArray.join(' ');
    };
    CNM.getValidClassNames = function (cls) {
        return cls.filter(function (cn) { return cn !== null && cn !== false && cn !== undefined && typeof cn === 'string'; });
    };
    CNM.classNamesToArray = function (styles) {
        var cls = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            cls[_i - 1] = arguments[_i];
        }
        return cls.map(function (cn) { return styles["".concat("".concat(classMUI, "-") ).concat(cn)] || cn; });
    };
    return CNM;
}());

export { CNM as default };
//# sourceMappingURL=classNameManager.util.js.map
