import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './MegaMenuSearchBar.module.scss.js';
import SearchBar from './SearchBar.component.js';
import Briefcase from '../../../../assets/Briefcase.svg.js';
import Location from '../../../../assets/Location.svg.js';
import SearchIcon from '../../../../assets/SearchNormal1Gray.svg.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var MegaMenuSearchBar = function (_a) {
    var location = _a.location, occupation = _a.occupation, className = _a.className;
    return (React.createElement("div", { className: cx('mega-menu-search-bar', className) },
        React.createElement(SearchBar, __assign({ className: styles['mega-menu-search-bar__input--left'], icon: Briefcase }, occupation)),
        React.createElement(SearchBar, __assign({ className: styles['mega-menu-search-bar__input--rigth'], icon: Location, actionIcon: SearchIcon }, location))));
};

export { MegaMenuSearchBar as default };
//# sourceMappingURL=MegaMenuSearchBar.component.js.map
