import React, { useRef, useEffect } from 'react';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import Pencil from '../../../../../../assets/pencil.svg.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { Chat } from '../../../../../UI/molecules/Chat/Chat.component.js';
import { EQuestionType } from '../../ChatQuestionnaire.interface.js';
import styles from './ChatQuestionnaireMessageCandidate.module.scss.js';

var cx = classNames.bind(styles);
var getAnswerLabel = function (answer) {
    if (EQuestionType.unique === answer.type || EQuestionType.multiple === answer.type)
        return answer.answer.map(function (_a) {
            var titleAnswer = _a.titleAnswer;
            return titleAnswer;
        }).join(', ');
    if (EQuestionType.openLong === answer.type || EQuestionType.openShort === answer.type)
        return answer.openAnswer;
    return '';
};
var ChatQuestionnaireMessageCandidate = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, children = _a.children, onChange = _a.onChange;
    var mode = questionWithAnswer.mode, answer = questionWithAnswer.answer, question = questionWithAnswer.question, questionnaireId = questionWithAnswer.questionnaireId;
    var ref = useRef(null);
    useEffect(function () {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
        });
    }, []);
    if (!answer || mode === 'editing')
        return React.createElement("div", { ref: ref }, children);
    return (React.createElement(Chat.Message, { classNames: { content: cx('message') }, renderLeft: function () { return (React.createElement("div", { className: cx('edit-button-container') },
            React.createElement("button", { className: cx('edit-button'), onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange({ question: question, mode: 'editing', questionnaireId: questionnaireId }); } },
                React.createElement(IconItem, { icon: Pencil, size: 16 })))); }, role: "candidate", to: "right" }, getAnswerLabel(answer)));
};

export { ChatQuestionnaireMessageCandidate };
//# sourceMappingURL=ChatQuestionnaireMessageCandidate.component.js.map
