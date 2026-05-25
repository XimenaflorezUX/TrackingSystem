'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var UserMenuWrapperAnalystDropdown_component = require('./children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
var UserMenuWrapperAnalystModal_component = require('./children/UserMenuWrapperAnalystModal/UserMenuWrapperAnalystModal.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    React.useEffect(function () {
        var handleResize = function () {
            if (visible) {
                setVisible(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [visible]);
    var container = index.useMediaQuery(React__default["default"].createElement(UserMenuWrapperAnalystDropdown_component.UserMenuWrapperAnalystDropdown, tslib_es6.__assign({ handleMenuOpen: setVisible }, props)), {
        sm: React__default["default"].createElement(UserMenuWrapperAnalystModal_component.UserMenuWrapperAnalystModal, tslib_es6.__assign({}, props, { clickOut: visible, handleMenuOpen: setVisible, setClickOut: function () { return setVisible(!visible); } }))
    });
    return container;
};
/**
 * Molecule UI component for user menu wrapper analyst
 */
var UserMenuWrapperAnalyst = Component;

exports.UserMenuWrapperAnalyst = UserMenuWrapperAnalyst;
//# sourceMappingURL=UserMenuWrapperAnalyst.component.js.map
