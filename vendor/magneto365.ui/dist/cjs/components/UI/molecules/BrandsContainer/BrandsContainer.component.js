'use strict';

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Close = require('../../../../assets/Close.svg.js');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var BrandsContainer_module = require('./BrandsContainer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Muiclass = 'magneto-ui';
var BrandsContainer = function (_a) {
    var brands = _a.brands, closeBrands = _a.closeBrands, ourBrandsText = _a.ourBrandsText;
    return (React__default["default"].createElement("div", { className: BrandsContainer_module["".concat(Muiclass, "-brands")] },
        React__default["default"].createElement("div", { className: BrandsContainer_module["".concat(Muiclass, "-brands__header")] },
            React__default["default"].createElement("div", { className: BrandsContainer_module["".concat(Muiclass, "-brands__header--row")] },
                React__default["default"].createElement("p", null, ourBrandsText),
                React__default["default"].createElement("button", { title: "cerrar menu", onClick: closeBrands, type: "button" },
                    React__default["default"].createElement(Icon_component.IconItem, { size: 15, icon: Close })))),
        React__default["default"].createElement("div", { className: BrandsContainer_module["".concat(Muiclass, "-brands-container")] },
            React__default["default"].createElement("div", { className: BrandsContainer_module["".concat(Muiclass, "-brands-container__brands")] }, brands === null || brands === void 0 ? void 0 : brands.map(function (_a, index) {
                var brandAlt = _a.brandAlt, brandImg = _a.brandImg, brandTitle = _a.brandTitle, brandUrl = _a.brandUrl;
                return (React__default["default"].createElement("a", { href: brandUrl, className: BrandsContainer_module["".concat(Muiclass, "-brands-container__brands--brand")], key: index },
                    React__default["default"].createElement("img", { src: brandImg, alt: brandAlt, loading: "lazy", width: '100px', height: '26px' }),
                    React__default["default"].createElement("p", null, brandTitle)));
            })))));
};

module.exports = BrandsContainer;
//# sourceMappingURL=BrandsContainer.component.js.map
