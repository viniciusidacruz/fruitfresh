import { IComponentParams } from "./types";

export const TextFieldComponent = ({
  icon,
  label,
  ...props
}: IComponentParams) => {
  const textFieldClassName = props.disabled ? "opacity-75" : "bg-white";

  return (
    <div className="w-full select-none" data-testid="group-element">
      {label && (
        <label
          data-testid="label-element"
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div
        data-testid="input-element"
        className={`inline-flex items-center border border-gray-200 w-full rounded-lg p-1 ${textFieldClassName}`}
      >
        {icon && (
          <span
            data-testid="icon-element"
            className={`p-1 cursor-${
              props.disabled ? "not-allowed" : "default"
            }`}
          >
            {icon}
          </span>
        )}
        <input
          className={`text-gray-700 p-2.5 text-sm outline-none border-none w-full cursor-${
            props.disabled ? "not-allowed" : "default"
          }`}
          {...props}
        />
      </div>

      {props.message && (
        <p className="text-red-600 text-bold text-xs mt-3">{props.message}</p>
      )}
    </div>
  );
};
