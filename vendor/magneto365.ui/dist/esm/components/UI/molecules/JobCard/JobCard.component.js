import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { JobCardOptionDrawer } from './children/JobCardOptionDrawer/JobCardOptionDrawer.component.js';
import JobCardOption from './children/JobCardOption/JobCardOption.component.js';
import JobCardDesktop from '../JobCardDesktop/JobCardDesktop.component.js';

var JobCard = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, props = __rest(_a, ["isActive"]);
    var jobOpen = useMemo(function () {
        var jobOpen = isActive ? 'is-active' : '';
        return { jobOpen: jobOpen };
    }, [isActive]).jobOpen;
    var cardProps = __assign({ jobOpen: jobOpen }, props);
    var device = useMediaQuery('desktop', { md: 'mobile' });
    if (device === 'mobile') {
        return (React.createElement(JobCardDesktop, __assign({ renderRight: function () {
                var _a;
                return (React.createElement(JobCardOptionDrawer, { backText: cardProps.backText, menu: (_a = cardProps.menu) !== null && _a !== void 0 ? _a : [], title: cardProps.title, company: cardProps.companyName }));
            } }, cardProps)));
    }
    return React.createElement(JobCardDesktop, __assign({ renderRight: function () { var _a; return React.createElement(JobCardOption, { menu: (_a = cardProps.menu) !== null && _a !== void 0 ? _a : [] }); } }, cardProps));
};

export { JobCard as default };
//# sourceMappingURL=JobCard.component.js.map
