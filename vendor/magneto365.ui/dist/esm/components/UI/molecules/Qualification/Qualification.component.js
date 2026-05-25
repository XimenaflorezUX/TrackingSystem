import React, { useState, useCallback, useEffect } from 'react';
import { QUALIFICATION } from './Qualification.constants.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './Qualification.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var _b = _a.rating, rating = _b === void 0 ? -1 : _b, onClick = _a.onClick;
    var _c = useState(-1), qualification = _c[0], setQualification = _c[1];
    var _d = useState(-1), hover = _d[0], setHover = _d[1];
    var onClickQualification = useCallback(function (value) {
        onClick === null || onClick === void 0 ? void 0 : onClick(value);
        setQualification(value);
    }, [onClick]);
    useEffect(function () {
        if (rating > 0 && rating <= 5) {
            setQualification(Math.round(rating) - 1);
        }
    }, [rating]);
    return (React.createElement("ul", { className: cx('magneto-ui-qualification') }, QUALIFICATION.map(function (_a, index) {
        var alt = _a.alt, icon = _a.icon, iconHover = _a.iconHover, iconSelect = _a.iconSelect;
        return (React.createElement("li", { className: cx('magneto-ui-qualification__star'), onMouseEnter: function () { return setHover(index); }, onMouseLeave: function () { return setHover(-1); }, onClick: function () { return onClickQualification(index); }, key: "qualification-star-".concat(index) },
            React.createElement("img", { alt: alt, src: index <= Number(qualification) ? iconSelect : index <= Number(hover) ? iconHover : icon })));
    })));
};
/**
 * Atom Ui component of Qualification
 *
 */
var Qualification = Component;

export { Qualification };
//# sourceMappingURL=Qualification.component.js.map
