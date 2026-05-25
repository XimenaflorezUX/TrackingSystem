'use strict';

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../../../hooks/useMediaQuery/index.js');
var ContainerDesktop_component = require('./ContainerDesktop/ContainerDesktop.component.js');
var ContainerMobile_component = require('./ContainerMobile/ContainerMobile.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ContainerOptions = function (_a) {
    var responsiveMenu = _a.responsiveMenu, containerProps = tslib_es6.__rest(_a, ["responsiveMenu"]);
    var responsiveContainer = index.useMediaQuery(React__default["default"].createElement(ContainerDesktop_component, tslib_es6.__assign({}, containerProps)), {
        md: responsiveMenu ? React__default["default"].createElement(ContainerMobile_component, tslib_es6.__assign({}, containerProps)) : React__default["default"].createElement(ContainerDesktop_component, tslib_es6.__assign({}, containerProps))
    });
    return responsiveContainer;
};

module.exports = ContainerOptions;
//# sourceMappingURL=ContainerOptions.component.js.map
