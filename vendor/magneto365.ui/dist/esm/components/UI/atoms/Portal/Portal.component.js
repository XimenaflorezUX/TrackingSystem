import ReactDOM from 'react-dom';
import { useContext, useMemo } from 'react';
import { ContainerContext } from '../../../context/container/container.context.js';
import { isRef } from '../../../../utils/react/index.js';

var Portal = function (_a) {
    var key = _a.key, containerProp = _a.container, children = _a.children;
    var container = useContext(ContainerContext).container;
    var finalContainer = useMemo(function () {
        if (!containerProp)
            return container;
        if (!isRef(containerProp))
            return containerProp;
        return containerProp.current;
    }, [containerProp, container]);
    return finalContainer ? ReactDOM.createPortal(children, finalContainer, key) : null;
};

export { Portal };
//# sourceMappingURL=Portal.component.js.map
