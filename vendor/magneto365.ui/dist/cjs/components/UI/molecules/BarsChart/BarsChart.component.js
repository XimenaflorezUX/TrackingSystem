'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var BarsChart_module = require('./BarsChart.module.scss.js');
var BarChart_component = require('../../atoms/BarChart/BarChart.component.js');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var currency_util = require('../../../../utils/currency/currency.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var maxHeight = _a.maxHeight, data = _a.data, mean = _a.mean, texts = _a.texts;
    var minValue = React.useMemo(function () { return data[0].bin[0]; }, [data]);
    var maxValue = React.useMemo(function () { return data[data.length - 1].bin[1]; }, [data]);
    var _b = React.useMemo(function () {
        var getHeightPercentage = function (_a) {
            var heightPercentage = _a.heightPercentage;
            return heightPercentage;
        };
        var shorterBar = Math.min.apply(Math, data.map(getHeightPercentage));
        var talestBar = Math.max.apply(Math, data.map(getHeightPercentage));
        return { talestBar: talestBar, shorterBar: shorterBar };
    }, [data]), talestBar = _b.talestBar, shorterBar = _b.shorterBar;
    return (React__default["default"].createElement("div", { className: BarsChart_module['magneto-ui-chart-bars'] },
        React__default["default"].createElement("div", { className: BarsChart_module['magneto-ui-chart-bars__chart'] }, data.map(function (bar, key) { return (React__default["default"].createElement(BarChart_component.BarChart, tslib_es6.__assign({ key: key }, bar, { jobText: texts.jobs, maxHeight: maxHeight, point: talestBar == bar.heightPercentage || shorterBar == bar.heightPercentage ? '#1a324c' : undefined }))); })),
        React__default["default"].createElement("div", { className: BarsChart_module['magneto-ui-chart-bars__minmax'] },
            React__default["default"].createElement("p", null,
                " ",
                currency_util.numberToCurrency(minValue)),
            React__default["default"].createElement("p", null,
                " ",
                texts.mean),
            React__default["default"].createElement("p", null,
                " ",
                currency_util.numberToCurrency(maxValue))),
        React__default["default"].createElement("div", { className: BarsChart_module['magneto-ui-chart-bars__mean'] },
            React__default["default"].createElement("p", null,
                " ",
                currency_util.numberToCurrency(mean) + ' / ' + texts.month))));
};
var BarsChart = Component;

exports.BarsChart = BarsChart;
//# sourceMappingURL=BarsChart.component.js.map
