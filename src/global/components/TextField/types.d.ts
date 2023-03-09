import { InputHTMLAttributes } from "react";

export interface IcomponentParams
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}
