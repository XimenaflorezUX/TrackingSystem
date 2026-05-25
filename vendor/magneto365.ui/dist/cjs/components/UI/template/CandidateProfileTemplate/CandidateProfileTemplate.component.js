'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateProfileTemplateHeader_component = require('./children/CandidateProfileTemplateHeader/CandidateProfileTemplateHeader.component.js');
var CandidateProfileTemplateMainNav_component = require('./children/CandidateProfileTemplateMainNav/CandidateProfileTemplateMainNav.component.js');
var CandidateProfileTemplateNav_component = require('./children/CandidateProfileTemplateNav/CandidateProfileTemplateNav.component.js');
var CandidateProfileTemplateProfile_component = require('./children/CandidateProfileTemplateProfile/CandidateProfileTemplateProfile.component.js');
var CandidateProfileTemplateScreen_component = require('./children/CandidateProfileTemplateScreen/CandidateProfileTemplateScreen.component.js');
var CandidateProfileTemplate_context = require('./CandidateProfileTemplate.context.js');
var CandidateProfileTemplate_module = require('./CandidateProfileTemplate.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileTemplate_module);
var Component = function (_a) {
    var children = _a.children, onChangeScreen = _a.onChangeScreen, screens = _a.screens;
    return (React__default["default"].createElement(CandidateProfileTemplate_context.Provider, { screens: screens, onChangeScreen: onChangeScreen },
        React__default["default"].createElement("div", { className: cx('magneto-ui-candidate-profile-page') }, children)));
};
/**
 * Template UI component of Candidate Profile.
 */
var CandidateProfileTemplate = Object.assign(Component, tslib_es6.__assign({ Header: CandidateProfileTemplateHeader_component.CandidateProfileTemplateHeader, MainNav: CandidateProfileTemplateMainNav_component.CandidateProfileTemplateMainNav, Nav: CandidateProfileTemplateNav_component.CandidateProfileTemplateNav, Profile: CandidateProfileTemplateProfile_component.CandidateProfileTemplateProfile, Screen: CandidateProfileTemplateScreen_component.CandidateProfileTemplateScreen }, CandidateProfileTemplate_context));

exports.CandidateProfileTemplate = CandidateProfileTemplate;
//# sourceMappingURL=CandidateProfileTemplate.component.js.map
