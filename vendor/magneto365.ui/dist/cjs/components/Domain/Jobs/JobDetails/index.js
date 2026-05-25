'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JobDetailsDrawerClose_component = require('./children/JobDetailsDrawer/JobDetailsDrawerClose/JobDetailsDrawerClose.component.js');
var JobDetailsFraudLink_component = require('./children/JobDetailsFraud/JobDetailsFraudLink/JobDetailsFraudLink.component.js');
var JobDetails_component = require('./JobDetails.component.js');
var JobDetailsSummary_component = require('./children/JobDetailsSummary/JobDetailsSummary.component.js');
var JobDetailsHeader_component = require('./children/JobDetailsHeader/JobDetailsHeader.component.js');
var JobDetailsSkills_component = require('./children/JobDetailsSkills/JobDetailsSkills.component.js');
var JobDetailsFraud_component = require('./children/JobDetailsFraud/JobDetailsFraud.component.js');
var JobDetailsSuggested_component = require('./children/JobDetailsSuggested/JobDetailsSuggested.component.js');
var JobDetailsAction_component = require('./children/JobDetailsAction/JobDetailsAction.component.js');
var JobDetailsSubTitle_component = require('./children/JobDetailsSubTitle/JobDetailsSubTitle.component.js');
var JobDetailsSkeleton_component = require('./children/JobDetailsSkeleton/JobDetailsSkeleton.component.js');
var JobDetailsDrawer_component = require('./children/JobDetailsDrawer/JobDetailsDrawer.component.js');
var JobSuggestedCard_component = require('./children/JobSuggestedCard/JobSuggestedCard.component.js');
require('react');
var JobsFaqs_component = require('./children/JobsFaqs/JobsFaqs.component.js');
var JobsFaqsLink_component = require('./children/JobsFaqs/JobsFaqsLink/JobsFaqsLink.component.js');

var JobDetails = Object.assign(JobDetails_component.JobDetails, {
    Header: JobDetailsHeader_component.JobDetailsHeader,
    JobsSuggested: JobDetailsSuggested_component.JobDetailsSuggested,
    JobSuggestedCard: JobSuggestedCard_component.JobSuggestedCard,
    Summary: JobDetailsSummary_component.JobDetailsSummary,
    Faqs: Object.assign(JobsFaqs_component.JobsFaqs, {
        Link: JobsFaqsLink_component.JobsFaqsLink
    }),
    Skills: JobDetailsSkills_component.JobDetailsSkills,
    Fraud: Object.assign(JobDetailsFraud_component.JobDetailsFraud, {
        Link: JobDetailsFraudLink_component.JobDetailsFraudLink
    }),
    Action: JobDetailsAction_component.JobDetailsAction,
    Subtitle: JobDetailsSubTitle_component.JobDetailsSubTitle,
    Drawer: Object.assign(JobDetailsDrawer_component.JobDetailsDrawer, {
        Close: JobDetailsDrawerClose_component
    }),
    Skeleton: JobDetailsSkeleton_component.JobDetailsSkeleton
});

exports.JobDetails = JobDetails;
//# sourceMappingURL=index.js.map
