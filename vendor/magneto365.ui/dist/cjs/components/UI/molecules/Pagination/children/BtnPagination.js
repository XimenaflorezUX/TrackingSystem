'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SpinnerWhite = require('../../../../../assets/SpinnerWhite.svg.js');
var Icon_component = require('../../../atoms/Icon/Icon.component.js');
require('../../../atoms/BarChart/enums.js');
require('../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../atoms/Button/Button.component.js');
require('../../../atoms/Collapse/Collapse.component.js');
require('../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../constants/stories/vacancies.constants.js');
require('../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../constants/img.constants.js');
require('../../../../../utils/date/dateInput.util.js');
require('../../../atoms/Field/Field.component.js');
require('../../../atoms/Typography/Typography.component.js');
require('../../../atoms/Typography/Typography.interface.js');
require('../../../atoms/InputFile/InputFile.component.js');
require('../../../atoms/Paragraph/Paragraph.component.js');
require('../../../atoms/Radio/Radio.interface.js');
require('../../../atoms/Radio/Radio.constants.js');
require('../../../../../constants/jobDetails.constants.js');
require('../../../atoms/Toggle/Toggle.component.js');
require('../../../../hooks/useMediaQuery/index.js');
var BtnPagination_module = require('./BtnPagination.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BtnPagination = function (_a) {
    var loading = _a.loading, value = _a.value, current = _a.current, text = _a.text, icon = _a.icon, onClick = _a.onClick, dynamicPaginationUrl = _a.dynamicPaginationUrl, stylesB2b = _a.stylesB2b;
    var mgClass = 'magneto-ui-btn-pagination';
    var displayContent = React.useMemo(function () {
        if (loading && value && current === value)
            return React__default["default"].createElement(Icon_component.IconItem, { icon: SpinnerWhite, className: BtnPagination_module["".concat(mgClass, "_spinner")] });
        return value;
    }, [loading, current, value]);
    var pageQueryParam = 'paginator[page]=';
    var displayIcon = React.useMemo(function () { return (icon ? React__default["default"].createElement(Icon_component.IconItem, { icon: icon }) : React__default["default"].createElement(React.Fragment, null)); }, [icon]);
    var title = React.useMemo(function () { return (text ? text : "".concat(value)); }, [text, value]);
    var Button = function () { return (React__default["default"].createElement("button", { className: "".concat(loading && BtnPagination_module["".concat(mgClass, "_disabled")], "\n          ").concat(value && current === value && BtnPagination_module["".concat(mgClass, "_active")], "\n          ").concat(value && current === value && BtnPagination_module["".concat(stylesB2b ? "".concat(mgClass, "_active_b2b") : "".concat(mgClass, "_active_b2c"))], "\n          ").concat(text && BtnPagination_module["".concat(mgClass, "_with__icon")], "\n          ").concat(text && BtnPagination_module["".concat(stylesB2b ? "".concat(mgClass, "_with__icon_b2b") : "".concat(mgClass, "_with__icon_b2c"))], "\n          ").concat(BtnPagination_module["".concat(mgClass, "_btn")], "\n          ").concat(BtnPagination_module["".concat(stylesB2b ? "".concat(mgClass, "_btn_b2b") : "".concat(mgClass, "_btn_b2c"))], "\n        "), title: title, disabled: loading, onClick: onClick },
        displayContent,
        displayIcon)); };
    return (React__default["default"].createElement(React.Fragment, null, dynamicPaginationUrl ? (React__default["default"].createElement("a", { className: BtnPagination_module["".concat(mgClass, "_anchor")], href: "".concat(dynamicPaginationUrl, "?").concat(pageQueryParam).concat(value), onClick: function (e) { return e.preventDefault(); } },
        React__default["default"].createElement(Button, null))) : (React__default["default"].createElement(Button, null))));
};

exports.BtnPagination = BtnPagination;
//# sourceMappingURL=BtnPagination.js.map
