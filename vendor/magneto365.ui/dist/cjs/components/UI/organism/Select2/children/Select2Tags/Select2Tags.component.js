'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Close = require('../../../../../../assets/Close.svg.js');
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
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
var Tag_component = require('../../../../atoms/Tag/Tag.component.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var Select2Tags_module = require('./Select2Tags.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var onRemove = _a.onRemove, tags = _a.tags, visible = _a.visible;
    if (!visible || tags.length === 0)
        return null;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: Select2Tags_module, cls: ['select2-tags'] }) }, tags.map(function (_a) {
        var id = _a.id, name = _a.name;
        return (React__default["default"].createElement(Tag_component, { onClick: function () { return onRemove(id); }, icon: Close, key: id, text: name }));
    })));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Tags = Component;

exports.Select2Tags = Select2Tags;
//# sourceMappingURL=Select2Tags.component.js.map
