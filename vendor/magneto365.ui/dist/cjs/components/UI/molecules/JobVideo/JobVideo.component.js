'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var JobVideo_module = require('./JobVideo.module.scss.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
var Image_component = require('../../atoms/Image/Image.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobVideo = function (_a) {
    var imageProps = _a.imageProps, jobId = _a.jobId, videoClassName = _a.videoClassName, vjsOptions = _a.vjsOptions, VideoComponent = _a.VideoComponent, loadVideo = _a.loadVideo, setLoadVideo = _a.setLoadVideo;
    var _b = React.useState(0), detailJobId = _b[0], setDetailJobId = _b[1];
    var _c = React.useState(false), uploadVideo = _c[0], setUploadVideo = _c[1];
    var handleLoadVideo = function () {
        setDetailJobId(jobId);
        setLoadVideo ? setLoadVideo(true) : setUploadVideo(true);
    };
    React.useEffect(function () {
        if (detailJobId !== jobId) {
            setLoadVideo && setLoadVideo(false);
        }
    }, [detailJobId, jobId, setLoadVideo]);
    return loadVideo || uploadVideo ? (React__default["default"].createElement(VideoComponent, { vjsOptions: vjsOptions, key: "lazyVideo_".concat(jobId), className: JobVideo_module[videoClassName] })) : (React__default["default"].createElement("div", { className: JobVideo_module['magneto-ui-job-video'], onClick: handleLoadVideo },
        React__default["default"].createElement(Image_component, tslib_es6.__assign({}, imageProps))));
};

module.exports = JobVideo;
//# sourceMappingURL=JobVideo.component.js.map
