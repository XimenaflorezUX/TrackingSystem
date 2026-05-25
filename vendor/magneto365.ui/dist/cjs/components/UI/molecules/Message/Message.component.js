'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var ReactDOM = require('react-dom');
var React = require('react');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
var container_context = require('../../../context/container/container.context.js');
var message_constant = require('./constants/message.constant.js');
var Message_module = require('./Message.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, description = _a.description, _b = _a.duration, duration = _b === void 0 ? 3000 : _b, iconProps = _a.iconProps, onHide = _a.onHide, text = _a.text, _c = _a.type, type = _c === void 0 ? 'info' : _c, _d = _a.visible, visible = _d === void 0 ? true : _d;
    var _e = React.useState(false), toggleAnimation = _e[0], setToggleAnimation = _e[1];
    var _f = React.useState(visible), localVisible = _f[0], setLocalVisible = _f[1];
    var _g = React.useState(false), isAnimating = _g[0], setIsAnimating = _g[1];
    var removeTimeoutRef = React.useRef(null);
    var hideTimeoutRef = React.useRef(null);
    var container = React.useContext(container_context.ContainerContext).container;
    var containerVar = React.useMemo(function () { return ({
        '--transition-duration': "".concat(message_constant.transitionDuration / 1000, "s")
    }); }, []);
    var containerStyles = React.useMemo(function () {
        return classNameManager_util.get({
            styles: Message_module,
            cls: [
                'message__container',
                "message__container--".concat(toggleAnimation ? 'show' : 'hidden'),
                "message__container--".concat(type)
            ]
        });
    }, [type, toggleAnimation]);
    var textStyles = React.useCallback(function (bold) { return classNameManager_util.get({ styles: Message_module, cls: ['message__text', bold && 'message__text--bold'] }); }, []);
    React.useEffect(function () {
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
        }, duration + message_constant.transitionDuration);
        return function () {
            if (hideTimeoutRef.current)
                clearTimeout(hideTimeoutRef.current);
            if (removeTimeoutRef.current)
                clearTimeout(removeTimeoutRef.current);
        };
    }, [duration, localVisible, onHide]);
    React.useEffect(function () {
        if (!localVisible)
            return;
        setTimeout(function () {
            setToggleAnimation(true);
        }, 10);
    }, [localVisible]);
    React.useEffect(function () {
        if ((!visible && !isAnimating) || (visible && isAnimating))
            return;
        setLocalVisible(visible);
        setIsAnimating(visible);
    }, [isAnimating, visible]);
    return localVisible && container
        ? ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { style: containerVar, className: classNameManager_util.get({ styles: Message_module, cls: [className] }) },
            React__default["default"].createElement("div", { className: containerStyles },
                React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ alt: type, className: classNameManager_util.get({ styles: Message_module, cls: ['message__icon'] }), icon: message_constant.iconByType[type], showDefaultFallback: false, size: 20 }, iconProps)),
                React__default["default"].createElement("div", null,
                    text && React__default["default"].createElement("span", { className: textStyles(!!description) }, text),
                    description && React__default["default"].createElement("span", { className: textStyles() }, description)))), container)
        : null;
};
/**
 * Molecule UI component for Message
 */
var Message = Component;

exports.Component = Component;
exports.Message = Message;
//# sourceMappingURL=Message.component.js.map
