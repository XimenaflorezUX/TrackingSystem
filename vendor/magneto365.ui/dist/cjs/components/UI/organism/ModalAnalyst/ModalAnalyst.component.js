'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ModalAnalystContainer_component = require('./children/ModalAnalystContainer/ModalAnalystContainer.component.js');
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
require('./children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('./children/ModalAnalystFooter/ModalAnalystFooter.interface.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var _b = React.useState(0), step = _b[0], setStep = _b[1];
    return React__default["default"].createElement(ModalAnalystContainer_component.ModalAnalystContainer, tslib_es6.__assign({ step: step, setStep: setStep }, props));
};
/**
 * Organism UI component of analyst template
 */
var ModalAnalyst = Component;

exports.ModalAnalyst = ModalAnalyst;
//# sourceMappingURL=ModalAnalyst.component.js.map
