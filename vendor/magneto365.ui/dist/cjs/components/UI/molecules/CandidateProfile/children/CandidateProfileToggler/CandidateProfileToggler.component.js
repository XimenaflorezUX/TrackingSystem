'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var arrowDownGreen = require('../../../../../../assets/arrowDownGreen.svg.js');
var CandidateProfileToggler_module = require('./CandidateProfileToggler.module.scss.js');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Collapse_component = require('../../../../atoms/Collapse/Collapse.component.js');
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

var cx = classNames_util.classNames.bind(CandidateProfileToggler_module);
var Component = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = tslib_es6.__rest(_a, ["className", "onClick"]);
    var _b = Collapse_component.Collapse.useCollapse(), open = _b.open, onChangeOpen = _b.onChangeOpen;
    var handleOnClick = React.useCallback(function (evt) {
        onClick === null || onClick === void 0 ? void 0 : onClick(evt);
        onChangeOpen(!open);
    }, [open, onChangeOpen, onClick]);
    return (React__default["default"].createElement(Collapse_component.Collapse.Toggler, tslib_es6.__assign({}, props, { className: cx('magneto-ui-candidate-profile-toggler', className, {
            'magneto-ui-candidate-profile-toggler--open': open
        }), onClick: handleOnClick }),
        React__default["default"].createElement(Icon_component.IconItem, { icon: arrowDownGreen, hover: false })));
};
/**
 * Molecule UI component child of candidate profile
 */
var CandidateProfileToggler = Component;

exports.CandidateProfileToggler = CandidateProfileToggler;
//# sourceMappingURL=CandidateProfileToggler.component.js.map
