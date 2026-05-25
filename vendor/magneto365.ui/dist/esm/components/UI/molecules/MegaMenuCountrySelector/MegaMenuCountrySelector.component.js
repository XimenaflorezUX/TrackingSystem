import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import { Field } from '../../atoms/Field/Field.component.js';
import { Typography } from '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { Select2 } from '../../organism/Select2/Select2.component.js';
import styles from './MegaMenuCountrySelector.module.scss.js';

var Component = function (_a) {
    var _b, _c, _d, _e;
    var selectCountry = _a.selectCountry;
    var isMobile = useMediaQuery(false, { xs: true, sm: true, md: true });
    var selectedCountry = (_c = (_b = selectCountry.currentFields) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : (_d = selectCountry.selectList) === null || _d === void 0 ? void 0 : _d[0];
    if (isMobile) {
        return (React.createElement(Field, { className: styles['mega-menu-country-selector__field'] },
            React.createElement(Field.List.Wrapper, null,
                React.createElement(Field.Input, { type: "button", prefix: (selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.img) ? (React.createElement("img", { src: selectedCountry.img, alt: selectedCountry.name, className: styles['mega-menu-country-selector__flag'] })) : undefined, suffix: function (_a) {
                        var opened = _a.opened;
                        return (React.createElement("div", { className: "".concat(styles['mega-menu-country-selector__arrow'], " ").concat(opened ? styles['mega-menu-country-selector__arrow--opened'] : '') },
                            React.createElement(IconItem, { size: 16, icon: ArrowDown2 })));
                    } }),
                React.createElement(Field.List, { value: selectedCountry, onChange: function (country) { return selectCountry.onChange([country]); } },
                    React.createElement(Field.List.Body, null, (_e = selectCountry.selectList) === null || _e === void 0 ? void 0 : _e.map(function (country) { return (React.createElement(Field.List.Item, { key: country.id, value: country, className: styles['mega-menu-country-selector__option'] },
                        country.img && (React.createElement("img", { src: country.img, alt: country.name, className: styles['mega-menu-country-selector__flag'] })),
                        React.createElement(Typography.Text, null, country.name))); }))))));
    }
    return (React.createElement(Select2, __assign({ haveTags: false, isMultiple: false }, selectCountry, { className: "".concat(styles['mega-menu-country-selector__select'], " ").concat(selectCountry.className || '') })));
};
var MegaMenuCountrySelector = Component;

export { MegaMenuCountrySelector };
//# sourceMappingURL=MegaMenuCountrySelector.component.js.map
