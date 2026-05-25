import { ILinkProps } from '../../atoms/Link/Link.interface';
import { ILogoComponent } from '../../atoms/Logo/Logo.interface';
import { ITabButton } from '../TabButton/TabButton.interface';

interface IHeaderDrawerTabs {
    logoProps?: ILogoComponent;
    leftTabLink?: ILinkProps;
    rightTabLink?: ILinkProps;
    leftTabStyle?: ITabButton;
    rightTabStyle?: ITabButton;
    homeUrl: string;
}

export { IHeaderDrawerTabs };
