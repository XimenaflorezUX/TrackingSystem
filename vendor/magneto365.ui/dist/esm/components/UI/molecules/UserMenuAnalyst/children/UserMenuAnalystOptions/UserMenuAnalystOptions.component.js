import React, { useMemo } from 'react';
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
import { Divider } from '../../../../atoms/Divider/Divider.component.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './UserMenuAnalystOptions.module.scss.js';
import { UserMenuAnalystOption } from './children/UserMenuAnalystOption/UserMenuAnalystOption.component.js';
import './children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, isMenuOpen = _a.isMenuOpen, optionClassNames = _a.optionClassNames, options = _a.options, queryString = _a.queryString;
    var isLastSection = useMemo(function () { return (options === null || options === void 0 ? void 0 : options.length) === 1; }, [options]);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-options', className] }) }, options === null || options === void 0 ? void 0 : options.map(function (option, i) {
        var _a;
        return (React.createElement(React.Fragment, { key: "user-menu-analyst-section-".concat(i) }, (_a = option.children) === null || _a === void 0 ? void 0 :
            _a.map(function (item, j) { return (React.createElement(UserMenuAnalystOption, { key: "user-menu-analyst-option-".concat(j), isOpen: isMenuOpen, option: item, classNames: optionClassNames, queryString: queryString, handleModal: handleModal, handleMenuOpen: handleMenuOpen })); }),
            !isLastSection && i < options.length - 1 && (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-options__divider'] }) },
                React.createElement(Divider, null)))));
    })));
};
/**
 * Molecule UI child component of user menu analyst
 */
var UserMenuAnalystOptions = Component;

export { UserMenuAnalystOptions };
//# sourceMappingURL=UserMenuAnalystOptions.component.js.map
