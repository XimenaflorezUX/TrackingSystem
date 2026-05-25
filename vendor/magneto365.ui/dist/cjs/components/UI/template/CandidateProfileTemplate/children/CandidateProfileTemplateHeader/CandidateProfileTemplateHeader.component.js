'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CandidateProfileTemplate_context = require('../../CandidateProfileTemplate.context.js');
var CandidateProfileTemplateHeader_module = require('./CandidateProfileTemplateHeader.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileTemplateHeader_module);
var Component = function (_a) {
    var children = _a.children;
    var setHeaderHeight = CandidateProfileTemplate_context.useCandidateProfile().setHeaderHeight;
    var headerRef = React.useRef(null);
    React.useEffect(function () {
        var handleResize = function () {
            if (!headerRef.current)
                return;
            setHeaderHeight(headerRef.current.offsetHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [setHeaderHeight]);
    return (React__default["default"].createElement("div", { ref: headerRef, className: cx('magneto-ui-candidate-profile-template-header') }, children));
};
/**
 * Template UI child component of Candidate Profile.
 */
var CandidateProfileTemplateHeader = Component;

exports.CandidateProfileTemplateHeader = CandidateProfileTemplateHeader;
//# sourceMappingURL=CandidateProfileTemplateHeader.component.js.map
