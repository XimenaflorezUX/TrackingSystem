'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./DatePicker.constants.js');
require('./jobVideo.constants.js');
require('./megaMenu.constants.js');
require('./vacancies.constants.js');
require('./vacantPositionsCategory.constants.js');
require('../img.constants.js');

exports.ERenderType = void 0;
(function (ERenderType) {
    ERenderType["selectionList"] = "SELECTION_LIST";
    ERenderType["search"] = "SEARCH";
    ERenderType["multiSelect"] = "MULTI_SELECT";
    ERenderType["check"] = "CHECK";
    ERenderType["geoPoint"] = "GEO_POINT";
    ERenderType["customByCompany"] = "CUSTOM:BY_COMPANY";
})(exports.ERenderType || (exports.ERenderType = {}));
var defaultFilter = {
    renderType: exports.ERenderType.multiSelect,
    values: Array(8).fill({ loading: true })
};
var defaultFilters = Array(6).fill(defaultFilter);

exports.defaultFilter = defaultFilter;
exports.defaultFilters = defaultFilters;
//# sourceMappingURL=sideFilter.constants.js.map
