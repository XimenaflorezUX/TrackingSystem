'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var AlertJobStatusButton_module = require('./AlertJobStatusButton.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ArrowRightWhite = require('../../../../../../assets/ArrowRightWhite.svg.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobStatusButton_module);
var AlertJobStatusButton = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.icon, icon = _b === void 0 ? ArrowRightWhite : _b, _c = _a.sizeIcon, sizeIcon = _c === void 0 ? 14 : _c, buttonProps = tslib_es6.__rest(_a, ["className", "children", "icon", "sizeIcon"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({ className: cx('alert-modal__button', className) }, buttonProps),
        React__default["default"].createElement("p", null, children),
        React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow-icon", hover: false, icon: icon, size: sizeIcon })));
};

exports.AlertJobStatusButton = AlertJobStatusButton;
//# sourceMappingURL=AlertJobStatusButton.component.js.map
