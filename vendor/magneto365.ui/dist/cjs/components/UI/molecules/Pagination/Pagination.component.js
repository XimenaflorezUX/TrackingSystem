'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var EllipsisH = require('../../../../assets/Ellipsis-h.svg.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var BtnPagination = require('./children/BtnPagination.js');
var createPagination_util = require('./utils/createPagination.util.js');
var Pagination_module = require('./Pagination.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Pagination = function (_a) {
    var total = _a.total, current = _a.current, pageSize = _a.pageSize, loading = _a.loading, onChange = _a.onChange, prevTitle = _a.prevTitle, nextTitle = _a.nextTitle, _b = _a.numberOfButtons, numberOfButtons = _b === void 0 ? 3 : _b, dynamicUrl = _a.dynamicUrl, stylesB2b = _a.stylesB2b;
    var mgClass = 'magneto-ui-pagination';
    var handleClick = React.useCallback(function (page) {
        if (page === current)
            return;
        onChange(page, pageSize);
    }, [current, pageSize, onChange]);
    var _c = React.useMemo(function () {
        return createPagination_util.createPagination({
            total: total,
            current: current,
            pageSize: pageSize,
            numberOfButtons: numberOfButtons
        });
    }, [total, current, pageSize, numberOfButtons]), buttons = _c.buttons, first = _c.first, last = _c.last;
    if (total <= pageSize)
        return React__default["default"].createElement(React.Fragment, null);
    return (React__default["default"].createElement("div", { className: "".concat(Pagination_module[mgClass], " ").concat(Pagination_module["".concat(stylesB2b ? "".concat(mgClass, "_b2b") : "".concat(mgClass, "_b2c"))]) },
        first !== current && (React__default["default"].createElement(BtnPagination.BtnPagination, { loading: loading, text: prevTitle, icon: ArrowLeft2, onClick: function () { return handleClick(current - 1); }, stylesB2b: stylesB2b })),
        React__default["default"].createElement("ul", null,
            !buttons.includes(first) && (React__default["default"].createElement("li", null,
                React__default["default"].createElement(BtnPagination.BtnPagination, { loading: loading, value: first, current: current, onClick: function () { return handleClick(first); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b }),
                React__default["default"].createElement(Icon_component.IconItem, { icon: EllipsisH, className: Pagination_module["".concat(mgClass, "_ellipsis")] }))),
            buttons.map(function (page, index) { return (React__default["default"].createElement("li", { key: "".concat(page, "-").concat(index) },
                React__default["default"].createElement(BtnPagination.BtnPagination, { loading: loading, value: page, current: current, onClick: function () { return handleClick(page); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b }))); }),
            !buttons.includes(last) && (React__default["default"].createElement("li", null,
                React__default["default"].createElement(Icon_component.IconItem, { icon: EllipsisH, className: Pagination_module["".concat(mgClass, "_ellipsis")] }),
                React__default["default"].createElement(BtnPagination.BtnPagination, { loading: loading, value: last, current: current, onClick: function () { return handleClick(last); }, dynamicPaginationUrl: dynamicUrl, stylesB2b: stylesB2b })))),
        last !== current && (React__default["default"].createElement(BtnPagination.BtnPagination, { loading: loading, text: nextTitle, icon: ArrowRight2, onClick: function () { return handleClick(current + 1); }, stylesB2b: stylesB2b }))));
};

exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.component.js.map
