import { NavLink } from "react-router-dom";

export const LogoComponent = () => {
  return (
    <NavLink to="/" data-testid="link-element" className="flex items-center	">
      <img
        className="w-10 h-10"
        data-testid="image-element"
        src="./logo.png"
        alt="Imagem de uma melancia cortada ao meio"
      />

      <span
        data-testid="label-element"
        className="text-xl bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-green-500 font-bold hidden lg:block"
      >
        Fruit Fresh
      </span>
    </NavLink>
  );
};
