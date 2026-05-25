import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useEffect } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import Check from '../../../../../../assets/Check.svg.js';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import { ComparativeCounter } from '../../../../../UI/atoms/ComparativeCounter/ComparativeCounter.component.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './ChatQuestionnaireOpen.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaireOpen = function (_a) {
    var _b, _c, _d, _e;
    var className = _a.className, classNames = _a.classNames, renderRight = _a.renderRight, rest = __rest(_a, ["className", "classNames", "renderRight"]);
    var count = (_e = (_c = (_b = rest.value) === null || _b === void 0 ? void 0 : _b.toString().length) !== null && _c !== void 0 ? _c : (_d = rest.defaultValue) === null || _d === void 0 ? void 0 : _d.toString().length) !== null && _e !== void 0 ? _e : 0;
    var ref = useRef(rest.ref);
    useEffect(function () {
        var el = ref.current;
        if (!el)
            return;
        var handler = function () {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        };
        handler();
    }, [rest.value]);
    return (React.createElement("div", { className: cx('short', classNames === null || classNames === void 0 ? void 0 : classNames.container) },
        React.createElement("div", { className: cx('short__field', classNames === null || classNames === void 0 ? void 0 : classNames.field) },
            React.createElement("textarea", __assign({ className: cx('short__input', className), rows: 1, ref: ref }, rest)), renderRight === null || renderRight === void 0 ? void 0 :
            renderRight({ classNameBtnSend: cx('short__button'), icon: React.createElement(IconItem, { className: cx('short__icon'), icon: Check, size: 20 }) })),
        React.createElement(ComparativeCounter, { className: classNames === null || classNames === void 0 ? void 0 : classNames.counter, current: count, max: rest.maxLength, position: "right" })));
};

export { ChatQuestionnaireOpen };
//# sourceMappingURL=ChatQuestionnaireOpen.component.js.map
