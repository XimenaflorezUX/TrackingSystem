'use strict';

var React = require('react');
var common_constants = require('../../../../../../constants/stories/common.constants.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
var SelectItem_module = require('./SelectItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SelectItem = function (_a) {
    var text = _a.text, onClick = _a.onClick, disable = _a.disable;
    var disableSelection = React.useMemo(function () {
        return disable ? SelectItem_module['disable'] : '';
    }, [disable]);
    return (React__default["default"].createElement("button", { className: "".concat(SelectItem_module["".concat(common_constants.classMUI, "-select-item")], " ").concat(disableSelection), title: text, onClick: onClick }, text));
};

module.exports = SelectItem;
//# sourceMappingURL=SelectItem.component.js.map
