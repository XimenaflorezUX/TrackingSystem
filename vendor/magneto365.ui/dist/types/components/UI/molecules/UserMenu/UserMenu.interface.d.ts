import { IAvatar } from '../../atoms/Avatar/Avatar.interface';
import { IlistMenuUserProps } from '../../organism/LoginHeader/LoginHeader.interface';

interface IMenuUser {
    /**
     * menu items props
     */
    profileImage: IAvatar;
    listMenuUserProps: IlistMenuUserProps;
    clickOut?: boolean;
    setClickOut?: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Optional render prop displayed at the top of the popover content.
     */
    renderHeader?: () => React.ReactNode;
}

export { IMenuUser };
