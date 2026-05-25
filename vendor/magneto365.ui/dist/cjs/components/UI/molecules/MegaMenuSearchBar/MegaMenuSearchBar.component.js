'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MegaMenuSearchBar_module = require('./MegaMenuSearchBar.module.scss.js');
var SearchBar_component = require('./SearchBar.component.js');
var Briefcase = require('../../../../assets/Briefcase.svg.js');
var Location = require('../../../../assets/Location.svg.js');
var SearchNormal1Gray = require('../../../../assets/SearchNormal1Gray.svg.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(MegaMenuSearchBar_module);
var MegaMenuSearchBar = function (_a) {
    var location = _a.location, occupation = _a.occupation, className = _a.className;
    return (React__default["default"].createElement("div", { className: cx('mega-menu-search-bar', className) },
        React__default["default"].createElement(SearchBar_component, tslib_es6.__assign({ className: MegaMenuSearchBar_module['mega-menu-search-bar__input--left'], icon: Briefcase }, occupation)),
        React__default["default"].createElement(SearchBar_component, tslib_es6.__assign({ className: MegaMenuSearchBar_module['mega-menu-search-bar__input--rigth'], icon: Location, actionIcon: SearchNormal1Gray }, location))));
};

module.exports = MegaMenuSearchBar;
//# sourceMappingURL=MegaMenuSearchBar.component.js.map
