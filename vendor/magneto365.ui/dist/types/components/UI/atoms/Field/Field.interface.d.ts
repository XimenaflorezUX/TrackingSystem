import { screenSize } from '@constants/responsive.constants';

interface IField extends React.HTMLAttributes<HTMLDivElement> {
    error?: boolean;
}
interface IFieldProvider {
    children?: React.ReactNode;
    className?: string;
    fieldRef?: React.ForwardedRef<HTMLDivElement>;
}
interface IFieldContext {
    breakpoint: TFieldScreenSizes | null;
    hasError?: boolean;
    hasList: boolean;
    isDesktop: boolean;
    isFocused: boolean;
    isMobile: boolean;
    wrapperRef: React.RefObject<HTMLDivElement>;
    onBlur: <T>(evt?: React.FocusEvent<T>, ref?: React.RefObject<T> | React.ForwardedRef<T>) => void;
    onFocus: <T>(evt: React.FocusEvent<T>) => void;
    setBreakpoint: React.Dispatch<React.SetStateAction<TFieldScreenSizes | null>>;
    setHasError: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    setHasList: React.Dispatch<React.SetStateAction<boolean>>;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IUseFieldFocus<T> {
    disabled?: boolean;
    readOnly?: boolean;
    ref?: React.RefObject<T>;
    onBlur?: (evt: React.FocusEvent<T>) => void;
    onFocus?: (evt: React.FocusEvent<T>) => void;
}
declare type TFieldScreenSizes = keyof typeof screenSize;

export { IField, IFieldContext, IFieldProvider, IUseFieldFocus, TFieldScreenSizes };
