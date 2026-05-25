'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var responsive_constants = require('../../../../../constants/responsive.constants.js');

var showDetailByWindow = function (elementID) {
    var _a;
    var page = document === null || document === void 0 ? void 0 : document.getElementById(elementID);
    if (!page)
        return false;
    if (((_a = page.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.width) < responsive_constants.screenSize.xl) {
        return false;
    }
    return true;
};

exports.showDetailByWindow = showDetailByWindow;
//# sourceMappingURL=showDetailByWindow.util.js.map
