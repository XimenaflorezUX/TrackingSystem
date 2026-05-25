'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
var StarYellow = require('../../../../../../assets/Star-yellow.svg.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
var Typography_component = require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobDetailsSuggested_module = require('./JobDetailsSuggested.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsSuggested_module);
var JobDetailsSuggested = function (_a) {
    var title = _a.title, classNames = _a.classNames, tag = _a.tag, children = _a.children, _b = _a.behavior, behavior = _b === void 0 ? 'showcase' : _b, renderFooter = _a.renderFooter;
    return children ? (React__default["default"].createElement("section", { className: cx("suggested-jobs-container", { tab__container: behavior === 'tab' }, classNames === null || classNames === void 0 ? void 0 : classNames.container) },
        React__default["default"].createElement("div", { className: cx('suggested-jobs-container__header', classNames === null || classNames === void 0 ? void 0 : classNames.header) },
            React__default["default"].createElement(Typography_component.Typography.Title, null, title),
            tag && (React__default["default"].createElement("div", { className: cx('suggested-jobs-container__tag', classNames === null || classNames === void 0 ? void 0 : classNames.tag) },
                React__default["default"].createElement(Icon_component.IconItem, { icon: StarYellow, size: 18 }),
                tag))),
        React__default["default"].createElement("div", { className: cx('suggested-jobs-container__body', { tab__body: behavior === 'tab' }, classNames === null || classNames === void 0 ? void 0 : classNames.body) }, children),
        React__default["default"].createElement("div", { className: cx('suggested-jobs-container__footer', classNames === null || classNames === void 0 ? void 0 : classNames.footer) }, renderFooter()))) : null;
};

exports.JobDetailsSuggested = JobDetailsSuggested;
//# sourceMappingURL=JobDetailsSuggested.component.js.map
