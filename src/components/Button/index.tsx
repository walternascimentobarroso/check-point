export default ({
  typeOf = "button",
  children,
  onClick,
  customClass = "",
  disabled = false,
}: any) => {
  return (
    <button
      className={`custom--btn-primary ${customClass}
      ${disabled && "cursor-not-allowed opacity-50 hover:opacity-25"}`}
      type={typeOf}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
