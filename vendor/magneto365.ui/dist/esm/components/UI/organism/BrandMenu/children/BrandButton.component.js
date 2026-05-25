import React, { useMemo } from 'react';
import { IconItem } from '../../../atoms/Icon/Icon.component.js';
import ArrowDown2 from '../../../../../assets/ArrowDown2.svg.js';
import '../../../atoms/BarChart/enums.js';
import '../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../atoms/Button/Button.component.js';
import '../../../atoms/Collapse/Collapse.component.js';
import '../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../constants/stories/vacancies.constants.js';
import '../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../constants/img.constants.js';
import '../../../../../utils/date/dateInput.util.js';
import '../../../atoms/Field/Field.component.js';
import '../../../atoms/Typography/Typography.component.js';
import '../../../atoms/Typography/Typography.interface.js';
import '../../../atoms/InputFile/InputFile.component.js';
import '../../../atoms/Paragraph/Paragraph.component.js';
import '../../../atoms/Radio/Radio.interface.js';
import '../../../atoms/Radio/Radio.constants.js';
import '../../../../../constants/jobDetails.constants.js';
import '../../../atoms/Toggle/Toggle.component.js';
import '../../../../hooks/useMediaQuery/index.js';
import style from './BrandButton.module.scss.js';

var Muiclass = 'magneto-ui';
var BrandButton = function (_a) {
    var rotate = _a.rotate, companyLogo = _a.companyLogo, companySlug = _a.companySlug, onClick = _a.onClick;
    var rotateIcon = useMemo(function () {
        return rotate ? style['rotate'] : '';
    }, [rotate]);
    return (React.createElement("div", { className: style["".concat(Muiclass, "-brand-button")] },
        React.createElement("button", { className: style["".concat(Muiclass, "-brand-button__company-logo")], onClick: onClick },
            React.createElement("img", { className: style["".concat(Muiclass, "-brand-button__company-logo--img")], src: companyLogo, alt: companySlug }),
            React.createElement("span", { className: "".concat(style["".concat(Muiclass, "-brand-button__icon")], " ").concat(rotateIcon) },
                React.createElement(IconItem, { icon: ArrowDown2 })))));
};

export { BrandButton as default };
//# sourceMappingURL=BrandButton.component.js.map
