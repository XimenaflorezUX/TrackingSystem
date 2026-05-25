import { IText } from '../../atoms/Text/Text.interface';
import * as _components_UI_molecules_AlertJobStatus from '@components/UI/molecules/AlertJobStatus';
import React__default from 'react';
import { IJobSuggestedDrawer } from './JobSuggestedDrawer.interface';

declare const JobSuggestedDrawer: React__default.FC<IJobSuggestedDrawer> & {
    Header: React__default.FC<IJobSuggestedDrawer.Header>;
    Alert: React__default.FC<_components_UI_molecules_AlertJobStatus.IAlertJobStatus> & {
        Container: React__default.FC<_components_UI_molecules_AlertJobStatus.IAlertJobStatus.Container>;
        Icon: React__default.FC<_components_UI_molecules_AlertJobStatus.IAlertJobStatus.Icon>;
        Button: React__default.FC<_components_UI_molecules_AlertJobStatus.IAlertJobStatus.Button>;
        Text: React__default.FC<IText>;
    };
    SimilarJobs: React__default.FC<IJobSuggestedDrawer.SimilarJobCards>;
};

export { JobSuggestedDrawer };
