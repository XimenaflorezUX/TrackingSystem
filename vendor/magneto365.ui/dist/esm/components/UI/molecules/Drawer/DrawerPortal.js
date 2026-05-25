import { useRef, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isServer } from '../../../../constants/env.constants.js';
import { ContainerContext } from '../../../context/container/container.context.js';

var DrawerPortal = function (_a) {
    var children = _a.children, customContainer = _a.customContainer;
    var portalNode = useRef(null);
    var container = useContext(ContainerContext).container;
    var _b = useState(false), mounted = _b[0], setMounted = _b[1];
    useEffect(function () {
        if (isServer || !container)
            return;
        portalNode.current = document.createElement('div');
        portalNode.current.classList.add('magneto-ui-drawer');
        (customContainer === null || customContainer === void 0 ? void 0 : customContainer.appendChild(portalNode.current)) || container.appendChild(portalNode.current);
        setMounted(true);
        return function () {
            if (portalNode.current)
                (customContainer || container).removeChild(portalNode.current);
        };
    }, [container, customContainer]);
    return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null;
};

export { DrawerPortal };
//# sourceMappingURL=DrawerPortal.js.map
