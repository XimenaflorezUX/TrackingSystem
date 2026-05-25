import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import styles from './BarsChart.module.scss.js';
import { BarChart } from '../../atoms/BarChart/BarChart.component.js';
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
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { numberToCurrency } from '../../../../utils/currency/currency.util.js';

var Component = function (_a) {
    var maxHeight = _a.maxHeight, data = _a.data, mean = _a.mean, texts = _a.texts;
    var minValue = useMemo(function () { return data[0].bin[0]; }, [data]);
    var maxValue = useMemo(function () { return data[data.length - 1].bin[1]; }, [data]);
    var _b = useMemo(function () {
        var getHeightPercentage = function (_a) {
            var heightPercentage = _a.heightPercentage;
            return heightPercentage;
        };
        var shorterBar = Math.min.apply(Math, data.map(getHeightPercentage));
        var talestBar = Math.max.apply(Math, data.map(getHeightPercentage));
        return { talestBar: talestBar, shorterBar: shorterBar };
    }, [data]), talestBar = _b.talestBar, shorterBar = _b.shorterBar;
    return (React.createElement("div", { className: styles['magneto-ui-chart-bars'] },
        React.createElement("div", { className: styles['magneto-ui-chart-bars__chart'] }, data.map(function (bar, key) { return (React.createElement(BarChart, __assign({ key: key }, bar, { jobText: texts.jobs, maxHeight: maxHeight, point: talestBar == bar.heightPercentage || shorterBar == bar.heightPercentage ? '#1a324c' : undefined }))); })),
        React.createElement("div", { className: styles['magneto-ui-chart-bars__minmax'] },
            React.createElement("p", null,
                " ",
                numberToCurrency(minValue)),
            React.createElement("p", null,
                " ",
                texts.mean),
            React.createElement("p", null,
                " ",
                numberToCurrency(maxValue))),
        React.createElement("div", { className: styles['magneto-ui-chart-bars__mean'] },
            React.createElement("p", null,
                " ",
                numberToCurrency(mean) + ' / ' + texts.month))));
};
var BarsChart = Component;

export { BarsChart };
//# sourceMappingURL=BarsChart.component.js.map
