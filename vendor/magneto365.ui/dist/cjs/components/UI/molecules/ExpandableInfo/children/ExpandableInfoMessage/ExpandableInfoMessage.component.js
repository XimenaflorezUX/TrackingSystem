'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ExpandableInfoMessage_constants = require('./ExpandableInfoMessage.constants.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var ExpandableInfoMessage_module = require('./ExpandableInfoMessage.module.scss.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
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

var Component = function (_a) {
    var className = _a.className, title = _a.title, prefixIcon = _a.prefixIcon, variant = _a.variant;
    var icon = React.useCallback(function (icon) {
        if (icon) {
            if (Object.keys(ExpandableInfoMessage_constants.EXPANDABLE_INFO_MESSAGE_ICONS).includes(icon) && variant) {
                return ExpandableInfoMessage_constants.EXPANDABLE_INFO_MESSAGE_ICONS[icon][variant];
            }
            return icon;
        }
        return;
    }, [variant]);
    if (!title)
        return null;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoMessage_module, cls: ['expandable-info-message', className] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoMessage_module, cls: ['expandable-info-message__container'] }) },
            prefixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 16 }, prefixIcon, { icon: icon(prefixIcon.icon) })),
            React__default["default"].createElement("span", { className: classNameManager_util.get({
                    styles: ExpandableInfoMessage_module,
                    cls: ['expandable-info-message__text', "expandable-info-message__text--".concat(variant)]
                }) }, title))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoMessage = Component;

exports.ExpandableInfoMessage = ExpandableInfoMessage;
//# sourceMappingURL=ExpandableInfoMessage.component.js.map
