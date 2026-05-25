'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SimilarCard_module = require('../../SimilarCard.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ArrowRight2 = require('../../../../../../assets/ArrowRight2.svg.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SimilarCard_module);
var Component = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, _b = _a.showIconMobile, showIconMobile = _b === void 0 ? false : _b;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Icon_component.IconItem, { className: cx('similar-card__arrow', { 'similar-card__arrow-mobile': !showIconMobile }, className), icon: src || ArrowRight2, alt: (alt === null || alt === void 0 ? void 0 : alt.toLowerCase()) || 'card-icon' })));
};
var SimilarCardIcon = Component;

exports.SimilarCardIcon = SimilarCardIcon;
//# sourceMappingURL=SimilarCardIcon.component.js.map
