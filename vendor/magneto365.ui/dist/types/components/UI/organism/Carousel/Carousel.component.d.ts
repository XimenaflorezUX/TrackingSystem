import React__default from 'react';
import { ICarousel } from './Carousel.interface';

declare const Carousel: React__default.FC<ICarousel> & {
    Items: React__default.FC<ICarousel.Items>;
    Header: React__default.FC<ICarousel.Header>;
    Footer: React__default.FC<ICarousel.Footer>;
    Button: React__default.FC<ICarousel.Buttons>;
};

export { Carousel };
