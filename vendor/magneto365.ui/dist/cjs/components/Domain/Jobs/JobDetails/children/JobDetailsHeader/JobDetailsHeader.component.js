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
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobDetailsHeader_module = require('./JobDetailsHeader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsHeader_module);
var JobDetailsHeader = function (_a) {
    var title = _a.title, className = _a.className, _b = _a.classNames, classNames = _b === void 0 ? {} : _b, publishedDate = _a.publishedDate, children = _a.children;
    return (React__default["default"].createElement("section", { className: cx('header', className) },
        React__default["default"].createElement(Typography_component.Typography.Paragraph, { className: cx('header__title', classNames.title) }, title),
        React__default["default"].createElement("section", { className: classNames.info }, children),
        React__default["default"].createElement(Typography_component.Typography.Text, { className: cx('header__publish-date', classNames.publishDate) }, publishedDate)));
};

exports.JobDetailsHeader = JobDetailsHeader;
//# sourceMappingURL=JobDetailsHeader.component.js.map
