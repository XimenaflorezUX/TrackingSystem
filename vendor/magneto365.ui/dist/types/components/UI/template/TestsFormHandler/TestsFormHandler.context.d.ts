import React__default, { ReactNode } from 'react';
import { IFormHandlerContext } from './TestsFormHandlerContext.interface';

declare const FormHandlerProvider: React__default.FC<{
    children: ReactNode;
}>;
declare const useFormHandler: () => IFormHandlerContext;

export { FormHandlerProvider, FormHandlerProvider as default, useFormHandler };
