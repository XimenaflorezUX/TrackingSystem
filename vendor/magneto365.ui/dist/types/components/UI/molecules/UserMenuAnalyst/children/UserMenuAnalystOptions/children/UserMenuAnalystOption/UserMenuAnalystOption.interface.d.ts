import { IUserMenuAnalystSection, IUserMenuAnalystQueryString } from '../../../../UserMenuAnalyst.interface';

declare enum EUserMenuAnalystOptionType {
    HOVER = "hover",
    BUTTON = "button",
    UNDERLINE = "underline",
    TEXT = "text"
}
interface IUserMenuAnalystOption extends IUserMenuAnalystOptionBase {
    /**
     * Prefix array data to display aditional options
     */
    prefix?: (IUserMenuAnalystOptionBase & {
        data?: string | ((option: IUserMenuAnalystOption) => void);
    })[];
    /**
     * Section subtitle
     */
    subTitle?: string;
    /**
     * Suffix array data to display aditional options
     */
    suffix?: (IUserMenuAnalystOptionBase & {
        data?: string | ((option: IUserMenuAnalystOption) => void);
    })[];
}
interface IUserMenuAnalystOptionBase {
    /**
     * Data for the option, can be a string or an array of INavMenuAnalystSection
     */
    data?: string | IUserMenuAnalystSection[] | ((option: IUserMenuAnalystOption) => void);
    /**
     * Icon index type
     */
    icon?: string;
    /**
     * Name of the modal to open
     */
    modal?: {
        name: string;
        data: unknown;
    };
    /**
     * Relationship when opening the link
     */
    rel?: string;
    /**
     * Target when opening the link
     */
    target?: string;
    /**
     * Optional query string by option
     */
    selfQueryString?: IUserMenuAnalystQueryString;
    /**
     * Option title
     */
    title?: string;
    /**
     * Option type
     */
    type?: EUserMenuAnalystOptionType;
    /**
     * Enables query string params
     */
    useQueryString?: boolean;
}

export { EUserMenuAnalystOptionType, IUserMenuAnalystOption, IUserMenuAnalystOptionBase };
