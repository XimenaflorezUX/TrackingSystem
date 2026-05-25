import React, { forwardRef } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { Chat } from '../../../UI/molecules/Chat/Chat.component.js';
import styles from './ChatQuestionnaire.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaire = forwardRef(function (_a, chat) {
    var children = _a.children, className = _a.className;
    return (React.createElement(Chat, { className: cx('questionnaire', className), ref: chat }, function (_a) {
        var messages = _a.messages;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: cx('questionnaire__mask', { 'questionnaire__mask--hidden': messages.every(function (msg) { return msg.content.mode === 'readonly'; }) }) }), children === null || children === void 0 ? void 0 :
            children(messages)));
    }));
});
ChatQuestionnaire.displayName = 'Questionnaire';

export { ChatQuestionnaire };
//# sourceMappingURL=ChatQuestionnaire.component.js.map
