'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var noLogo = require('../../../../assets/noLogo.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
var img_constants = require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
var ShareButton_component = require('../../atoms/ShareButton/ShareButton.component.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var JobFooterCard_module = require('./JobFooterCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobFooterCard_module);
var Component = function (_a) {
    var offerFooterHeader = _a.offerFooterHeader, offerCompanyLogo = _a.offerCompanyLogo, offerFooterList = _a.offerFooterList, iconList = _a.iconList, shareButtonProps = _a.shareButtonProps, companyImgAlt = _a.companyImgAlt, companyName = _a.companyName, externalChild = _a.externalChild, _b = _a.isApplied, isApplied = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, className = _a.className;
    var jobFooterList = offerFooterList === null || offerFooterList === void 0 ? void 0 : offerFooterList.map(function (_a, index) {
        var href = _a.href, title = _a.title, ariaLabel = _a.ariaLabel;
        return ({
            icon: iconList && iconList[index],
            href: href,
            ariaLabel: ariaLabel,
            title: title
        });
    });
    var isDetailedVariant = variant === 'detailed';
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-job-footer-card', className) },
        React__default["default"].createElement("img", { src: offerCompanyLogo ? offerCompanyLogo : noLogo, alt: companyImgAlt ? companyImgAlt : "".concat(img_constants.altDynamicText.workAt, " ").concat(companyName), loading: "lazy", width: '100px', height: '100px' }),
        React__default["default"].createElement("div", { className: cx({ 'magneto-ui-job-footer-card__wrapper': isDetailedVariant }) },
            !isApplied && isDetailedVariant && (React__default["default"].createElement("div", { className: cx('magneto-ui-job-footer-card__wrapper--apply-buttons') }, externalChild)),
            React__default["default"].createElement("div", { className: cx('magneto-ui-job-footer-card__icons') },
                React__default["default"].createElement("p", null, offerFooterHeader),
                React__default["default"].createElement("div", { className: cx('magneto-ui-job-footer-card__icons--wrapper') },
                    (jobFooterList === null || jobFooterList === void 0 ? void 0 : jobFooterList.length) &&
                        (jobFooterList === null || jobFooterList === void 0 ? void 0 : jobFooterList.map(function (_a, i) {
                            var href = _a.href, ariaLabel = _a.ariaLabel, icon = _a.icon, title = _a.title;
                            return href !== null && (React__default["default"].createElement("a", { key: "".concat(href, "-jobFooterList") + i, title: title, href: href, target: "_blank", rel: "noreferrer", "aria-label": ariaLabel },
                                React__default["default"].createElement(Icon_component.IconItem, { hover: false, icon: icon || undefined })));
                        })),
                    React__default["default"].createElement("div", { className: cx('magneto-ui__share-button') },
                        React__default["default"].createElement(ShareButton_component.ShareButton, tslib_es6.__assign({}, shareButtonProps))))))));
};
/**
 * UI Molecule component for Job Footer Card
 */
var JobFooterCard = Component;

exports.JobFooterCard = JobFooterCard;
//# sourceMappingURL=JobFooterCard.component.js.map
