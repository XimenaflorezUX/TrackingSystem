import { __assign } from '../../../../../node_modules/tslib/tslib.es6.js';
import { useState, useCallback } from 'react';

var useAnalystModal = function (modals) {
    var _a = useState(Array.from({ length: (modals === null || modals === void 0 ? void 0 : modals.length) || 0 }, function (_, i) { return ({
        name: modals ? modals[i].name : '',
        visible: false,
        data: undefined
    }); })), modal = _a[0], setModal = _a[1];
    var handleModal = useCallback(function (name, visible, data) {
        setModal(modal.map(function (modal) { return (modal.name === name ? __assign(__assign({}, modal), { visible: visible, data: data }) : modal); }));
    }, [modal]);
    return { modal: modal, handleModal: handleModal };
};

export { useAnalystModal };
//# sourceMappingURL=useAnalystModal.hook.js.map
