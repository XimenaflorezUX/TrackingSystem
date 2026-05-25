'use strict';

var tslib_es6 = require('../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../../../../../UI/atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../../../../assets/ArrowLeft2.svg.js');
var JobDetailsDrawer_context = require('../JobDetailsDrawer.context.js');
var JobDetailsDrawerClose_module = require('./JobDetailsDrawerClose.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsDrawerClose_module);
var JobDetailsDrawerClose = function (props) {
    var onClose = React.useContext(JobDetailsDrawer_context.JobDetailsDrawerContext).onClose;
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, props, { className: cx('drawer-button', props.className), onClick: function (e) {
            var _a;
            onClose();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }),
        React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowLeft2, size: 16 }),
        props.children));
};

module.exports = JobDetailsDrawerClose;
//# sourceMappingURL=JobDetailsDrawerClose.component.js.map
