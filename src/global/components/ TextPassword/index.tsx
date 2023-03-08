import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { IComponentParams } from "./types";

export const TextPasswordComponent = ({
  label,
  ...props
}: IComponentParams) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const textPasswordClassName = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-2.5";

  const inputType = showPassword ? "text" : "password";

  return (
    <div className="label mb-6 select-none" data-testid="group-element">
      {label && (
        <label
          data-testid="label-element"
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}

      <div
        data-testid="input-element"
        className="container cursor-none bg-white inline-flex items-center border border-gray-300 text-gray-900 text-sm rounded-lg w-max p-1 "
      >
        <input
          type={inputType}
          data-testid="password-input"
          className={` outline-none border-none bg-white ${textPasswordClassName}`}
          {...props}
        />

        <div
          className="icon cursor-pointer"
          onClick={toggleShowPassword}
          data-testid="icon-element"
        >
          {showPassword ? (
            <AiOutlineEye
              color="#bfb9b9"
              size={25}
              data-testid="iconline-eye"
            />
          ) : (
            <AiOutlineEyeInvisible
              color="#bfb9b9"
              size={25}
              data-testid="iconline-eye-invisible"
            />
          )}
        </div>
      </div>
    </div>
  );
};
