import React, { useMemo } from 'react';
import styles from './Breadcrumb.modules.scss.js';

var Component = function (_a) {
    var breadcrumbText = _a.breadcrumbText, breadcrumbCustomText = _a.breadcrumbCustomText, queryParams = _a.queryParams, _b = _a.haveRedirect, haveRedirect = _b === void 0 ? true : _b, _c = _a.detailTitle, detailTitle = _c === void 0 ? '' : _c, breadCrumbFromServer = _a.breadCrumbFromServer, urlFromServer = _a.urlFromServer;
    var breadcrumbs = breadcrumbCustomText ? breadcrumbCustomText : breadcrumbText || '';
    var breadcrumbSplitText = breadcrumbs === null || breadcrumbs === void 0 ? void 0 : breadcrumbs.split('/');
    var lastIndexBC = (breadcrumbSplitText === null || breadcrumbSplitText === void 0 ? void 0 : breadcrumbSplitText.length) - 1;
    var haveDetailTitle = detailTitle !== '';
    var detailTileStyle = detailTitle ? styles['no-transform'] : '';
    var regexBase4 = /[0-9a-f]{8} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{12}/g;
    // This removes the base64 from the vacancy breadcrumbs
    var title = breadcrumbSplitText[lastIndexBC].replace(/-/g, ' ').replace(regexBase4, '');
    var breadCrumbsRender = useMemo(function () {
        return haveRedirect ? (React.createElement(React.Fragment, null, breadCrumbFromServer === null || breadCrumbFromServer === void 0 ? void 0 :
            breadCrumbFromServer.map(function (href, i) {
                return breadCrumbFromServer.length - 1 !== i && (React.createElement("a", { href: "".concat(urlFromServer === null || urlFromServer === void 0 ? void 0 : urlFromServer[i]).concat(queryParams ? queryParams : ''), key: i },
                    React.createElement("p", null,
                        "/ ",
                        href)));
            }),
            React.createElement("p", { className: "".concat(styles['magneto-ui-bc-active'], " ").concat(detailTileStyle) },
                "/ ",
                haveDetailTitle ? detailTitle : title))) : (React.createElement(React.Fragment, null, breadcrumbSplitText.map(function (bc, i) { return (React.createElement("p", { className: "".concat(lastIndexBC == i ? styles['magneto-ui-bc-active'] : '', " ").concat(styles['magneto-ui-bc']), key: i },
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
    return React.createElement("div", { className: styles.breadcrumbComponent }, breadCrumbsRender);
};
/**
 * Atom UI of breadcrumb
 */
var Breadcrumb = Component;

export { Breadcrumb };
//# sourceMappingURL=Breadcrumb.component.js.map
