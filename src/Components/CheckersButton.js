export const CheckersButton = ({ onChange, name, checked, label }) => (
  <button
    className="p-3 bg-[#00000080] w-2/3 rounded-xl flex justify-between items-center"
    onClick={() => {
      onChange({
        target: {
          name,
          checked: !checked,
        },
      });
    }}
  >
    {label}
    <input
      onChange={onChange}
      type="checkbox"
      name={name}
      checked={checked}
      className="cursor-pointer"
    />
  </button>
);
