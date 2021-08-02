export const Button = ({ pushButton, value, className }) => {
  return (
    <button
      className={className}
      onClick={() => {
        pushButton();
      }}
    >
      {value}
    </button>
  );
};
