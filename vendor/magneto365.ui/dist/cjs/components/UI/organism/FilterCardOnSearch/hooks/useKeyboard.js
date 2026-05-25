'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useKeyboard = function (field, size, cleanSearch) {
    var _a = React.useState(-1), keyboardIndex = _a[0], setKeyboardIndex = _a[1];
    var handleKeyDown = React.useCallback(function (e) {
        if (e.key === 'ArrowDown' && keyboardIndex < size - 1) {
            return setKeyboardIndex(keyboardIndex + 1);
        }
        if (e.key === 'ArrowUp' && keyboardIndex > 0) {
            return setKeyboardIndex(keyboardIndex - 1);
        }
        if (e.key === 'Enter' && keyboardIndex >= 0) {
            var selectedOption = document.getElementById("".concat(field, "-menu-item-").concat(keyboardIndex));
            selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.click();
            cleanSearch();
        }
        setKeyboardIndex(-1);
    }, [field, size, keyboardIndex, cleanSearch]);
    React.useEffect(function () {
        document.addEventListener('keydown', handleKeyDown);
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboardIndex, size]);
    return [keyboardIndex];
};

exports.useKeyboard = useKeyboard;
//# sourceMappingURL=useKeyboard.js.map
