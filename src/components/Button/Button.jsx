const Button = ({ title, style }) => {
  return (
    <button
      href="javascript:void(0)"
      className={`inline-flex items-center justify-center rounded-md border  px-7 py-3 text-center text-base font-medium text-white ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
