import './SvmCheckbox.scss';

export interface SvmCheckboxProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const IconCheck = (): JSX.Element => (
  <svg className="svm-checkbox__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.5 8.5L6.5 11.5L12.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SvmCheckbox = ({
  id,
  checked,
  disabled = false,
  onChange,
  className = '',
}: SvmCheckboxProps): JSX.Element => {
  const rootClassName = [
    'svm-checkbox',
    checked ? 'svm-checkbox--checked' : '',
    disabled ? 'svm-checkbox--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootClassName} htmlFor={id}>
      <span className="svm-checkbox__box" aria-hidden="true">
        {checked ? <IconCheck /> : null}
      </span>
      <input
        id={id}
        type="checkbox"
        className="svm-checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          onChange?.(event.target.checked);
        }}
      />
    </label>
  );
};

export default SvmCheckbox;
