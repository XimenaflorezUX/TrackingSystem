'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
var Typography_component = require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
var jobDetails_constants = require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobDetailsSummary_module = require('./JobDetailsSummary.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsSummary_module);
var JobDetailsSummary = function (_a) {
    var children = _a.children, items = _a.items, className = _a.className, classNames = _a.classNames;
    return (React__default["default"].createElement("ul", { className: cx('summary', className) },
        children,
        items.map(function (_a) {
            var id = _a.id, icon = _a.icon, label = _a.label;
            return (React__default["default"].createElement("li", { className: cx('summary__item', classNames === null || classNames === void 0 ? void 0 : classNames.item), key: id },
                React__default["default"].cloneElement(jobDetails_constants.iconJobDetailSummaryMap[icon], { className: cx('summary__icon', classNames === null || classNames === void 0 ? void 0 : classNames.icon) }),
                React__default["default"].createElement(Typography_component.Typography.Text, { className: cx('summary__label', classNames === null || classNames === void 0 ? void 0 : classNames.label) }, label)));
        })));
};

exports.JobDetailsSummary = JobDetailsSummary;
//# sourceMappingURL=JobDetailsSummary.component.js.map
