import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
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
import { ListMenuIcons } from '../ListMenuIcons/ListMenuIcons.component.js';
import withClickOut from '../../../hoc/withClickOut/index.js';

var Component = function (_a) {
    var listMenuUserProps = _a.listMenuUserProps, profileImage = _a.profileImage, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c, renderHeader = _a.renderHeader;
    return (React.createElement(Popover, { widthBase: 40, show: clickOut, content: React.createElement(React.Fragment, null,
            renderHeader && renderHeader(),
            React.createElement(ListMenuIcons, __assign({}, listMenuUserProps))), positionX: "left", positionY: "bottom" },
        React.createElement(Avatar, __assign({}, profileImage, { onClick: function () { return setClickOut(!clickOut); } }))));
};
var UserMenu = withClickOut(Component);

export { Component, UserMenu };
//# sourceMappingURL=UserMenu.component.js.map
