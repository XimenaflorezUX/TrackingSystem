'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useScrollableTab = function () {
    var containerRef = React__default["default"].useRef(null);
    var _a = React.useState(false), showLeftArrow = _a[0], setShowLeftArrow = _a[1];
    var _b = React.useState(false), showRightArrow = _b[0], setShowRightArrow = _b[1];
    var handleScrollByAmount = function (amount) { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.scrollBy({ left: amount, behavior: 'smooth' }); };
    var updateArrowsVisibility = function () {
        var container = containerRef.current;
        if (container) {
            var scrollLeft = container.scrollLeft;
            var scrollWidth = container.scrollWidth;
            var clientWidth = container.clientWidth;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
        }
    };
    React.useEffect(function () {
        updateArrowsVisibility();
        var container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateArrowsVisibility);
            window.addEventListener('resize', updateArrowsVisibility);
        }
        return function () {
            if (container) {
                container.removeEventListener('scroll', updateArrowsVisibility);
                window.removeEventListener('resize', updateArrowsVisibility);
            }
        };
    }, []);
    return {
        showLeftArrow: showLeftArrow,
        showRightArrow: showRightArrow,
        containerRef: containerRef,
        handleScrollByAmount: handleScrollByAmount
    };
};

module.exports = useScrollableTab;
//# sourceMappingURL=useScrollableTab.hook.js.map
