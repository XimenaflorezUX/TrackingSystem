import { __rest, __assign } from '../../../../../node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import '../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../constants/stories/megaMenu.constants.js';
import { ERenderType } from '../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../constants/stories/vacancies.constants.js';
import '../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../constants/img.constants.js';
import { FilterCard } from '../../../organism/FilterCard/FilterCard.component.js';
import { FilterCardOnSearch } from '../../../organism/FilterCardOnSearch/FilterCardOnSearch.component.js';

var getCardByRenderType = function (renderType) {
    switch (renderType) {
        case ERenderType.multiSelect:
        case ERenderType.selectionList:
            return FilterCard;
        case ERenderType.search:
            return FilterCardOnSearch;
        default:
            return null;
    }
};
var CardByRenderType = function (_a) {
    var renderType = _a.renderType, props = __rest(_a, ["renderType"]);
    var CardByRenderType = getCardByRenderType(renderType);
    if (!CardByRenderType)
        return React.createElement(Fragment, null);
    return React.createElement(CardByRenderType, __assign({ renderType: renderType }, props));
};

export { CardByRenderType };
//# sourceMappingURL=factory.component.js.map
