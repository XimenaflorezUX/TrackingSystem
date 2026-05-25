'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Checked = require('../assets/Checked.svg.js');
var Clock = require('../assets/Clock.svg.js');
var Lock = require('../assets/Lock.svg.js');
var common_constants = require('./stories/common.constants.js');
require('./stories/DatePicker.constants.js');
require('./stories/jobVideo.constants.js');
require('./stories/megaMenu.constants.js');
require('./stories/sideFilter.constants.js');
require('./stories/vacancies.constants.js');
require('./stories/vacantPositionsCategory.constants.js');
require('./img.constants.js');

var BASE_CLASS = "".concat(common_constants.classMUI, "-timeline-event");
var TIMELINE_ICONS = {
    checked: Checked,
    current: Clock,
    unlocked: Clock,
    blocked: Lock
};

exports.BASE_CLASS = BASE_CLASS;
exports.TIMELINE_ICONS = TIMELINE_ICONS;
//# sourceMappingURL=timelineEvent.constants.js.map
