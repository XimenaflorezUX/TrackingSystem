'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
var TitleRecord_module = require('./TitleRecord.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(TitleRecord_module);
var BaseComponent = function (_a, ref) {
    var className = _a.className, title = _a.title, children = _a.children, icon = _a.icon;
    return (React__default["default"].createElement(React.Fragment, null, children ? (children) : (React__default["default"].createElement("div", { className: cx('magneto-ui-title-record', className), ref: ref },
        icon && React__default["default"].createElement(Icon_component.IconItem, { icon: icon, size: 18 }),
        title))));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var TitleRecord = Object.assign(Component, {});

exports.TitleRecord = TitleRecord;
//# sourceMappingURL=TitleRecord.component.js.map
