import * as _components_UI_molecules from '@components/UI/molecules';
import * as _components_UI_organism from '@components/UI/organism';
import React__default from 'react';
import { IMegaMenuContext } from './MegaMenuContext.interface';
import { IMegaMenu } from './MegaMenu.interface';

declare const MegaMenu: React__default.FC<IMegaMenuContext & IMegaMenu> & {
    Cards: React__default.FC<_components_UI_organism.IMegaMenuCards>;
    Card: React__default.FC<_components_UI_molecules.IMegaMenuCard>;
    SideCards: React__default.FC<{
        sideProps: _components_UI_molecules.IMegaMenuSideCards;
        wrapperProps: _components_UI_organism.IMegaMenuCards;
        withDrawerAction?: boolean | undefined;
        showContent?: boolean | undefined;
    }>;
};

export { MegaMenu };
