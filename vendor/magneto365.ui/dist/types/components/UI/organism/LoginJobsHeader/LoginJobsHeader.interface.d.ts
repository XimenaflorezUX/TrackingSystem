import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface';
import { IAvatar } from '../../atoms/Avatar/Avatar.interface';
import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface';
import { IHeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.interface';
import { IListMenuIcons } from '../../molecules/ListMenuIcons/ListMenuIcons.interface';
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface';
import { ISearchbar } from '../../molecules/Searchbar/Searchbar.interface';

interface ILoginJobsHeader {
    profileImage: IAvatar;
    listMenuUserProps: IListMenuIcons;
    searchbar: ISearchbar | IMegaMenuSearchBar;
    mobileSearchbar: IMobileSearchbar;
    jobsTabsProps: IHeaderTabs;
    processTabsProps: IHeaderTabs;
    curriculumTabProps: IHeaderTabs;
    onMenuClick?: () => void;
    breadcrumbProps: IBreadcrumb;
    homeUrl: string;
    gif?: string | null;
    brandMenuProps: IBrandMenu;
}

export { ILoginJobsHeader };
