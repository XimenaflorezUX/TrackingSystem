interface IJobSuggestedCard {
    /**
     * this property sets any component
     */
    children: JSX.Element | JSX.Element[];
    /**
     * this property sets custom styles
     */
    className?: string;
}
declare namespace IJobSuggestedCard {
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
        /**
         * this property update to position align the components
         */
        direction?: 'column' | 'row-reverse' | 'column-reverse | row';
    }
}

export { IJobSuggestedCard };
