import React, { useMemo } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import Close from '../../../../assets/Close.svg.js';
import SearchIcon from '../../../../assets/SearchNormal1Gray.svg.js';
import '../BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import '../Collapse/Collapse.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import style from './InputSearch.module.scss.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var InputSearch = function (_a) {
    var _b = _a.inputValue, inputValue = _b === void 0 ? '' : _b, onChange = _a.onChange, closeOnClick = _a.closeOnClick, placeholder = _a.placeholder, searchOnClick = _a.searchOnClick;
    var hasASearchFunction = useMemo(function () {
        if (searchOnClick) {
            return (React.createElement("button", { className: style["".concat(classMUI, "-container__input-search--btn")], onClick: searchOnClick },
                React.createElement(IconItem, { className: style["".concat(classMUI, "-container__input-search--icon")], icon: SearchIcon, alt: "search-icon" })));
        }
        return (React.createElement(IconItem, { className: style["".concat(classMUI, "-container__input-search--icon")], icon: SearchIcon, alt: "search-icon" }));
    }, [searchOnClick]);
    return (React.createElement("div", { className: style["".concat(classMUI, "-container")] },
        React.createElement("input", { className: style["".concat(classMUI, "-container__input-search")], placeholder: placeholder, style: { flex: 1 }, value: inputValue, onChange: onChange, type: "text" }),
        inputValue.length !== 0 ? (React.createElement("button", { className: style["".concat(classMUI, "-container__input-search--btn")], onClick: closeOnClick },
            React.createElement(IconItem, { icon: Close, alt: "search-icon" }))) : (hasASearchFunction)));
};

export { InputSearch as default };
//# sourceMappingURL=InputSearch.component.js.map
