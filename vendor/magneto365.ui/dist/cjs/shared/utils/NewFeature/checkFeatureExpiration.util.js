'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function makeResult(expired, noFeatureFound, message) {
    return { expired: expired, noFeatureFound: noFeatureFound, message: message };
}
function checkFeatureExpiration(featureName) {
    if (typeof window === 'undefined') {
        return makeResult(false, true, 'window.notAvailable');
    }
    var features = window.__magneto_features;
    if (!features) {
        return makeResult(false, true, 'window.__magneto_features.notAvailable');
    }
    var feature = features[featureName];
    if (!feature) {
        return makeResult(false, true, "feature.".concat(featureName, ".notFound"));
    }
    var _a = feature.expires, day = _a.day, month = _a.month, year = _a.year;
    var expiresAt = new Date(year, month - 1, day);
    var now = new Date();
    if (isNaN(expiresAt.getTime())) {
        return makeResult(false, true, "feature.".concat(featureName, ".invalidDate"));
    }
    if (expiresAt < now) {
        return makeResult(true, false, null);
    }
    return makeResult(false, false, null);
}

exports.checkFeatureExpiration = checkFeatureExpiration;
//# sourceMappingURL=checkFeatureExpiration.util.js.map
