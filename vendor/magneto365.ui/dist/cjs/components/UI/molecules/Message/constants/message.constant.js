'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var closeCircleRedBold = require('../../../../../assets/closeCircleRedBold.svg.js');
var infoCircleBlueBold = require('../../../../../assets/infoCircleBlueBold.svg.js');
var tickCircleGreenBold = require('../../../../../assets/tickCircleGreenBold.svg.js');
var warningYellowBold = require('../../../../../assets/warningYellowBold.svg.js');
var spinnerBarsGray = require('../../../../../assets/gif/spinnerBarsGray.gif.js');

var iconByType = {
    info: infoCircleBlueBold,
    success: tickCircleGreenBold,
    warning: warningYellowBold,
    error: closeCircleRedBold,
    loading: spinnerBarsGray
};
var transitionDuration = 300;

exports.iconByType = iconByType;
exports.transitionDuration = transitionDuration;
//# sourceMappingURL=message.constant.js.map
