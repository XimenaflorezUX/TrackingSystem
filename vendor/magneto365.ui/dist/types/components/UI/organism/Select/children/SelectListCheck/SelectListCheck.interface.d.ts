import { IOption } from '../../Select.interface';

interface ISelect2ListCheck<T> {
    className?: string;
    filter?: (option: IOption<T>, searchValue: string, value?: IOption<T> | IOption<T>[] | undefined) => boolean;
    renderItem?: (option: IOption<T>) => JSX.Element;
    clickOut?: boolean;
    setClickOut?: (clickOut: boolean) => void;
}

export { ISelect2ListCheck };
