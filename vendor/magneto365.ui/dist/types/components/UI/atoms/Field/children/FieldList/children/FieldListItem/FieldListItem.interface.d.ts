import { FieldListValue } from '../../FieldList.interface';

interface IFieldListItem<T extends FieldListValue> extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    value?: T;
}

export { IFieldListItem };
