import React, { useRef } from 'react';
import SearchIcon from '../../../../assets/SearchNormal1Gray.svg.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
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
import styles from './FilterSearchItem.module.scss.js';

var FilterSearchItem = function (_a) {
    var placeholder = _a.placeholder, _b = _a.disabled, disabled = _b === void 0 ? false : _b, loading = _a.loading, handleSearch = _a.handleSearch;
    var inputRef = useRef(null);
    if (loading)
        return (React.createElement("div", { className: styles.skeleton },
            React.createElement(IconItem, { icon: SearchIcon, size: 17 })));
    return (React.createElement("div", { className: "".concat(styles['magneto-ui-filter-search'], " ").concat(disabled ? styles.disabled : '') },
        React.createElement(IconItem, { icon: SearchIcon, size: 17 }),
        React.createElement("input", { ref: inputRef, type: "search", placeholder: placeholder, onChange: function (event) { return handleSearch(event, inputRef); }, disabled: disabled })));
};

export { FilterSearchItem };
//# sourceMappingURL=FilterSearchItem.component.js.map
