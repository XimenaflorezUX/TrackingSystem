interface IOneSelectionentry {
    dropDownTitle: string;
    listOptions: IListOption[];
    selectedValue?: number | null;
    onChange: (value: number) => void;
    responsiveMenu?: boolean;
}
interface IListOption {
    id: number;
    label: string;
    shortLabel?: string;
    order?: number;
}

export { IListOption, IOneSelectionentry };
