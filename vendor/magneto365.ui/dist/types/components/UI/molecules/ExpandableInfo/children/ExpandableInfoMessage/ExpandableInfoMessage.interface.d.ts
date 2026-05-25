import { IconProps } from '@components/UI/atoms';
import { IExpandableInfoProps } from '../../ExpandableInfo.interface';

interface IExpandableInfoMessageProps extends Pick<IExpandableInfoProps, 'variant'> {
    /**
     * Class name
     */
    className?: string;
    /**
     * Message title
     */
    title?: string;
    /**
     * Left icon of the dropdown
     */
    prefixIcon?: IconProps;
}

export { IExpandableInfoMessageProps };
