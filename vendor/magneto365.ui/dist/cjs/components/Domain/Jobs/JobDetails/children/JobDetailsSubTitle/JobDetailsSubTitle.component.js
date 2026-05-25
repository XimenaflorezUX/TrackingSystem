'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
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
var JobDetailsSubTitle_module = require('./JobDetailsSubTitle.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsSubTitle_module);
var JobDetailsSubTitle = function (_a) {
    var className = _a.className, icon = _a.icon, children = _a.children;
    return (React__default["default"].createElement(Typography_component.Typography.Paragraph, { className: cx('title', className) },
        icon && React__default["default"].createElement(Icon_component.IconItem, { icon: jobDetails_constants.iconJobDetailsSubTitle[icon], size: 16, alt: 'subtitle-icon' }),
        React__default["default"].createElement(Typography_component.Typography.Text, { strong: true }, children)));
};

exports.JobDetailsSubTitle = JobDetailsSubTitle;
//# sourceMappingURL=JobDetailsSubTitle.component.js.map
