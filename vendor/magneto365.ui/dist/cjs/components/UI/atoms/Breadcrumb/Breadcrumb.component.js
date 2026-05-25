'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Breadcrumb_modules = require('./Breadcrumb.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var breadcrumbText = _a.breadcrumbText, breadcrumbCustomText = _a.breadcrumbCustomText, queryParams = _a.queryParams, _b = _a.haveRedirect, haveRedirect = _b === void 0 ? true : _b, _c = _a.detailTitle, detailTitle = _c === void 0 ? '' : _c, breadCrumbFromServer = _a.breadCrumbFromServer, urlFromServer = _a.urlFromServer;
    var breadcrumbs = breadcrumbCustomText ? breadcrumbCustomText : breadcrumbText || '';
    var breadcrumbSplitText = breadcrumbs === null || breadcrumbs === void 0 ? void 0 : breadcrumbs.split('/');
    var lastIndexBC = (breadcrumbSplitText === null || breadcrumbSplitText === void 0 ? void 0 : breadcrumbSplitText.length) - 1;
    var haveDetailTitle = detailTitle !== '';
    var detailTileStyle = detailTitle ? Breadcrumb_modules['no-transform'] : '';
    var regexBase4 = /[0-9a-f]{8} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{12}/g;
    // This removes the base64 from the vacancy breadcrumbs
    var title = breadcrumbSplitText[lastIndexBC].replace(/-/g, ' ').replace(regexBase4, '');
    var breadCrumbsRender = React.useMemo(function () {
        return haveRedirect ? (React__default["default"].createElement(React__default["default"].Fragment, null, breadCrumbFromServer === null || breadCrumbFromServer === void 0 ? void 0 :
            breadCrumbFromServer.map(function (href, i) {
                return breadCrumbFromServer.length - 1 !== i && (React__default["default"].createElement("a", { href: "".concat(urlFromServer === null || urlFromServer === void 0 ? void 0 : urlFromServer[i]).concat(queryParams ? queryParams : ''), key: i },
                    React__default["default"].createElement("p", null,
                        "/ ",
                        href)));
            }),
            React__default["default"].createElement("p", { className: "".concat(Breadcrumb_modules['magneto-ui-bc-active'], " ").concat(detailTileStyle) },
                "/ ",
                haveDetailTitle ? detailTitle : title))) : (React__default["default"].createElement(React__default["default"].Fragment, null, breadcrumbSplitText.map(function (bc, i) { return (React__default["default"].createElement("p", { className: "".concat(lastIndexBC == i ? Breadcrumb_modules['magneto-ui-bc-active'] : '', " ").concat(Breadcrumb_modules['magneto-ui-bc']), key: i },
            i > 0 && '/',
            " ",
            bc)); })));
    }, [
        haveRedirect,
        breadCrumbFromServer,
        detailTileStyle,
        haveDetailTitle,
        detailTitle,
        title,
        breadcrumbSplitText,
        urlFromServer,
        queryParams,
        lastIndexBC
    ]);
    return React__default["default"].createElement("div", { className: Breadcrumb_modules.breadcrumbComponent }, breadCrumbsRender);
};
/**
 * Atom UI of breadcrumb
 */
var Breadcrumb = Component;

exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=Breadcrumb.component.js.map
