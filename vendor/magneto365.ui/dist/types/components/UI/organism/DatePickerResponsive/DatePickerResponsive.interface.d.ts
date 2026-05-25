import { IDatePicker } from '@components/UI/molecules';
import { IMobileDatePicker } from '@components/UI/organism';

interface IDatePickerComponent {
    datePickerProps: IDatePicker;
    mobileDatePickerProps: IMobileDatePicker;
    /**
     * Callback function to be executed when the selected date in the date picker changes.
     */
    onChange?: (value: string | Date | null) => void;
    /**
     * The selected date value for the date picker.
     */
    value?: Date;
}

export { IDatePickerComponent };
