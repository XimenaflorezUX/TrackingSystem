import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { CollapseBody } from './children/CollapseBody/CollapseBody.component.js';
import { CollapseHeader } from './children/CollapseHeader/CollapseHeader.component.js';
import { CollapseToggler } from './children/CollapseToggler/CollapseToggler.component.js';
import * as Collapse_context from './Collapse.context.js';
import { Provider } from './Collapse.context.js';

var Component = function (_a) {
    var children = _a.children, defaultOpen = _a.defaultOpen, open = _a.open, onChangeOpen = _a.onChangeOpen, props = __rest(_a, ["children", "defaultOpen", "open", "onChangeOpen"]);
    return (React.createElement(Provider, { defaultOpen: defaultOpen, open: open, onChangeOpen: onChangeOpen },
        React.createElement("div", __assign({}, props), children)));
};
/**
 * Atom UI component of Collapse
 */
var Collapse = Object.assign(Component, __assign({ Body: CollapseBody, Header: CollapseHeader, Toggler: CollapseToggler }, Collapse_context));

export { Collapse };
//# sourceMappingURL=Collapse.component.js.map
