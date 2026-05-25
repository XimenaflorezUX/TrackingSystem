import { IModalAnalystFooter } from './children/ModalAnalystFooter/ModalAnalystFooter.interface';
import { IModalAnalystHeader } from './children/ModalAnalystHeader/ModalAnalystHeader.interface';

interface IModalAnalystProps extends IModalAnalyst {
    handleClose: (name: string, visible: boolean, data: unknown) => void;
    data: unknown;
    isOpen: boolean;
}
interface IModalAnalyst {
    /**
     * The name of the modal
     */
    name: string;
    /**
     * Array of screens that will be displayed
     */
    screens: IModalAnalystScreen[];
}
interface IModalAnalystScreen {
    /**
     * The key of the screen
     */
    key: number;
    /**
     * Header of the screen
     */
    header?: IModalAnalystHeader;
    /**
     * Content of the screen
     */
    content?: string;
    /**
     * Footer of the screen
     */
    footer?: IModalAnalystFooter;
}

export { IModalAnalyst, IModalAnalystProps, IModalAnalystScreen };
