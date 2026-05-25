'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var BrandsContainer_component = require('../BrandsContainer/BrandsContainer.component.js');
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
var Popover_component = require('../../atoms/Popover/Popover.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var BrandButton_component = require('../../organism/BrandMenu/children/BrandButton.component.js');
var index = require('../../../hoc/withClickOut/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BrandsMenuPopover = function (_a) {
    var brandsProps = _a.brandsProps, companyLogo = _a.companyLogo, companySlug = _a.companySlug, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c;
    return (React__default["default"].createElement(Popover_component.Popover, { show: clickOut, widthBase: 120, positionX: "right", positionY: "bottom", staticContent: true, content: React__default["default"].createElement(BrandsContainer_component, tslib_es6.__assign({ closeBrands: function () { return setClickOut(!clickOut); } }, brandsProps)) },
        React__default["default"].createElement(BrandButton_component, { rotate: clickOut, companyLogo: companyLogo, companySlug: companySlug ? companySlug : '', onClick: function () { return setClickOut(!clickOut); } })));
};
var BrandsMenuPopover$1 = index(BrandsMenuPopover);

module.exports = BrandsMenuPopover$1;
//# sourceMappingURL=BrandsMenuPopover.component.js.map
