'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
var Divider_component = require('../../../../atoms/Divider/Divider.component.js');
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
var UserMenuAnalystOptions_module = require('./UserMenuAnalystOptions.module.scss.js');
var UserMenuAnalystOption_component = require('./children/UserMenuAnalystOption/UserMenuAnalystOption.component.js');
require('./children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, isMenuOpen = _a.isMenuOpen, optionClassNames = _a.optionClassNames, options = _a.options, queryString = _a.queryString;
    var isLastSection = React.useMemo(function () { return (options === null || options === void 0 ? void 0 : options.length) === 1; }, [options]);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalystOptions_module, cls: ['user-menu-analyst-options', className] }) }, options === null || options === void 0 ? void 0 : options.map(function (option, i) {
        var _a;
        return (React__default["default"].createElement(React__default["default"].Fragment, { key: "user-menu-analyst-section-".concat(i) }, (_a = option.children) === null || _a === void 0 ? void 0 :
            _a.map(function (item, j) { return (React__default["default"].createElement(UserMenuAnalystOption_component.UserMenuAnalystOption, { key: "user-menu-analyst-option-".concat(j), isOpen: isMenuOpen, option: item, classNames: optionClassNames, queryString: queryString, handleModal: handleModal, handleMenuOpen: handleMenuOpen })); }),
            !isLastSection && i < options.length - 1 && (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalystOptions_module, cls: ['user-menu-analyst-options__divider'] }) },
                React__default["default"].createElement(Divider_component.Divider, null)))));
    })));
};
/**
 * Molecule UI child component of user menu analyst
 */
var UserMenuAnalystOptions = Component;

exports.UserMenuAnalystOptions = UserMenuAnalystOptions;
//# sourceMappingURL=UserMenuAnalystOptions.component.js.map
