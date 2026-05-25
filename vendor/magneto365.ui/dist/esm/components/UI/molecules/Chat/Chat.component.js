import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useReducer, useImperativeHandle } from 'react';
import { chatReducer } from './Chat.reducer.js';
import LoadingDots from './children/LoadingDots/LoadingDots.component.js';
import { Message } from './children/Message/Message.component.js';

var Component = React.forwardRef(function (_a, ref) {
    var _b = _a.initialMessages, initialMessages = _b === void 0 ? [] : _b, children = _a.children, rest = __rest(_a, ["initialMessages", "children"]);
    var _c = useReducer(chatReducer, { messages: initialMessages }), state = _c[0], dispatch = _c[1];
    useImperativeHandle(ref, function () { return ({
        pushMessage: function (message) { return dispatch({ type: 'PUSH_MESSAGE', payload: message }); },
        updateMessage: function (message) { return dispatch({ type: 'UPDATE_MESSAGE', payload: message }); },
        clear: function () { return dispatch({ type: 'CLEAR_MESSAGES' }); },
        snapshot: function () { return state.messages; }
    }); }, [state.messages]);
    return React.createElement("div", __assign({}, rest), children === null || children === void 0 ? void 0 : children({ messages: state.messages }));
});
Component.displayName = 'Chat';
/**
 * This is a Chat Component API that allows you to create a chat interface with messages.
 * It uses a reducer to manage the state of messages and provides methods to push and update messages.
 */
var Chat = Object.assign(Component, {
    LoadingDots: LoadingDots,
    Message: Message
});

export { Chat };
//# sourceMappingURL=Chat.component.js.map
