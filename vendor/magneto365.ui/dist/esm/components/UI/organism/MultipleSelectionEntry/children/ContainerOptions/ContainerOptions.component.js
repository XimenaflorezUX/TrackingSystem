import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useMediaQuery } from '../../../../../hooks/useMediaQuery/index.js';
import ContainerDesktop$1 from './ContainerDesktop/ContainerDesktop.component.js';
import ContainerDesktop from './ContainerMobile/ContainerMobile.component.js';

var ContainerOptions = function (containerProps) {
    var responsiveContainer = useMediaQuery(React.createElement(ContainerDesktop$1, __assign({}, containerProps)), {
        md: React.createElement(ContainerDesktop, __assign({}, containerProps))
    });
    return responsiveContainer;
};

export { ContainerOptions as default };
//# sourceMappingURL=ContainerOptions.component.js.map
