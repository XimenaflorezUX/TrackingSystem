import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface';
import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { ILinkProps } from '../../atoms/Link/Link.interface';
import { IMainButton } from '../../atoms/MainButton/MainButton.interface';
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface';
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface';
import { ISearchbar } from '../../molecules/Searchbar/Searchbar.interface';

interface ILogoutJobsHeader {
    searchbar: ISearchbar | IMegaMenuSearchBar;
    mobileSearchbar: IMobileSearchbar;
    signInLink: ILinkProps;
    signUpButton: IMainButton;
    onMenuClick?: () => void;
    breadcrumbProps: IBreadcrumb;
    homeUrl: string;
    gif?: string | null;
    brandMenuProps: IBrandMenu;
    allJobsText: string;
    allJobsLink: string;
}

export { ILogoutJobsHeader };
