'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var FilterActions_module = require('./FilterActions.module.scss.js');
var React = require('react');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
var Button_component = require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterActions = function (_a) {
    var allAction = _a.allAction, onClickAction = _a.onClickAction, filtersRef = _a.filtersRef;
    var _b = React.useState(0), selected = _b[0], setSelected = _b[1];
    var handleClickAction = React.useCallback(function (index, letter) { return function () {
        setSelected(index);
        onClickAction(index, letter);
    }; }, [onClickAction]);
    React.useImperativeHandle(filtersRef, function () { return ({
        restartFilters: function () { return setSelected(0); }
    }); });
    var actions = React.useMemo(function () {
        var values = tslib_es6.__spreadArray([allAction], megaMenu_constants.alphabet.split(''), true);
        return values.map(function (letter, index) { return (React__default["default"].createElement(Button_component.Button, { onClick: handleClickAction(index, letter), className: "".concat(FilterActions_module["filter-actions__action"], " ").concat(selected == index ? FilterActions_module["filter-actions__action--selected"] : ''), buttonText: letter, key: index })); });
    }, [allAction, handleClickAction, selected]);
    return React__default["default"].createElement("nav", { className: FilterActions_module['filter-actions'] }, actions);
};

exports.FilterActions = FilterActions;
//# sourceMappingURL=FilterActions.component.js.map
