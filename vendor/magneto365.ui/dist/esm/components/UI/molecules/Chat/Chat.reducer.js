import { __assign, __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';

var chatReducer = function (state, action) {
    switch (action.type) {
        case 'PUSH_MESSAGE':
            return __assign(__assign({}, state), { messages: __spreadArray(__spreadArray([], state.messages, true), [action.payload], false) });
        case 'UPDATE_MESSAGE':
            return __assign(__assign({}, state), { messages: state.messages.map(function (msg) { return (msg.id === action.payload.id ? action.payload : msg); }) });
        case 'CLEAR_MESSAGES':
            return __assign(__assign({}, state), { messages: [] });
        default:
            return state;
    }
};

export { chatReducer };
//# sourceMappingURL=Chat.reducer.js.map
