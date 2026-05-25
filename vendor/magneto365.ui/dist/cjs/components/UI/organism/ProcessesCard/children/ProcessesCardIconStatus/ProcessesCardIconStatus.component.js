'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var clockLineBlack = require('../../../../../../assets/clock-line-black.svg.js');
var documentForwardBlack = require('../../../../../../assets/document-forward-black.svg.js');
var documentSearchBlack = require('../../../../../../assets/document-search-black.svg.js');
var PeopleBlack = require('../../../../../../assets/People-black.svg.js');
var userRemoveBlack = require('../../../../../../assets/user-remove-black.svg.js');
var userTickBlack = require('../../../../../../assets/user-tick-black.svg.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ProcessesCard_module = require('../../ProcessesCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var status = _a.status, props = tslib_es6.__rest(_a, ["status"]);
    var iconByStatus = function (status) {
        var icons = {
            Discarded: userRemoveBlack,
            Finalists: PeopleBlack,
            Hired: userTickBlack,
            Pending: clockLineBlack,
            Sent: documentForwardBlack,
            Validation: documentSearchBlack,
            Canceled: userRemoveBlack
        };
        return icons[status];
    };
    return (React__default["default"].createElement("img", tslib_es6.__assign({ className: cx('processes-card__icon-status', "processes-color-icon--".concat(status)), src: iconByStatus(status), alt: "icons-status" }, props)));
};
var ProcessesCardIconStatus = Component;

exports.ProcessesCardIconStatus = ProcessesCardIconStatus;
//# sourceMappingURL=ProcessesCardIconStatus.component.js.map
