'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Chat_reducer = require('./Chat.reducer.js');
var LoadingDots_component = require('./children/LoadingDots/LoadingDots.component.js');
var Message_component = require('./children/Message/Message.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = React__default["default"].forwardRef(function (_a, ref) {
    var _b = _a.initialMessages, initialMessages = _b === void 0 ? [] : _b, children = _a.children, rest = tslib_es6.__rest(_a, ["initialMessages", "children"]);
    var _c = React.useReducer(Chat_reducer.chatReducer, { messages: initialMessages }), state = _c[0], dispatch = _c[1];
    React.useImperativeHandle(ref, function () { return ({
        pushMessage: function (message) { return dispatch({ type: 'PUSH_MESSAGE', payload: message }); },
        updateMessage: function (message) { return dispatch({ type: 'UPDATE_MESSAGE', payload: message }); },
        clear: function () { return dispatch({ type: 'CLEAR_MESSAGES' }); },
        snapshot: function () { return state.messages; }
    }); }, [state.messages]);
    return React__default["default"].createElement("div", tslib_es6.__assign({}, rest), children === null || children === void 0 ? void 0 : children({ messages: state.messages }));
});
Component.displayName = 'Chat';
/**
 * This is a Chat Component API that allows you to create a chat interface with messages.
 * It uses a reducer to manage the state of messages and provides methods to push and update messages.
 */
var Chat = Object.assign(Component, {
    LoadingDots: LoadingDots_component,
    Message: Message_component.Message
});

exports.Chat = Chat;
//# sourceMappingURL=Chat.component.js.map
