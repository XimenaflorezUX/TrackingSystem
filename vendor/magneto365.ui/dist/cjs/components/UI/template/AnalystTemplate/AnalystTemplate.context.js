'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useAnalystModal_hook = require('./hooks/useAnalystModal.hook.js');
var useAnalystModalRegion_hook = require('./hooks/useAnalystModalRegion.hook.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/* eslint-disable @typescript-eslint/no-empty-function */
var AnalystContext = React.createContext({
    modal: [],
    handleModal: function () { },
    modalRegion: false,
    handleRegionChange: function () { },
    handleRegionModal: function () { }
});
var AnalystProvider = function (_a) {
    var children = _a.children, modals = _a.modals, onRegionChange = _a.onRegionChange;
    var _b = useAnalystModalRegion_hook.useAnalystModalRegion(onRegionChange), modalRegion = _b.modalRegion, handleRegionChange = _b.handleRegionChange, handleRegionModal = _b.handleRegionModal;
    var _c = useAnalystModal_hook.useAnalystModal(modals), modal = _c.modal, handleModal = _c.handleModal;
    return (React__default["default"].createElement(AnalystContext.Provider, { value: { modal: modal, handleModal: handleModal, modalRegion: modalRegion, handleRegionChange: handleRegionChange, handleRegionModal: handleRegionModal } }, children));
};
var useAnalyst = function () { return React.useContext(AnalystContext); };

exports.AnalystProvider = AnalystProvider;
exports.useAnalyst = useAnalyst;
//# sourceMappingURL=AnalystTemplate.context.js.map
