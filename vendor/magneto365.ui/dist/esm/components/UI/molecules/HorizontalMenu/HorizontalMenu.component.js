import React, { useState, useCallback } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './HorizontalMenu.module.scss.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import { Button } from '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, options = _a.options, onChange = _a.onChange;
    var _b = useState(0), selectedItem = _b[0], setSelectedItem = _b[1];
    var handleOnSelect = useCallback(function (key) {
        setSelectedItem(key);
        onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }, [onChange]);
    if (!options || !Array.isArray(options))
        return null;
    return (React.createElement("header", { className: cx('magneto-ui-horizontal-menu', className) },
        React.createElement("nav", { className: cx('magneto-ui-horizontal-menu__nav') },
            React.createElement("ul", { className: cx('magneto-ui-horizontal-menu__list') }, options.map(function (_a, key) {
                var icon = _a.icon, title = _a.title;
                return (React.createElement("li", { key: key, className: cx('magneto-ui-horizontal-menu__button', {
                        'magneto-ui-horizontal-menu__button--active': selectedItem === key
                    }) },
                    React.createElement(Button, { suffixIcon: icon, buttonText: title, onClick: function () { return handleOnSelect(key); } })));
            })))));
};
/**
 * UI Molecule Component for Horizontal Menu
 */
var HorizontalMenu = Component;

export { HorizontalMenu };
//# sourceMappingURL=HorizontalMenu.component.js.map
