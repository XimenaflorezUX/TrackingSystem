import React, { useCallback } from 'react';
import styles from './MenuSearch.module.scss.js';

var MenuSearch = function (_a) {
    var children = _a.children, content = _a.content, show = _a.show, handleOnBlur = _a.handleOnBlur;
    var onBlur = useCallback(function () {
        handleOnBlur && handleOnBlur();
    }, [handleOnBlur]);
    return (React.createElement("div", { className: styles['magneto-ui-menu-search'], onBlur: onBlur },
        React.createElement("div", { className: styles['magneto-ui-menu-search_container'] },
            children,
            React.createElement("div", { className: "".concat(styles['magneto-ui-menu-search_content'], " ").concat(show && styles.open) }, content))));
};

export { MenuSearch as default };
//# sourceMappingURL=MenuSearch.component.js.map
