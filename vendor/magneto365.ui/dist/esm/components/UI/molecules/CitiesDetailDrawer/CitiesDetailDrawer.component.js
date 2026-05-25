import React from 'react';
import Location from '../../../../assets/Location.svg.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
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
import { Link } from '../../atoms/Link/Link.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './CitiesDetailDrawer.module.scss.js';

var CitiesDetailDrawer = function (_a) {
    var cities = _a.cities, isRemote = _a.isRemote, textRemote = _a.textRemote;
    return (React.createElement("div", { className: styles['magneto-ui-cities-detail-drawer'] }, cities && (cities === null || cities === void 0 ? void 0 : cities.length) ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles['magneto-ui-cities-detail-drawer__item-detail-icon'] },
            React.createElement(IconItem, { alt: 'Location-icon', icon: Location, hover: false, size: 16 })),
        React.createElement("div", { className: styles['magneto-ui-cities-detail-drawer__item-detail-text'] },
            isRemote && (React.createElement("p", { className: styles['magneto-ui-cities-detail-drawer__item-detail-text-remote'] }, textRemote)),
            cities &&
                cities.map(function (_a, index) {
                    var name = _a.name, url = _a.url, title = _a.title;
                    return (React.createElement("div", { className: styles['magneto-ui-cities-detail-drawer__item-detail-text-link'], key: url },
                        url ? React.createElement(Link, { href: url, target: "_blank", text: name, title: title }) : React.createElement("span", null, name),
                        index !== cities.length - 1 && React.createElement("span", null, ' - ')));
                })))) : null));
};

export { CitiesDetailDrawer as default };
//# sourceMappingURL=CitiesDetailDrawer.component.js.map
