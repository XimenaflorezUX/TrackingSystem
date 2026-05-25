import React from 'react';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import style from './headerDrawerCompany.module.scss.js';

var Component = function (_a) {
    var logo = _a.logo, alt = _a.alt, logoCompany = _a.logoCompany, logoCompanyAlt = _a.logoCompanyAlt, flag = _a.flag, flagAlt = _a.flagAlt;
    return (React.createElement("div", { className: style['header-drawer-company'] },
        React.createElement(LogoComponent, { logo: logo, alt: alt }),
        React.createElement(LogoComponent, { logo: logoCompany, alt: logoCompanyAlt }),
        React.createElement("img", { src: flag, alt: flagAlt, loading: "lazy", width: '25px', height: '20px' })));
};
var HeaderDrawerCompany = Component;

export { HeaderDrawerCompany };
//# sourceMappingURL=HeaderDrawerCompany.components.js.map
