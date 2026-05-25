import React from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './Skill.module.scss.js';
import { Typography } from '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var name = _a.name, score = _a.score, className = _a.className, _b = _a.classNames, classNames = _b === void 0 ? {} : _b;
    return (React.createElement("div", { className: cx('skill', className) },
        React.createElement(Typography.Text, { className: cx('skill__name', classNames.name) }, name),
        React.createElement("div", { className: cx('skill__level', classNames.level) },
            React.createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 1 }) }),
            React.createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 2 }) }),
            React.createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 3 }) }),
            React.createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 4 }) }))));
};
var Skill = Component;

export { Skill };
//# sourceMappingURL=Skill.component.js.map
