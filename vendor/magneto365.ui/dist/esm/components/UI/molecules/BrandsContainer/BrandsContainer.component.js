import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Close from '../../../../assets/Close.svg.js';
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
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import style from './BrandsContainer.module.scss.js';

var Muiclass = 'magneto-ui';
var BrandsContainer = function (_a) {
    var brands = _a.brands, closeBrands = _a.closeBrands, ourBrandsText = _a.ourBrandsText;
    return (React.createElement("div", { className: style["".concat(Muiclass, "-brands")] },
        React.createElement("div", { className: style["".concat(Muiclass, "-brands__header")] },
            React.createElement("div", { className: style["".concat(Muiclass, "-brands__header--row")] },
                React.createElement("p", null, ourBrandsText),
                React.createElement("button", { title: "cerrar menu", onClick: closeBrands, type: "button" },
                    React.createElement(IconItem, { size: 15, icon: Close })))),
        React.createElement("div", { className: style["".concat(Muiclass, "-brands-container")] },
            React.createElement("div", { className: style["".concat(Muiclass, "-brands-container__brands")] }, brands === null || brands === void 0 ? void 0 : brands.map(function (_a, index) {
                var brandAlt = _a.brandAlt, brandImg = _a.brandImg, brandTitle = _a.brandTitle, brandUrl = _a.brandUrl;
                return (React.createElement("a", { href: brandUrl, className: style["".concat(Muiclass, "-brands-container__brands--brand")], key: index },
                    React.createElement("img", { src: brandImg, alt: brandAlt, loading: "lazy", width: '100px', height: '26px' }),
                    React.createElement("p", null, brandTitle)));
            })))));
};

export { BrandsContainer as default };
//# sourceMappingURL=BrandsContainer.component.js.map
