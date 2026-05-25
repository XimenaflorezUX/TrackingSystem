import { IText } from '../../atoms/Text/Text.interface';
import React__default from 'react';
import { IAlertJobStatus } from './AlertJobStatus.interface';

declare const AlertJobStatus: React__default.FC<IAlertJobStatus> & {
    Container: React__default.FC<IAlertJobStatus.Container>;
    Icon: React__default.FC<IAlertJobStatus.Icon>;
    Button: React__default.FC<IAlertJobStatus.Button>;
    Text: React__default.FC<IText>;
};

export { AlertJobStatus };
