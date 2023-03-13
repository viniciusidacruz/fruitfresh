import { NavLink } from "react-router-dom";

export const LogoComponent = () => {
  return (
    <figure
      className="select-none flex items-center"
      data-testid="group-element"
    >
      <NavLink to={"/"} data-testid="link-element">
        <img
          className=" w-15 h-15 rounded-full"
          data-testid="image-element"
          src="./logo.png"
          alt="Imagem de uma melancia cortada ao meio"
        ></img>

        <span
          data-testid="label-element"
          className="text-xl text-lime-900 text-bold justify-center mt-2 select-none hidden sm:flex"
        >
          Fruit Fresh
        </span>
      </NavLink>
    </figure>
  );
};
