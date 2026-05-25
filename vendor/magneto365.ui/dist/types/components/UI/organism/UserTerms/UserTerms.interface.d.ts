interface IUserTerm {
    /**
     * this property sets any component
     */
    children: JSX.Element | JSX.Element[];
    /**
     * this property opens the ui
     */
    isOpen: boolean;
    /**
     * this property closes the ui
     */
    onClose?: () => void;
}
declare namespace IUserTerm {
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
    interface Highlight {
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
    interface Content {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface UlList {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface Check {
        /**
         * this property sets custom styles
         */
        className?: string;
        /**
         * this property check the input
         */
        isChecked?: boolean;
        /**
         * this fn returns true or false depending on checked
         */
        onChange?: (value: boolean) => void;
        /**
         * this property sets children elements
         */
        children?: React.ReactNode;
    }
    interface Submit extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        /**
         * this property add loading component
         */
        isLoading?: boolean;
    }
}

export { IUserTerm };
