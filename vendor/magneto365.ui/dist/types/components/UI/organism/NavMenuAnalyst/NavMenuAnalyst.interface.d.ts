import { ILogoComponent } from '@components/UI/atoms';

interface INavMenuAnalystProps {
    /**
     * Active dropdown option
     */
    activeDropdown?: INavMenuAnalystOption | null;
    /**
     * Class name for container
     */
    className?: string;
    /**
     * Default region
     */
    defaultRegion: string;
    /**
     * Menu footer
     */
    footer: INavMenuAnalystSection[];
    /**
     * Is drawer menu open
     */
    isDrawerOpen?: boolean;
    /**
     * Show full menu
     */
    isFullWidth?: boolean;
    /**
     * Is menu opened from header
     */
    isOpenedFromHeader?: boolean;
    /**
     * Enables scroll animation when focusing a dropdown
     */
    isScrollAnimated?: boolean;
    /**
     * Logo props
     */
    logoProps?: ILogoComponent;
    /**
     * Function to handle country click
     */
    onRegionChange?: (region: INavMenuAnalystRegion) => void;
    /**
     * Function to handle dropdown click
     */
    onDropdownClick?: (option: INavMenuAnalystOption | null) => void;
    /**
     * Custom path to highlight menu option
     */
    path?: string;
    /**
     * Menu region data options
     */
    regions: INavMenuAnalystRegion[];
    /**
     * Region modal display texts
     */
    regionModal: INavMMenuAnalystRegionModal;
    /**
     * Menu navigation options
     */
    sections: INavMenuAnalystSection[];
    /**
     * Function to handle drawer menu visibility
     */
    setIsDrawerOpen?: (isOpen: boolean) => void;
    /**
     * Query string params
     */
    queryString?: INavMenuAnalystQueryString;
}
interface INavMenuAnalystSection {
    /**
     * Section title
     */
    title?: string;
    /**
     * Section navigation options
     */
    children: INavMenuAnalystOption[];
}
interface INavMenuAnalystOption {
    /**
     * Data for the option, can be a string or an array of INavMenuAnalystSection
     */
    data?: string | INavMenuAnalystSection[] | ((option: INavMenuAnalystOption) => void);
    /**
     * Icons props
     */
    icons?: INavMenuAnalystIcons;
    /**
     * Icon index type
     */
    icon?: string;
    /**
     * Enables query string params
     */
    useQueryString?: boolean;
    /**
     * Relationship when opening the link
     */
    rel?: string;
    /**
     * Target when opening the link
     */
    target?: string;
    /**
     * Option title
     */
    title?: string;
}
interface INavMenuAnalystIcons {
    /**
     * Icon normal state
     */
    normal?: string;
    /**
     * Icon active state
     */
    active?: string;
    /**
     * Fallback icon when icon is not found
     */
    fallbackIcon?: string;
}
interface INavMenuAnalystQueryString {
    [key: string]: string;
}
interface INavMenuAnalystRegion {
    lang: string;
    flag: string;
    name: string;
}
interface INavMMenuAnalystRegionModal {
    title: string;
    cancel: string;
    apply: string;
}

export { INavMMenuAnalystRegionModal, INavMenuAnalystIcons, INavMenuAnalystOption, INavMenuAnalystProps, INavMenuAnalystQueryString, INavMenuAnalystRegion, INavMenuAnalystSection };
