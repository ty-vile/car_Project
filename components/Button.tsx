"use client";

import { ButtonProps } from "@/types";

function Button({ title, buttonStyles, handleClick, btnType }: ButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`px-8 py-2 rounded-lg text-white bg-blue-primary hover:bg-blue-dark disabled:bg-gray-primary disabled:hover:bg-gray-dark transition-colors duration-300  ${buttonStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
