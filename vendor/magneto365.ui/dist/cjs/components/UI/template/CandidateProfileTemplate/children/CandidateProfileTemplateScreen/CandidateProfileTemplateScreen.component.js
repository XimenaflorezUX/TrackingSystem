'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateProfileTemplate_context = require('../../CandidateProfileTemplate.context.js');
var CandidateProfileTemplateScreen_module = require('./CandidateProfileTemplateScreen.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileTemplateScreen_module);
var Component = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var _b = CandidateProfileTemplate_context.useCandidateProfile(), activeScreen = _b.activeScreen, screens = _b.screens, navHeight = _b.navHeight;
    var Screen = (screens[activeScreen] || {}).component;
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-candidate-profile-template-screen'), style: {
            '--nav-height': "".concat(navHeight, "px")
        } },
        React__default["default"].createElement(Screen, tslib_es6.__assign({}, props))));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateScreen = Component;

exports.CandidateProfileTemplateScreen = CandidateProfileTemplateScreen;
//# sourceMappingURL=CandidateProfileTemplateScreen.component.js.map
