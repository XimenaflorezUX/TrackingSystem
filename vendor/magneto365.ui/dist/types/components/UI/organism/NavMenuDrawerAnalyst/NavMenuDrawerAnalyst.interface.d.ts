import { INavMenuAnalystProps } from '@components/UI/organism/NavMenuAnalyst';

interface INavMenuDrawerAnalystProps extends INavMenuAnalystProps {
    /**
     * Function to close menu
     */
    onClose?: () => void;
}

export { INavMenuDrawerAnalystProps };
