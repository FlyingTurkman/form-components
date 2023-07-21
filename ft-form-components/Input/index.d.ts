import React, { HTMLAttributes } from "react";
import { HeaderProps } from "./Placeholder";
import { WarnInterface } from "./Warn";
import { TextAreaProps } from "./TextArea";
interface InputProps extends HTMLAttributes<HTMLDivElement> {
}
declare const Input: React.FC<InputProps> & {
    InputArea: React.FC<HTMLAttributes<HTMLInputElement>>;
} & {
    Header: React.FC<HeaderProps>;
} & {
    Warn: React.FC<WarnInterface>;
} & {
    TextArea: React.FC<TextAreaProps>;
};
export default Input;
