'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ExpandableInfoToggler_constants = require('./ExpandableInfoToggler.constants.js');
var ArrowDown2 = require('../../../../../../assets/ArrowDown2.svg.js');
var arrowDownWhite = require('../../../../../../assets/arrowDownWhite.svg.js');
var ExpandableInfo_interface = require('../../ExpandableInfo.interface.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var ExpandableInfoToggler_module = require('./ExpandableInfoToggler.module.scss.js');
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
    var details = _a.details, onToggle = _a.onToggle, prefixIcon = _a.prefixIcon, size = _a.size, suffixIcon = _a.suffixIcon, summary = _a.summary, title = _a.title, _b = _a.variant, variant = _b === void 0 ? 'white' : _b;
    var styleGenerator = React.useCallback(function (base) {
        return classNameManager_util.get({
            styles: ExpandableInfoToggler_module,
            cls: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], base, true), ["".concat(base.at(0), "--").concat(variant)], false)
        });
    }, [variant]);
    var icon = React.useCallback(function (icon) {
        if (icon) {
            if (Object.keys(ExpandableInfoToggler_constants.EXPANDABLE_INFO_TOGGLER_ICONS).includes(icon)) {
                return ExpandableInfoToggler_constants.EXPANDABLE_INFO_TOGGLER_ICONS[icon];
            }
            return icon;
        }
        return;
    }, []);
    var Component = React.useMemo(function () { return (details ? 'button' : 'div'); }, [details]);
    var componentProps = React.useMemo(function () {
        var className = styleGenerator([
            'expandable-info-toggler__container',
            !details && 'expandable-info-toggler__container--no-details',
            "expandable-info-toggler__container--".concat(size)
        ]);
        if (!details)
            return { className: className };
        return {
            className: className,
            onClick: function () { return onToggle(); }
        };
    }, [details, onToggle, size, styleGenerator]);
    var baseSuffixIcon = React.useMemo(function () { return (variant === 'blue' ? arrowDownWhite : ArrowDown2); }, [variant]);
    return (React__default["default"].createElement(Component, tslib_es6.__assign({}, componentProps),
        prefixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 16 }, prefixIcon, { icon: icon(prefixIcon.icon) })),
        React__default["default"].createElement("span", { className: styleGenerator(['expandable-info-toggler__text']) }, title + ':'),
        React__default["default"].createElement("div", { className: classNameManager_util.get({
                styles: ExpandableInfoToggler_module,
                cls: [
                    'expandable-info-toggler__summary',
                    (size === ExpandableInfo_interface.EExpandableInfoSize.SMALL || suffixIcon) && 'expandable-info-toggler__summary--small',
                    size === ExpandableInfo_interface.EExpandableInfoSize.LARGE && (details || suffixIcon) && 'expandable-info-toggler__summary--large'
                ]
            }) },
            React__default["default"].createElement("span", { className: styleGenerator(['expandable-info-toggler__text', "expandable-info-toggler__text--".concat(size)]) }, summary),
            React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ icon: baseSuffixIcon, size: !suffixIcon ? 20 : 16 }, suffixIcon)))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoToggler = Component;

exports.ExpandableInfoToggler = ExpandableInfoToggler;
//# sourceMappingURL=ExpandableInfoToggler.component.js.map
