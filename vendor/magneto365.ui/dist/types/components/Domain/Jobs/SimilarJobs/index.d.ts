import * as React from 'react';
import { ISimilarJobsCard } from './children/SimilarJobsCard/SimilarJobsCard.interface';
import { ITypographyLink } from '../../../UI/atoms/Typography/children/TypographyLink/TypographyLink.interface';
import { ISimilarJobs } from './SimilarJobs.interface';

declare const SimilarJobs: React.FC<ISimilarJobs> & {
    Link: React.FC<ITypographyLink>;
    Card: React.FC<ISimilarJobsCard>;
};

export { SimilarJobs };
