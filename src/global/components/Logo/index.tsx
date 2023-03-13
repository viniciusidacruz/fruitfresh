import { NavLink } from "react-router-dom";
import { IcomponentParams } from "./types";

export const LogoComponent = (props: IcomponentParams) => {
  return (
    <figure
      className="select-none flex items-center"
      data-testid="group-element"
    >
      <NavLink target="_self" to={props.href} data-testid="link-element">
        <img
          className=" w-15 h-15 rounded-full p-3 border-2 border-lime-900 shadow-xl bg-gradient-to-b from-lime-500 to-green-500"
          data-testid="image-element"
          src={props.image}
          alt={props.alternativeText}
        ></img>
        {props.label && (
          <label
            data-testid="label-element"
            className="text-xl text-lime-900 text-bold justify-center mt-2 select-none  hidden sm:flex"
          >
            {props.label}
          </label>
        )}
      </NavLink>
    </figure>
  );
};
