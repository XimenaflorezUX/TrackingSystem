interface IMultipleSelectionentry {
    placeholder: string;
    dropDownTitle: string;
    listOptions: IListOption[];
    numberOfSelectable?: number;
    selectedValues?: number[];
    onChange: (value: IListOption[]) => void;
}
interface IListOption {
    id: number;
    name: string;
}

export { IListOption, IMultipleSelectionentry };
