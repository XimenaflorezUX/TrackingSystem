'use strict';

var React = require('react');
var TestsFormHandler_module = require('./TestsFormHandler.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var DocumentText = require('../../../../assets/DocumentText.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
var Button_component = require('../../atoms/Button/Button.component.js');
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
var TestsFormHandler_context = require('./TestsFormHandler.context.js');
var validateStepAnswers = require('../../../../utils/validateAnswers/validateStepAnswers.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TestFormHandler = function (_a) {
    var _b = _a.multiStep, multiStep = _b === void 0 ? false : _b, className = _a.className, onSubmit = _a.onSubmit, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.totalSteps, totalSteps = _d === void 0 ? 1 : _d, currentStep = _a.currentStep, onStepChange = _a.onStepChange, customButtonText = _a.customButtonText;
    return (React__default["default"].createElement(TestsFormHandler_context.FormHandlerProvider, null,
        React__default["default"].createElement(FormHandlerInner, { multiStep: multiStep, className: className, onSubmit: onSubmit, isDisabled: isDisabled, totalSteps: totalSteps, currentStep: currentStep, onStepChange: onStepChange, customButtonText: customButtonText }, children)));
};
var FormHandlerInner = function (_a) {
    var _b = _a.multiStep, multiStep = _b === void 0 ? false : _b, className = _a.className, onSubmit = _a.onSubmit, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.totalSteps, totalSteps = _d === void 0 ? 1 : _d, currentStep = _a.currentStep, onStepChange = _a.onStepChange, customButtonText = _a.customButtonText;
    var _e = TestsFormHandler_context.useFormHandler(), answers = _e.answers, currentStepQuestions = _e.currentStepQuestions, setSubmitted = _e.setSubmitted;
    var previous = customButtonText.previous, next = customButtonText.next, finish = customButtonText.finish;
    var _f = React.useState(0), internalStep = _f[0], setInternalStep = _f[1];
    var step = currentStep !== undefined ? currentStep : internalStep;
    var handleSubmit = function (e) {
        e.preventDefault();
        setSubmitted(true);
        onSubmit(answers);
    };
    var handleNextStep = function () {
        var allAnswered = validateStepAnswers.validateCurrentStepAnswers(currentStepQuestions, answers);
        if (!allAnswered) {
            setSubmitted(true);
            return;
        }
        setSubmitted(false);
        if (onStepChange) {
            onStepChange(step + 1);
        }
        else {
            setInternalStep(step + 1);
        }
    };
    var handlePreviousStep = function () {
        setSubmitted(false);
        if (onStepChange) {
            onStepChange(step - 1);
        }
        else {
            setInternalStep(step - 1);
        }
    };
    return (React__default["default"].createElement("div", { className: "".concat(className, " ").concat(TestsFormHandler_module['magneto-ui-form-container']) },
        React__default["default"].createElement("form", { onSubmit: handleSubmit },
            React__default["default"].createElement("div", { className: TestsFormHandler_module['magneto-ui-form-container-questions'] }, children),
            React__default["default"].createElement("div", { className: TestsFormHandler_module['magneto-ui-form-container-controlpanel'] },
                React__default["default"].createElement("div", null, multiStep && step > 0 && (React__default["default"].createElement(Button_component.Button, { className: "".concat(TestsFormHandler_module['magneto-ui-form-container-controlpanel__actionButton'], " ").concat(isDisabled ? TestsFormHandler_module['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''), buttonText: previous, onClick: handlePreviousStep, disabled: isDisabled }))),
                React__default["default"].createElement("div", null, multiStep && (React__default["default"].createElement("div", { className: TestsFormHandler_module['magneto-ui-form-container-controlpanel__steps'] },
                    React__default["default"].createElement(Icon_component.IconItem, { icon: DocumentText, size: 25 }),
                    React__default["default"].createElement("p", null, "".concat(step + 1, " / ").concat(totalSteps))))),
                React__default["default"].createElement("div", null,
                    multiStep && step < totalSteps - 1 && (React__default["default"].createElement(Button_component.Button, { className: TestsFormHandler_module['magneto-ui-form-container-controlpanel__actionButton'], buttonText: next, onClick: handleNextStep })),
                    (!multiStep || step === totalSteps - 1) && (React__default["default"].createElement(Button_component.Button, { className: "".concat(TestsFormHandler_module['magneto-ui-form-container-controlpanel__actionButton'], " ").concat(isDisabled ? TestsFormHandler_module['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''), type: "submit", buttonText: finish, disabled: isDisabled })))))));
};

module.exports = TestFormHandler;
//# sourceMappingURL=TestsFormHandler.component.js.map
