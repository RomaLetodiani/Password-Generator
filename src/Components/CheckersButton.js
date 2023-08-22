const CheckersButton = (props) => {
  return (
    <button
      className="p-3 bg-[#00000080] w-2/3 rounded-xl flex justify-between items-center"
      onClick={() => {
        props.onChange({
          target: {
            name: props.name,
            checked: !props.checked,
          },
        });
      }}
    >
      {props.label}
      <input
        onChange={props.onChange}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        className="cursor-pointer"
      />
    </button>
  );
};

export default CheckersButton;
