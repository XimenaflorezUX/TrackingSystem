'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ArrowLeft2 = require('../../../../../../assets/ArrowLeft2.svg.js');
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
var MainButton_component = require('../../../../atoms/MainButton/MainButton.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
var Radio_component = require('../../../../atoms/Radio/Radio.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
var index = require('../../../../../hooks/useMediaQuery/index.js');
var NavMenuAnalsytRegionModalContent_module = require('./NavMenuAnalsytRegionModalContent.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var defaultRegion = _a.defaultRegion, handleClose = _a.handleClose, regionModal = _a.regionModal, regions = _a.regions, selectedRegion = _a.selectedRegion, setSelectedRegion = _a.setSelectedRegion;
    var cancelButton = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, { buttonText: regionModal.cancel, buttonType: "button", className: classNameManager_util.get({
            styles: NavMenuAnalsytRegionModalContent_module,
            cls: ['nav-menu-analyst-region-modal-content__button', 'nav-menu-analyst-region-modal-content__button--cancel']
        }), onClick: function () { return handleClose(null); } }), {
        sm: (React__default["default"].createElement(MainButton_component.MainButton, { iconProps: { icon: ArrowLeft2 }, buttonType: "button", className: classNameManager_util.get({
                styles: NavMenuAnalsytRegionModalContent_module,
                cls: [
                    'nav-menu-analyst-region-modal-content__button',
                    'nav-menu-analyst-region-modal-content__button--cancel'
                ]
            }), onClick: function () { return handleClose(null); } }))
    });
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: NavMenuAnalsytRegionModalContent_module, cls: ['nav-menu-analyst-region-modal-content__container'] }) }, regions.map(function (_a, index) {
            var name = _a.name, flag = _a.flag, lang = _a.lang;
            return (React__default["default"].createElement(Radio_component.Radio, { key: "region-".concat(name), type: "button", prefixIcon: {
                    icon: flag,
                    alt: lang,
                    className: classNameManager_util.get({ styles: NavMenuAnalsytRegionModalContent_module, cls: ['nav-menu-analyst-region-modal-content__flag'] })
                }, childrenClassName: classNameManager_util.get({ styles: NavMenuAnalsytRegionModalContent_module, cls: ['nav-menu-analyst-region-modal-content__option'] }), defaultChecked: (regions.some(function (_a) {
                    var lang = _a.lang;
                    return lang === defaultRegion;
                }) ? defaultRegion === lang : index === 0) &&
                    !selectedRegion, checked: (selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.name) === name, onChange: function () { return setSelectedRegion({ name: name, flag: flag, lang: lang }); } },
                React__default["default"].createElement("span", null, name)));
        })),
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: NavMenuAnalsytRegionModalContent_module, cls: ['nav-menu-analyst-region-modal-content__footer'] }) },
            cancelButton,
            React__default["default"].createElement(MainButton_component.MainButton, { buttonText: regionModal.apply, buttonType: "button", className: classNameManager_util.get({
                    styles: NavMenuAnalsytRegionModalContent_module,
                    cls: [
                        'nav-menu-analyst-region-modal-content__button',
                        'nav-menu-analyst-region-modal-content__button--apply'
                    ]
                }), disabled: !selectedRegion, onClick: function () { return handleClose(selectedRegion); } }))));
};
var NavMenuAnalystRegionModalContent = Component;

exports.NavMenuAnalystRegionModalContent = NavMenuAnalystRegionModalContent;
//# sourceMappingURL=NavMenuAnalystRegionModalContent.component.js.map
