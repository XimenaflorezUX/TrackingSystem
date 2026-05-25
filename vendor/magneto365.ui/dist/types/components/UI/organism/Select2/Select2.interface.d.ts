interface ISelectOptions<T> {
    /**
     * this property establish a list with this interface
     */
    selectList: (ISelectField & T)[];
    /**
     * this property sets the placeholder
     */
    placeholder: string;
    /**
     * not setting this property is specific to the component
     */
    clickOut?: boolean;
    /**
     * not setting this property is specific to the component
     */
    setClickOut?: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * this function gives you the values selected
     */
    onChange: (value: (ISelectField & T)[]) => void;
    /**
     * this property allows multiple selections or single selections
     */
    isMultiple?: boolean;
    /**
     * this property add tags
     */
    haveTags?: boolean;
    /**
     * this property limits the number of selections
     */
    limitSelections?: number;
    /**
     * this property gives you the written text
     */
    setTerm?: (value: string) => void;
    /**
     * this property sets a icon in the title
     */
    icon?: string;
    /**
     * this property disables the input
     */
    disabled?: boolean;
    /**
     * this propertys sets currents values
     */
    currentFields?: (ISelectField & T)[];
    /**
     * enables mobile version
     */
    isMobile?: boolean;
    /**
     * renders a custom component
     */
    render?: (data: T, index: number) => JSX.Element;
    /**
     * custom class name for styling
     */
    className?: string;
}
interface ISelectField {
    id: string | number;
    name: string;
    img?: string;
}

export { ISelectField, ISelectOptions };
