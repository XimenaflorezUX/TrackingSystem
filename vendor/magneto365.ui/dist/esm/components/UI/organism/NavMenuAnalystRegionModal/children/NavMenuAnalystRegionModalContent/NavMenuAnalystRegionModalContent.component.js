import React from 'react';
import ArrowLeft2 from '../../../../../../assets/ArrowLeft2.svg.js';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import { MainButton } from '../../../../atoms/MainButton/MainButton.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import { Radio } from '../../../../atoms/Radio/Radio.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../../../hooks/useMediaQuery/index.js';
import styles from './NavMenuAnalsytRegionModalContent.module.scss.js';

var Component = function (_a) {
    var defaultRegion = _a.defaultRegion, handleClose = _a.handleClose, regionModal = _a.regionModal, regions = _a.regions, selectedRegion = _a.selectedRegion, setSelectedRegion = _a.setSelectedRegion;
    var cancelButton = useMediaQuery(React.createElement(MainButton, { buttonText: regionModal.cancel, buttonType: "button", className: CNM.get({
            styles: styles,
            cls: ['nav-menu-analyst-region-modal-content__button', 'nav-menu-analyst-region-modal-content__button--cancel']
        }), onClick: function () { return handleClose(null); } }), {
        sm: (React.createElement(MainButton, { iconProps: { icon: ArrowLeft2 }, buttonType: "button", className: CNM.get({
                styles: styles,
                cls: [
                    'nav-menu-analyst-region-modal-content__button',
                    'nav-menu-analyst-region-modal-content__button--cancel'
                ]
            }), onClick: function () { return handleClose(null); } }))
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal-content__container'] }) }, regions.map(function (_a, index) {
            var name = _a.name, flag = _a.flag, lang = _a.lang;
            return (React.createElement(Radio, { key: "region-".concat(name), type: "button", prefixIcon: {
                    icon: flag,
                    alt: lang,
                    className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal-content__flag'] })
                }, childrenClassName: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal-content__option'] }), defaultChecked: (regions.some(function (_a) {
                    var lang = _a.lang;
                    return lang === defaultRegion;
                }) ? defaultRegion === lang : index === 0) &&
                    !selectedRegion, checked: (selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.name) === name, onChange: function () { return setSelectedRegion({ name: name, flag: flag, lang: lang }); } },
                React.createElement("span", null, name)));
        })),
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal-content__footer'] }) },
            cancelButton,
            React.createElement(MainButton, { buttonText: regionModal.apply, buttonType: "button", className: CNM.get({
                    styles: styles,
                    cls: [
                        'nav-menu-analyst-region-modal-content__button',
                        'nav-menu-analyst-region-modal-content__button--apply'
                    ]
                }), disabled: !selectedRegion, onClick: function () { return handleClose(selectedRegion); } }))));
};
var NavMenuAnalystRegionModalContent = Component;

export { NavMenuAnalystRegionModalContent };
//# sourceMappingURL=NavMenuAnalystRegionModalContent.component.js.map
