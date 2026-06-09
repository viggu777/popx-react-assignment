function Button({ text, onClick, variant = "primary", type = "button" }) {
  return (
    <button type={type} className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
