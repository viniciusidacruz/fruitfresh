import React from "react";
import { IComponentParams } from "./types";

export const AvatarComponent = ({ src, alt }: IComponentParams) => {
  return (
    <div className="Container  mx-auto px-4 py-8">
      <div className="flex items-center flex-row ">
        <img className="Image w-6 h-6 rounded-full" src={src} alt={alt} />
        <div className="Label ml-2 ">
          <h3 className="font-semibold text-slate-500 text-xs">Joyce Bigoli</h3>
        </div>
      </div>
    </div>
  );
};
