interface IApplicationSummary {
    /**
     * this property sets any component
     */
    children: JSX.Element | JSX.Element[];
    /**
     * this property opens the ui
     */
    open: boolean;
    /**
     * this property closes the ui
     */
    onClose: () => void;
    /**
     * this property sets custom styles
     */
    className?: string;
}
declare namespace IApplicationSummary {
    interface Section {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets any component
         */
        children: JSX.Element | JSX.Element[];
        /**
         * this property update to position align the components
         */
        aligned?: 'start' | 'center' | 'end';
    }
    interface Title {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface SubTitle {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface Text {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets custom style button
         */
        variant?: 'primary' | 'secondary';
    }
}

export { IApplicationSummary };
