'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');

var chatReducer = function (state, action) {
    switch (action.type) {
        case 'PUSH_MESSAGE':
            return tslib_es6.__assign(tslib_es6.__assign({}, state), { messages: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], state.messages, true), [action.payload], false) });
        case 'UPDATE_MESSAGE':
            return tslib_es6.__assign(tslib_es6.__assign({}, state), { messages: state.messages.map(function (msg) { return (msg.id === action.payload.id ? action.payload : msg); }) });
        case 'CLEAR_MESSAGES':
            return tslib_es6.__assign(tslib_es6.__assign({}, state), { messages: [] });
        default:
            return state;
    }
};

exports.chatReducer = chatReducer;
//# sourceMappingURL=Chat.reducer.js.map
