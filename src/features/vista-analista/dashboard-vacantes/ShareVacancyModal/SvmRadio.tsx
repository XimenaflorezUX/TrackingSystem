import './SvmRadio.scss';

export interface SvmRadioProps {
  id: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
  className?: string;
}

const SvmRadio = ({
  id,
  name,
  checked,
  disabled = false,
  onChange,
  className = '',
}: SvmRadioProps): JSX.Element => {
  const rootClassName = [
    'svm-radio',
    checked ? 'svm-radio--checked' : '',
    disabled ? 'svm-radio--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootClassName} htmlFor={id}>
      <span className="svm-radio__control" aria-hidden="true">
        <span className="svm-radio__dot" />
      </span>
      <input
        id={id}
        type="radio"
        name={name}
        className="svm-radio__input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          onChange?.();
        }}
      />
    </label>
  );
};

export default SvmRadio;
