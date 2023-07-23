import React, { HTMLAttributes } from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: any;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
