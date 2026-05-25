'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ExpandableInfoAction_constants = require('./ExpandableInfoAction.constants.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var ExpandableInfoAction_module = require('./ExpandableInfoAction.module.scss.js');
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
    var className = _a.className, loading = _a.loading, onAction = _a.onAction, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, title = _a.title, _b = _a.variant, variant = _b === void 0 ? 'blue' : _b;
    var isUrl = React.useMemo(function () { return onAction && typeof onAction === 'string'; }, [onAction]);
    var Component = React.useMemo(function () { return (isUrl ? 'a' : 'button'); }, [isUrl]);
    var componentProps = React.useMemo(function () {
        var className = classNameManager_util.get({
            styles: ExpandableInfoAction_module,
            cls: ['expandable-info-action__button', "expandable-info-action__button--".concat(variant)]
        });
        if (isUrl)
            return { className: className, href: onAction };
        return {
            className: className,
            onClick: onAction
        };
    }, [isUrl, onAction, variant]);
    var icon = React.useCallback(function (icon) {
        if (loading) {
            return ExpandableInfoAction_constants.EXPANDABLE_INFO_ACTION_ICONS.loading[variant];
        }
        if (icon) {
            if (Object.keys(ExpandableInfoAction_constants.EXPANDABLE_INFO_ACTION_ICONS).includes(icon)) {
                return ExpandableInfoAction_constants.EXPANDABLE_INFO_ACTION_ICONS[icon][variant];
            }
            return icon;
        }
        return;
    }, [loading, variant]);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoAction_module, cls: ['expandable-info-action', className] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoAction_module, cls: ['expandable-info-action__container'] }) },
            React__default["default"].createElement(Component, tslib_es6.__assign({}, componentProps),
                (prefixIcon || loading) && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 12 }, prefixIcon, { icon: icon(prefixIcon === null || prefixIcon === void 0 ? void 0 : prefixIcon.icon) })),
                React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: ExpandableInfoAction_module, cls: ['expandable-info-action__title'] }) }, title),
                suffixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 12 }, suffixIcon, { icon: icon(suffixIcon.icon) }))))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoAction = Component;

exports.ExpandableInfoAction = ExpandableInfoAction;
//# sourceMappingURL=ExpandableInfoAction.component.js.map
