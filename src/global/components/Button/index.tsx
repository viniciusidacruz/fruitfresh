import { IComponentParams } from "./types";

export const ButtonComponent = ({
  icon,
  text,
  disabled,
  isLoading,
  ...props
}: IComponentParams) => {
  const buttonClassName = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-lime-600";

  return (
    <button
      className={`mx-auto text-white py-2 px-4 rounded inline-flex items-center bg-lime-500 ${buttonClassName}`}
      data-testid="button-element"
      {...props}
    >
      {isLoading ? (
        <span className="text mr-2" data-testid="loading-element">
          Carregando ...
        </span>
      ) : (
        <>
          <span className="text mr-2" data-testid="text-element">
            {text}
          </span>
          {icon && (
            <div className="icon" data-testid="icon-element">
              {icon}
            </div>
          )}
        </>
      )}
    </button>
  );
};
