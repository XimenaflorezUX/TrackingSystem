import { ISharePopover } from '@components/UI/molecules';
import { iconJobDetailsAction } from '@constants/jobDetails.constants';

declare namespace IJobDetailsAction {
    interface Common {
        icon?: keyof typeof iconJobDetailsAction;
        iconSize?: number;
        iconAlt?: string;
        rounded?: boolean;
        variant?: 'transparent' | 'grey' | 'ai-job-apply' | 'ai-job-detail';
    }
    export type Button = React.ComponentPropsWithoutRef<'button'> & Common;
    export type Link = React.ComponentPropsWithoutRef<'a'> & Common;
    export type SharePopover = ISharePopover & Common;
    export {};
}

export { IJobDetailsAction };
