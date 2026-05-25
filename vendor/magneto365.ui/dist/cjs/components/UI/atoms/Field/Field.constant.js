'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function combineRefs(node) {
    var refs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        refs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, refs_1 = refs; _a < refs_1.length; _a++) {
        var ref = refs_1[_a];
        if (!ref)
            continue;
        if (typeof ref === 'function') {
            ref(node);
        }
        else {
            ref.current = node;
        }
    }
}

exports.combineRefs = combineRefs;
//# sourceMappingURL=Field.constant.js.map
