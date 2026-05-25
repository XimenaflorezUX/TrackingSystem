'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var _3dRobotMusic = require('../../../../../../assets/img/3d-robot-music.webp.js');
var ArrowLeft2 = require('../../../../../../assets/ArrowLeft2.svg.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
var Typography_component = require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var ChatQuestionnaireHeader_module = require('./ChatQuestionnaireHeader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireHeader_module);
var ChatQuestionnaireHeader = function (_a) {
    var classNames = _a.classNames, children = _a.children, onBack = _a.onBack, rest = tslib_es6.__rest(_a, ["classNames", "children", "onBack"]);
    return (React__default["default"].createElement("header", tslib_es6.__assign({}, rest, { className: cx('header', rest.className) }),
        React__default["default"].createElement("button", { type: "button", onClick: function () { return onBack === null || onBack === void 0 ? void 0 : onBack(); }, className: cx('clean-button', classNames === null || classNames === void 0 ? void 0 : classNames.iconBack), "aria-label": "Go back" },
            React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowLeft2, size: 20 })),
        React__default["default"].createElement(Icon_component.IconItem, { icon: _3dRobotMusic, size: 49, className: classNames === null || classNames === void 0 ? void 0 : classNames.iconLogo }),
        React__default["default"].createElement(Typography_component.Typography.Title, { size: "md-2", weight: "bold", color: "grey-700", className: classNames === null || classNames === void 0 ? void 0 : classNames.title, level: 3 }, children)));
};

exports.ChatQuestionnaireHeader = ChatQuestionnaireHeader;
//# sourceMappingURL=ChatQuestionnaireHeader.component.js.map
