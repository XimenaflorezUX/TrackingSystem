'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
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
var Field_component = require('../../atoms/Field/Field.component.js');
var Typography_component = require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var Select2_component = require('../../organism/Select2/Select2.component.js');
var MegaMenuCountrySelector_module = require('./MegaMenuCountrySelector.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b, _c, _d, _e;
    var selectCountry = _a.selectCountry;
    var isMobile = index.useMediaQuery(false, { xs: true, sm: true, md: true });
    var selectedCountry = (_c = (_b = selectCountry.currentFields) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : (_d = selectCountry.selectList) === null || _d === void 0 ? void 0 : _d[0];
    if (isMobile) {
        return (React__default["default"].createElement(Field_component.Field, { className: MegaMenuCountrySelector_module['mega-menu-country-selector__field'] },
            React__default["default"].createElement(Field_component.Field.List.Wrapper, null,
                React__default["default"].createElement(Field_component.Field.Input, { type: "button", prefix: (selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.img) ? (React__default["default"].createElement("img", { src: selectedCountry.img, alt: selectedCountry.name, className: MegaMenuCountrySelector_module['mega-menu-country-selector__flag'] })) : undefined, suffix: function (_a) {
                        var opened = _a.opened;
                        return (React__default["default"].createElement("div", { className: "".concat(MegaMenuCountrySelector_module['mega-menu-country-selector__arrow'], " ").concat(opened ? MegaMenuCountrySelector_module['mega-menu-country-selector__arrow--opened'] : '') },
                            React__default["default"].createElement(Icon_component.IconItem, { size: 16, icon: ArrowDown2 })));
                    } }),
                React__default["default"].createElement(Field_component.Field.List, { value: selectedCountry, onChange: function (country) { return selectCountry.onChange([country]); } },
                    React__default["default"].createElement(Field_component.Field.List.Body, null, (_e = selectCountry.selectList) === null || _e === void 0 ? void 0 : _e.map(function (country) { return (React__default["default"].createElement(Field_component.Field.List.Item, { key: country.id, value: country, className: MegaMenuCountrySelector_module['mega-menu-country-selector__option'] },
                        country.img && (React__default["default"].createElement("img", { src: country.img, alt: country.name, className: MegaMenuCountrySelector_module['mega-menu-country-selector__flag'] })),
                        React__default["default"].createElement(Typography_component.Typography.Text, null, country.name))); }))))));
    }
    return (React__default["default"].createElement(Select2_component.Select2, tslib_es6.__assign({ haveTags: false, isMultiple: false }, selectCountry, { className: "".concat(MegaMenuCountrySelector_module['mega-menu-country-selector__select'], " ").concat(selectCountry.className || '') })));
};
var MegaMenuCountrySelector = Component;

exports.MegaMenuCountrySelector = MegaMenuCountrySelector;
//# sourceMappingURL=MegaMenuCountrySelector.component.js.map
