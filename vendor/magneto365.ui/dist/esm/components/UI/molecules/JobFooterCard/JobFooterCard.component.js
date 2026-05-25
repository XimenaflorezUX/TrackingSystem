import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import NoLogo from '../../../../assets/noLogo.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import { altDynamicText } from '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import { ShareButton } from '../../atoms/ShareButton/ShareButton.component.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './JobFooterCard.module.scss.js';

var cx = classNames.bind(styles);
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
    return (React.createElement("div", { className: cx('magneto-ui-job-footer-card', className) },
        React.createElement("img", { src: offerCompanyLogo ? offerCompanyLogo : NoLogo, alt: companyImgAlt ? companyImgAlt : "".concat(altDynamicText.workAt, " ").concat(companyName), loading: "lazy", width: '100px', height: '100px' }),
        React.createElement("div", { className: cx({ 'magneto-ui-job-footer-card__wrapper': isDetailedVariant }) },
            !isApplied && isDetailedVariant && (React.createElement("div", { className: cx('magneto-ui-job-footer-card__wrapper--apply-buttons') }, externalChild)),
            React.createElement("div", { className: cx('magneto-ui-job-footer-card__icons') },
                React.createElement("p", null, offerFooterHeader),
                React.createElement("div", { className: cx('magneto-ui-job-footer-card__icons--wrapper') },
                    (jobFooterList === null || jobFooterList === void 0 ? void 0 : jobFooterList.length) &&
                        (jobFooterList === null || jobFooterList === void 0 ? void 0 : jobFooterList.map(function (_a, i) {
                            var href = _a.href, ariaLabel = _a.ariaLabel, icon = _a.icon, title = _a.title;
                            return href !== null && (React.createElement("a", { key: "".concat(href, "-jobFooterList") + i, title: title, href: href, target: "_blank", rel: "noreferrer", "aria-label": ariaLabel },
                                React.createElement(IconItem, { hover: false, icon: icon || undefined })));
                        })),
                    React.createElement("div", { className: cx('magneto-ui__share-button') },
                        React.createElement(ShareButton, __assign({}, shareButtonProps))))))));
};
/**
 * UI Molecule component for Job Footer Card
 */
var JobFooterCard = Component;

export { JobFooterCard };
//# sourceMappingURL=JobFooterCard.component.js.map
