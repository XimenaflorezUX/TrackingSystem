import { ISelect2ListCheck } from './children/SelectListCheck/SelectListCheck.interface';
import { ISelectDrawer } from './children/SelectDrawer/SelectDrawer.interface';
import React__default from 'react';
import { ISelectContext } from './Select.context';
import { ISelect } from './Select.interface';
import { ISelectInput } from './children/SelectInput/SelectInput.interface';

/**
 * @experimental this component is early, so that the interface component and behavrior could change.
 * @deprecated this function will change soon.
 */
declare const Select: (<T>({ children, renderSelect, placeholder, options, value, onChange, inputReadonly, className, getLabel }: ISelect<T>) => JSX.Element) & {
    useContext: <T_1>() => ISelectContext<T_1>;
    Input: <T_2>({ onChange, value, className, onClick, open, actionIcon, selected, getLabel, readOnly, disabled, placeholder, type, ...rest }: ISelectInput<T_2>) => JSX.Element;
    Clickout: React__default.FC<Omit<{
        clickOut: boolean;
        setClickOut: (value: boolean) => void;
        children?: React__default.ReactNode;
    }, "clickOut" | "setClickOut">>;
    Drawer: React__default.FC<ISelectDrawer>;
    ListCheck: <T_3>({ className, renderItem, filter }: ISelect2ListCheck<T_3>) => JSX.Element;
};

export { Select };
