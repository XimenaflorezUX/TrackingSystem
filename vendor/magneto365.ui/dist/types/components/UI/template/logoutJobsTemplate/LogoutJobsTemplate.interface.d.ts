import { IListIcon } from '../../molecules/ListIconLink/ListIconLink.interface';
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface';
import { ILogoutJobsHeader } from '../../organism/LogoutJobsHeader/LogoutJobsHeader.interface';

interface ILogoutJobsTemplate {
    /**
     * Sets the props of the logout header component
     */
    logoutJobsHeaderProps: ILogoutJobsHeader;
    /**
     * Sets the props of the drawer menu component
     */
    homeUrl: string;
    listMenuProps: IListMenuItems;
    ListIcon?: IListIcon[];
}

export { ILogoutJobsTemplate };
