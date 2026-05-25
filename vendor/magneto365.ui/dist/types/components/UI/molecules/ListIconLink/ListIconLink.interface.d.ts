declare type Direction = 'row' | 'column';
interface IListIconLink {
    direction?: Direction;
    spacing?: number;
    listIcon: IListIcon[];
    size?: number;
    hover?: boolean;
    className?: string;
}
interface IListIcon {
    url?: string | null;
    icon?: string | null;
    title?: string;
}

export { IListIcon, IListIconLink };
