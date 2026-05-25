import JobDetailsDrawerClose from './children/JobDetailsDrawer/JobDetailsDrawerClose/JobDetailsDrawerClose.component.js';
import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink/JobDetailsFraudLink.component.js';
import { JobDetails as JobDetails$1 } from './JobDetails.component.js';
import { JobDetailsSummary } from './children/JobDetailsSummary/JobDetailsSummary.component.js';
import { JobDetailsHeader } from './children/JobDetailsHeader/JobDetailsHeader.component.js';
import { JobDetailsSkills } from './children/JobDetailsSkills/JobDetailsSkills.component.js';
import { JobDetailsFraud } from './children/JobDetailsFraud/JobDetailsFraud.component.js';
import { JobDetailsSuggested } from './children/JobDetailsSuggested/JobDetailsSuggested.component.js';
import { JobDetailsAction } from './children/JobDetailsAction/JobDetailsAction.component.js';
import { JobDetailsSubTitle } from './children/JobDetailsSubTitle/JobDetailsSubTitle.component.js';
import { JobDetailsSkeleton } from './children/JobDetailsSkeleton/JobDetailsSkeleton.component.js';
import { JobDetailsDrawer } from './children/JobDetailsDrawer/JobDetailsDrawer.component.js';
import { JobSuggestedCard } from './children/JobSuggestedCard/JobSuggestedCard.component.js';
import 'react';
import { JobsFaqs } from './children/JobsFaqs/JobsFaqs.component.js';
import { JobsFaqsLink } from './children/JobsFaqs/JobsFaqsLink/JobsFaqsLink.component.js';

var JobDetails = Object.assign(JobDetails$1, {
    Header: JobDetailsHeader,
    JobsSuggested: JobDetailsSuggested,
    JobSuggestedCard: JobSuggestedCard,
    Summary: JobDetailsSummary,
    Faqs: Object.assign(JobsFaqs, {
        Link: JobsFaqsLink
    }),
    Skills: JobDetailsSkills,
    Fraud: Object.assign(JobDetailsFraud, {
        Link: JobDetailsFraudLink
    }),
    Action: JobDetailsAction,
    Subtitle: JobDetailsSubTitle,
    Drawer: Object.assign(JobDetailsDrawer, {
        Close: JobDetailsDrawerClose
    }),
    Skeleton: JobDetailsSkeleton
});

export { JobDetails };
//# sourceMappingURL=index.js.map
