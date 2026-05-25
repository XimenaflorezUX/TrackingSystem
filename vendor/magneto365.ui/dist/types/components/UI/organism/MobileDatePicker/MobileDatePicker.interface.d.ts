interface IMobileDatePicker {
    applyLabel: string;
    cancelLabel: string;
    monthsLabels: string[];
    selectionMonthHeader: string;
    selectionYearHeader: string;
    monthPlaceholder: string;
    yearPlaceholder: string;
    disabled?: boolean;
    /**
     * Callback function to be executed when the selected date in the date picker changes.
     * @param value - The new date value selected, which can be a string, a Date object, or null.
     */
    onChange: (value: string | Date | null) => void;
    /**
     * The selected date value for the date picker.
     */
    value?: Date;
    /**
     * value for setting future years
     */
    futureYears?: number;
    /**
     * value for setting past years
     */
    pastYears?: number;
}

export { IMobileDatePicker };
