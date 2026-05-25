import { ISearchBar, IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar';
import { IAvatar } from '../../atoms/Avatar/Avatar.interface';
import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { IHeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.interface';
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface';
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface';
import { IlistMenuUserProps } from '../../organism/LoginHeader/LoginHeader.interface';

interface ILoginTemplate {
    listMenuProps: IListMenuItems;
    listMenuUserProps: IlistMenuUserProps;
    profileImage: IAvatar;
    jobsTabsProps: IHeaderTabs;
    processTabsProps: IHeaderTabs;
    curriculumTabProps: IHeaderTabs;
    searchbar: ISearchBar | IMegaMenuSearchBar;
    MobileSearchbarProps: IMobileSearchbar;
    showMenu?: boolean;
    homeUrl: string;
    breadcrumbProps: IBreadcrumb;
    onlyMenuUser?: boolean;
    renderHeaderUserMenu?: () => React.ReactNode;
}

export { ILoginTemplate };
