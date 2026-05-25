import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useMemo } from 'react';
import ListSortMenu from '../ListSortMenu/ListSortMenu.component.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import { menuSortButton } from '../../../../constants/stories/sortBar.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import { Popover } from '../../atoms/Popover/Popover.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import withClickOut from '../../../hoc/withClickOut/index.js';
import style from './SortMenu.module.scss.js';

var SortMenu = function (_a) {
    var orderFields = _a.orderFields, textOrderFilter = _a.textOrderFilter, setFilter = _a.setFilter, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, loading = _a.loading, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c;
    var buttonTextRef = useRef(null);
    var listMenuProps = useMemo(function () {
        return {
            orderFields: orderFields,
            setFilter: setFilter,
            setShowPopover: setClickOut,
            textOrderFilter: textOrderFilter
        };
    }, [orderFields, textOrderFilter, setFilter, setClickOut]);
    var getButtonWidth = function () {
        if (buttonTextRef.current) {
            var rect = buttonTextRef.current.getBoundingClientRect();
            return rect.width + 42;
        }
        return 180;
    };
    return (React.createElement(Popover, { widthBase: getButtonWidth(), show: clickOut, content: React.createElement(ListSortMenu, __assign({}, listMenuProps)), positionX: "left", positionY: "bottom", style: { height: '75%' } },
        React.createElement("button", { className: "".concat(style['magneto-ui-btn-menu'], " ").concat(loading && style.disabled), title: textOrderFilter, onClick: function () { return setClickOut(!clickOut); }, disabled: loading },
            React.createElement("p", { className: style['magneto-ui-btn-text'], ref: buttonTextRef }, textOrderFilter),
            React.createElement(IconItem, __assign({}, menuSortButton, { isRotate: clickOut })))));
};
var SortMenu$1 = withClickOut(SortMenu, { className: style['magneto-ui-sort-menu-container'] });

export { SortMenu$1 as default };
//# sourceMappingURL=SortMenu.component.js.map
