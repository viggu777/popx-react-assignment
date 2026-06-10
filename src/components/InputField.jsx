function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

export default InputField;
