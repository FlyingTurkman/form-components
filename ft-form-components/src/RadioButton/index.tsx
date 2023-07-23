import React, { HTMLAttributes } from "react"
import Group, { GroupProps } from "./Group"
import { ButtonProps } from "./Button"
import Button from "./Button"




interface RadioButtonProps extends HTMLAttributes<HTMLDivElement> {
    
}



const RadioButton: React.FC<RadioButtonProps> &
{Group: React.FC<GroupProps>} & 
{Button: React.FC<ButtonProps>} = ({children, ...props}) => {
    return(
        <div {...props}>
            {children && (
                children
            )}
        </div>
    )
}



RadioButton.Group = Group
RadioButton.Button = Button



export default RadioButton