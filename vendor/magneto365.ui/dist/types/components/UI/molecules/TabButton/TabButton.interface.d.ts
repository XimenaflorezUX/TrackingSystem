import { ILinkProps, LinkElement } from '../../atoms/Link/Link.interface';

interface TabButtonElement {
    /**
     * Sets the font size for the text
     */
    tabButtonTextSize?: string;
    /**
     * Sets the font weigth for the text
     */
    tabButtonTextWeight?: string;
    /**
     * Sets the tab button color
     */
    tabButtonColor?: string;
    /**
     * Sets a box shadow property for the Tab Button
     */
    boxShadow?: boolean;
}
interface ITabButton {
    /**
     * Props to set the Link component
     */
    tabButtonLink?: ILinkProps;
    /**
     *
     */
    tabButtonLinkStyles?: LinkElement;
    /**
     * Sets the style props for the Tab Button
     */
    tabButtonStyles?: TabButtonElement;
}

export { ITabButton, TabButtonElement };
