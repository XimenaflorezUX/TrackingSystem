import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
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
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './Searchbar.modules.scss.js';

var Component = function (_a) {
    var placeholder = _a.placeholder, onSearch = _a.onSearch, searchButtonProps = _a.searchButtonProps, removeButtonProps = _a.removeButtonProps, termValue = _a.termValue;
    var _b = useState(''), searchValue = _b[0], setSearchValue = _b[1];
    useEffect(function () {
        if (termValue) {
            setSearchValue(termValue);
        }
    }, [termValue]);
    var handleSubmit = function (event) {
        event.preventDefault();
        onSearch(searchValue);
    };
    var handleClearSearch = function () {
        setSearchValue('');
        onSearch('');
    };
    return (React.createElement("div", { className: styles.SearchbarComponent },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { type: "text", value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); }, placeholder: placeholder }),
            searchValue && React.createElement("div", { className: styles['SearchbarComponent__badge'] }),
            React.createElement("div", { className: styles['magneto-ui-searchbar-buttons'] },
                searchValue && (React.createElement(React.Fragment, null,
                    React.createElement(MainButton, __assign({ className: styles['magneto-ui-remove-button'], onClick: handleClearSearch }, removeButtonProps)),
                    React.createElement("span", null, "|"))),
                React.createElement(MainButton, __assign({}, searchButtonProps))))));
};
/**
 * UI Molecule of a searchbar
 */
var Searchbar = Component;

export { Searchbar };
//# sourceMappingURL=Searchbar.component.js.map
