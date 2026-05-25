import { useMemo, useRef, useState, useEffect } from 'react';

var useContainerDesktop = function (_a) {
    var numberOfSelectable = _a.numberOfSelectable, selectedValues = _a.selectedValues;
    var limitOfSelectable = useMemo(function () {
        return selectedValues.length < numberOfSelectable;
    }, [numberOfSelectable, selectedValues.length]);
    var containerOptions = useRef(null);
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var dropdownRef = useRef(null);
    var _c = useState({ top: 0, left: 0, width: 0 }), menuPosition = _c[0], setMenuPosition = _c[1];
    var inputRef = useRef(null);
    useEffect(function () {
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
    useEffect(function () {
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
    useEffect(function () {
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

export { useContainerDesktop as default };
//# sourceMappingURL=useContainerDesktop.js.map
