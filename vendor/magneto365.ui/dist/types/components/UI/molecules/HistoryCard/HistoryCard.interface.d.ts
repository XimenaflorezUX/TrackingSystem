import React__default from 'react';

interface IHistoryCardDetail {
    label: string;
    value: React__default.ReactNode;
}
interface IHistoryCardHeader {
    label: string;
    value: string;
}
interface IHistoryCard {
    type: 'edited' | 'deleted';
    headerData: IHistoryCardHeader[];
    details: (IHistoryCardDetail | IHistoryCardDetail[])[];
    className?: string;
}

export { IHistoryCard, IHistoryCardDetail, IHistoryCardHeader };
