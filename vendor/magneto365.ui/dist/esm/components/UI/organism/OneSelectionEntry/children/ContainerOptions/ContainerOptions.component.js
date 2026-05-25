import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useMediaQuery } from '../../../../../hooks/useMediaQuery/index.js';
import ContainerDesktop$1 from './ContainerDesktop/ContainerDesktop.component.js';
import ContainerDesktop from './ContainerMobile/ContainerMobile.component.js';

var ContainerOptions = function (_a) {
    var responsiveMenu = _a.responsiveMenu, containerProps = __rest(_a, ["responsiveMenu"]);
    var responsiveContainer = useMediaQuery(React.createElement(ContainerDesktop$1, __assign({}, containerProps)), {
        md: responsiveMenu ? React.createElement(ContainerDesktop, __assign({}, containerProps)) : React.createElement(ContainerDesktop$1, __assign({}, containerProps))
    });
    return responsiveContainer;
};

export { ContainerOptions as default };
//# sourceMappingURL=ContainerOptions.component.js.map
