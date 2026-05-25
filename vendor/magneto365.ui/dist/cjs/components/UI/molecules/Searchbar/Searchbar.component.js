'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var Searchbar_modules = require('./Searchbar.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var placeholder = _a.placeholder, onSearch = _a.onSearch, searchButtonProps = _a.searchButtonProps, removeButtonProps = _a.removeButtonProps, termValue = _a.termValue;
    var _b = React.useState(''), searchValue = _b[0], setSearchValue = _b[1];
    React.useEffect(function () {
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
    return (React__default["default"].createElement("div", { className: Searchbar_modules.SearchbarComponent },
        React__default["default"].createElement("form", { onSubmit: handleSubmit },
            React__default["default"].createElement("input", { type: "text", value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); }, placeholder: placeholder }),
            searchValue && React__default["default"].createElement("div", { className: Searchbar_modules['SearchbarComponent__badge'] }),
            React__default["default"].createElement("div", { className: Searchbar_modules['magneto-ui-searchbar-buttons'] },
                searchValue && (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ className: Searchbar_modules['magneto-ui-remove-button'], onClick: handleClearSearch }, removeButtonProps)),
                    React__default["default"].createElement("span", null, "|"))),
                React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, searchButtonProps))))));
};
/**
 * UI Molecule of a searchbar
 */
var Searchbar = Component;

exports.Searchbar = Searchbar;
//# sourceMappingURL=Searchbar.component.js.map
