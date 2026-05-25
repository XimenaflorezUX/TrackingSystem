import React, { memo } from 'react';
import styles from './Paragraph.module.scss.js';

var Component = function (_a) {
    var paragraph = _a.paragraph;
    return React.createElement("p", { className: styles.content }, paragraph);
};
var Paragraph = memo(Component);

export { Paragraph };
//# sourceMappingURL=Paragraph.component.js.map
