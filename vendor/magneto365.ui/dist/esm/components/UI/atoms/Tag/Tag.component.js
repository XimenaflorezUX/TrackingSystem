import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './Tag.module.scss.js';

var Tags = function (_a) {
    var text = _a.text, onClick = _a.onClick, icon = _a.icon, _b = _a.bgColor, bgColor = _b === void 0 ? '#F4F4FA' : _b, _c = _a.textColor, textColor = _c === void 0 ? 'black' : _c;
    return (React.createElement("button", { className: style["".concat(classMUI, "-tag")], style: { backgroundColor: bgColor, color: textColor }, onClick: onClick, type: "button" },
        text,
        React.createElement(IconItem, { icon: icon, alt: "tag-icon" })));
};

export { Tags as default };
//# sourceMappingURL=Tag.component.js.map
