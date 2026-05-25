import React, { useCallback, useMemo, Fragment } from 'react';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import Ellipsis from '../../../../assets/Ellipsis-h.svg.js';
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
import { BtnPagination } from './children/BtnPagination.js';
import { createPagination } from './utils/createPagination.util.js';
import styles from './Pagination.module.scss.js';

var Pagination = function (_a) {
    var total = _a.total, current = _a.current, pageSize = _a.pageSize, loading = _a.loading, onChange = _a.onChange, prevTitle = _a.prevTitle, nextTitle = _a.nextTitle, _b = _a.numberOfButtons, numberOfButtons = _b === void 0 ? 3 : _b, dynamicUrl = _a.dynamicUrl, stylesB2b = _a.stylesB2b;
    var mgClass = 'magneto-ui-pagination';
    var handleClick = useCallback(function (page) {
        if (page === current)
            return;
        onChange(page, pageSize);
    }, [current, pageSize, onChange]);
    var _c = useMemo(function () {
        return createPagination({
            total: total,
            current: current,
            pageSize: pageSize,
            numberOfButtons: numberOfButtons
        });
    }, [total, current, pageSize, numberOfButtons]), buttons = _c.buttons, first = _c.first, last = _c.last;
    if (total <= pageSize)
        return React.createElement(Fragment, null);
    return (React.createElement("div", { className: "".concat(styles[mgClass], " ").concat(styles["".concat(stylesB2b ? "".concat(mgClass, "_b2b") : "".concat(mgClass, "_b2c"))]) },
        first !== current && (React.createElement(BtnPagination, { loading: loading, text: prevTitle, icon: ArrowLeft2, onClick: function () { return handleClick(current - 1); }, stylesB2b: stylesB2b })),
        React.createElement("ul", null,
            !buttons.includes(first) && (React.createElement("li", null,
                React.createElement(BtnPagination, { loading: loading, value: first, current: current, onClick: function () { return handleClick(first); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b }),
                React.createElement(IconItem, { icon: Ellipsis, className: styles["".concat(mgClass, "_ellipsis")] }))),
            buttons.map(function (page, index) { return (React.createElement("li", { key: "".concat(page, "-").concat(index) },
                React.createElement(BtnPagination, { loading: loading, value: page, current: current, onClick: function () { return handleClick(page); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b }))); }),
            !buttons.includes(last) && (React.createElement("li", null,
                React.createElement(IconItem, { icon: Ellipsis, className: styles["".concat(mgClass, "_ellipsis")] }),
                React.createElement(BtnPagination, { loading: loading, value: last, current: current, onClick: function () { return handleClick(last); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b })))),
        last !== current && (React.createElement(BtnPagination, { loading: loading, text: nextTitle, icon: ArrowRight2, onClick: function () { return handleClick(current + 1); }, stylesB2b: stylesB2b }))));
};

export { Pagination };
//# sourceMappingURL=Pagination.component.js.map
