import { ISearchBar, IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface';
import { IAvatar } from '../../atoms/Avatar/Avatar.interface';
import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { IHeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.interface';
import { IMenuItems, ILogout, ISettings } from '../../molecules/ListMenuIcons/ListMenuIcons.interface';
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface';

interface ILoginHeader {
    profileImage: IAvatar;
    className?: string;
    listMenuUserProps: IlistMenuUserProps;
    onClick?: () => void;
    jobsTabsProps: IHeaderTabs;
    processTabsProps: IHeaderTabs;
    curriculumTabProps: IHeaderTabs;
    searchbar: ISearchBar | IMegaMenuSearchBar;
    MobileSearchbarProps: IMobileSearchbar;
    homeUrl: string;
    breadcrumbProps: IBreadcrumb;
    onlyMenuUser?: boolean;
    renderHeaderUserMenu?: () => React.ReactNode;
}
interface IlistMenuUserProps {
    urlParam: string;
    menuItems: IMenuItems[];
    menuItems1440?: IMenuItems[];
    logout: ILogout;
    settings: ISettings;
    profileImage?: IAvatar;
    isAuthenticated?: boolean;
    showAllItems?: boolean;
}

export { ILoginHeader, IlistMenuUserProps };
