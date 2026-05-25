import { screenSize } from '../../constants/responsive.constants.js';

var ResponsiveManagement = /** @class */ (function () {
    function ResponsiveManagement() {
        this.dim = { size: screenSize.hd, type: 'hd' };
    }
    ResponsiveManagement.prototype.run = function (eventDispatcher) {
        var _this = this;
        var type = this.getType(window.innerWidth);
        this.dim = { size: screenSize[type], type: type };
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
            size: screenSize[newType],
            type: newType
        };
        eventDispatcher.dispatch('UPDATE_DIMENSION', { dim: this.dim });
    };
    ResponsiveManagement.prototype.getType = function (width) {
        if (width < screenSize.sm)
            return 'xs';
        if (width < screenSize.md)
            return 'sm';
        if (width < screenSize.lg)
            return 'md';
        if (width < screenSize.xl)
            return 'lg';
        if (width < screenSize.hd)
            return 'xl';
        if (width < screenSize.xxl)
            return 'hd';
        return 'xxl';
    };
    ResponsiveManagement.prototype.getDim = function () {
        return this.dim;
    };
    return ResponsiveManagement;
}());

export { ResponsiveManagement };
//# sourceMappingURL=responsive.util.js.map
