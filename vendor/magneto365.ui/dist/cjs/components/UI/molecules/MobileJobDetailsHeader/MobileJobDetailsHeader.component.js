'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var MobileJobDetailHeader_module = require('./MobileJobDetailHeader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var returnText = _a.returnText, onClick = _a.onClick;
    return (React__default["default"].createElement("div", { className: MobileJobDetailHeader_module['magneto-ui-mobile-job-details-header'] },
        React__default["default"].createElement("button", { onClick: onClick },
            React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow-left", icon: ArrowLeft2 })),
        React__default["default"].createElement("p", null, returnText)));
};
/**
 * UI Molecule Component for Mobile Jobs Drawer
 */
var MobileJobDetailsHeader = Component;

exports.MobileJobDetailsHeader = MobileJobDetailsHeader;
//# sourceMappingURL=MobileJobDetailsHeader.component.js.map
