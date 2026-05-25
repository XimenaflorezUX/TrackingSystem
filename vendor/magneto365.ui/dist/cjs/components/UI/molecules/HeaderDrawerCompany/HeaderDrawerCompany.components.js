'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
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
var Logo_component = require('../../atoms/Logo/Logo.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var headerDrawerCompany_module = require('./headerDrawerCompany.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var logo = _a.logo, alt = _a.alt, logoCompany = _a.logoCompany, logoCompanyAlt = _a.logoCompanyAlt, flag = _a.flag, flagAlt = _a.flagAlt;
    return (React__default["default"].createElement("div", { className: headerDrawerCompany_module['header-drawer-company'] },
        React__default["default"].createElement(Logo_component.LogoComponent, { logo: logo, alt: alt }),
        React__default["default"].createElement(Logo_component.LogoComponent, { logo: logoCompany, alt: logoCompanyAlt }),
        React__default["default"].createElement("img", { src: flag, alt: flagAlt, loading: "lazy", width: '25px', height: '20px' })));
};
var HeaderDrawerCompany = Component;

exports.HeaderDrawerCompany = HeaderDrawerCompany;
//# sourceMappingURL=HeaderDrawerCompany.components.js.map
