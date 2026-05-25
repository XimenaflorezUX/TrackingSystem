import React__default from 'react';
import { ISelectInput } from './children/SelectInput/SelectInput.interface';

interface ISelect<T> {
    className?: string;
    getLabel?: ISelectInput<T>['getLabel'];
    value: IValueSelect<T>[];
    onChange?: (value: IValueSelect<T>[]) => void;
    options: IOption<T>[];
    placeholder?: string;
    renderSelect?: <T>(props: ISelectInput<T>) => React__default.ReactNode;
    inputReadonly?: boolean;
    children?: React__default.ReactNode;
}
interface IValueSelect<T> {
    id: number | string;
    value: T;
}
interface IOption<T> extends IValueSelect<T> {
    label?: string;
}

export { IOption, ISelect, IValueSelect };
