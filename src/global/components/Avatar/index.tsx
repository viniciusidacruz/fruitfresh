import { IComponentParams } from "./types";

export const AvatarComponent = ({
  src,
  alt,
  label,
  isProfileSquare,
}: IComponentParams) => {
  return (
    <div className="Container mx-auto " data-testid="avatar-element">
      <div className="flex items-center flex-row ">
        <img
          src={src}
          alt={alt}
          data-testid="thumbnail-element"
          className={`Image w-6 h-6 rounded-${isProfileSquare ? "md" : "full"}`}
        />

        {label && (
          <div className="Label ml-2" data-testid="group-element">
            <h3 className="font-semibold text-slate-500 text-xs">{label}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
