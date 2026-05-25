import React, { useState } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import styles from './Avatar.modules.scss.js';
import User from '../../../../assets/User.svg.js';

var Component = function (_a) {
    var userImage = _a.userImage, fallbackImage = _a.fallbackImage, onClick = _a.onClick;
    var _b = useState(false), imageError = _b[0], setImageError = _b[1];
    var handleError = function () {
        setImageError(true);
    };
    return (React.createElement("div", { className: styles.avatarComponent, onClick: onClick },
        userImage && !imageError && React.createElement("img", { src: userImage, alt: "User Avatar", loading: "lazy", onError: handleError }),
        (!userImage || imageError) && (React.createElement("div", { className: styles['magneto-ui-default-avatar'] },
            React.createElement(IconItem, { icon: fallbackImage || User, hover: false })))));
};
/**
 * UI Atom component of Avatar
 */
var Avatar = Component;

export { Avatar };
//# sourceMappingURL=Avatar.component.js.map
