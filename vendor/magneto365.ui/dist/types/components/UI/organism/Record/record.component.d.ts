import { IDateRecord } from './children/DateRecord/DateRecord.interface';
import { IBodyRecord } from './children/BodyRecord/BodyRecord.interface';
import { IHeaderRecord } from './children/HeaderRecord/HeaderRecord.interface';
import { ITitleRecord } from './children/TitleRecord/TitleRecord.interface';
import React__default from 'react';
import { IRecord } from './record.interface';

/**
 * Organism UI of Record. It includes .
 */
declare const Record: React__default.ForwardRefExoticComponent<IRecord & React__default.RefAttributes<HTMLDivElement>> & {
    Title: React__default.ForwardRefExoticComponent<ITitleRecord & React__default.RefAttributes<HTMLDivElement>>;
    Header: React__default.ForwardRefExoticComponent<IHeaderRecord & React__default.RefAttributes<HTMLDivElement>>;
    Body: React__default.ForwardRefExoticComponent<IBodyRecord & React__default.RefAttributes<HTMLDivElement>> & {
        Title: React__default.ForwardRefExoticComponent<ITitleRecord & React__default.RefAttributes<HTMLDivElement>>;
        Header: React__default.ForwardRefExoticComponent<IHeaderRecord & React__default.RefAttributes<HTMLDivElement>>;
    };
    Date: ({ className, date }: IDateRecord) => JSX.Element | null;
};

export { Record };
