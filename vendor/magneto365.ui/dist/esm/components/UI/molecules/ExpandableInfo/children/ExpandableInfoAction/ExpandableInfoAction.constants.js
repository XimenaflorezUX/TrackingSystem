import AnimatedSpinnerBlack from '../../../../../../assets/gif/spinnerBlack.gif.js';
import AnimatedSpinnerBlue from '../../../../../../assets/gif/spinnerBlue.gif.js';
import AnimatedSpinnerWhite from '../../../../../../assets/gif/spinnerWhite.gif.js';
import CoinBlackOutline from '../../../../../../assets/coinBlackOutline.svg.js';
import DollarCircleWhiteOutline from '../../../../../../assets/dollarCircleWhiteOutline.svg.js';
import DollarCircleBlueDarkOutline from '../../../../../../assets/dollarCircleBlueDarkOutline.svg.js';
import ShoppingCartBlueOutline from '../../../../../../assets/shoppingCartBlueOutline.svg.js';
import { EExpandableInfoActionVariant } from './ExpandableInfoAction.interface.js';

var _a, _b, _c;
var EXPANDABLE_INFO_ACTION_ICONS = {
    shoppingCart: (_a = {},
        _a[EExpandableInfoActionVariant.LIGHT_BLUE] = ShoppingCartBlueOutline,
        _a),
    coin: (_b = {},
        _b[EExpandableInfoActionVariant.DARK_BLUE] = DollarCircleWhiteOutline,
        _b[EExpandableInfoActionVariant.LIGHT_BLUE] = DollarCircleBlueDarkOutline,
        _b[EExpandableInfoActionVariant.WHITE] = CoinBlackOutline,
        _b),
    loading: (_c = {},
        _c[EExpandableInfoActionVariant.DARK_BLUE] = AnimatedSpinnerWhite,
        _c[EExpandableInfoActionVariant.GREEN] = AnimatedSpinnerBlue,
        _c[EExpandableInfoActionVariant.LIGHT_BLUE] = AnimatedSpinnerBlue,
        _c[EExpandableInfoActionVariant.WHITE] = AnimatedSpinnerBlack,
        _c)
};

export { EXPANDABLE_INFO_ACTION_ICONS };
//# sourceMappingURL=ExpandableInfoAction.constants.js.map
