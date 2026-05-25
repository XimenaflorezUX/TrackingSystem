import { ComponentProps } from './Radio.interface';

/**
 * Atom UI component of radio
 */
declare const Radio: <T extends "button" | "radio">({ type, ...props }: {
    type: T;
} & ComponentProps<T>) => JSX.Element | null;

export { Radio };
