import type { ReactNode } from 'react';
import './SvmAlert.scss';

export interface SvmAlertProps {
  children: ReactNode;
  className?: string;
}

const IconInfo = (): JSX.Element => (
  <svg className="svm-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7.25V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="5.25" r="0.75" fill="currentColor" />
  </svg>
);

const SvmAlert = ({ children, className = '' }: SvmAlertProps): JSX.Element => {
  const rootClassName = ['svm-alert', className].filter(Boolean).join(' ');

  return (
    <div className={rootClassName} role="note">
      <IconInfo />
      <p className="svm-alert__text">{children}</p>
    </div>
  );
};

export default SvmAlert;
