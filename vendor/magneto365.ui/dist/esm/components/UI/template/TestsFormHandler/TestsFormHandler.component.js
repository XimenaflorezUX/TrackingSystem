import React, { useState } from 'react';
import styles from './TestsFormHandler.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import DocumentText from '../../../../assets/DocumentText.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import { Button } from '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { FormHandlerProvider, useFormHandler } from './TestsFormHandler.context.js';
import { validateCurrentStepAnswers } from '../../../../utils/validateAnswers/validateStepAnswers.js';

var TestFormHandler = function (_a) {
    var _b = _a.multiStep, multiStep = _b === void 0 ? false : _b, className = _a.className, onSubmit = _a.onSubmit, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.totalSteps, totalSteps = _d === void 0 ? 1 : _d, currentStep = _a.currentStep, onStepChange = _a.onStepChange, customButtonText = _a.customButtonText;
    return (React.createElement(FormHandlerProvider, null,
        React.createElement(FormHandlerInner, { multiStep: multiStep, className: className, onSubmit: onSubmit, isDisabled: isDisabled, totalSteps: totalSteps, currentStep: currentStep, onStepChange: onStepChange, customButtonText: customButtonText }, children)));
};
var FormHandlerInner = function (_a) {
    var _b = _a.multiStep, multiStep = _b === void 0 ? false : _b, className = _a.className, onSubmit = _a.onSubmit, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.totalSteps, totalSteps = _d === void 0 ? 1 : _d, currentStep = _a.currentStep, onStepChange = _a.onStepChange, customButtonText = _a.customButtonText;
    var _e = useFormHandler(), answers = _e.answers, currentStepQuestions = _e.currentStepQuestions, setSubmitted = _e.setSubmitted;
    var previous = customButtonText.previous, next = customButtonText.next, finish = customButtonText.finish;
    var _f = useState(0), internalStep = _f[0], setInternalStep = _f[1];
    var step = currentStep !== undefined ? currentStep : internalStep;
    var handleSubmit = function (e) {
        e.preventDefault();
        setSubmitted(true);
        onSubmit(answers);
    };
    var handleNextStep = function () {
        var allAnswered = validateCurrentStepAnswers(currentStepQuestions, answers);
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
    return (React.createElement("div", { className: "".concat(className, " ").concat(styles['magneto-ui-form-container']) },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("div", { className: styles['magneto-ui-form-container-questions'] }, children),
            React.createElement("div", { className: styles['magneto-ui-form-container-controlpanel'] },
                React.createElement("div", null, multiStep && step > 0 && (React.createElement(Button, { className: "".concat(styles['magneto-ui-form-container-controlpanel__actionButton'], " ").concat(isDisabled ? styles['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''), buttonText: previous, onClick: handlePreviousStep, disabled: isDisabled }))),
                React.createElement("div", null, multiStep && (React.createElement("div", { className: styles['magneto-ui-form-container-controlpanel__steps'] },
                    React.createElement(IconItem, { icon: DocumentText, size: 25 }),
                    React.createElement("p", null, "".concat(step + 1, " / ").concat(totalSteps))))),
                React.createElement("div", null,
                    multiStep && step < totalSteps - 1 && (React.createElement(Button, { className: styles['magneto-ui-form-container-controlpanel__actionButton'], buttonText: next, onClick: handleNextStep })),
                    (!multiStep || step === totalSteps - 1) && (React.createElement(Button, { className: "".concat(styles['magneto-ui-form-container-controlpanel__actionButton'], " ").concat(isDisabled ? styles['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''), type: "submit", buttonText: finish, disabled: isDisabled })))))));
};

export { TestFormHandler as default };
//# sourceMappingURL=TestsFormHandler.component.js.map
