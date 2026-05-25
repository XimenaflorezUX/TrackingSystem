interface IModal {
    /**
     * Represents whether the modal is open or closed.
     */
    isOpen: boolean;
    /**
     * Callback function to be executed when the modal is closed.
     */
    onClose: () => void;
    /**
     * The content that can be displayed inside the modal.
     * It can be a single JSX element, an array of JSX elements
     */
    children: JSX.Element | JSX.Element[];
    /**
     * This property adds a title in the top of the modal
     */
    title?: string;
    /**
     * This property adds a description at the top of the modal after the title
     */
    description?: string;
    /**This is the custom className */
    className?: string;
    /**
     * this property blocks fn onClose from background
     */
    blockBackgroundClose?: boolean;
    /**
     * this property sets custom className in the background span
     */
    backgroundClassName?: string;
}
declare type IModalTitle = React.HTMLAttributes<HTMLHeadingElement>;
declare type IModalDescription = React.HTMLAttributes<HTMLParagraphElement>;

export { IModal, IModalDescription, IModalTitle };
