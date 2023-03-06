import { IComponentParams } from "./types";

export const ButtonComponent = ({
  icon,
  text,
  disable,
  isloading,
}: IComponentParams) => {
  const buttonClassName = disable
    ? "bg-lime-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed inline-flex items-center "
    : "bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded inline-flex items-center ";

  return (
    <div className="container mx-auto" data-testid="button-element">
      <button className={buttonClassName} data-testid="buttonClassName-element">
        <div className="text mr-2" data-testid="text-element">
          <span>{text}</span>
        </div>
        {icon && (
          <div className="icon" data-testid="icon-element">
            <span>{icon}</span>
          </div>
        )}
        {isloading && (
          <div className="isloading" data-testid="isloading-element">
            <span>{isloading}</span>
          </div>
        )}
      </button>
    </div>
  );
};
