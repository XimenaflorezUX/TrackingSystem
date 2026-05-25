import React__default from 'react';
import { TCandidateProfileTemplateNav } from './children/CandidateProfileTemplateNav/CandidateProfileTemplateNav.interface';
import { ICandidateProfileTemplateProfile } from './children/CandidateProfileTemplateProfile/CandidateProfileTemplateProfile.interface';
import { IHorizontalMenu } from '../../molecules/HorizontalMenu/HorizontalMenu.interface';
import { ICandidateProfileTemplate, ICandidateProvider, ICandidateTemplateContext } from './CandidateProfileTemplate.interface';

/**
 * Template UI component of Candidate Profile.
 */
declare const CandidateProfileTemplate: React__default.FC<ICandidateProfileTemplate> & {
    Provider: React__default.FC<ICandidateProvider>;
    useCandidateProfile: () => ICandidateTemplateContext;
    Header: React__default.FC<{}>;
    MainNav: React__default.FC<IHorizontalMenu>;
    Nav: React__default.FC<TCandidateProfileTemplateNav>;
    Profile: React__default.FC<ICandidateProfileTemplateProfile>;
    Screen: React__default.FC<any>;
};

export { CandidateProfileTemplate };
