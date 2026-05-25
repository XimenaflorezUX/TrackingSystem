import { IUserMenuAnalystProps } from '@components/UI/molecules';

interface IUserMenuWrapperAnalystProps extends IUserMenuAnalystProps {
    /**
     * State to open or close user menu
     */
    clickOut?: boolean;
    /**
     * Function to open or close user menu
     */
    setClickOut?: React.Dispatch<React.SetStateAction<boolean>>;
}

export { IUserMenuWrapperAnalystProps };
