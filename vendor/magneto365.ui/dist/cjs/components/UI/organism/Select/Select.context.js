'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stub_util = require('../../../../shared/utils/common/stub.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var SelectContext = React__default["default"].createContext({
    value: [],
    onChange: stub_util.stubTrue,
    options: [],
    search: '',
    onSearch: stub_util.stubUndefined,
    onSwitch: function () { return undefined; },
    open: false
});
var useSelectContext = function () { return React.useContext(SelectContext); };

exports.SelectContext = SelectContext;
exports.useSelectContext = useSelectContext;
//# sourceMappingURL=Select.context.js.map
