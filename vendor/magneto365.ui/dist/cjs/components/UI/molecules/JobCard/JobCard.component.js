'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
var JobCardOptionDrawer_component = require('./children/JobCardOptionDrawer/JobCardOptionDrawer.component.js');
var JobCardOption_component = require('./children/JobCardOption/JobCardOption.component.js');
var JobCardDesktop_component = require('../JobCardDesktop/JobCardDesktop.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobCard = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, props = tslib_es6.__rest(_a, ["isActive"]);
    var jobOpen = React.useMemo(function () {
        var jobOpen = isActive ? 'is-active' : '';
        return { jobOpen: jobOpen };
    }, [isActive]).jobOpen;
    var cardProps = tslib_es6.__assign({ jobOpen: jobOpen }, props);
    var device = index.useMediaQuery('desktop', { md: 'mobile' });
    if (device === 'mobile') {
        return (React__default["default"].createElement(JobCardDesktop_component, tslib_es6.__assign({ renderRight: function () {
                var _a;
                return (React__default["default"].createElement(JobCardOptionDrawer_component.JobCardOptionDrawer, { backText: cardProps.backText, menu: (_a = cardProps.menu) !== null && _a !== void 0 ? _a : [], title: cardProps.title, company: cardProps.companyName }));
            } }, cardProps)));
    }
    return React__default["default"].createElement(JobCardDesktop_component, tslib_es6.__assign({ renderRight: function () { var _a; return React__default["default"].createElement(JobCardOption_component, { menu: (_a = cardProps.menu) !== null && _a !== void 0 ? _a : [] }); } }, cardProps));
};

module.exports = JobCard;
//# sourceMappingURL=JobCard.component.js.map
