import { IDrawer } from '@components/UI/molecules';

declare type IJobDetailsDrawer = Omit<IDrawer, 'hideButton' | 'direction' | 'fit-content' | 'customPadding'>;

export { IJobDetailsDrawer };
