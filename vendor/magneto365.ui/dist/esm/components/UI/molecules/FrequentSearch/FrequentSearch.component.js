import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, Fragment } from 'react';
import styles from './FrequentSearch.module.scss.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
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
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var searchHeading = _a.searchHeading, searchList = _a.searchList, showLess = _a.showLess, showMore = _a.showMore, showFrequentSearch = _a.showFrequentSearch;
    var _b = useState(true), showFullList = _b[0], setShowFullList = _b[1];
    var searchListDinamyc = useMemo(function () {
        if (showFullList) {
            return searchList.slice(0, 9);
        }
        return searchList;
    }, [searchList, showFullList]);
    var searchListResponsive = useMediaQuery(searchList, { md: searchListDinamyc });
    return (React.createElement(React.Fragment, null, showFrequentSearch !== false ? (React.createElement("div", { className: styles['magneto-ui-frequent-search'] },
        React.createElement("p", { className: styles['magneto-ui-frequent-search__heading'] }, searchHeading),
        React.createElement("div", { className: styles['magneto-ui-frequent-search__items'] }, searchListResponsive.map(function (_a, i) {
            var props = __rest(_a, []);
            return (React.createElement(SearchItem, __assign({ key: i }, props)));
        })),
        React.createElement("div", { className: styles['magneto-ui-frequent-search__buttons-container'] }, showFullList ? (React.createElement("button", { className: styles['magneto-ui-frequent-search__buttons-container--btn'], onClick: function () { return setShowFullList(false); }, title: showMore },
            showMore,
            " (",
            searchList.length,
            ")")) : (React.createElement("button", { className: styles['magneto-ui-frequent-search__buttons-container--btn'], onClick: function () { return setShowFullList(true); }, title: showLess }, showLess))))) : (React.createElement(Fragment, null))));
};
/**
 * UI Atom component of Frequent Search
 */
var FrequentSearch = Component;

export { FrequentSearch };
//# sourceMappingURL=FrequentSearch.component.js.map
