import React, { createContext, useContext } from 'react';
import { useAnalystModal } from './hooks/useAnalystModal.hook.js';
import { useAnalystModalRegion } from './hooks/useAnalystModalRegion.hook.js';

/* eslint-disable @typescript-eslint/no-empty-function */
var AnalystContext = createContext({
    modal: [],
    handleModal: function () { },
    modalRegion: false,
    handleRegionChange: function () { },
    handleRegionModal: function () { }
});
var AnalystProvider = function (_a) {
    var children = _a.children, modals = _a.modals, onRegionChange = _a.onRegionChange;
    var _b = useAnalystModalRegion(onRegionChange), modalRegion = _b.modalRegion, handleRegionChange = _b.handleRegionChange, handleRegionModal = _b.handleRegionModal;
    var _c = useAnalystModal(modals), modal = _c.modal, handleModal = _c.handleModal;
    return (React.createElement(AnalystContext.Provider, { value: { modal: modal, handleModal: handleModal, modalRegion: modalRegion, handleRegionChange: handleRegionChange, handleRegionModal: handleRegionModal } }, children));
};
var useAnalyst = function () { return useContext(AnalystContext); };

export { AnalystProvider, useAnalyst };
//# sourceMappingURL=AnalystTemplate.context.js.map
