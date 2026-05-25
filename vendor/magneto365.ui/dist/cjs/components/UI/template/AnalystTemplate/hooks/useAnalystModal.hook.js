'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');

var useAnalystModal = function (modals) {
    var _a = React.useState(Array.from({ length: (modals === null || modals === void 0 ? void 0 : modals.length) || 0 }, function (_, i) { return ({
        name: modals ? modals[i].name : '',
        visible: false,
        data: undefined
    }); })), modal = _a[0], setModal = _a[1];
    var handleModal = React.useCallback(function (name, visible, data) {
        setModal(modal.map(function (modal) { return (modal.name === name ? tslib_es6.__assign(tslib_es6.__assign({}, modal), { visible: visible, data: data }) : modal); }));
    }, [modal]);
    return { modal: modal, handleModal: handleModal };
};

exports.useAnalystModal = useAnalystModal;
//# sourceMappingURL=useAnalystModal.hook.js.map
