import { IAccountSelect } from './AccountSelect.interface';

declare const AccountSelect: ({ profileImage, user, emails, labels, onSelectAccount, className }: IAccountSelect) => JSX.Element;

export { AccountSelect };
