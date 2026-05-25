import { IListMenuText } from '../../ListMenuText/ListMenuText.interface';

interface IMenuCollapseChildren extends IListMenuText {
    isOpen: boolean;
    onClick: () => void;
    heightContent?: number;
}

export { IMenuCollapseChildren };
