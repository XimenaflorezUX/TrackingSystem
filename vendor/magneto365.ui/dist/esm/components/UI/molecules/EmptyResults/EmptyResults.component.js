import React, { useMemo } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { SearchItem } from '../../atoms/SearchItem/SearchItem.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import style from './EmptyResults.module.scss.js';

var EmptyResult = function (_a) {
    var titleNoResults = _a.titleNoResults, noResultsDescription = _a.noResultsDescription, noResultsDescriptionTwo = _a.noResultsDescriptionTwo, filteredOptions = _a.filteredOptions, noResultsImage = _a.noResultsImage;
    var emptyCardTitle = useMemo(function () {
        var regex = /'([^']+)'/;
        var match = regex.exec(titleNoResults);
        var arrayTitle = [];
        if (match) {
            arrayTitle.push(titleNoResults.substring(0, match.index));
            arrayTitle.push(match[0]);
            arrayTitle.push(match[1]);
        }
        var titleWithSearch = (React.createElement("h2", null,
            arrayTitle[0],
            React.createElement("span", { className: style["".concat(classMUI, "-empty-result__info--search")] },
                "'",
                arrayTitle[2]),
            "'"));
        var titleWithFilter = React.createElement("h2", null, titleNoResults);
        return match ? titleWithSearch : titleWithFilter;
    }, [titleNoResults]);
    return (React.createElement("main", { className: style["".concat(classMUI, "-empty-result")] },
        React.createElement("span", { className: style["".concat(classMUI, "-empty-result__img-container")] },
            React.createElement("img", { className: style["".concat(classMUI, "-empty-result__img-container--img")], src: noResultsImage, alt: "empty-result" })),
        React.createElement("div", { className: style["".concat(classMUI, "-empty-result__info")] },
            React.createElement("div", null,
                React.createElement("div", { className: style["".concat(classMUI, "-empty-result__info--title")] }, emptyCardTitle),
                React.createElement("p", null, noResultsDescription),
                React.createElement("p", null, noResultsDescriptionTwo)),
            React.createElement("div", { className: style["".concat(classMUI, "-empty-result__tags")] }, filteredOptions.map(function (_a, index) {
                var tag = _a.tag, url = _a.url;
                return (React.createElement(SearchItem, { key: index + tag, tag: tag, url: url }));
            })))));
};

export { EmptyResult as default };
//# sourceMappingURL=EmptyResults.component.js.map
