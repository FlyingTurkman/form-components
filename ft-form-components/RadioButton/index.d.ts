import React, { HTMLAttributes } from "react";
import { GroupProps } from "./Group";
import { ButtonProps } from "./Button";
interface RadioButtonProps extends HTMLAttributes<HTMLDivElement> {
}
declare const RadioButton: React.FC<RadioButtonProps> & {
    Group: React.FC<GroupProps>;
} & {
    Button: React.FC<ButtonProps>;
};
export default RadioButton;
