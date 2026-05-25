'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TypographyLink_component = require('./children/TypographyLink/TypographyLink.component.js');
var TypographyParagraph_component = require('./children/TypographyParagraph/TypographyParagraph.component.js');
var TypographyText_component = require('./children/TypographyText/TypographyText.component.js');
var TypographyTitle_component = require('./children/TypographyTitle/TypographyTitle.component.js');

/**
 * Atom UI of typography. It includes titles, paragraphs, texts and links.
 */
var Typography = Object.assign({}, {
    Link: TypographyLink_component.TypographyLink,
    Paragraph: TypographyParagraph_component.TypographyParagraph,
    Text: TypographyText_component.TypographyText,
    Title: TypographyTitle_component.TypographyTitle
});

exports.Typography = Typography;
//# sourceMappingURL=Typography.component.js.map
