import { iconJobDetailsSubTitle } from '../../../../../../constants/jobDetails.constants';

interface IJobDetailsSubTitle {
    className?: string;
    icon?: keyof typeof iconJobDetailsSubTitle;
    children?: React.ReactNode;
}

export { IJobDetailsSubTitle };
