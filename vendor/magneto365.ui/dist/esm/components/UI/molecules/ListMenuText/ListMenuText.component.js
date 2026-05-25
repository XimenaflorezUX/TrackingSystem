import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classMUI, LoadingProps } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { Loading } from '../../atoms/Loading/Loading.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import style from './ListMenuText.module.scss.js';

var ListMenuText = function (_a) {
    var title = _a.title, links = _a.links, createAccount = _a.createAccount, isLoading = _a.isLoading;
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-list-menu")]) },
        React.createElement("p", { className: "".concat(style["".concat(classMUI, "-list-menu__title")]) }, title),
        links.map(function (_a, i) {
            var tag = _a.tag, href = _a.href, isCreateAccount = _a.isCreateAccount, openNewTab = _a.openNewTab;
            return isCreateAccount
                ? tag && (React.createElement("div", { key: i, className: "".concat(style["".concat(classMUI, "-list-menu__create-account")]) },
                    React.createElement("button", { title: tag, className: "".concat(style["".concat(classMUI, "-list-menu__create-account--btn")]), onClick: createAccount }, tag),
                    isLoading && React.createElement(Loading, __assign({}, LoadingProps))))
                : tag && (React.createElement("a", { className: "".concat(style["".concat(classMUI, "-list-menu__link")]), title: tag, key: i, href: href, target: openNewTab ? '_blank' : '_self', rel: "noreferrer" }, tag));
        })));
};

export { ListMenuText as default };
//# sourceMappingURL=ListMenuText.component.js.map
