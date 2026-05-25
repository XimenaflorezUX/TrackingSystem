import { ReactNode } from 'react';

declare type MegaMenuSocialHeaderVariant = 'default' | 'candidate';
interface IMegaMenuSocialHeaderPromo {
    content: ReactNode;
    linkText: string;
    linkUrl: string;
}
interface IMegaMenuSocialHeaderProps {
    variant?: MegaMenuSocialHeaderVariant;
    promo?: IMegaMenuSocialHeaderPromo;
    tabsPrefix?: string;
}

export { IMegaMenuSocialHeaderPromo, IMegaMenuSocialHeaderProps, MegaMenuSocialHeaderVariant };
