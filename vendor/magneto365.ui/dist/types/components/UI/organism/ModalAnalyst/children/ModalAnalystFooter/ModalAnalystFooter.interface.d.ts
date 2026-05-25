import { IconProps } from '@components/UI/atoms';

interface IModalAnalystFooter {
    hasTopDivider?: boolean;
    actions: IModalAnalystAction[];
}
interface IModalAnalystAction {
    key: string;
    prefixIcon?: IconProps;
    suffixIcon?: IconProps;
    title?: string;
    loading?: boolean;
    type: EModalAnalystActionType;
    action: (data: unknown) => Promise<{
        step?: number;
        closeModal?: boolean;
    }>;
}
declare enum EModalAnalystActionType {
    GREEN = "green",
    BLUE = "blue",
    WHITE = "white",
    GRAY = "gray",
    RED = "red"
}

export { EModalAnalystActionType, IModalAnalystAction, IModalAnalystFooter };
