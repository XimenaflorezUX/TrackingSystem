import { IMegaMenuSideCards } from '@components/UI/molecules';
import React__default from 'react';

declare const withMegaMenuSideCards: <T>(WrappedComponent: React__default.FC<T>) => React__default.FC<{
    sideProps: IMegaMenuSideCards;
    wrapperProps: T;
    withDrawerAction?: boolean | undefined;
    showContent?: boolean | undefined;
}>;

export { withMegaMenuSideCards as default };
