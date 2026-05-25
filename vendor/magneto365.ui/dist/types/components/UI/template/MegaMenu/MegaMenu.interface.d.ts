import { IBreadcrumbs } from '@components/UI/molecules';
import { IMegaMenuSocialHeaderProps } from '@components/UI/organism/MegaMenuSocialHeader';
import React__default from 'react';

interface IMegaMenu {
    breadcrumbsProps?: IBreadcrumbs;
    socialHeaderVariantProps?: IMegaMenuSocialHeaderProps;
    renderHeaderUserMenu?: () => React__default.ReactNode;
}

export { IMegaMenu };
