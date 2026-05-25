import * as React from 'react';
import { IJobDetailsDrawer } from './children/JobDetailsDrawer/JobDetailsDrawer.interface';
import { IJobDetailsSubTitle } from './children/JobDetailsSubTitle/JobDetailsSubTitle.interface';
import { IJobDetailsAction } from './children/JobDetailsAction/JobDetailsAction.interface';
import { ITypographyLink } from '../../../UI/atoms/Typography/children/TypographyLink/TypographyLink.interface';
import { IJobDetailsFraud } from './children/JobDetailsFraud/JobDetailsFraud.interface';
import { IJobDetailsSkills } from './children/JobDetailsSkills/JobDetailsSkills.interface';
import { IJobsFaqsLink } from './children/JobsFaqs/JobsFaqsLink/JobsFaqsLink.interface';
import { IJobsFaqs } from './children/JobsFaqs/JobsFaqs.interface';
import { IJobDetailsSummary } from './children/JobDetailsSummary/JobDetailsSummary.interface';
import { IJobSuggestedCard } from './children/JobSuggestedCard/JobSuggestedCard.interface';
import { IJobDetailsSuggested } from './children/JobDetailsSuggested/JobDetailsSuggested.interface';
import { IJobDetailsHeader } from './children/JobDetailsHeader/JobDetailsHeader.interface';
import { IJobDetails } from './JobDetails.interface';

declare const JobDetails: React.FC<IJobDetails> & {
    Header: React.FC<IJobDetailsHeader>;
    JobsSuggested: React.FC<IJobDetailsSuggested>;
    JobSuggestedCard: React.FC<IJobSuggestedCard> & {
        Section: React.FC<IJobSuggestedCard.Section>;
    };
    Summary: React.FC<IJobDetailsSummary>;
    Faqs: React.FC<IJobsFaqs> & {
        Link: React.FC<IJobsFaqsLink>;
    };
    Skills: React.FC<IJobDetailsSkills>;
    Fraud: React.FC<IJobDetailsFraud> & {
        Link: React.FC<ITypographyLink>;
    };
    Action: {
        Button: React.FC<IJobDetailsAction.Button>;
        Link: React.FC<IJobDetailsAction.Link>;
        SharePopover: React.FC<IJobDetailsAction.SharePopover>;
    };
    Subtitle: React.FC<IJobDetailsSubTitle>;
    Drawer: React.FC<IJobDetailsDrawer> & {
        Close: (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => JSX.Element;
    };
    Skeleton: () => JSX.Element;
};

export { JobDetails };
