import { IHeaderTab } from '../../atoms/HeaderTab/HeaderTab.interface';

interface HeaderTabItem extends Omit<IHeaderTab, 'isActive'> {
    /**
     * the slug match with the urlParam to active the HeaderTab.
     */
    slug?: string | Array<string>;
}
interface IHeaderTabs {
    /**
     * Props for HeaderTab list
     */
    headerTabList: HeaderTabItem[];
    /**
     * Sets the URL Param for active tabs styling
     */
    urlParam: string;
    /**
     * Sets a divider between HeaderTab items
     */
    addDivider?: boolean;
}

export { HeaderTabItem, IHeaderTabs };
