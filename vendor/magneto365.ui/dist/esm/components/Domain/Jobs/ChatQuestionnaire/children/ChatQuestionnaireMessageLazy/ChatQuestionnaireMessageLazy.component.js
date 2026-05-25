import { __awaiter, __generator } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useEffect } from 'react';
import { Chat } from '../../../../../UI/molecules/Chat/Chat.component.js';

var waitFor = function (ms) {
    return new Promise(function (res) {
        setTimeout(function () { return res(undefined); }, ms);
    });
};
var ChatQuestionnaireMessageLazy = function (_a) {
    var children = _a.children, _b = _a.waitFor, waitForTime = _b === void 0 ? 500 : _b, onLoad = _a.onLoad;
    var _c = useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var onLoadRef = useRef(onLoad);
    useEffect(function () {
        onLoadRef.current = onLoad;
    }, [onLoad]);
    useEffect(function () {
        function wait() {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, waitFor(waitForTime)];
                        case 1:
                            _b.sent();
                            setIsLoading(false);
                            (_a = onLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(onLoadRef);
                            return [2 /*return*/];
                    }
                });
            });
        }
        wait();
    }, [waitForTime]);
    if (isLoading)
        return React.createElement(Chat.LoadingDots, null);
    return React.createElement(React.Fragment, null, children);
};

export { ChatQuestionnaireMessageLazy };
//# sourceMappingURL=ChatQuestionnaireMessageLazy.component.js.map
