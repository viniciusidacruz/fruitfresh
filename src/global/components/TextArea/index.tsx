import { IComponentParams } from "./types";

export const TextAreaComponent = ({
  label,
  disabled,
  placeholder,
  ...props
}: IComponentParams) => {
  return (
    <div className="w-full select-none" data-testid="group-element">
      {label ? (
        <label
          data-testid="label-element"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}

      <textarea
        data-testid="textArea-element"
        className={`text-gray-700 p-2.5 text-sm outline-none border border-slate-400 rounded-lg h-min-auto w-full cursor-${
          disabled ? "not-allowed" : "default"
        }`}
        {...props}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
