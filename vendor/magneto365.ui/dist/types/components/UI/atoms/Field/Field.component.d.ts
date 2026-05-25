import React__default from 'react';
import { IFieldListBody } from './children/FieldList/children/FieldListBody/FieldListBody.interface';
import { IFieldListItem } from './children/FieldList/children/FieldListItem/FieldListItem.interface';
import { FieldListValue, IFieldList } from './children/FieldList/FieldList.interface';
import { IFieldListWrapper } from './children/FieldList/children/FieldListWrapper/FieldListWrapper.interface';
import { IFieldArea } from './children/FieldArea/FieldArea.interface';
import { IFieldInput } from './children/FieldInput/FieldInput.interface';
import { IFieldLabel } from './children/FieldLabel/FieldLabel.interface';
import { IField } from './Field.interface';

/**
 * Atom UI of field. It includes .
 */
declare const Field: React__default.ForwardRefExoticComponent<IField & React__default.RefAttributes<HTMLDivElement>> & {
    Area: React__default.ForwardRefExoticComponent<IFieldArea & React__default.RefAttributes<HTMLTextAreaElement>>;
    Input: React__default.ForwardRefExoticComponent<IFieldInput & React__default.RefAttributes<HTMLInputElement>>;
    Label: React__default.ForwardRefExoticComponent<IFieldLabel & React__default.RefAttributes<HTMLLabelElement>>;
    List: (<T extends FieldListValue = FieldListValue>(props: IFieldList<T> & {
        ref?: React__default.Ref<HTMLDivElement> | undefined;
    }) => React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>> | null) & {
        Item: <T_1 extends FieldListValue>(props: IFieldListItem<T_1> & {
            ref?: React__default.ForwardedRef<HTMLLIElement> | undefined;
        }) => JSX.Element;
        Wrapper: React__default.ForwardRefExoticComponent<IFieldListWrapper & React__default.RefAttributes<HTMLDivElement>>;
        Body: React__default.ForwardRefExoticComponent<IFieldListBody & React__default.RefAttributes<HTMLUListElement>>;
    };
};

export { Field };
