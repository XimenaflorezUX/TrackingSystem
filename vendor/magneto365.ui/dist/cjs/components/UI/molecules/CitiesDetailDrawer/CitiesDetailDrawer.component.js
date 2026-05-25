'use strict';

var React = require('react');
var Location = require('../../../../assets/Location.svg.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
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
var Link_component = require('../../atoms/Link/Link.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var CitiesDetailDrawer_module = require('./CitiesDetailDrawer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CitiesDetailDrawer = function (_a) {
    var cities = _a.cities, isRemote = _a.isRemote, textRemote = _a.textRemote;
    return (React__default["default"].createElement("div", { className: CitiesDetailDrawer_module['magneto-ui-cities-detail-drawer'] }, cities && (cities === null || cities === void 0 ? void 0 : cities.length) ? (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: CitiesDetailDrawer_module['magneto-ui-cities-detail-drawer__item-detail-icon'] },
            React__default["default"].createElement(Icon_component.IconItem, { alt: 'Location-icon', icon: Location, hover: false, size: 16 })),
        React__default["default"].createElement("div", { className: CitiesDetailDrawer_module['magneto-ui-cities-detail-drawer__item-detail-text'] },
            isRemote && (React__default["default"].createElement("p", { className: CitiesDetailDrawer_module['magneto-ui-cities-detail-drawer__item-detail-text-remote'] }, textRemote)),
            cities &&
                cities.map(function (_a, index) {
                    var name = _a.name, url = _a.url, title = _a.title;
                    return (React__default["default"].createElement("div", { className: CitiesDetailDrawer_module['magneto-ui-cities-detail-drawer__item-detail-text-link'], key: url },
                        url ? React__default["default"].createElement(Link_component.Link, { href: url, target: "_blank", text: name, title: title }) : React__default["default"].createElement("span", null, name),
                        index !== cities.length - 1 && React__default["default"].createElement("span", null, ' - ')));
                })))) : null));
};

module.exports = CitiesDetailDrawer;
//# sourceMappingURL=CitiesDetailDrawer.component.js.map
