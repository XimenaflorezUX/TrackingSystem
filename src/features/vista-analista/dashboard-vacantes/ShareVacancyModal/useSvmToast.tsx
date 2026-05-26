import { useState, useCallback } from 'react';
import { Notification } from 'magneto365.ui';
import './SvmToast.scss';

export type SvmToastVariant = 'success' | 'error';

export type SvmToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right';

interface ToastState {
  message: string;
  recipients?: string[];
  variant: SvmToastVariant;
  position: SvmToastPosition;
}

interface UseSvmToastOptions {
  defaultPosition?: SvmToastPosition;
}

interface UseSvmToastReturn {
  toast: ToastState | null;
  showToast: (
    message: string,
    variant?: SvmToastVariant,
    recipients?: string[],
    position?: SvmToastPosition,
  ) => void;
  hideToast: () => void;
  ToastPortal: () => JSX.Element | null;
}

export const TOAST_DURATION_MS = 6000;

const IconCheckCircle = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="svm-toast__icon">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8.5L7 10.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function useSvmToast(options: UseSvmToastOptions = {}): UseSvmToastReturn {
  const defaultPosition = options.defaultPosition ?? 'top-right';
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback(
    (
      message: string,
      variant: SvmToastVariant = 'success',
      recipients?: string[],
      position: SvmToastPosition = defaultPosition,
    ) => {
      setToast({ message, variant, recipients, position });
    },
    [defaultPosition],
  );

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const ToastPortal = useCallback((): JSX.Element | null => {
    if (!toast) return null;

    const recipientList =
      toast.recipients && toast.recipients.length > 0 ? (
        <ul className="svm-toast__recipients">
          {toast.recipients.map((email) => (
            <li key={email} className="svm-toast__recipient">
              <IconCheckCircle />
              <span>{email}</span>
            </li>
          ))}
        </ul>
      ) : null;

    const notificationPosition =
      toast.position === 'top-center' ? 'top-right' : toast.position;
    const positionClass =
      toast.position === 'top-center' ? ' svm-toast--top-center' : '';

    return (
      <Notification
        message={toast.message}
        position={notificationPosition}
        autoCloseDuration={TOAST_DURATION_MS}
        onClose={hideToast}
        className={`svm-toast svm-toast--${toast.variant}${positionClass}`}
        extraContent={recipientList}
      />
    );
  }, [toast, hideToast]);

  return { toast, showToast, hideToast, ToastPortal };
}
