'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
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
var ModalAnalystHeader_module = require('./ModalAnalystHeader.module.scss.js');
var ModalAnalyst_constants = require('../../ModalAnalyst.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var header = _a.header;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ModalAnalystHeader_module, cls: ['modal-analyst-header'] }) },
        (header === null || header === void 0 ? void 0 : header.prefixIcon) && (React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ showDefaultFallback: false, size: 20 }, header === null || header === void 0 ? void 0 : header.prefixIcon, { icon: (header === null || header === void 0 ? void 0 : header.prefixIcon.icon) && ModalAnalyst_constants.MODAL_ICONS[header === null || header === void 0 ? void 0 : header.prefixIcon.icon]
                ? ModalAnalyst_constants.MODAL_ICONS[header === null || header === void 0 ? void 0 : header.prefixIcon.icon]
                : header.prefixIcon.icon }))),
        React__default["default"].createElement("h2", null, header === null || header === void 0 ? void 0 : header.title),
        (header === null || header === void 0 ? void 0 : header.suffixIcon) && (React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ showDefaultFallback: false, size: 20 }, header === null || header === void 0 ? void 0 : header.suffixIcon, { icon: (header === null || header === void 0 ? void 0 : header.suffixIcon.icon) && ModalAnalyst_constants.MODAL_ICONS[header === null || header === void 0 ? void 0 : header.suffixIcon.icon]
                ? ModalAnalyst_constants.MODAL_ICONS[header === null || header === void 0 ? void 0 : header.suffixIcon.icon]
                : header.suffixIcon.icon })))));
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystHeader = Component;

exports.ModalAnalystHeader = ModalAnalystHeader;
//# sourceMappingURL=ModalAnalystHeader.component.js.map
