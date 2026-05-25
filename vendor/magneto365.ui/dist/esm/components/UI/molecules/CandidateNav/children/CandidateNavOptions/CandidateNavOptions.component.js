import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useEffect } from 'react';
import MiniArrowGrayDown from '../../../../../../assets/miniArrowGrayDown.svg.js';
import MiniArrowGrayUp from '../../../../../../assets/miniArrowGrayUp.svg.js';
import { useCandidateNav } from '../../CandidateNav.context.js';
import styles from './CandidateNavOptions.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cs = classNames.bind(styles);
var customScrollbarButtonsStyle = {
    '--custom-scrollbar-thumb-down-background': "url(".concat(MiniArrowGrayDown, ")"),
    '--custom-scrollbar-thumb-up-background': "url(".concat(MiniArrowGrayUp, ")")
};
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var _b = useCandidateNav(), showOptions = _b.showOptions, onChangeOpen = _b.onChangeOpen;
    var wrapperRef = useRef(null);
    var listRef = useRef(null);
    useEffect(function () {
        var _a;
        var handleClickOutside = function (event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onChangeOpen(false);
            }
        };
        if (showOptions !== false) {
            (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            document.addEventListener('click', handleClickOutside);
        }
        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showOptions, onChangeOpen]);
    useEffect(function () {
        var _a;
        if (showOptions) {
            (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showOptions]);
    return (React.createElement("div", { ref: wrapperRef, className: cs('magneto-ui-candidate-nav-options', {
            'magneto-ui-candidate-nav-options--visible': showOptions
        }), style: __assign({ gridTemplateRows: showOptions ? '1fr' : '0fr' }, customScrollbarButtonsStyle), tabIndex: -1 },
        React.createElement("div", { className: cs('magneto-ui-candidate-nav-options__container', {
                'magneto-ui-candidate-nav-options__container--visible': showOptions
            }) },
            React.createElement("div", { className: cs('magneto-ui-candidate-nav-options__content', {
                    'magneto-ui-candidate-nav-options__content--visible': showOptions
                }) },
                React.createElement("div", { className: cs('magneto-ui-candidate-nav-options__closable-area'), onClick: function () { return onChangeOpen(false); } },
                    React.createElement("button", { className: cs('magneto-ui-candidate-nav-options__line') })),
                React.createElement("ul", __assign({}, props, { ref: listRef, className: cs('magneto-ui-candidate-nav-options__list', className) }), children)))));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavOptions = Component;

export { CandidateNavOptions };
//# sourceMappingURL=CandidateNavOptions.component.js.map
