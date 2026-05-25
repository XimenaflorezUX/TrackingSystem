import React, { useState, useCallback, useEffect } from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../../../assets/ArrowLeft2.svg.js';
import More from '../../../../../../assets/More1.svg.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { MobileDrawer } from '../../../MobileDrawer/MobileDrawer.component.js';
import VacantOptionMobile from '../../../VacantOption/children/VacantOptionMobile/VacantOptionMobile.component.js';
import styles from './JobCardOptionDrawer.module.scss.js';

var cx = classNames.bind(styles);
var JobCardOptionDrawer = function (_a) {
    var title = _a.title, company = _a.company, menu = _a.menu, backText = _a.backText;
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = useState(false), showBack = _c[0], setShowBack = _c[1];
    var _d = useState(menu), options = _d[0], setOptions = _d[1];
    var toggle = function () { return setOpen(function (prev) { return !prev; }); };
    var handleMenu = useCallback(function (options, showBack) {
        if (showBack === void 0) { showBack = true; }
        setOptions(options);
        setShowBack(showBack);
    }, []);
    useEffect(function () {
        var _a;
        var onBlurWindow = function () {
            setOpen(false);
            handleMenu(menu, false);
        };
        (_a = window === null || window === void 0 ? void 0 : window.addEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        return function () {
            var _a;
            (_a = window === null || window === void 0 ? void 0 : window.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        };
    }, [handleMenu, menu]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: toggle, className: cx('button'), type: "button" },
            React.createElement(IconItem, { icon: More, size: 18 })),
        React.createElement(MobileDrawer, { className: cx('drawer'), isOpen: isOpen, onClose: toggle },
            React.createElement("header", { className: cx('drawer__header') },
                showBack ? (React.createElement("section", null,
                    React.createElement("button", { type: "button", className: cx('button-back'), onClick: function () { return handleMenu(menu, false); } },
                        React.createElement(IconItem, { icon: ArrowLeft2, size: 20 }),
                        " ",
                        backText))) : null,
                React.createElement("h4", { className: cx('drawer__title') }, title),
                React.createElement("h5", { className: cx('drawer__company') }, company)),
            React.createElement("div", null, options.map(function (option, index) { return (React.createElement(VacantOptionMobile, { key: index + option.label, option: option, onMenu: handleMenu, onClick: function () {
                    toggle();
                    handleMenu(menu, false);
                } })); })))));
};

export { JobCardOptionDrawer };
//# sourceMappingURL=JobCardOptionDrawer.component.js.map
