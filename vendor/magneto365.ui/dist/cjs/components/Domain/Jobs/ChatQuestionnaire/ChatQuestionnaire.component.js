'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Chat_component = require('../../../UI/molecules/Chat/Chat.component.js');
var ChatQuestionnaire_module = require('./ChatQuestionnaire.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaire_module);
var ChatQuestionnaire = React.forwardRef(function (_a, chat) {
    var children = _a.children, className = _a.className;
    return (React__default["default"].createElement(Chat_component.Chat, { className: cx('questionnaire', className), ref: chat }, function (_a) {
        var messages = _a.messages;
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("div", { className: cx('questionnaire__mask', { 'questionnaire__mask--hidden': messages.every(function (msg) { return msg.content.mode === 'readonly'; }) }) }), children === null || children === void 0 ? void 0 :
            children(messages)));
    }));
});
ChatQuestionnaire.displayName = 'Questionnaire';

exports.ChatQuestionnaire = ChatQuestionnaire;
//# sourceMappingURL=ChatQuestionnaire.component.js.map
