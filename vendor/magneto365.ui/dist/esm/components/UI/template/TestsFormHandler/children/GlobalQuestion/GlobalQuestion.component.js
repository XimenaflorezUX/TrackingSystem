import { __spreadArray } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useEffect } from 'react';
import styles from './GlobalQuestion.module.scss.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import { Radio } from '../../../../atoms/Radio/Radio.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { useFormHandler } from '../../TestsFormHandler.context.js';
import { isMissingValidator } from '../../../../../../utils/validateAnswers/validateStepAnswers.js';
import GlobalQuestionError from '../GlobalQuestionError/GlobalQuestionError.component.js';

var GlobalQuestion = function (_a) {
    var _b, _c;
    var question = _a.question, errorText = _a.errorText, idx = _a.idx;
    var _d = useFormHandler(), answers = _d.answers, submitted = _d.submitted, handleChange = _d.handleChange, registerQuestion = _d.registerQuestion, unregisterQuestion = _d.unregisterQuestion;
    var answer = answers[question.id];
    var required = submitted && isMissingValidator(answer, question);
    var onChange = function (value) {
        handleChange(question.id, value);
    };
    useEffect(function () {
        registerQuestion(question.id, question.type);
        return function () {
            unregisterQuestion(question.id);
        };
    }, [question.id, question.type, registerQuestion, unregisterQuestion]);
    return (React.createElement("div", { className: styles['formHandler__question'] },
        React.createElement("div", null,
            idx,
            " - ",
            question.text,
            " ",
            required && React.createElement("span", { className: styles['formHandler__question-required'] }, '*')),
        React.createElement("div", { className: styles['formHandler__options'] },
            question.type === 'single' &&
                ((_b = question.options) === null || _b === void 0 ? void 0 : _b.map(function (opt) { return (React.createElement(Radio, { key: opt.id, id: "".concat(question.id, "-").concat(opt.id), checked: typeof answer === 'object' && !Array.isArray(answer) && (answer === null || answer === void 0 ? void 0 : answer.id) === opt.id, onChange: function () { return onChange(opt); }, type: "radio" }, opt.label)); })),
            question.type === 'multiple' &&
                ((_c = question.options) === null || _c === void 0 ? void 0 : _c.map(function (opt) { return (React.createElement(Checkbox, { key: opt.id, id: "".concat(question.id, "-").concat(opt.id), checked: Array.isArray(answer) && answer.some(function (item) { return item.id === opt.id; }), onChange: function (checked) {
                        var newValue = Array.isArray(answer) ? __spreadArray([], answer, true) : [];
                        if (checked) {
                            if (!newValue.some(function (item) { return item.id === opt.id; })) {
                                newValue.push(opt);
                            }
                        }
                        else {
                            newValue = newValue.filter(function (item) { return item.id !== opt.id; });
                        }
                        onChange(newValue);
                    } }, opt.label)); }))),
        required && React.createElement(GlobalQuestionError, { errorText: errorText })));
};

export { GlobalQuestion as default };
//# sourceMappingURL=GlobalQuestion.component.js.map
