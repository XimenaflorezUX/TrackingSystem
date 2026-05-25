import { useState, useCallback } from 'react';

var useAnalystModalRegion = function (onRegionChange) {
    var _a = useState(false), modal = _a[0], setModal = _a[1];
    var handleRegionChange = useCallback(function (localRegion) {
        if (localRegion) {
            onRegionChange && onRegionChange(localRegion);
        }
        setModal(false);
    }, [onRegionChange]);
    var handleRegionModal = useCallback(function (open) {
        setModal(open);
    }, []);
    return { modalRegion: modal, handleRegionChange: handleRegionChange, handleRegionModal: handleRegionModal };
};

export { useAnalystModalRegion };
//# sourceMappingURL=useAnalystModalRegion.hook.js.map
