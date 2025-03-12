type ButtonProp = {
  buttons: { id: string; sign: string }[];
  onClick: (sign: string) => void;
};

function Buttons(props: ButtonProp) {
  return (
    <div className="flex justify-center items-center flex-wrap rounded bg-zinc-300 dark:bg-gray-600 ">
      {props.buttons.map((button) => (
        <button
          key={button.id}
          id={button.id}
          onClick={() => props.onClick(button.sign)}
          className="rounded border border-gray-600 bg-white hover:bg-neutral-200 flex-1/4 p-1 m-1 last:text-emerald-400 nth-[3n]:text-red-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          {button.sign}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
