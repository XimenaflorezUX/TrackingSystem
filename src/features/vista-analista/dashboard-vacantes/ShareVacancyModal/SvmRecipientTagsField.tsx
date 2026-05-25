import { useCallback, type FocusEvent, type KeyboardEvent, type RefObject } from 'react';
import { Field } from 'magneto365.ui';
import './SvmRecipientTagsField.scss';

const IconSms = (): JSX.Element => (
  <svg
    className="svm-recipient-tags__icon-svg"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.667 3.333h10.666c.368 0 .667.299.667.667v6.667c0 .368-.299.667-.667.667H4.667L2 13.333V4c0-.368.299-.667.667-.667Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M5.333 6h5.334M5.333 8h3.334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export interface SvmRecipientTagsFieldProps {
  emails: string[];
  draft: string;
  inputError: string | null;
  maxRecipients: number;
  inputRef: RefObject<HTMLInputElement>;
  onDraftChange: (value: string) => void;
  onDraftKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onRemoveEmail: (email: string) => void;
  onFieldBlur: (event: FocusEvent<HTMLDivElement>) => void;
}

const SvmRecipientTagsField = ({
  emails,
  draft,
  inputError,
  maxRecipients,
  inputRef,
  onDraftChange,
  onDraftKeyDown,
  onRemoveEmail,
  onFieldBlur,
}: SvmRecipientTagsFieldProps): JSX.Element => {
  const hasError = inputError !== null;
  const atLimit = emails.length >= maxRecipients;

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <Field error={hasError} className="svm-recipient-tags__field-root">
      <div className="svm-recipient-tags__control">
        <div
          className={`svm-recipient-tags__field${hasError ? ' svm-recipient-tags__field--error' : ''}`}
          role="group"
          aria-label="Correos de destinatarios"
          aria-invalid={hasError}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              event.preventDefault();
              focusInput();
            }
          }}
          onBlur={onFieldBlur}
        >
          <span className="svm-recipient-tags__icon" aria-hidden="true">
            <IconSms />
          </span>

          <div className="svm-recipient-tags__body">
            {emails.map((em) => (
              <span key={em} className="svm-recipient-tags__chip" role="listitem">
                <span className="svm-recipient-tags__chip-label">{em}</span>
                <button
                  type="button"
                  className="svm-recipient-tags__chip-remove"
                  aria-label={`Quitar ${em}`}
                  onClick={() => {
                    onRemoveEmail(em);
                  }}
                >
                  ×
                </button>
              </span>
            ))}
            <input
              ref={inputRef}
              className="svm-recipient-tags__input"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder={atLimit ? 'Límite alcanzado' : 'correo@dominio.com'}
              disabled={atLimit}
              value={draft}
              onChange={(event) => {
                onDraftChange(event.target.value);
              }}
              onKeyDown={onDraftKeyDown}
              aria-invalid={hasError}
              aria-describedby={hasError ? 'svm-email-error' : undefined}
            />
          </div>
        </div>
        <div
          className={`svm-recipient-tags__focus-ring${hasError ? ' svm-recipient-tags__focus-ring--error' : ''}`}
          aria-hidden="true"
        />
      </div>
      {hasError ? (
        <p className="svm-recipient-tags__error" id="svm-email-error" role="alert">
          {inputError}
        </p>
      ) : null}
    </Field>
  );
};

export default SvmRecipientTagsField;
