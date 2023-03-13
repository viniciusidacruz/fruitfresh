import { TextAreaHTMLAttributes } from "react";

export interface IComponentParams
  extends TextAreaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}
