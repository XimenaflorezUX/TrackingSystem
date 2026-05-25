import React from 'react';
import ProfileAdd from '../../../../assets/ProfileAdd.svg.js';
import SmsStar from '../../../../assets/sms-star.svg.js';
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
import { DotsLoader } from '../../atoms/DotsLoader/DotsLoader.component.js';
import '../../atoms/Field/Field.component.js';
import { Typography } from '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './CreateAccountCTA.module.scss.js';

var Component = function (_a) {
    var onHandlerCreateAccount = _a.onHandlerCreateAccount, onHandlerNewsletter = _a.onHandlerNewsletter, description = _a.description, title = _a.title, isLoading = _a.isLoading, primaryText = _a.primaryText, secondaryText = _a.secondaryText;
    return (React.createElement("div", { className: styles['create-account-cta'] }, isLoading ? (React.createElement("div", { className: styles['create-account-cta__loader'] },
        React.createElement(DotsLoader, { color: "#1a324c", count: 3 }))) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles['create-account-cta__content'] },
            React.createElement("div", { className: styles['create-account-cta__header'] },
                React.createElement("span", { className: styles['create-account-cta__emoji'] }, "\uD83E\uDD13"),
                React.createElement(Typography.Text, { size: "lg", weight: "bold" }, title)),
            React.createElement(Typography.Text, { size: "md", color: "blue-dark-300", className: styles['create-account-cta__description'] }, description)),
        React.createElement("div", { className: styles['create-account-cta__actions'] },
            React.createElement(MainButton, { buttonSize: "full", buttonStyles: { buttonColor: '#9EE4B8', textColor: '#292F37', spacing: '10px' }, onClick: onHandlerCreateAccount, buttonText: primaryText, iconProps: { icon: ProfileAdd, size: 20 }, className: styles['btn--primary'] }),
            React.createElement(MainButton, { buttonSize: "full", buttonStyles: { buttonColor: '#FFFFFF', textColor: '#292F37', spacing: '10px' }, onClick: onHandlerNewsletter, buttonText: secondaryText, iconProps: { icon: SmsStar, size: 20 }, className: styles['btn--secondary'] }))))));
};
var CreateAccountCTA = Component;

export { CreateAccountCTA };
//# sourceMappingURL=CreateAccountCTA.component.js.map
