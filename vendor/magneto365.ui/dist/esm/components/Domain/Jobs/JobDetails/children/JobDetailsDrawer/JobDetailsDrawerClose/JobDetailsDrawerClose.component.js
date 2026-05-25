import { __assign } from '../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useContext } from 'react';
import { classNames } from '../../../../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../../../../../UI/atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../../../../assets/ArrowLeft2.svg.js';
import { JobDetailsDrawerContext } from '../JobDetailsDrawer.context.js';
import styles from './JobDetailsDrawerClose.module.scss.js';

var cx = classNames.bind(styles);
var JobDetailsDrawerClose = function (props) {
    var onClose = useContext(JobDetailsDrawerContext).onClose;
    return (React.createElement("button", __assign({}, props, { className: cx('drawer-button', props.className), onClick: function (e) {
            var _a;
            onClose();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }),
        React.createElement(IconItem, { icon: ArrowLeft2, size: 16 }),
        props.children));
};

export { JobDetailsDrawerClose as default };
//# sourceMappingURL=JobDetailsDrawerClose.component.js.map
