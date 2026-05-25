'use strict';

var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
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
require('../../../hooks/useMediaQuery/index.js');
var EmptyResults_module = require('./EmptyResults.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EmptyResult = function (_a) {
    var titleNoResults = _a.titleNoResults, noResultsDescription = _a.noResultsDescription, noResultsDescriptionTwo = _a.noResultsDescriptionTwo, filteredOptions = _a.filteredOptions, noResultsImage = _a.noResultsImage;
    var emptyCardTitle = React.useMemo(function () {
        var regex = /'([^']+)'/;
        var match = regex.exec(titleNoResults);
        var arrayTitle = [];
        if (match) {
            arrayTitle.push(titleNoResults.substring(0, match.index));
            arrayTitle.push(match[0]);
            arrayTitle.push(match[1]);
        }
        var titleWithSearch = (React__default["default"].createElement("h2", null,
            arrayTitle[0],
            React__default["default"].createElement("span", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__info--search")] },
                "'",
                arrayTitle[2]),
            "'"));
        var titleWithFilter = React__default["default"].createElement("h2", null, titleNoResults);
        return match ? titleWithSearch : titleWithFilter;
    }, [titleNoResults]);
    return (React__default["default"].createElement("main", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result")] },
        React__default["default"].createElement("span", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__img-container")] },
            React__default["default"].createElement("img", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__img-container--img")], src: noResultsImage, alt: "empty-result" })),
        React__default["default"].createElement("div", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__info")] },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("div", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__info--title")] }, emptyCardTitle),
                React__default["default"].createElement("p", null, noResultsDescription),
                React__default["default"].createElement("p", null, noResultsDescriptionTwo)),
            React__default["default"].createElement("div", { className: EmptyResults_module["".concat(common_constants.classMUI, "-empty-result__tags")] }, filteredOptions.map(function (_a, index) {
                var tag = _a.tag, url = _a.url;
                return (React__default["default"].createElement(SearchItem_component.SearchItem, { key: index + tag, tag: tag, url: url }));
            })))));
};

module.exports = EmptyResult;
//# sourceMappingURL=EmptyResults.component.js.map
