'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../components/UI/atoms/Icon/Icon.component.js');
var allJobs = require('../assets/all-jobs.svg.js');
var ArchiveAdd = require('../assets/ArchiveAdd.svg.js');
var ArchiveRemove = require('../assets/ArchiveRemove.svg.js');
var Briefcase = require('../assets/Briefcase.svg.js');
var Building5 = require('../assets/Building5.svg.js');
var Calendar1 = require('../assets/Calendar1.svg.js');
var disabled = require('../assets/disabled.svg.js');
var DollarCircle = require('../assets/DollarCircle.svg.js');
var Export3 = require('../assets/Export3.svg.js');
var Facebook2 = require('../assets/Facebook2.svg.js');
var Flag = require('../assets/Flag.svg.js');
var glass = require('../assets/programatic/glass.svg.js');
var Link1 = require('../assets/Link1.svg.js');
var Linkedin2 = require('../assets/Linkedin2.svg.js');
var Location = require('../assets/Location.svg.js');
var MagnetoIcon = require('../assets/MagnetoIcon.svg.js');
var People = require('../assets/People.svg.js');
var SMS = require('../assets/SMS.svg.js');
var Share = require('../assets/Share.svg.js');
var Share2 = require('../assets/Share2.svg.js');
var Share2Bold = require('../assets/Share2Bold.svg.js');
var tag = require('../assets/tag.svg.js');
var Whatsapp1 = require('../assets/Whatsapp1.svg.js');
var X = require('../assets/X.svg.js');
require('../components/UI/atoms/BarChart/enums.js');
require('../utils/classNameManager/classNameManager.util.js');
require('../components/UI/atoms/Button/Button.component.js');
require('../components/UI/atoms/Collapse/Collapse.component.js');
require('./stories/DatePicker.constants.js');
require('./stories/jobVideo.constants.js');
require('./stories/megaMenu.constants.js');
require('./stories/sideFilter.constants.js');
require('./stories/vacancies.constants.js');
require('./stories/vacantPositionsCategory.constants.js');
require('./img.constants.js');
require('../utils/date/dateInput.util.js');
require('../components/UI/atoms/Field/Field.component.js');
require('../components/UI/atoms/Typography/Typography.component.js');
require('../components/UI/atoms/Typography/Typography.interface.js');
require('../components/UI/atoms/InputFile/InputFile.component.js');
require('../components/UI/atoms/Paragraph/Paragraph.component.js');
require('../components/UI/atoms/Radio/Radio.interface.js');
require('../components/UI/atoms/Radio/Radio.constants.js');
require('../components/UI/atoms/Toggle/Toggle.component.js');
require('../components/hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var iconJobDetailSummaryMap = {
    calendar: React__default["default"].createElement(Icon_component.IconItem, { icon: Calendar1, size: 16, alt: 'Calendar1-icon' }),
    people: React__default["default"].createElement(Icon_component.IconItem, { icon: People, size: 16, alt: 'People-icon' }),
    briefcase: React__default["default"].createElement(Icon_component.IconItem, { icon: Briefcase, size: 16, alt: 'Briefcase-icon' }),
    'dollar-circle': React__default["default"].createElement(Icon_component.IconItem, { icon: DollarCircle, size: 16, alt: 'DollarCircle-icon' }),
    location: React__default["default"].createElement(Icon_component.IconItem, { icon: Location, size: 16, alt: 'Location-icon' }),
    tag: React__default["default"].createElement(Icon_component.IconItem, { icon: tag, size: 16, alt: 'Tag-icon' }),
    disabled: React__default["default"].createElement(Icon_component.IconItem, { icon: disabled, size: 16, alt: 'disabled' })
};
var iconJobDetailsAction = {
    archiveAdd: ArchiveAdd,
    archiveRemove: ArchiveRemove,
    export3: Export3,
    flag: Flag,
    link1: Link1,
    whatsAppColor: Whatsapp1,
    facebookBlue: Facebook2,
    linkedInBlue: Linkedin2,
    x: X,
    smsBlue: SMS,
    share: Share,
    share2: Share2,
    share2Bold: Share2Bold,
    magnetoIcon: MagnetoIcon
};
var iconJobDetailsSubTitle = {
    allJobs: allJobs,
    glass: glass,
    tag: tag,
    building: Building5,
    briefcase: Briefcase
};

exports.iconJobDetailSummaryMap = iconJobDetailSummaryMap;
exports.iconJobDetailsAction = iconJobDetailsAction;
exports.iconJobDetailsSubTitle = iconJobDetailsSubTitle;
//# sourceMappingURL=jobDetails.constants.js.map
