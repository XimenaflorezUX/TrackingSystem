'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../constants/stories/megaMenu.constants.js');
var sideFilter_constants = require('../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../constants/stories/vacancies.constants.js');
require('../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../constants/img.constants.js');
var FilterCard_component = require('../../../organism/FilterCard/FilterCard.component.js');
var FilterCardOnSearch_component = require('../../../organism/FilterCardOnSearch/FilterCardOnSearch.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var getCardByRenderType = function (renderType) {
    switch (renderType) {
        case sideFilter_constants.ERenderType.multiSelect:
        case sideFilter_constants.ERenderType.selectionList:
            return FilterCard_component.FilterCard;
        case sideFilter_constants.ERenderType.search:
            return FilterCardOnSearch_component.FilterCardOnSearch;
        default:
            return null;
    }
};
var CardByRenderType = function (_a) {
    var renderType = _a.renderType, props = tslib_es6.__rest(_a, ["renderType"]);
    var CardByRenderType = getCardByRenderType(renderType);
    if (!CardByRenderType)
        return React__default["default"].createElement(React.Fragment, null);
    return React__default["default"].createElement(CardByRenderType, tslib_es6.__assign({ renderType: renderType }, props));
};

exports.CardByRenderType = CardByRenderType;
//# sourceMappingURL=factory.component.js.map
