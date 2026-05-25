'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var FlatLoader_module = require('./FlatLoader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var color = _a.color, size = _a.size, secondColor = _a.secondColor;
    var loadingSize = React.useMemo(function () {
        if (size) {
            return {
                width: "".concat(size, "px"),
                height: "".concat(size, "px")
            };
        }
        return {
            width: '15px',
            height: '15px'
        };
    }, [size]);
    return (React__default["default"].createElement("div", { style: tslib_es6.__assign(tslib_es6.__assign({}, loadingSize), { border: "2px solid ".concat(color || '#090467'), borderBottomColor: secondColor || 'white' }), className: FlatLoader_module["".concat(common_constants.classMUI, "-flat-loader")] }));
};
var FlatLoader = Component;

exports.FlatLoader = FlatLoader;
//# sourceMappingURL=FlatLoader.component.js.map
