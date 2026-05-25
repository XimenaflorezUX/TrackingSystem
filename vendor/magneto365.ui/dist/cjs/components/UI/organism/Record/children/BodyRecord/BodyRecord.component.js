'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var BodyRecord_module = require('./BodyRecord.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var LineaRecord_component = require('../LineRecord/LineaRecord.component.js');
var TitleRecord_component = require('../TitleRecord/TitleRecord.component.js');
var HeaderRecord_component = require('../HeaderRecord/HeaderRecord.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(BodyRecord_module);
var BaseComponent = function (_a, ref) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({ className: cx('magneto-ui-record') }, props, { ref: ref }),
        React__default["default"].createElement(LineaRecord_component.Line, null),
        React__default["default"].createElement("div", { className: cx('magneto-ui-record_children') }, children)));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Organism UI of Record. It includes .
 */
var BodyRecord = Object.assign(Component, { Title: TitleRecord_component.TitleRecord, Header: HeaderRecord_component.HeadeRecord });

exports.BodyRecord = BodyRecord;
//# sourceMappingURL=BodyRecord.component.js.map
