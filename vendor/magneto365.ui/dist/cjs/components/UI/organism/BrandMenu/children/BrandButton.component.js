'use strict';

var React = require('react');
var Icon_component = require('../../../atoms/Icon/Icon.component.js');
var ArrowDown2 = require('../../../../../assets/ArrowDown2.svg.js');
require('../../../atoms/BarChart/enums.js');
require('../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../atoms/Button/Button.component.js');
require('../../../atoms/Collapse/Collapse.component.js');
require('../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../constants/stories/vacancies.constants.js');
require('../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../constants/img.constants.js');
require('../../../../../utils/date/dateInput.util.js');
require('../../../atoms/Field/Field.component.js');
require('../../../atoms/Typography/Typography.component.js');
require('../../../atoms/Typography/Typography.interface.js');
require('../../../atoms/InputFile/InputFile.component.js');
require('../../../atoms/Paragraph/Paragraph.component.js');
require('../../../atoms/Radio/Radio.interface.js');
require('../../../atoms/Radio/Radio.constants.js');
require('../../../../../constants/jobDetails.constants.js');
require('../../../atoms/Toggle/Toggle.component.js');
require('../../../../hooks/useMediaQuery/index.js');
var BrandButton_module = require('./BrandButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Muiclass = 'magneto-ui';
var BrandButton = function (_a) {
    var rotate = _a.rotate, companyLogo = _a.companyLogo, companySlug = _a.companySlug, onClick = _a.onClick;
    var rotateIcon = React.useMemo(function () {
        return rotate ? BrandButton_module['rotate'] : '';
    }, [rotate]);
    return (React__default["default"].createElement("div", { className: BrandButton_module["".concat(Muiclass, "-brand-button")] },
        React__default["default"].createElement("button", { className: BrandButton_module["".concat(Muiclass, "-brand-button__company-logo")], onClick: onClick },
            React__default["default"].createElement("img", { className: BrandButton_module["".concat(Muiclass, "-brand-button__company-logo--img")], src: companyLogo, alt: companySlug }),
            React__default["default"].createElement("span", { className: "".concat(BrandButton_module["".concat(Muiclass, "-brand-button__icon")], " ").concat(rotateIcon) },
                React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown2 })))));
};

module.exports = BrandButton;
//# sourceMappingURL=BrandButton.component.js.map
