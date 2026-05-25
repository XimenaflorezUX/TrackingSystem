import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
import styles from './JobVideo.module.scss.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import Image from '../../atoms/Image/Image.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var JobVideo = function (_a) {
    var imageProps = _a.imageProps, jobId = _a.jobId, videoClassName = _a.videoClassName, vjsOptions = _a.vjsOptions, VideoComponent = _a.VideoComponent, loadVideo = _a.loadVideo, setLoadVideo = _a.setLoadVideo;
    var _b = useState(0), detailJobId = _b[0], setDetailJobId = _b[1];
    var _c = useState(false), uploadVideo = _c[0], setUploadVideo = _c[1];
    var handleLoadVideo = function () {
        setDetailJobId(jobId);
        setLoadVideo ? setLoadVideo(true) : setUploadVideo(true);
    };
    useEffect(function () {
        if (detailJobId !== jobId) {
            setLoadVideo && setLoadVideo(false);
        }
    }, [detailJobId, jobId, setLoadVideo]);
    return loadVideo || uploadVideo ? (React.createElement(VideoComponent, { vjsOptions: vjsOptions, key: "lazyVideo_".concat(jobId), className: styles[videoClassName] })) : (React.createElement("div", { className: styles['magneto-ui-job-video'], onClick: handleLoadVideo },
        React.createElement(Image, __assign({}, imageProps))));
};

export { JobVideo as default };
//# sourceMappingURL=JobVideo.component.js.map
