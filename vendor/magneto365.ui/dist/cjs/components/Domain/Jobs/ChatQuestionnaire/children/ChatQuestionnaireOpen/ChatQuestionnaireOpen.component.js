'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Check = require('../../../../../../assets/Check.svg.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
var ComparativeCounter_component = require('../../../../../UI/atoms/ComparativeCounter/ComparativeCounter.component.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var ChatQuestionnaireOpen_module = require('./ChatQuestionnaireOpen.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireOpen_module);
var ChatQuestionnaireOpen = function (_a) {
    var _b, _c, _d, _e;
    var className = _a.className, classNames = _a.classNames, renderRight = _a.renderRight, rest = tslib_es6.__rest(_a, ["className", "classNames", "renderRight"]);
    var count = (_e = (_c = (_b = rest.value) === null || _b === void 0 ? void 0 : _b.toString().length) !== null && _c !== void 0 ? _c : (_d = rest.defaultValue) === null || _d === void 0 ? void 0 : _d.toString().length) !== null && _e !== void 0 ? _e : 0;
    var ref = React.useRef(rest.ref);
    React.useEffect(function () {
        var el = ref.current;
        if (!el)
            return;
        var handler = function () {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        };
        handler();
    }, [rest.value]);
    return (React__default["default"].createElement("div", { className: cx('short', classNames === null || classNames === void 0 ? void 0 : classNames.container) },
        React__default["default"].createElement("div", { className: cx('short__field', classNames === null || classNames === void 0 ? void 0 : classNames.field) },
            React__default["default"].createElement("textarea", tslib_es6.__assign({ className: cx('short__input', className), rows: 1, ref: ref }, rest)), renderRight === null || renderRight === void 0 ? void 0 :
            renderRight({ classNameBtnSend: cx('short__button'), icon: React__default["default"].createElement(Icon_component.IconItem, { className: cx('short__icon'), icon: Check, size: 20 }) })),
        React__default["default"].createElement(ComparativeCounter_component.ComparativeCounter, { className: classNames === null || classNames === void 0 ? void 0 : classNames.counter, current: count, max: rest.maxLength, position: "right" })));
};

exports.ChatQuestionnaireOpen = ChatQuestionnaireOpen;
//# sourceMappingURL=ChatQuestionnaireOpen.component.js.map
