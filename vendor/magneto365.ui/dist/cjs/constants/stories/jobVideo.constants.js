'use strict';

var React = require('react');
var Image_constants = require('./Image.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

({
    imageProps: Image_constants.imageProps,
    jobId: 1231,
    loadVideo: false,
    videoClassName: 'jobDetails',
    setLoadVideo: function () {
        //
    },
    vjsOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        preload: 'none',
        aspectRatio: '16:9',
        src: 'https://www.youtube.com/embed/ZsmTChbU-Vk',
        poster: 'https://img.youtube.com/vi/ZsmTChbU-Vk/maxres2.jpg'
    },
    VideoComponent: React__default["default"].Fragment
});
//# sourceMappingURL=jobVideo.constants.js.map
