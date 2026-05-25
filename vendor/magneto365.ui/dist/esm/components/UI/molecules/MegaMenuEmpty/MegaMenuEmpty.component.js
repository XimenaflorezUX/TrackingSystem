import React from 'react';
import style from './MegaMenuEmpty.module.scss.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { staticMessages } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';

var MegaMenuEmpty = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, customStyle = _a.customStyle, _b = _a.imageData, imageData = _b === void 0 ? 'noData' : _b, _c = _a.imageHeight, imageHeight = _c === void 0 ? 170 : _c;
    return (React.createElement("div", { className: style['mega-menu-empty'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.content },
        React.createElement("h4", { className: style['mega-menu-empty__title'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.title }, title),
        React.createElement("p", { className: style['mega-menu-empty__subtitle'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitle }, subtitle),
        React.createElement("img", { className: style['mega-menu-empty__image'], src: staticMessages[imageData], height: imageHeight, style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.image })));
};

export { MegaMenuEmpty as default };
//# sourceMappingURL=MegaMenuEmpty.component.js.map
