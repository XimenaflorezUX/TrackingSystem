import React from 'react';
import CNM from '../../../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './UserMenuAnalystTitle.module.scss.js';

var Component = function (_a) {
    var subTitle = _a.subTitle, title = _a.title;
    var separatorIndex = subTitle === null || subTitle === void 0 ? void 0 : subTitle.indexOf(':');
    return (React.createElement("div", null,
        React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-title__title'] }) }, title),
        subTitle && separatorIndex && (React.createElement("div", null,
            React.createElement("span", { className: CNM.get({
                    styles: styles,
                    cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--first']
                }) }, subTitle.slice(0, separatorIndex + 1).trim() + ' '),
            React.createElement("span", { className: CNM.get({
                    styles: styles,
                    cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--last']
                }) }, subTitle.slice(separatorIndex + 1).trim())))));
};
var UserMenuAnalystTitle = Component;

export { UserMenuAnalystTitle };
//# sourceMappingURL=UserMenuAnalystTitle.component.js.map
