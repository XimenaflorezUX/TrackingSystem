'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var spinnerBlack = require('../../../../../../assets/gif/spinnerBlack.gif.js');
var spinnerBlue = require('../../../../../../assets/gif/spinnerBlue.gif.js');
var spinnerWhite = require('../../../../../../assets/gif/spinnerWhite.gif.js');
var coinBlackOutline = require('../../../../../../assets/coinBlackOutline.svg.js');
var dollarCircleWhiteOutline = require('../../../../../../assets/dollarCircleWhiteOutline.svg.js');
var dollarCircleBlueDarkOutline = require('../../../../../../assets/dollarCircleBlueDarkOutline.svg.js');
var shoppingCartBlueOutline = require('../../../../../../assets/shoppingCartBlueOutline.svg.js');
var ExpandableInfoAction_interface = require('./ExpandableInfoAction.interface.js');

var _a, _b, _c;
var EXPANDABLE_INFO_ACTION_ICONS = {
    shoppingCart: (_a = {},
        _a[ExpandableInfoAction_interface.EExpandableInfoActionVariant.LIGHT_BLUE] = shoppingCartBlueOutline,
        _a),
    coin: (_b = {},
        _b[ExpandableInfoAction_interface.EExpandableInfoActionVariant.DARK_BLUE] = dollarCircleWhiteOutline,
        _b[ExpandableInfoAction_interface.EExpandableInfoActionVariant.LIGHT_BLUE] = dollarCircleBlueDarkOutline,
        _b[ExpandableInfoAction_interface.EExpandableInfoActionVariant.WHITE] = coinBlackOutline,
        _b),
    loading: (_c = {},
        _c[ExpandableInfoAction_interface.EExpandableInfoActionVariant.DARK_BLUE] = spinnerWhite,
        _c[ExpandableInfoAction_interface.EExpandableInfoActionVariant.GREEN] = spinnerBlue,
        _c[ExpandableInfoAction_interface.EExpandableInfoActionVariant.LIGHT_BLUE] = spinnerBlue,
        _c[ExpandableInfoAction_interface.EExpandableInfoActionVariant.WHITE] = spinnerBlack,
        _c)
};

exports.EXPANDABLE_INFO_ACTION_ICONS = EXPANDABLE_INFO_ACTION_ICONS;
//# sourceMappingURL=ExpandableInfoAction.constants.js.map
