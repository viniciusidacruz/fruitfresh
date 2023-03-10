import { InputHTMLAttributes } from "react";

export interface IComponentParams
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  message?: string;
}
