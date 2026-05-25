import React__default from 'react';
import { ICandidateNavButton } from './children/CandidateNavButton/CandidateNavButton.interface';
import { TCandidateNavOption } from './children/CandidateNavOption/CandidateNavOption.interface';
import { TCandidateNavOptions } from './children/CandidateNavOptions/CandidateNavOptions.interface';
import { TCandidateNavStep } from './children/CandidateNavStep/CandidateNavStep.interface';
import { TCandidateNav, ICandidateNavContext } from './CandidateNav.interface';

/**
 *  Molecule UI component of Candidate Nav
 */
declare const CandidateNav: React__default.FC<TCandidateNav> & {
    Provider: React__default.FC<{}>;
    useCandidateNav: () => ICandidateNavContext;
    Button: React__default.FC<ICandidateNavButton>;
    Option: React__default.FC<TCandidateNavOption>;
    Options: React__default.FC<TCandidateNavOptions>;
    Step: React__default.FC<TCandidateNavStep>;
};

export { CandidateNav };
