'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var allJobs = require('../../assets/all-jobs.svg.js');
var ArchiveTick = require('../../assets/ArchiveTick.svg.js');
var bell = require('../../assets/bell.svg.js');
var DocumentText = require('../../assets/DocumentText.svg.js');
var headsetBlackOutline = require('../../assets/headsetBlackOutline.svg.js');
var MessageQuestion = require('../../assets/MessageQuestion.svg.js');
var questionCirlce = require('../../assets/question-cirlce.svg.js');
var Setting2 = require('../../assets/Setting2.svg.js');
var suggestedJobs = require('../../assets/suggested-jobs.svg.js');
var TaskSquare = require('../../assets/TaskSquare.svg.js');
var userSwitch = require('../../assets/user-switch.svg.js');
var briefcaseBlue = require('../../assets/megaMenu/briefcase-blue.svg.js');
var buildingBlue = require('../../assets/megaMenu/building-blue.svg.js');
var courthouseBlue = require('../../assets/megaMenu/courthouse-blue.svg.js');
var locationBlue = require('../../assets/megaMenu/location-blue.svg.js');
var book = require('../../assets/megaMenu/book.svg.js');
var noData = require('../../assets/gif/noData.gif.js');
var waiting = require('../../assets/gif/waiting.gif.js');

var staticMessages = {
    noData: noData,
    waiting: waiting
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
var megaMenuHelpIcons = [questionCirlce, headsetBlackOutline];
var megaMenuJobsIcons = [locationBlue, courthouseBlue, briefcaseBlue, buildingBlue];
var megaMenuUserLoggedIcons = {
    allJobs: allJobs,
    suggestedJobs: suggestedJobs,
    savedJobs: ArchiveTick,
    inProcess: TaskSquare,
    resume: DocumentText,
    settings: Setting2,
    help: MessageQuestion,
    userSwitch: userSwitch,
    alerts: bell
};
var mobileSocialIcons = [book, headsetBlackOutline, questionCirlce];

exports.alphabet = alphabet;
exports.megaMenuHelpIcons = megaMenuHelpIcons;
exports.megaMenuJobIcon = megaMenuJobIcon;
exports.megaMenuJobImage = megaMenuJobImage;
exports.megaMenuJobsIcons = megaMenuJobsIcons;
exports.megaMenuUserLoggedIcons = megaMenuUserLoggedIcons;
exports.mobileSocialIcons = mobileSocialIcons;
exports.staticMessages = staticMessages;
//# sourceMappingURL=megaMenu.constants.js.map
