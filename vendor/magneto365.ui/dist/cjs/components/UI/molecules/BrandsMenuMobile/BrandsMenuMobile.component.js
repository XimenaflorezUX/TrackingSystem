'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MobileDrawer_component = require('../MobileDrawer/MobileDrawer.component.js');
var BrandsContainer_component = require('../BrandsContainer/BrandsContainer.component.js');
var BrandButton_component = require('../../organism/BrandMenu/children/BrandButton.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BrandsMenuMobile = function (_a) {
    var brandsProps = _a.brandsProps, companyLogo = _a.companyLogo, _b = _a.companySlug, companySlug = _b === void 0 ? '' : _b;
    var _c = React.useState(false), openDrawer = _c[0], setOpenDrawer = _c[1];
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(BrandButton_component, { rotate: openDrawer, onClick: function () { return setOpenDrawer(!openDrawer); }, companyLogo: companyLogo, companySlug: companySlug ? companySlug : '' }),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: openDrawer, onClose: function () { return setOpenDrawer(false); } },
            React__default["default"].createElement(BrandsContainer_component, tslib_es6.__assign({}, brandsProps)))));
};

module.exports = BrandsMenuMobile;
//# sourceMappingURL=BrandsMenuMobile.component.js.map
