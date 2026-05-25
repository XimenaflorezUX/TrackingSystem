import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import Star from '../../../../assets/Star-yellow.svg.js';
import '../BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import { Typography } from '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { checkFeatureExpiration } from '../../../../shared/utils/NewFeature/checkFeatureExpiration.util.js';
import styles from './NewFeature.module.scss.js';

var cx = classNames.bind(styles);
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
    var feature = _a.feature, classNames = _a.classNames, children = _a.children, onFail = _a.onFail, rest = __rest(_a, ["feature", "classNames", "children", "onFail"]);
    var _b = useMemo(function () {
        try {
            return checkFeatureExpiration(feature);
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
    return (React.createElement("span", __assign({}, rest, { className: cx('new-feature', rest.className) }),
        React.createElement(IconItem, { icon: Star, size: 18, alt: "Star", className: cx('new-feature__icon', classNames === null || classNames === void 0 ? void 0 : classNames.icon) }),
        React.createElement(Typography.Text, { className: classNames === null || classNames === void 0 ? void 0 : classNames.typography, weight: "black", color: "grey-50", size: "md" }, children)));
};

export { NewFeature };
//# sourceMappingURL=NewFeature.component.js.map
