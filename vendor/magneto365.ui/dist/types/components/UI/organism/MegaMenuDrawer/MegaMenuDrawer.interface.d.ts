import { IMegaMenuSocialHeaderProps } from '../MegaMenuSocialHeader/MegaMenuSocialHeader.interface';

interface IMegaMenuDrawer {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    socialHeaderVariantProps?: IMegaMenuSocialHeaderProps;
}

export { IMegaMenuDrawer };
