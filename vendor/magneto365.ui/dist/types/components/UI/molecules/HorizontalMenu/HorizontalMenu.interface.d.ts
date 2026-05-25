interface IHorizontalMenu {
    /**
     * Class name of horizontal menu
     */
    className?: string;
    /**
     * options of horizontal menu
     */
    options?: IHorizontalMenuOption[];
    /**
     * onChange of horizontal menu
     */
    onChange?: (selectedItem: number) => void;
}
interface IHorizontalMenuOption {
    /**
     * Icon of horizontal menu option
     */
    icon: React.ReactNode;
    /**
     * Title of horizontal menu option
     */
    title: string;
}

export { IHorizontalMenu, IHorizontalMenuOption };
