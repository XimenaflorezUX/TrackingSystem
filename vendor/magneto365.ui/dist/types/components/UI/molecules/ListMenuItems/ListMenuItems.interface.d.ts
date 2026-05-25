import { IMenuItem } from '../../atoms/MenuItem/MenuItem.interface';

interface MenuItemInfo extends Omit<IMenuItem, 'isActive'> {
    slug: string;
}
interface IListMenuItems {
    menuList: MenuItemInfo[];
    urlParam: string;
}

export { IListMenuItems, MenuItemInfo };
