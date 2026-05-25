import { ReactNode } from 'react';

interface IMegaMenuPopover {
    children: ReactNode;
    popoverRef?: React.Ref<IPopoverRef>;
}
interface IPopoverRef {
    setShow: (show: boolean) => void;
}

export { IMegaMenuPopover, IPopoverRef };
