import React__default from 'react';
import { TCollapseBody } from './children/CollapseBody/CollapseBody.interface';
import { TCollapseHeader } from './children/CollapseHeader/CollapseHeader.interface';
import { TCollapseToggler } from './children/CollapseToggler/CollapseToggler.interface';
import { TCollapse, ICollapseContext } from './Collapse.interface';

/**
 * Atom UI component of Collapse
 */
declare const Collapse: React__default.FC<TCollapse> & {
    Provider: React__default.FC<Partial<ICollapseContext>>;
    useCollapse: () => ICollapseContext;
    Body: React__default.FC<TCollapseBody>;
    Header: React__default.FC<TCollapseHeader>;
    Toggler: React__default.FC<TCollapseToggler>;
};

export { Collapse };
