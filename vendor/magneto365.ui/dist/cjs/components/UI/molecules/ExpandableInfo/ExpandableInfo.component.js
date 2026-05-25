'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ExpandableInfoAction_component = require('./children/ExpandableInfoAction/ExpandableInfoAction.component.js');
require('./children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
var ExpandableInfoMessage_component = require('./children/ExpandableInfoMessage/ExpandableInfoMessage.component.js');
var ExpandableInfoModal_component = require('./children/ExpandableInfoModal/ExpandableInfoModal.component.js');
var ExpandableInfoPopover_component = require('./children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
var ExpandableInfo_interface = require('./ExpandableInfo.interface.js');
require('../../atoms/BarChart/enums.js');
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
var index = require('../../../hooks/useMediaQuery/index.js');
var ExpandableInfo_module = require('./ExpandableInfo.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var actions = _a.actions, details = _a.details, floating = _a.floating, message = _a.message, prefixIcon = _a.prefixIcon, _b = _a.size, size = _b === void 0 ? 'large' : _b, suffixIcon = _a.suffixIcon, summary = _a.summary, title = _a.title, _c = _a.variant, variant = _c === void 0 ? 'white' : _c;
    var togglerProps = React.useMemo(function () { return ({
        details: details,
        title: title,
        summary: summary,
        variant: variant,
        size: size,
        prefixIcon: prefixIcon,
        suffixIcon: suffixIcon
    }); }, [details, title, summary, variant, size, prefixIcon, suffixIcon]);
    var container = index.useMediaQuery(React__default["default"].createElement(ExpandableInfoPopover_component.ExpandableInfoPopover, { details: details, toggler: togglerProps }), {
        sm: React__default["default"].createElement(ExpandableInfoModal_component.ExpandableInfoModal, { details: details, toggler: togglerProps })
    });
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfo_module, cls: ['expandable-info'] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({
                styles: ExpandableInfo_module,
                cls: [
                    'expandable-info__container',
                    "expandable-info__container--".concat(variant),
                    "expandable-info__container--".concat(size),
                    floating && 'expandable-info__container--floating'
                ]
            }) },
            container,
            size === ExpandableInfo_interface.EExpandableInfoSize.LARGE && (React__default["default"].createElement(React__default["default"].Fragment, null,
                actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfo_module, cls: ['expandable-info__actions'] }) }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) { return action && React__default["default"].createElement(ExpandableInfoAction_component.ExpandableInfoAction, tslib_es6.__assign({ key: action.title }, action)); }))),
                React__default["default"].createElement(ExpandableInfoMessage_component.ExpandableInfoMessage, tslib_es6.__assign({ variant: variant }, message)))))));
};
/**
 * Molecule UI component for expandable info
 */
var ExpandableInfo = Component;

exports.ExpandableInfo = ExpandableInfo;
//# sourceMappingURL=ExpandableInfo.component.js.map
