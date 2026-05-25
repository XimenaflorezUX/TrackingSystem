interface IAlertsPanel {
    /**
     *  This is the title on the top
     */
    title: string;
    /**
     * React children to be rendered inside the component.
     */
    children?: React.ReactNode;
    /**
     * Additional class names for custom styling.
     */
    className?: string;
}
declare namespace IAlertsPanel {
    interface List {
        /**
         * React children to be rendered inside the component.
         */
        children?: React.ReactNode;
        /**
         * Additional class names for custom styling.
         */
        className?: string;
    }
    interface Item {
        /**
         * Additional class names for custom styling.
         */
        className?: string;
        /**
         * This is the custom text
         */
        text: string;
        /**
         * React children to be rendered inside the component.
         */
        onDelete: () => void;
    }
}

export { IAlertsPanel };
