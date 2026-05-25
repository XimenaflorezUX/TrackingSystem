import './DatePicker.constants.js';
import './jobVideo.constants.js';
import './megaMenu.constants.js';
import './vacancies.constants.js';
import './vacantPositionsCategory.constants.js';
import '../img.constants.js';

var ERenderType;
(function (ERenderType) {
    ERenderType["selectionList"] = "SELECTION_LIST";
    ERenderType["search"] = "SEARCH";
    ERenderType["multiSelect"] = "MULTI_SELECT";
    ERenderType["check"] = "CHECK";
    ERenderType["geoPoint"] = "GEO_POINT";
    ERenderType["customByCompany"] = "CUSTOM:BY_COMPANY";
})(ERenderType || (ERenderType = {}));
var defaultFilter = {
    renderType: ERenderType.multiSelect,
    values: Array(8).fill({ loading: true })
};
var defaultFilters = Array(6).fill(defaultFilter);

export { ERenderType, defaultFilter, defaultFilters };
//# sourceMappingURL=sideFilter.constants.js.map
