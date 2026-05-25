import AllJobs from '../../assets/all-jobs.svg.js';
import ArchiveTick from '../../assets/ArchiveTick.svg.js';
import Bell from '../../assets/bell.svg.js';
import DocumentText from '../../assets/DocumentText.svg.js';
import HeadsetBlackOutline from '../../assets/headsetBlackOutline.svg.js';
import MessageQuestion from '../../assets/MessageQuestion.svg.js';
import QuestionCircle from '../../assets/question-cirlce.svg.js';
import Setting2 from '../../assets/Setting2.svg.js';
import SuggestedJobs from '../../assets/suggested-jobs.svg.js';
import TaskSquare from '../../assets/TaskSquare.svg.js';
import UserSwitch from '../../assets/user-switch.svg.js';
import BriefcaseBlue from '../../assets/megaMenu/briefcase-blue.svg.js';
import BuildingBlue from '../../assets/megaMenu/building-blue.svg.js';
import CourthouseBlue from '../../assets/megaMenu/courthouse-blue.svg.js';
import LocationBlue from '../../assets/megaMenu/location-blue.svg.js';
import Book from '../../assets/megaMenu/book.svg.js';
import NoData from '../../assets/gif/noData.gif.js';
import Waiting from '../../assets/gif/waiting.gif.js';

var staticMessages = {
    noData: NoData,
    waiting: Waiting
};
var alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
var megaMenuJobImage = {
    title: 'Cajero cafeteria en la esquina del barrio de por mi casa',
    quotas: 30,
    onClick: function () {
        console.log();
    }
};
var megaMenuJobIcon = {
    title: 'Cajero cafeteria',
    quotas: 30,
    onClick: function () {
        console.log();
    }
};
Array(36).fill(megaMenuJobIcon);
Array(36).fill(megaMenuJobImage);
var megaMenuHelpIcons = [QuestionCircle, HeadsetBlackOutline];
var megaMenuJobsIcons = [LocationBlue, CourthouseBlue, BriefcaseBlue, BuildingBlue];
var megaMenuUserLoggedIcons = {
    allJobs: AllJobs,
    suggestedJobs: SuggestedJobs,
    savedJobs: ArchiveTick,
    inProcess: TaskSquare,
    resume: DocumentText,
    settings: Setting2,
    help: MessageQuestion,
    userSwitch: UserSwitch,
    alerts: Bell
};
var mobileSocialIcons = [Book, HeadsetBlackOutline, QuestionCircle];

export { alphabet, megaMenuHelpIcons, megaMenuJobIcon, megaMenuJobImage, megaMenuJobsIcons, megaMenuUserLoggedIcons, mobileSocialIcons, staticMessages };
//# sourceMappingURL=megaMenu.constants.js.map
