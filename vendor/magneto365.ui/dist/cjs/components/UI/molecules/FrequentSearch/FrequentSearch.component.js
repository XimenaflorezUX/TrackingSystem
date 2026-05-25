'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FrequentSearch_module = require('./FrequentSearch.module.scss.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var SearchItem_component = require('../../atoms/SearchItem/SearchItem.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var searchHeading = _a.searchHeading, searchList = _a.searchList, showLess = _a.showLess, showMore = _a.showMore, showFrequentSearch = _a.showFrequentSearch;
    var _b = React.useState(true), showFullList = _b[0], setShowFullList = _b[1];
    var searchListDinamyc = React.useMemo(function () {
        if (showFullList) {
            return searchList.slice(0, 9);
        }
        return searchList;
    }, [searchList, showFullList]);
    var searchListResponsive = index.useMediaQuery(searchList, { md: searchListDinamyc });
    return (React__default["default"].createElement(React__default["default"].Fragment, null, showFrequentSearch !== false ? (React__default["default"].createElement("div", { className: FrequentSearch_module['magneto-ui-frequent-search'] },
        React__default["default"].createElement("p", { className: FrequentSearch_module['magneto-ui-frequent-search__heading'] }, searchHeading),
        React__default["default"].createElement("div", { className: FrequentSearch_module['magneto-ui-frequent-search__items'] }, searchListResponsive.map(function (_a, i) {
            var props = tslib_es6.__rest(_a, []);
            return (React__default["default"].createElement(SearchItem_component.SearchItem, tslib_es6.__assign({ key: i }, props)));
        })),
        React__default["default"].createElement("div", { className: FrequentSearch_module['magneto-ui-frequent-search__buttons-container'] }, showFullList ? (React__default["default"].createElement("button", { className: FrequentSearch_module['magneto-ui-frequent-search__buttons-container--btn'], onClick: function () { return setShowFullList(false); }, title: showMore },
            showMore,
            " (",
            searchList.length,
            ")")) : (React__default["default"].createElement("button", { className: FrequentSearch_module['magneto-ui-frequent-search__buttons-container--btn'], onClick: function () { return setShowFullList(true); }, title: showLess }, showLess))))) : (React__default["default"].createElement(React.Fragment, null))));
};
/**
 * UI Atom component of Frequent Search
 */
var FrequentSearch = Component;

exports.FrequentSearch = FrequentSearch;
//# sourceMappingURL=FrequentSearch.component.js.map
