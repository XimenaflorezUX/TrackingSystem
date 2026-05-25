'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var TabButton_modules = require('./TabButton.modules.scss.js');
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
var Link_component = require('../../atoms/Link/Link.component.js');
var _Function = require('../../../../shared/utils/Function.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var tabButtonLink = _a.tabButtonLink, tabButtonLinkStyles = _a.tabButtonLinkStyles, tabButtonStyles = _a.tabButtonStyles;
    var stylesValue = React.useMemo(function () { return _Function.toCSSVariables(tabButtonStyles); }, [tabButtonStyles]);
    var boxShadow = (tabButtonStyles || {}).boxShadow;
    return (React__default["default"].createElement("div", { className: TabButton_modules.TabButtonComponent, style: stylesValue, "data-box-shadow": boxShadow }, tabButtonLink && React__default["default"].createElement(Link_component.Link, tslib_es6.__assign({}, tabButtonLink, { linkStyles: tabButtonLinkStyles }))));
};
/**
 * Molecule UI component for Tab Button
 */
var TabButton = Component;

exports.TabButton = TabButton;
//# sourceMappingURL=TabButton.component.js.map
