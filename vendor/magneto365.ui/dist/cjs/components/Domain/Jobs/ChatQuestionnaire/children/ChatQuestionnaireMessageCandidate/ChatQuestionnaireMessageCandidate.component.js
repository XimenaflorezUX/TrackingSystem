'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
var pencil = require('../../../../../../assets/pencil.svg.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var Chat_component = require('../../../../../UI/molecules/Chat/Chat.component.js');
var ChatQuestionnaire_interface = require('../../ChatQuestionnaire.interface.js');
var ChatQuestionnaireMessageCandidate_module = require('./ChatQuestionnaireMessageCandidate.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireMessageCandidate_module);
var getAnswerLabel = function (answer) {
    if (ChatQuestionnaire_interface.EQuestionType.unique === answer.type || ChatQuestionnaire_interface.EQuestionType.multiple === answer.type)
        return answer.answer.map(function (_a) {
            var titleAnswer = _a.titleAnswer;
            return titleAnswer;
        }).join(', ');
    if (ChatQuestionnaire_interface.EQuestionType.openLong === answer.type || ChatQuestionnaire_interface.EQuestionType.openShort === answer.type)
        return answer.openAnswer;
    return '';
};
var ChatQuestionnaireMessageCandidate = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, children = _a.children, onChange = _a.onChange;
    var mode = questionWithAnswer.mode, answer = questionWithAnswer.answer, question = questionWithAnswer.question, questionnaireId = questionWithAnswer.questionnaireId;
    var ref = React.useRef(null);
    React.useEffect(function () {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
        });
    }, []);
    if (!answer || mode === 'editing')
        return React__default["default"].createElement("div", { ref: ref }, children);
    return (React__default["default"].createElement(Chat_component.Chat.Message, { classNames: { content: cx('message') }, renderLeft: function () { return (React__default["default"].createElement("div", { className: cx('edit-button-container') },
            React__default["default"].createElement("button", { className: cx('edit-button'), onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange({ question: question, mode: 'editing', questionnaireId: questionnaireId }); } },
                React__default["default"].createElement(Icon_component.IconItem, { icon: pencil, size: 16 })))); }, role: "candidate", to: "right" }, getAnswerLabel(answer)));
};

exports.ChatQuestionnaireMessageCandidate = ChatQuestionnaireMessageCandidate;
//# sourceMappingURL=ChatQuestionnaireMessageCandidate.component.js.map
