import React from 'react';
import styles from './Image.module.scss.js';

var Image = function (_a) {
    var image = _a.image, alt = _a.alt, playIcon = _a.playIcon, className = _a.className;
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: image, alt: alt, loading: "lazy", className: className }),
        playIcon && React.createElement("div", { className: styles['magneto-ui-play-button'] }, playIcon)));
};

export { Image as default };
//# sourceMappingURL=Image.component.js.map
