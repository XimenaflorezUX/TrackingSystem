import { useEffect } from 'react';

var useClickOutside = function (ref, handler) {
    useEffect(function () {
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

export { useClickOutside };
//# sourceMappingURL=index.js.map
