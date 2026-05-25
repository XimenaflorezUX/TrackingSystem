'use strict';

var React = require('react');

var useContainerDesktop = function (_a) {
    var numberOfSelectable = _a.numberOfSelectable, selectedValues = _a.selectedValues;
    var limitOfSelectable = React.useMemo(function () {
        return selectedValues.length < numberOfSelectable;
    }, [numberOfSelectable, selectedValues.length]);
    var containerOptions = React.useRef(null);
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var dropdownRef = React.useRef(null);
    var _c = React.useState({ top: 0, left: 0, width: 0 }), menuPosition = _c[0], setMenuPosition = _c[1];
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        var input = inputRef.current;
        if (input) {
            var rect = input.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width
            });
        }
    }, [isOpen, selectedValues]);
    React.useEffect(function () {
        var handleMouseOutside = function (event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mouseover', handleMouseOutside);
        return function () {
            document.removeEventListener('mouseover', handleMouseOutside);
        };
    }, []);
    React.useEffect(function () {
        if (!limitOfSelectable) {
            setIsOpen(false);
        }
    }, [limitOfSelectable]);
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    return {
        toggleDropdown: toggleDropdown,
        containerOptions: containerOptions,
        menuPosition: menuPosition,
        limitOfSelectable: limitOfSelectable,
        inputRef: inputRef,
        isOpen: isOpen,
        dropdownRef: dropdownRef
    };
};

module.exports = useContainerDesktop;
//# sourceMappingURL=useContainerDesktop.js.map
