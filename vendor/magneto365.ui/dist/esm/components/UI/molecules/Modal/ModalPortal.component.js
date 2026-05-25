import { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isServer } from '../../../../constants/env.constants.js';
import { ContainerContext } from '../../../context/container/container.context.js';

var ModalPortal = function (_a) {
    var children = _a.children;
    var container = useContext(ContainerContext).container;
    var portalNode = useRef(null);
    var _b = useState(false), mounted = _b[0], setMounted = _b[1];
    useEffect(function () {
        if (isServer || !container)
            return;
        portalNode.current = document.createElement('div');
        portalNode.current.classList.add('modal-ui-drawer');
        container.appendChild(portalNode.current);
        setMounted(true);
        return function () {
            if (portalNode.current) {
                container.removeChild(portalNode.current);
            }
        };
    }, [container]);
    return mounted && portalNode.current ? ReactDOM.createPortal(children, portalNode.current) : null;
};

export { ModalPortal };
//# sourceMappingURL=ModalPortal.component.js.map
