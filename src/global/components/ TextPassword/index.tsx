import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { IComponentParams } from "./types";

export const TextPasswordComponent = ({
  label,
  ...props
}: IComponentParams) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const textPasswordClassName = props.disabled ? "opacity-75" : "bg-white";

  const inputType = showPassword ? "text" : "password";

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
        className={`inline-flex items-center border border-gray-200 w-full rounded-lg p-1 ${textPasswordClassName}`}
      >
        <input
          type={inputType}
          data-testid="password-input"
          className={`text-gray-700 p-2.5 text-sm outline-none border-none w-full cursor-${
            props.disabled ? "not-allowed" : "default"
          }`}
          {...props}
        />

        <button
          className={`p-1 cursor-${props.disabled ? "not-allowed" : "pointer"}`}
          onClick={toggleShowPassword}
          data-testid="button-element"
          disabled={props.disabled}
        >
          {showPassword ? (
            <AiOutlineEye
              color="#bfb9b9"
              size={25}
              data-testid="iconLine-eye"
            />
          ) : (
            <AiOutlineEyeInvisible
              color="#bfb9b9"
              size={25}
              data-testid="iconLine-eye-invisible"
            />
          )}
        </button>
      </div>
    </div>
  );
};
