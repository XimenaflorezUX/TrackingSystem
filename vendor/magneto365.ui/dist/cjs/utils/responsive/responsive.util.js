'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var responsive_constants = require('../../constants/responsive.constants.js');

var ResponsiveManagement = /** @class */ (function () {
    function ResponsiveManagement() {
        this.dim = { size: responsive_constants.screenSize.hd, type: 'hd' };
    }
    ResponsiveManagement.prototype.run = function (eventDispatcher) {
        var _this = this;
        var type = this.getType(window.innerWidth);
        this.dim = { size: responsive_constants.screenSize[type], type: type };
        if (this.callback) {
            removeEventListener('resize', this.callback);
        }
        this.callback = function () { return _this.update(eventDispatcher); };
        eventDispatcher.dispatch('UPDATE_DIMENSION', { dim: this.dim });
        addEventListener('resize', this.callback);
    };
    ResponsiveManagement.prototype.update = function (eventDispatcher) {
        var _a, _b;
        var newType = this.getType((_b = (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : window.innerWidth);
        if (newType === this.dim.type)
            return;
        this.dim = {
            size: responsive_constants.screenSize[newType],
            type: newType
        };
        eventDispatcher.dispatch('UPDATE_DIMENSION', { dim: this.dim });
    };
    ResponsiveManagement.prototype.getType = function (width) {
        if (width < responsive_constants.screenSize.sm)
            return 'xs';
        if (width < responsive_constants.screenSize.md)
            return 'sm';
        if (width < responsive_constants.screenSize.lg)
            return 'md';
        if (width < responsive_constants.screenSize.xl)
            return 'lg';
        if (width < responsive_constants.screenSize.hd)
            return 'xl';
        if (width < responsive_constants.screenSize.xxl)
            return 'hd';
        return 'xxl';
    };
    ResponsiveManagement.prototype.getDim = function () {
        return this.dim;
    };
    return ResponsiveManagement;
}());

exports.ResponsiveManagement = ResponsiveManagement;
//# sourceMappingURL=responsive.util.js.map
