import { IListIcon } from '../../molecules/ListIconLink/ListIconLink.interface';
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface';
import { ILoginJobsHeader } from '../../organism/LoginJobsHeader/LoginJobsHeader.interface';

interface ILoginJobsTemplate {
    /**
     * Sets the props of the logout header component
     */
    LoginJobsHeaderProps: ILoginJobsHeader;
    /**
     * Sets the props of the drawer menu component
     */
    homeUrl: string;
    listMenuProps: IListMenuItems;
    ListIcon?: IListIcon[];
    onlyMenuUser?: boolean;
}

export { ILoginJobsTemplate };
