import React, { useMemo, Fragment } from 'react';
import SpinnerWhite from '../../../../../assets/SpinnerWhite.svg.js';
import { IconItem } from '../../../atoms/Icon/Icon.component.js';
import '../../../atoms/BarChart/enums.js';
import '../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../atoms/Button/Button.component.js';
import '../../../atoms/Collapse/Collapse.component.js';
import '../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../constants/stories/vacancies.constants.js';
import '../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../constants/img.constants.js';
import '../../../../../utils/date/dateInput.util.js';
import '../../../atoms/Field/Field.component.js';
import '../../../atoms/Typography/Typography.component.js';
import '../../../atoms/Typography/Typography.interface.js';
import '../../../atoms/InputFile/InputFile.component.js';
import '../../../atoms/Paragraph/Paragraph.component.js';
import '../../../atoms/Radio/Radio.interface.js';
import '../../../atoms/Radio/Radio.constants.js';
import '../../../../../constants/jobDetails.constants.js';
import '../../../atoms/Toggle/Toggle.component.js';
import '../../../../hooks/useMediaQuery/index.js';
import styles from './BtnPagination.module.scss.js';

var BtnPagination = function (_a) {
    var loading = _a.loading, value = _a.value, current = _a.current, text = _a.text, icon = _a.icon, onClick = _a.onClick, dynamicPaginationUrl = _a.dynamicPaginationUrl, stylesB2b = _a.stylesB2b;
    var mgClass = 'magneto-ui-btn-pagination';
    var displayContent = useMemo(function () {
        if (loading && value && current === value)
            return React.createElement(IconItem, { icon: SpinnerWhite, className: styles["".concat(mgClass, "_spinner")] });
        return value;
    }, [loading, current, value]);
    var pageQueryParam = 'paginator[page]=';
    var displayIcon = useMemo(function () { return (icon ? React.createElement(IconItem, { icon: icon }) : React.createElement(Fragment, null)); }, [icon]);
    var title = useMemo(function () { return (text ? text : "".concat(value)); }, [text, value]);
    var Button = function () { return (React.createElement("button", { className: "".concat(loading && styles["".concat(mgClass, "_disabled")], "\n          ").concat(value && current === value && styles["".concat(mgClass, "_active")], "\n          ").concat(value && current === value && styles["".concat(stylesB2b ? "".concat(mgClass, "_active_b2b") : "".concat(mgClass, "_active_b2c"))], "\n          ").concat(text && styles["".concat(mgClass, "_with__icon")], "\n          ").concat(text && styles["".concat(stylesB2b ? "".concat(mgClass, "_with__icon_b2b") : "".concat(mgClass, "_with__icon_b2c"))], "\n          ").concat(styles["".concat(mgClass, "_btn")], "\n          ").concat(styles["".concat(stylesB2b ? "".concat(mgClass, "_btn_b2b") : "".concat(mgClass, "_btn_b2c"))], "\n        "), title: title, disabled: loading, onClick: onClick },
        displayContent,
        displayIcon)); };
    return (React.createElement(Fragment, null, dynamicPaginationUrl ? (React.createElement("a", { className: styles["".concat(mgClass, "_anchor")], href: "".concat(dynamicPaginationUrl, "?").concat(pageQueryParam).concat(value), onClick: function (e) { return e.preventDefault(); } },
        React.createElement(Button, null))) : (React.createElement(Button, null))));
};

export { BtnPagination };
//# sourceMappingURL=BtnPagination.js.map
