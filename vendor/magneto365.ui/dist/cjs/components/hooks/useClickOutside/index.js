'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useClickOutside = function (ref, handler) {
    React.useEffect(function () {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, handler]);
};

exports.useClickOutside = useClickOutside;
//# sourceMappingURL=index.js.map
