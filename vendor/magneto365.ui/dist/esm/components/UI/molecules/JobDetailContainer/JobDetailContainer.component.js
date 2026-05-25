import React, { useMemo } from 'react';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
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
import style from './JobDetailContainer.module.scss.js';

var JobDetailContainer = function (_a) {
    var children = _a.children, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose;
    var toggleMenu = useMemo(function () {
        return isOpen ? style['is-open'] : '';
    }, [isOpen]);
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-container")], " ").concat(toggleMenu) },
        React.createElement("button", { type: "button", onClick: onClose, className: style["".concat(classMUI, "-job-detail-container--btn")] },
            React.createElement(IconItem, { alt: "arrow right", icon: ArrowRight2 })),
        children));
};

export { JobDetailContainer as default };
//# sourceMappingURL=JobDetailContainer.component.js.map
