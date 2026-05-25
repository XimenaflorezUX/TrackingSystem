'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var spinnerBlack = require('../../../../../../assets/gif/spinnerBlack.gif.js');
var spinnerBlue = require('../../../../../../assets/gif/spinnerBlue.gif.js');
var spinnerWhite = require('../../../../../../assets/gif/spinnerWhite.gif.js');
var ModalAnalystFooter_interface = require('./ModalAnalystFooter.interface.js');

var _a;
var LOADING_ICONS = (_a = {},
    _a[ModalAnalystFooter_interface.EModalAnalystActionType.GREEN] = spinnerBlue,
    _a[ModalAnalystFooter_interface.EModalAnalystActionType.BLUE] = spinnerWhite,
    _a[ModalAnalystFooter_interface.EModalAnalystActionType.WHITE] = spinnerBlack,
    _a[ModalAnalystFooter_interface.EModalAnalystActionType.GRAY] = spinnerBlack,
    _a[ModalAnalystFooter_interface.EModalAnalystActionType.RED] = spinnerWhite,
    _a);

exports.LOADING_ICONS = LOADING_ICONS;
//# sourceMappingURL=ModalAnalystFooter.constants.js.map
