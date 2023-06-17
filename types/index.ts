import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  buttonStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
