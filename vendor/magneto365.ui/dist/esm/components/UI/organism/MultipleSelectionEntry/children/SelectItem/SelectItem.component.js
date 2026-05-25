import React, { useMemo } from 'react';
import { classMUI } from '../../../../../../constants/stories/common.constants.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import style from './SelectItem.module.scss.js';

var SelectItem = function (_a) {
    var text = _a.text, onClick = _a.onClick, disable = _a.disable;
    var disableSelection = useMemo(function () {
        return disable ? style['disable'] : '';
    }, [disable]);
    return (React.createElement("button", { className: "".concat(style["".concat(classMUI, "-select-item")], " ").concat(disableSelection), title: text, onClick: onClick }, text));
};

export { SelectItem as default };
//# sourceMappingURL=SelectItem.component.js.map
