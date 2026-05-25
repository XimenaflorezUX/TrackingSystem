'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getIcon = function (iconsObject, iconName) {
    if (!iconName || !(iconName in iconsObject))
        return null;
    return iconsObject[iconName];
};

exports.getIcon = getIcon;
//# sourceMappingURL=getIcons.util.js.map
