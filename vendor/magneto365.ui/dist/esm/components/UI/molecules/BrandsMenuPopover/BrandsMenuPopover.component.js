import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import BrandsContainer from '../BrandsContainer/BrandsContainer.component.js';
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
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import { Popover } from '../../atoms/Popover/Popover.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import BrandButton from '../../organism/BrandMenu/children/BrandButton.component.js';
import withClickOut from '../../../hoc/withClickOut/index.js';

var BrandsMenuPopover = function (_a) {
    var brandsProps = _a.brandsProps, companyLogo = _a.companyLogo, companySlug = _a.companySlug, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c;
    return (React.createElement(Popover, { show: clickOut, widthBase: 120, positionX: "right", positionY: "bottom", staticContent: true, content: React.createElement(BrandsContainer, __assign({ closeBrands: function () { return setClickOut(!clickOut); } }, brandsProps)) },
        React.createElement(BrandButton, { rotate: clickOut, companyLogo: companyLogo, companySlug: companySlug ? companySlug : '', onClick: function () { return setClickOut(!clickOut); } })));
};
var BrandsMenuPopover$1 = withClickOut(BrandsMenuPopover);

export { BrandsMenuPopover$1 as default };
//# sourceMappingURL=BrandsMenuPopover.component.js.map
