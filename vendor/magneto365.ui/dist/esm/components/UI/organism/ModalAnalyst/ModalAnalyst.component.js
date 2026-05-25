import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { ModalAnalystContainer } from './children/ModalAnalystContainer/ModalAnalystContainer.component.js';
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
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import './children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import './children/ModalAnalystFooter/ModalAnalystFooter.interface.js';

var Component = function (_a) {
    var props = __rest(_a, []);
    var _b = useState(0), step = _b[0], setStep = _b[1];
    return React.createElement(ModalAnalystContainer, __assign({ step: step, setStep: setStep }, props));
};
/**
 * Organism UI component of analyst template
 */
var ModalAnalyst = Component;

export { ModalAnalyst };
//# sourceMappingURL=ModalAnalyst.component.js.map
