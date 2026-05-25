import { IListMenuIcons } from '../../molecules/ListMenuIcons/ListMenuIcons.interface';
import { IMobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.interface';

interface IMobileDrawerMenu extends IMobileDrawer {
    /**
     * menu items props
     */
    listMenuUserProps: IListMenuIcons;
}

export { IMobileDrawerMenu };
