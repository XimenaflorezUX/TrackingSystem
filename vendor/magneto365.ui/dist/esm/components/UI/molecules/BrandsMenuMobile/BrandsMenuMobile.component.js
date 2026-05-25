import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { MobileDrawer } from '../MobileDrawer/MobileDrawer.component.js';
import BrandsContainer from '../BrandsContainer/BrandsContainer.component.js';
import BrandButton from '../../organism/BrandMenu/children/BrandButton.component.js';

var BrandsMenuMobile = function (_a) {
    var brandsProps = _a.brandsProps, companyLogo = _a.companyLogo, _b = _a.companySlug, companySlug = _b === void 0 ? '' : _b;
    var _c = useState(false), openDrawer = _c[0], setOpenDrawer = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(BrandButton, { rotate: openDrawer, onClick: function () { return setOpenDrawer(!openDrawer); }, companyLogo: companyLogo, companySlug: companySlug ? companySlug : '' }),
        React.createElement(MobileDrawer, { isOpen: openDrawer, onClose: function () { return setOpenDrawer(false); } },
            React.createElement(BrandsContainer, __assign({}, brandsProps)))));
};

export { BrandsMenuMobile as default };
//# sourceMappingURL=BrandsMenuMobile.component.js.map
