'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Qualification_constants = require('./Qualification.constants.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Qualification_module = require('./Qualification.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Qualification_module);
var Component = function (_a) {
    var _b = _a.rating, rating = _b === void 0 ? -1 : _b, onClick = _a.onClick;
    var _c = React.useState(-1), qualification = _c[0], setQualification = _c[1];
    var _d = React.useState(-1), hover = _d[0], setHover = _d[1];
    var onClickQualification = React.useCallback(function (value) {
        onClick === null || onClick === void 0 ? void 0 : onClick(value);
        setQualification(value);
    }, [onClick]);
    React.useEffect(function () {
        if (rating > 0 && rating <= 5) {
            setQualification(Math.round(rating) - 1);
        }
    }, [rating]);
    return (React__default["default"].createElement("ul", { className: cx('magneto-ui-qualification') }, Qualification_constants.QUALIFICATION.map(function (_a, index) {
        var alt = _a.alt, icon = _a.icon, iconHover = _a.iconHover, iconSelect = _a.iconSelect;
        return (React__default["default"].createElement("li", { className: cx('magneto-ui-qualification__star'), onMouseEnter: function () { return setHover(index); }, onMouseLeave: function () { return setHover(-1); }, onClick: function () { return onClickQualification(index); }, key: "qualification-star-".concat(index) },
            React__default["default"].createElement("img", { alt: alt, src: index <= Number(qualification) ? iconSelect : index <= Number(hover) ? iconHover : icon })));
    })));
};
/**
 * Atom Ui component of Qualification
 *
 */
var Qualification = Component;

exports.Qualification = Qualification;
//# sourceMappingURL=Qualification.component.js.map
