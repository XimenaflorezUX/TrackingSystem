'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertsPanel_module = require('../../AlertsPanel.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var trash = require('../../../../../../assets/trash.svg.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertsPanel_module);
var AlertsPanelItem = function (_a) {
    var text = _a.text, onDelete = _a.onDelete, className = _a.className;
    return (React__default["default"].createElement("li", { className: cx('alerts-panel__item', className) },
        React__default["default"].createElement("span", { className: cx('alerts-panel__item-text', className) }, text),
        onDelete && (React__default["default"].createElement("button", { onClick: onDelete, className: cx('alerts-panel__item-button', className) },
            React__default["default"].createElement(Icon_component.IconItem, { icon: trash })))));
};

exports.AlertsPanelItem = AlertsPanelItem;
//# sourceMappingURL=AlertsPanelItem.component.js.map
