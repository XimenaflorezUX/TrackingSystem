import { TFieldScreenSizes } from '../../Field.interface';

declare type OmitedFieldListProps = 'onChange' | 'defaultValue';
declare type FieldListChildren = React.ReactElement | ((ctx: {
    isDesktop: boolean;
    isMobile: boolean;
}) => React.ReactElement);
declare type FieldListDirection = 'up' | 'down';
declare type FieldListValue = {
    id: string | number;
};
interface IFieldListBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, OmitedFieldListProps> {
    children: FieldListChildren;
    direction?: FieldListDirection;
    breakpoint?: TFieldScreenSizes | null;
    isMobile?: boolean;
}
interface IFieldListMultiple<T extends FieldListValue> extends IFieldListBaseProps {
    defaultValue?: T[];
    multiple: true;
    onChange?: (value?: T[]) => void;
    value?: T[];
}
interface IFieldListSingle<T extends FieldListValue> extends IFieldListBaseProps {
    defaultValue?: T;
    multiple?: false;
    onChange?: (value: T) => void;
    value?: T;
}
declare type IFieldList<T extends FieldListValue> = IFieldListMultiple<T> | IFieldListSingle<T>;

export { FieldListChildren, FieldListDirection, FieldListValue, IFieldList, IFieldListBaseProps, IFieldListMultiple, IFieldListSingle, OmitedFieldListProps };
