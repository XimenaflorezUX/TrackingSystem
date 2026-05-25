'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../../../assets/ArrowLeft2.svg.js');
var More1 = require('../../../../../../assets/More1.svg.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var MobileDrawer_component = require('../../../MobileDrawer/MobileDrawer.component.js');
var VacantOptionMobile_component = require('../../../VacantOption/children/VacantOptionMobile/VacantOptionMobile.component.js');
var JobCardOptionDrawer_module = require('./JobCardOptionDrawer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobCardOptionDrawer_module);
var JobCardOptionDrawer = function (_a) {
    var title = _a.title, company = _a.company, menu = _a.menu, backText = _a.backText;
    var _b = React.useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = React.useState(false), showBack = _c[0], setShowBack = _c[1];
    var _d = React.useState(menu), options = _d[0], setOptions = _d[1];
    var toggle = function () { return setOpen(function (prev) { return !prev; }); };
    var handleMenu = React.useCallback(function (options, showBack) {
        if (showBack === void 0) { showBack = true; }
        setOptions(options);
        setShowBack(showBack);
    }, []);
    React.useEffect(function () {
        var _a;
        var onBlurWindow = function () {
            setOpen(false);
            handleMenu(menu, false);
        };
        (_a = window === null || window === void 0 ? void 0 : window.addEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        return function () {
            var _a;
            (_a = window === null || window === void 0 ? void 0 : window.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        };
    }, [handleMenu, menu]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("button", { onClick: toggle, className: cx('button'), type: "button" },
            React__default["default"].createElement(Icon_component.IconItem, { icon: More1, size: 18 })),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { className: cx('drawer'), isOpen: isOpen, onClose: toggle },
            React__default["default"].createElement("header", { className: cx('drawer__header') },
                showBack ? (React__default["default"].createElement("section", null,
                    React__default["default"].createElement("button", { type: "button", className: cx('button-back'), onClick: function () { return handleMenu(menu, false); } },
                        React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowLeft2, size: 20 }),
                        " ",
                        backText))) : null,
                React__default["default"].createElement("h4", { className: cx('drawer__title') }, title),
                React__default["default"].createElement("h5", { className: cx('drawer__company') }, company)),
            React__default["default"].createElement("div", null, options.map(function (option, index) { return (React__default["default"].createElement(VacantOptionMobile_component, { key: index + option.label, option: option, onMenu: handleMenu, onClick: function () {
                    toggle();
                    handleMenu(menu, false);
                } })); })))));
};

exports.JobCardOptionDrawer = JobCardOptionDrawer;
//# sourceMappingURL=JobCardOptionDrawer.component.js.map
