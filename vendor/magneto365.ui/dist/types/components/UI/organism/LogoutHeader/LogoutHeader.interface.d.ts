import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface';
import { ILinkProps } from '../../atoms/Link/Link.interface';
import { IMainButton } from '../../atoms/MainButton/MainButton.interface';
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface';
import { ISearchbar } from '../../molecules/Searchbar/Searchbar.interface';

interface ILogoutHeader {
    leftTabButton: ILinkProps;
    rightTabButton: ILinkProps;
    searchbar: ISearchbar;
    mobileSearchbar: IMobileSearchbar;
    signInLink: ILinkProps;
    signUpButton: IMainButton;
    onMenuClick?: () => void;
    breadcrumbProps: IBreadcrumb;
    homeUrl: string;
    allJobsText: string;
    allJobsLink: string;
    hasMobileSearchBarButton?: boolean;
}

export { ILogoutHeader };
