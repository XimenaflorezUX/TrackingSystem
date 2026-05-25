import React from 'react';
import Close from '../../../../../../assets/Close.svg.js';
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
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import Tags from '../../../../atoms/Tag/Tag.component.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './Select2Tags.module.scss.js';

var Component = function (_a) {
    var onRemove = _a.onRemove, tags = _a.tags, visible = _a.visible;
    if (!visible || tags.length === 0)
        return null;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['select2-tags'] }) }, tags.map(function (_a) {
        var id = _a.id, name = _a.name;
        return (React.createElement(Tags, { onClick: function () { return onRemove(id); }, icon: Close, key: id, text: name }));
    })));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Tags = Component;

export { Select2Tags };
//# sourceMappingURL=Select2Tags.component.js.map
