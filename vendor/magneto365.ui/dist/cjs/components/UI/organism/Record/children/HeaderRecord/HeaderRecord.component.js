'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var HeaderRecord_module = require('./HeaderRecord.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(HeaderRecord_module);
var BaseComponent = function (_a, ref) {
    var className = _a.className, children = _a.children;
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-headerRecord', className), ref: ref }, children));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var HeadeRecord = Object.assign(Component, {});

exports.HeadeRecord = HeadeRecord;
//# sourceMappingURL=HeaderRecord.component.js.map
