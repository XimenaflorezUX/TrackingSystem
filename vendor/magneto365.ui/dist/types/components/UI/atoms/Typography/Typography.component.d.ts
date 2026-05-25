import * as React from 'react';
import { ITypographyBase } from './Typography.interface';
import { ITypographyTitle } from './children/TypographyTitle/TypographyTitle.interface';

/**
 * Atom UI of typography. It includes titles, paragraphs, texts and links.
 */
declare const Typography: {
    Link: React.ForwardRefExoticComponent<ITypographyBase & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
    Paragraph: React.ForwardRefExoticComponent<ITypographyBase & React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
    Text: React.ForwardRefExoticComponent<ITypographyBase & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
    Title: React.ForwardRefExoticComponent<ITypographyTitle & React.RefAttributes<HTMLHeadingElement>>;
};

export { Typography };
