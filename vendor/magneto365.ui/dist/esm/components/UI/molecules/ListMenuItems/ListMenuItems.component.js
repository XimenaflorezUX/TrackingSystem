import React from 'react';
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
import MenuItem from '../../atoms/MenuItem/MenuItem.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var _b = _a.menuList, menuList = _b === void 0 ? [] : _b, _c = _a.urlParam, urlParam = _c === void 0 ? '' : _c;
    return (React.createElement("div", null, menuList.map(function (_a, index) {
        var text = _a.text, url = _a.url, slug = _a.slug;
        return (React.createElement(MenuItem, { key: index, isActive: urlParam === slug ? true : false, url: url, text: text }));
    })));
};
var ListMenuItems = Component;

export { ListMenuItems };
//# sourceMappingURL=ListMenuItems.component.js.map
