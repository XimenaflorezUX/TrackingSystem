'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizeString = function (str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };

exports.normalizeString = normalizeString;
//# sourceMappingURL=normalizeString.util.js.map
