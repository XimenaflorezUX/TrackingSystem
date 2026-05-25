declare type IStatusJob = 'Sent' | 'Pending' | 'Validation' | 'Finalists' | 'Hired' | 'Discarded' | 'Canceled';
interface ICommonProcessesCardPros {
    /**
     * this property sets custom className
     */
    className?: string;
    /**
     * this property sets any children
     */
    children: React.ReactNode;
}
declare type ICommonProcessesCardImg = React.ImgHTMLAttributes<HTMLImageElement>;
interface IProcessesCard extends React.ButtonHTMLAttributes<HTMLButtonElement>, ICommonProcessesCardPros {
    /**
     * this property sets custom className
     */
    children: React.ReactNode;
    /**
     * this  property on true changes the background color
     */
    isSelected?: boolean;
}
declare namespace IProcessesCard {
    type ISection = ICommonProcessesCardPros;
    type ITitle = ICommonProcessesCardPros & {
        status?: IStatusJob;
    };
    type ICardStatus = ICommonProcessesCardPros & {
        status: IStatusJob;
        isSelected?: boolean;
    };
    type IText = ICommonProcessesCardPros & {
        status?: IStatusJob;
        strong?: boolean;
    };
    type IBrand = ICommonProcessesCardImg;
    type IArrow = ICommonProcessesCardImg & {
        status?: IStatusJob;
    };
    type IStatusIcon = ICommonProcessesCardImg & {
        status: IStatusJob;
    };
}

export { ICommonProcessesCardImg, ICommonProcessesCardPros, IProcessesCard, IStatusJob };
