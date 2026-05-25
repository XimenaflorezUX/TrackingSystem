import { IDrawerOrganism } from '../../organism/DrawerMenu/DrawerMenu.interface';
import { ILogoutHeader } from '../../organism/LogoutHeader/LogoutHeader.interface';

interface ILogoutTemplate {
    /**
     * Sets the props of the logout header component
     */
    logoutHeaderProps: ILogoutHeader;
    /**
     * Sets the props of the drawer menu component
     */
    headerDrawerMenuProps: IDrawerOrganism;
}

export { ILogoutTemplate };
