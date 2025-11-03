import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  label = '',
  error = '',
  disabled = false,
  required = false,
  name,
  id,
  autoComplete,
  rows = 4,
  ...rest
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);

  const baseClasses = 'input';
  const errorClasses = hasError ? 'input-error' : '';
  const inputClassName = `${baseClasses} ${errorClasses}`.trim();

  const commonProps = {
    id: inputId,
    name,
    value,
    onChange,
    placeholder,
    disabled,
    required,
    autoComplete,
    className: inputClassName,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? `${inputId}-error` : undefined,
    'aria-required': required,
    ...rest,
  };

  const renderInput = () => {
    if (type === 'textarea') {
      return <textarea {...commonProps} rows={rows} />;
    }

    return <input {...commonProps} type={type} />;
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
          {required && <span className="text-error ml-1" aria-label="required">*</span>}
        </label>
      )}

      {renderInput()}

      {hasError && (
        <p
          id={`${inputId}-error`}
          className="error-message"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'tel',
    'date',
    'time',
    'number',
    'textarea',
    'password',
    'url',
    'search',
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  rows: PropTypes.number,
};

export default Input;
