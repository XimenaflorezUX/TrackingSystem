import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import ReactDOM from 'react-dom';
import React, { useState, useRef, useContext, useMemo, useCallback, useEffect } from 'react';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import { ContainerContext } from '../../../context/container/container.context.js';
import { transitionDuration, iconByType } from './constants/message.constant.js';
import styles from './Message.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var className = _a.className, description = _a.description, _b = _a.duration, duration = _b === void 0 ? 3000 : _b, iconProps = _a.iconProps, onHide = _a.onHide, text = _a.text, _c = _a.type, type = _c === void 0 ? 'info' : _c, _d = _a.visible, visible = _d === void 0 ? true : _d;
    var _e = useState(false), toggleAnimation = _e[0], setToggleAnimation = _e[1];
    var _f = useState(visible), localVisible = _f[0], setLocalVisible = _f[1];
    var _g = useState(false), isAnimating = _g[0], setIsAnimating = _g[1];
    var removeTimeoutRef = useRef(null);
    var hideTimeoutRef = useRef(null);
    var container = useContext(ContainerContext).container;
    var containerVar = useMemo(function () { return ({
        '--transition-duration': "".concat(transitionDuration / 1000, "s")
    }); }, []);
    var containerStyles = useMemo(function () {
        return CNM.get({
            styles: styles,
            cls: [
                'message__container',
                "message__container--".concat(toggleAnimation ? 'show' : 'hidden'),
                "message__container--".concat(type)
            ]
        });
    }, [type, toggleAnimation]);
    var textStyles = useCallback(function (bold) { return CNM.get({ styles: styles, cls: ['message__text', bold && 'message__text--bold'] }); }, []);
    useEffect(function () {
        if (!localVisible)
            return;
        if (duration === null)
            return;
        hideTimeoutRef.current = setTimeout(function () {
            setToggleAnimation(false);
        }, duration);
        removeTimeoutRef.current = setTimeout(function () {
            setLocalVisible(false);
            onHide === null || onHide === void 0 ? void 0 : onHide(false);
        }, duration + transitionDuration);
        return function () {
            if (hideTimeoutRef.current)
                clearTimeout(hideTimeoutRef.current);
            if (removeTimeoutRef.current)
                clearTimeout(removeTimeoutRef.current);
        };
    }, [duration, localVisible, onHide]);
    useEffect(function () {
        if (!localVisible)
            return;
        setTimeout(function () {
            setToggleAnimation(true);
        }, 10);
    }, [localVisible]);
    useEffect(function () {
        if ((!visible && !isAnimating) || (visible && isAnimating))
            return;
        setLocalVisible(visible);
        setIsAnimating(visible);
    }, [isAnimating, visible]);
    return localVisible && container
        ? ReactDOM.createPortal(React.createElement("div", { style: containerVar, className: CNM.get({ styles: styles, cls: [className] }) },
            React.createElement("div", { className: containerStyles },
                React.createElement(IconItem, __assign({ alt: type, className: CNM.get({ styles: styles, cls: ['message__icon'] }), icon: iconByType[type], showDefaultFallback: false, size: 20 }, iconProps)),
                React.createElement("div", null,
                    text && React.createElement("span", { className: textStyles(!!description) }, text),
                    description && React.createElement("span", { className: textStyles() }, description)))), container)
        : null;
};
/**
 * Molecule UI component for Message
 */
var Message = Component;

export { Component, Message };
//# sourceMappingURL=Message.component.js.map
