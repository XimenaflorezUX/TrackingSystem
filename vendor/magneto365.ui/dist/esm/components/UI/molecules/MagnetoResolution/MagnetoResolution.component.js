import React from 'react';
import MinTrabajo from '../../../../assets/logo-SPE-2024.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './MagnetoResolution.module.scss.js';

var MagnetoResolution = function (_a) {
    var resolutionText = _a.resolutionText, resolutionHrefText = _a.resolutionHrefText, resolutionHref = _a.resolutionHref;
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-magneto-resolution")]) },
        React.createElement("img", { className: "".concat(style["".concat(classMUI, "-magneto-resolution__img")]), src: MinTrabajo, alt: "min-trabajo-img", loading: "lazy", width: "80px" }),
        React.createElement("p", { className: "".concat(style["".concat(classMUI, "-magneto-resolution__text")]) },
            resolutionText,
            React.createElement("a", { className: "".concat(style["".concat(classMUI, "-magneto-resolution__text--link")]), href: resolutionHref }, resolutionHrefText))));
};

export { MagnetoResolution as default };
//# sourceMappingURL=MagnetoResolution.component.js.map
