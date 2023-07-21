import React, { HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingComponent?: any;
}
interface LoadingProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}
declare const Button: React.FC<ButtonProps> & {
    Loading: React.FC<LoadingProps>;
};
export default Button;
