'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useAnalystModalRegion = function (onRegionChange) {
    var _a = React.useState(false), modal = _a[0], setModal = _a[1];
    var handleRegionChange = React.useCallback(function (localRegion) {
        if (localRegion) {
            onRegionChange && onRegionChange(localRegion);
        }
        setModal(false);
    }, [onRegionChange]);
    var handleRegionModal = React.useCallback(function (open) {
        setModal(open);
    }, []);
    return { modalRegion: modal, handleRegionChange: handleRegionChange, handleRegionModal: handleRegionModal };
};

exports.useAnalystModalRegion = useAnalystModalRegion;
//# sourceMappingURL=useAnalystModalRegion.hook.js.map
