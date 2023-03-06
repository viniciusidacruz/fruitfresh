import { ButtonHTMLAttributes } from "react";

export interface IComponentParams
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text: string;
  isLoading?: boolean;
}
