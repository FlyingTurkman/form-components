import React, { HTMLAttributes } from "react";
import InputArea from "./InputArea";
import Placeholder, {HeaderProps} from "./Placeholder";
import Warn, { WarnInterface } from "./Warn";
import TextArea, { TextAreaProps } from "./TextArea";


interface InputProps extends HTMLAttributes<HTMLDivElement> {

}



const Input: React.FC<InputProps> & 
{InputArea: React.FC<HTMLAttributes<HTMLInputElement>>} &
{Header: React.FC<HeaderProps>} &
{Warn: React.FC<WarnInterface>} &
{TextArea: React.FC<TextAreaProps>} = ({children, ...props}) => {
    return(
        <div {...props}>
            {children}
        </div>
    )
}


Input.InputArea = InputArea
Input.Header = Placeholder
Input.Warn = Warn
Input.TextArea = TextArea


export default Input