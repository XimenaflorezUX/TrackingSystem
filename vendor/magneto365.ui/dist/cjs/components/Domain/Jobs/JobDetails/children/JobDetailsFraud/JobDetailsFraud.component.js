'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
var warning3d = require('../../../../../../assets/warning-3d.svg.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobDetailsFraud_module = require('./JobDetailsFraud.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsFraud_module);
var JobDetailsFraud = function (_a) {
    var children = _a.children, renderTitle = _a.renderTitle, className = _a.className;
    return (React__default["default"].createElement("section", { role: "alert", "aria-live": "assertive", className: cx('fraud', className), "data-testid": "job-details-fraud" },
        React__default["default"].createElement("header", { className: cx('fraud__header') },
            React__default["default"].createElement(Icon_component.IconItem, { icon: warning3d, alt: "warning" }),
            React__default["default"].createElement(Typography_component.Typography.Title, { level: 2 }, renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle())),
        React__default["default"].createElement("section", null, children)));
};

exports.JobDetailsFraud = JobDetailsFraud;
//# sourceMappingURL=JobDetailsFraud.component.js.map
