import { ISelect } from './Select.interface';

interface ISelectContext<T> {
    value: ISelect<T>['value'];
    /**
     *
     * @param value
     * @returns
     */
    onChange: (value: ISelectContext<T>['value']) => void;
    /**
     * current options to display in select list components.
     */
    options: ISelect<T>['options'];
    /**
     * input search values, it works for make filters.
     */
    search: string;
    /**
     * @param search current search input value.
     * @returns
     */
    onSearch: (search: string | ((current: string) => string)) => void;
    open: boolean;
    /**
     *
     * @param value current state from Drawer (open/close).
     * @returns
     */
    onSwitch: (value: boolean | ((current: boolean) => boolean)) => void;
}

export { ISelectContext };
