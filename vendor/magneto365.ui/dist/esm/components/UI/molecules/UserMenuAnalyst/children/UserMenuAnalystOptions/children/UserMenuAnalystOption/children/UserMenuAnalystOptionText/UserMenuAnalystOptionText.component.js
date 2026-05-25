import React from 'react';
import CNM from '../../../../../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './UserMenuAnalystOptionText.module.scss.js';

var Component = function (_a) {
    var option = _a.option, className = _a.className;
    return (React.createElement("span", { className: CNM.get({
            styles: styles,
            cls: [className, 'user-menu-analyst-option-text']
        }) },
        React.createElement("p", null, option.title)));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionText = React.memo(Component);

export { UserMenuAnalystOptionText };
//# sourceMappingURL=UserMenuAnalystOptionText.component.js.map
