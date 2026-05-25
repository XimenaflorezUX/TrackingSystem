import { __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';
import style from './FilterActions.module.scss.js';
import React, { useState, useCallback, useImperativeHandle, useMemo } from 'react';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { alphabet } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import { Button } from '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
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

var FilterActions = function (_a) {
    var allAction = _a.allAction, onClickAction = _a.onClickAction, filtersRef = _a.filtersRef;
    var _b = useState(0), selected = _b[0], setSelected = _b[1];
    var handleClickAction = useCallback(function (index, letter) { return function () {
        setSelected(index);
        onClickAction(index, letter);
    }; }, [onClickAction]);
    useImperativeHandle(filtersRef, function () { return ({
        restartFilters: function () { return setSelected(0); }
    }); });
    var actions = useMemo(function () {
        var values = __spreadArray([allAction], alphabet.split(''), true);
        return values.map(function (letter, index) { return (React.createElement(Button, { onClick: handleClickAction(index, letter), className: "".concat(style["filter-actions__action"], " ").concat(selected == index ? style["filter-actions__action--selected"] : ''), buttonText: letter, key: index })); });
    }, [allAction, handleClickAction, selected]);
    return React.createElement("nav", { className: style['filter-actions'] }, actions);
};

export { FilterActions };
//# sourceMappingURL=FilterActions.component.js.map
