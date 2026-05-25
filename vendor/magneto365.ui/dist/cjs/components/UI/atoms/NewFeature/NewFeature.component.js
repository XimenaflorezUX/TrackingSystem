'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var StarYellow = require('../../../../assets/Star-yellow.svg.js');
require('../BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../Button/Button.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../Field/Field.component.js');
var Typography_component = require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');
require('../InputFile/InputFile.component.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var checkFeatureExpiration_util = require('../../../../shared/utils/NewFeature/checkFeatureExpiration.util.js');
var NewFeature_module = require('./NewFeature.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(NewFeature_module);
/**
 * This component look for __magneto_features object in window to know if a feature is new or not.
 * If the feature is new, it will render the children with a "New" badge.
 * If the feature is not new or if the feature is not found, it will render nothing.
 *
 * Usage example:
 * Before using this component, make sure to define the "__magneto_features" object in the window.
 * this can be done using this script: https://static-next-stage.magneto365.com/lib/features/magneto.features.config.js
 *
 * ```tsx
 * <NewFeature feature="my-new-feature" onFail={(message) => console.error(message)}>
 *   This is a new feature!
 * </NewFeature>
 * ```
 */
var NewFeature = function (_a) {
    var feature = _a.feature, classNames = _a.classNames, children = _a.children, onFail = _a.onFail, rest = tslib_es6.__rest(_a, ["feature", "classNames", "children", "onFail"]);
    var _b = React.useMemo(function () {
        try {
            return checkFeatureExpiration_util.checkFeatureExpiration(feature);
        }
        catch (e) {
            return { expired: false, message: e };
        }
    }, [feature]), expired = _b.expired, message = _b.message;
    if (message) {
        onFail === null || onFail === void 0 ? void 0 : onFail(message);
        return null;
    }
    if (expired)
        return null;
    return (React__default["default"].createElement("span", tslib_es6.__assign({}, rest, { className: cx('new-feature', rest.className) }),
        React__default["default"].createElement(Icon_component.IconItem, { icon: StarYellow, size: 18, alt: "Star", className: cx('new-feature__icon', classNames === null || classNames === void 0 ? void 0 : classNames.icon) }),
        React__default["default"].createElement(Typography_component.Typography.Text, { className: classNames === null || classNames === void 0 ? void 0 : classNames.typography, weight: "black", color: "grey-50", size: "md" }, children)));
};

exports.NewFeature = NewFeature;
//# sourceMappingURL=NewFeature.component.js.map
