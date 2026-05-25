'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var CitiesDetailDrawer_component = require('../CitiesDetailDrawer/CitiesDetailDrawer.component.js');
var JobDetails_module = require('./JobDetails.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerDetailsList = _a.offerDetailsList, iconList = _a.iconList, altList = _a.altList, cities = _a.cities, textRemote = _a.textRemote, isRemote = _a.isRemote;
    var jobDetailsList = offerDetailsList === null || offerDetailsList === void 0 ? void 0 : offerDetailsList.map(function (offerDetailText, index) { return ({
        icon: iconList && iconList[index],
        offerDetailText: offerDetailText,
        alt: altList && altList[index]
    }); }).filter(function (_a, index) {
        var offerDetailText = _a.offerDetailText;
        return !!offerDetailText && index !== 1;
    });
    return (React__default["default"].createElement("div", { className: JobDetails_module['magneto-ui-job-details'] },
        React__default["default"].createElement("div", { className: JobDetails_module['magneto-ui-job-details__wrapper'] },
            (jobDetailsList === null || jobDetailsList === void 0 ? void 0 : jobDetailsList.length) &&
                (jobDetailsList === null || jobDetailsList === void 0 ? void 0 : jobDetailsList.map(function (_a) {
                    var offerDetailText = _a.offerDetailText, icon = _a.icon, _b = _a.alt, alt = _b === void 0 ? '' : _b;
                    return (React__default["default"].createElement("div", { key: "".concat(offerDetailText, "-JobDetails"), className: JobDetails_module['magneto-ui-job-details__item-detail'] },
                        React__default["default"].createElement("div", { className: JobDetails_module['magneto-ui-job-details__item-detail-icon'] },
                            React__default["default"].createElement(Icon_component.IconItem, { alt: alt, icon: icon, hover: false, size: 16 })),
                        React__default["default"].createElement("p", { className: JobDetails_module['magneto-ui-job-details__item-detail-text'] }, offerDetailText)));
                })),
            React__default["default"].createElement(CitiesDetailDrawer_component, { cities: cities, isRemote: isRemote, textRemote: textRemote }))));
};
/**
 * UI Molecule component for Job Detail
 */
Component.displayName = 'JobDetails';
var JobDetails = Component;

exports.JobDetails = JobDetails;
//# sourceMappingURL=JobDetails.component.js.map
