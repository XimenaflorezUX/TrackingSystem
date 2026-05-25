import { FC } from 'react';
import { IPaginationProps } from './Pagination.interface';

declare type dynamicProps = {
    dynamicUrl?: string;
};
declare type ComposedProps = IPaginationProps & dynamicProps;
declare const Pagination: FC<ComposedProps>;

export { Pagination };
