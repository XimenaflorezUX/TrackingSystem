import { IMainButton } from '../../atoms/MainButton/MainButton.interface';
import { IHeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.interface';
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface';

interface IDrawerOrganism {
    className?: string;
    /**
     * Here is drawer header tabs component
     */
    headerDrawerProps: IHeaderDrawerTabs;
    /**
     * Here is the menu list component
     */
    listMenuProps: IListMenuItems;
    /**
     * Here is main button component
     */
    createAccountButton: IMainButton;
    /**
     * Here is main button component
     */
    loginButton: IMainButton;
    /**
     *
     */
    isOpen?: boolean;
    /**
     *
     */
    onClose?: () => void;
}

export { IDrawerOrganism };
