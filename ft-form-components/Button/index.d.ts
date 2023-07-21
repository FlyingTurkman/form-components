import React, { HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingComponent?: any;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
