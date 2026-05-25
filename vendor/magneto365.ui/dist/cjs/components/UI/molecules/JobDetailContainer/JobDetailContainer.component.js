'use strict';

var React = require('react');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
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
var JobDetailContainer_module = require('./JobDetailContainer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobDetailContainer = function (_a) {
    var children = _a.children, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose;
    var toggleMenu = React.useMemo(function () {
        return isOpen ? JobDetailContainer_module['is-open'] : '';
    }, [isOpen]);
    return (React__default["default"].createElement("div", { className: "".concat(JobDetailContainer_module["".concat(common_constants.classMUI, "-job-detail-container")], " ").concat(toggleMenu) },
        React__default["default"].createElement("button", { type: "button", onClick: onClose, className: JobDetailContainer_module["".concat(common_constants.classMUI, "-job-detail-container--btn")] },
            React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow right", icon: ArrowRight2 })),
        children));
};

module.exports = JobDetailContainer;
//# sourceMappingURL=JobDetailContainer.component.js.map
