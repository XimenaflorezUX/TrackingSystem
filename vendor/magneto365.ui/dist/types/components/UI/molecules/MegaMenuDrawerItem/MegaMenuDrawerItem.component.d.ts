import React__default, { ReactNode } from 'react';
import { IMegaMenuDrawerItem } from './MegaMenuDrawerItem.interface';

declare const MegaMenuDrawerItem: React__default.FC<IMegaMenuDrawerItem> & {
    Drawer: React__default.FC<{
        title: string;
        content: ReactNode;
        isOpen: boolean;
        toggleDrawer: () => void;
    }>;
};

export { MegaMenuDrawerItem };
