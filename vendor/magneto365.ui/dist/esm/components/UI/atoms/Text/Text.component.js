import React, { useMemo, Fragment } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './Text.module.scss.js';

var TextCustom = function (_a) {
    var text = _a.text, customText = _a.customText, className = _a.className;
    var textRender = useMemo(function () {
        return (customText === null || customText === void 0 ? void 0 : customText.length) ? (React.createElement("span", { className: className }, customText.map(function (_a, index) {
            var value = _a.value, fontWeight = _a.fontWeight, _b = _a.lineBreak, lineBreak = _b === void 0 ? false : _b;
            return (React.createElement(Fragment, { key: "custom-text-".concat(index) },
                React.createElement("span", { className: style["".concat(classMUI, "-").concat(fontWeight)] }, value),
                lineBreak && React.createElement("br", null)));
        }))) : (React.createElement("p", { className: className }, text));
    }, [text, customText, className]);
    return React.createElement(React.Fragment, null, textRender);
};

export { TextCustom };
//# sourceMappingURL=Text.component.js.map
