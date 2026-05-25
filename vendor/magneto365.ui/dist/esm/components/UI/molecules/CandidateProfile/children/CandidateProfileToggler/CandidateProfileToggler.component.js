import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import ArrowDownGreen from '../../../../../../assets/arrowDownGreen.svg.js';
import styles from './CandidateProfileToggler.module.scss.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { Collapse } from '../../../../atoms/Collapse/Collapse.component.js';
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

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    var _b = Collapse.useCollapse(), open = _b.open, onChangeOpen = _b.onChangeOpen;
    var handleOnClick = useCallback(function (evt) {
        onClick === null || onClick === void 0 ? void 0 : onClick(evt);
        onChangeOpen(!open);
    }, [open, onChangeOpen, onClick]);
    return (React.createElement(Collapse.Toggler, __assign({}, props, { className: cx('magneto-ui-candidate-profile-toggler', className, {
            'magneto-ui-candidate-profile-toggler--open': open
        }), onClick: handleOnClick }),
        React.createElement(IconItem, { icon: ArrowDownGreen, hover: false })));
};
/**
 * Molecule UI component child of candidate profile
 */
var CandidateProfileToggler = Component;

export { CandidateProfileToggler };
//# sourceMappingURL=CandidateProfileToggler.component.js.map
