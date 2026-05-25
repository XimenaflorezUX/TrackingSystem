'use strict';

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var Close = require('../../../../assets/Close.svg.js');
var SearchNormal1Gray = require('../../../../assets/SearchNormal1Gray.svg.js');
require('../BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../Button/Button.component.js');
require('../Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../Field/Field.component.js');
require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');
require('../InputFile/InputFile.component.js');
var InputSearch_module = require('./InputSearch.module.scss.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var InputSearch = function (_a) {
    var _b = _a.inputValue, inputValue = _b === void 0 ? '' : _b, onChange = _a.onChange, closeOnClick = _a.closeOnClick, placeholder = _a.placeholder, searchOnClick = _a.searchOnClick;
    var hasASearchFunction = React.useMemo(function () {
        if (searchOnClick) {
            return (React__default["default"].createElement("button", { className: InputSearch_module["".concat(common_constants.classMUI, "-container__input-search--btn")], onClick: searchOnClick },
                React__default["default"].createElement(Icon_component.IconItem, { className: InputSearch_module["".concat(common_constants.classMUI, "-container__input-search--icon")], icon: SearchNormal1Gray, alt: "search-icon" })));
        }
        return (React__default["default"].createElement(Icon_component.IconItem, { className: InputSearch_module["".concat(common_constants.classMUI, "-container__input-search--icon")], icon: SearchNormal1Gray, alt: "search-icon" }));
    }, [searchOnClick]);
    return (React__default["default"].createElement("div", { className: InputSearch_module["".concat(common_constants.classMUI, "-container")] },
        React__default["default"].createElement("input", { className: InputSearch_module["".concat(common_constants.classMUI, "-container__input-search")], placeholder: placeholder, style: { flex: 1 }, value: inputValue, onChange: onChange, type: "text" }),
        inputValue.length !== 0 ? (React__default["default"].createElement("button", { className: InputSearch_module["".concat(common_constants.classMUI, "-container__input-search--btn")], onClick: closeOnClick },
            React__default["default"].createElement(Icon_component.IconItem, { icon: Close, alt: "search-icon" }))) : (hasASearchFunction)));
};

module.exports = InputSearch;
//# sourceMappingURL=InputSearch.component.js.map
