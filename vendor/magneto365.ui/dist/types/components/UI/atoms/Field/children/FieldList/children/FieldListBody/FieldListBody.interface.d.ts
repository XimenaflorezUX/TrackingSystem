declare type FieldListBodyChildren = React.ReactNode | ((ctx: {
    isDesktop: boolean;
    isMobile: boolean;
}) => React.ReactNode);
interface IFieldListBody extends React.HTMLAttributes<HTMLUListElement> {
    children?: FieldListBodyChildren;
}

export { FieldListBodyChildren, IFieldListBody };
