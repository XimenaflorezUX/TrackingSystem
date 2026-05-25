import { IProcessesCard, ICommonProcessesCardPros, ICommonProcessesCardImg } from './ProcessesCard.interface';
import React__default from 'react';

declare const ProcessesCard: React__default.FC<IProcessesCard> & {
    IconStatus: React__default.FC<IProcessesCard.IStatusIcon>;
    Section: React__default.FC<ICommonProcessesCardPros>;
    Status: React__default.FC<IProcessesCard.ICardStatus>;
    Brand: React__default.FC<ICommonProcessesCardImg>;
    Arrow: React__default.FC<IProcessesCard.IArrow>;
    Title: React__default.FC<IProcessesCard.ITitle>;
    Text: React__default.FC<IProcessesCard.IText>;
};

export { ProcessesCard };
