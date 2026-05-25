import React from 'react';
import { IconItem } from '../components/UI/atoms/Icon/Icon.component.js';
import AllJobs from '../assets/all-jobs.svg.js';
import ArchiveAdd from '../assets/ArchiveAdd.svg.js';
import ArchiveRemove from '../assets/ArchiveRemove.svg.js';
import Briefcase from '../assets/Briefcase.svg.js';
import Building5 from '../assets/Building5.svg.js';
import Calendar1 from '../assets/Calendar1.svg.js';
import Disabled from '../assets/disabled.svg.js';
import DollarCircle from '../assets/DollarCircle.svg.js';
import Export3 from '../assets/Export3.svg.js';
import FacebookBlue from '../assets/Facebook2.svg.js';
import Flag from '../assets/Flag.svg.js';
import Glass from '../assets/programatic/glass.svg.js';
import Link1 from '../assets/Link1.svg.js';
import LinkedInBlue from '../assets/Linkedin2.svg.js';
import Location from '../assets/Location.svg.js';
import MagnetoIcon from '../assets/MagnetoIcon.svg.js';
import People from '../assets/People.svg.js';
import SMSBlue from '../assets/SMS.svg.js';
import Share from '../assets/Share.svg.js';
import Share2 from '../assets/Share2.svg.js';
import Share2Bold from '../assets/Share2Bold.svg.js';
import Tag from '../assets/tag.svg.js';
import WhatsAppColor from '../assets/Whatsapp1.svg.js';
import X from '../assets/X.svg.js';
import '../components/UI/atoms/BarChart/enums.js';
import '../utils/classNameManager/classNameManager.util.js';
import '../components/UI/atoms/Button/Button.component.js';
import '../components/UI/atoms/Collapse/Collapse.component.js';
import './stories/DatePicker.constants.js';
import './stories/jobVideo.constants.js';
import './stories/megaMenu.constants.js';
import './stories/sideFilter.constants.js';
import './stories/vacancies.constants.js';
import './stories/vacantPositionsCategory.constants.js';
import './img.constants.js';
import '../utils/date/dateInput.util.js';
import '../components/UI/atoms/Field/Field.component.js';
import '../components/UI/atoms/Typography/Typography.component.js';
import '../components/UI/atoms/Typography/Typography.interface.js';
import '../components/UI/atoms/InputFile/InputFile.component.js';
import '../components/UI/atoms/Paragraph/Paragraph.component.js';
import '../components/UI/atoms/Radio/Radio.interface.js';
import '../components/UI/atoms/Radio/Radio.constants.js';
import '../components/UI/atoms/Toggle/Toggle.component.js';
import '../components/hooks/useMediaQuery/index.js';

var iconJobDetailSummaryMap = {
    calendar: React.createElement(IconItem, { icon: Calendar1, size: 16, alt: 'Calendar1-icon' }),
    people: React.createElement(IconItem, { icon: People, size: 16, alt: 'People-icon' }),
    briefcase: React.createElement(IconItem, { icon: Briefcase, size: 16, alt: 'Briefcase-icon' }),
    'dollar-circle': React.createElement(IconItem, { icon: DollarCircle, size: 16, alt: 'DollarCircle-icon' }),
    location: React.createElement(IconItem, { icon: Location, size: 16, alt: 'Location-icon' }),
    tag: React.createElement(IconItem, { icon: Tag, size: 16, alt: 'Tag-icon' }),
    disabled: React.createElement(IconItem, { icon: Disabled, size: 16, alt: 'disabled' })
};
var iconJobDetailsAction = {
    archiveAdd: ArchiveAdd,
    archiveRemove: ArchiveRemove,
    export3: Export3,
    flag: Flag,
    link1: Link1,
    whatsAppColor: WhatsAppColor,
    facebookBlue: FacebookBlue,
    linkedInBlue: LinkedInBlue,
    x: X,
    smsBlue: SMSBlue,
    share: Share,
    share2: Share2,
    share2Bold: Share2Bold,
    magnetoIcon: MagnetoIcon
};
var iconJobDetailsSubTitle = {
    allJobs: AllJobs,
    glass: Glass,
    tag: Tag,
    building: Building5,
    briefcase: Briefcase
};

export { iconJobDetailSummaryMap, iconJobDetailsAction, iconJobDetailsSubTitle };
//# sourceMappingURL=jobDetails.constants.js.map
