import { IAvatar } from '@components/UI/atoms';
import { IMenuIcon } from '../MenuIcon/MenuIcon.interface';

interface IListMenuIcons {
    urlParam: string;
    menuItems: IMenuItems[];
    menuItems1440?: IMenuItems[];
    logout: ILogout;
    settings: ISettings;
    haveGif?: boolean;
    profileImage?: IAvatar;
    isAuthenticated?: boolean;
    showAllItems?: boolean;
}
interface IMenuItems {
    title?: string;
    items: IMenuIcon[];
}
interface ILogout {
    onClick: () => void;
    logoutText: string;
}
interface ISettings {
    onClick: () => void;
    settingsText: string;
}

export { IListMenuIcons, ILogout, IMenuItems, ISettings };
