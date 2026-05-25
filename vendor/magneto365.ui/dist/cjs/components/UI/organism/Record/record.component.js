'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var record_module = require('./record.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var TitleRecord_component = require('./children/TitleRecord/TitleRecord.component.js');
var HeaderRecord_component = require('./children/HeaderRecord/HeaderRecord.component.js');
var BodyRecord_component = require('./children/BodyRecord/BodyRecord.component.js');
var DateRecord_component = require('./children/DateRecord/DateRecord.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(record_module);
var BaseComponent = function (_a, ref) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({ className: cx('magneto-ui-record') }, props, { ref: ref }), children));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var Record = Object.assign(Component, {
    Title: TitleRecord_component.TitleRecord,
    Header: HeaderRecord_component.HeadeRecord,
    Body: BodyRecord_component.BodyRecord,
    Date: DateRecord_component
});

exports.Record = Record;
//# sourceMappingURL=record.component.js.map
