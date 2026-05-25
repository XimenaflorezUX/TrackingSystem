'use strict';

var React = require('react');
var DateRecord_module = require('./DateRecord.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(DateRecord_module);
var DateComponent = function (_a) {
    var className = _a.className, date = _a.date;
    if (!date)
        return null;
    var fecha = new Date(date);
    var formateada = new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(fecha);
    return React__default["default"].createElement("div", { className: cx('magneto-ui-DateRecord', className) }, formateada);
};

module.exports = DateComponent;
//# sourceMappingURL=DateRecord.component.js.map
