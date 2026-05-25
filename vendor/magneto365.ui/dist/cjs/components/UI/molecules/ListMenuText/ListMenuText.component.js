'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var Loading_component = require('../../atoms/Loading/Loading.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var ListMenuText_module = require('./ListMenuText.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ListMenuText = function (_a) {
    var title = _a.title, links = _a.links, createAccount = _a.createAccount, isLoading = _a.isLoading;
    return (React__default["default"].createElement("div", { className: "".concat(ListMenuText_module["".concat(common_constants.classMUI, "-list-menu")]) },
        React__default["default"].createElement("p", { className: "".concat(ListMenuText_module["".concat(common_constants.classMUI, "-list-menu__title")]) }, title),
        links.map(function (_a, i) {
            var tag = _a.tag, href = _a.href, isCreateAccount = _a.isCreateAccount, openNewTab = _a.openNewTab;
            return isCreateAccount
                ? tag && (React__default["default"].createElement("div", { key: i, className: "".concat(ListMenuText_module["".concat(common_constants.classMUI, "-list-menu__create-account")]) },
                    React__default["default"].createElement("button", { title: tag, className: "".concat(ListMenuText_module["".concat(common_constants.classMUI, "-list-menu__create-account--btn")]), onClick: createAccount }, tag),
                    isLoading && React__default["default"].createElement(Loading_component.Loading, tslib_es6.__assign({}, common_constants.LoadingProps))))
                : tag && (React__default["default"].createElement("a", { className: "".concat(ListMenuText_module["".concat(common_constants.classMUI, "-list-menu__link")]), title: tag, key: i, href: href, target: openNewTab ? '_blank' : '_self', rel: "noreferrer" }, tag));
        })));
};

module.exports = ListMenuText;
//# sourceMappingURL=ListMenuText.component.js.map
