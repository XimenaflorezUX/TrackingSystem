var getIcon = function (iconsObject, iconName) {
    if (!iconName || !(iconName in iconsObject))
        return null;
    return iconsObject[iconName];
};

export { getIcon };
//# sourceMappingURL=getIcons.util.js.map
