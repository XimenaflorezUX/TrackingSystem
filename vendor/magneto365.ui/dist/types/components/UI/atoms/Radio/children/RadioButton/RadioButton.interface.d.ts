import { IconProps } from '@components/UI/atoms/Icon';
import { IRadioCommonProps } from '../../Radio.interface';

interface IRadioButtonProps extends IRadioCommonProps {
    /**
     * Left icon of the dropdown
     */
    prefixIcon?: IconProps;
    /**
     * Right icon of the dropdown
     */
    suffixIcon?: IconProps;
}

export { IRadioButtonProps };
