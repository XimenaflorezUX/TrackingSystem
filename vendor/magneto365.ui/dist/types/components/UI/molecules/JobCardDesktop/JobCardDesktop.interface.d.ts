import React__default from 'react';
import { IJobCard } from '../JobCard/JobCard.interface';

interface ICardJobDesktop extends IJobCard {
    /**
     * this property can change style in the texts when the job is open
     */
    jobOpen?: string;
    /**
     *
     */
    renderRight?: () => React__default.ReactNode;
}

export { ICardJobDesktop };
