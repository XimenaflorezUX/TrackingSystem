'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var common_constants = require('../../constants/stories/common.constants.js');
require('../../constants/stories/DatePicker.constants.js');
require('../../constants/stories/jobVideo.constants.js');
require('../../constants/stories/megaMenu.constants.js');
require('../../constants/stories/sideFilter.constants.js');
require('../../constants/stories/vacancies.constants.js');
require('../../constants/stories/vacantPositionsCategory.constants.js');
require('../../constants/img.constants.js');

var CNM = /** @class */ (function () {
    function CNM() {
    }
    CNM.get = function (_a) {
        var cls = _a.cls, styles = _a.styles;
        var appliedStyles = styles || {};
        var validClassNames = CNM.getValidClassNames(cls.flat(Infinity));
        if (validClassNames.length === 0)
            return '';
        var classNamesArray = CNM.classNamesToArray.apply(CNM, tslib_es6.__spreadArray([appliedStyles], validClassNames, false));
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
        return cls.map(function (cn) { return styles["".concat("".concat(common_constants.classMUI, "-") ).concat(cn)] || cn; });
    };
    return CNM;
}());

module.exports = CNM;
//# sourceMappingURL=classNameManager.util.js.map
