interface IAlertJobStatus {
    /**
     * React children to be rendered inside the component.
     */
    children?: React.ReactNode;
    /**
     * Additional class names for custom styling.
     */
    className?: string;
    /**
     * type to background alert 'warning' or 'normal'.
     * default: warning
     */
    type?: EAlertJobStatusType;
}
declare namespace IAlertJobStatus {
    interface Container {
        /**
         * React children to be rendered inside the container.
         */
        children?: React.ReactNode;
        /**
         * Additional class names for custom styling.
         */
        className?: string;
    }
    interface Icon {
        /**
         * Additional class names for custom styling.
         */
        className?: string;
        /**
         * Here is the icon component
         */
        src?: string | null;
        /**
         * You can change the size of the icon by adding a numeric value here
         */
        size?: number;
        /**
         * Text alt in the img element
         */
        alt?: string | null;
        /**
         * type to icon alert 'warning' or 'success'.
         */
        type?: EAlertJobStatusIcon;
    }
    interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        /**
         * React children to be rendered inside the container.
         */
        children?: React.ReactNode;
        /**
         * Additional class names for custom styling.
         */
        className?: string;
        /**
         * Here is the icon button component
         */
        icon?: string | null;
        /**
         * You can change the size of the icon by adding a numeric value here
         */
        sizeIcon?: number;
    }
}
declare type EAlertJobStatusType = 'warning' | 'normal';
declare type EAlertJobStatusIcon = 'success' | 'warning' | 'error';

export { EAlertJobStatusIcon, EAlertJobStatusType, IAlertJobStatus };
