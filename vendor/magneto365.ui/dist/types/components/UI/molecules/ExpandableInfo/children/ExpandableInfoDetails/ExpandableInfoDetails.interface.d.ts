import { IExpandableInfoActionProps } from '../ExpandableInfoAction/ExpandableInfoAction.interface';

interface IExpandableInfoDetailsProps {
    /**
     * Details sections
     */
    sections?: IExpandableInfoDetailsSection[];
    /**
     * Details footer action
     */
    footer?: TExpandableInfoDetailsFooter;
}
declare type TExpandableInfoDetailsFooter = Pick<IExpandableInfoActionProps, 'title' | 'onAction'>;
interface IExpandableInfoDetailsSection {
    /**
     * Section children
     */
    children: IExpandableInfoDetailsContent[];
}
interface IExpandableInfoDetailsContent {
    /**
     * Section title
     */
    title: string;
    /**
     * Section summary
     */
    summary: string;
    /**
     * Section sub content
     */
    content?: IExpandableInfoDetailsContent[];
}

export { IExpandableInfoDetailsContent, IExpandableInfoDetailsProps, IExpandableInfoDetailsSection, TExpandableInfoDetailsFooter };
