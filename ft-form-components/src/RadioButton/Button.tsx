import React, { HTMLAttributes, useContext } from "react";
import { GroupContext } from "./Group";



export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: any;
}


const Button: React.FC<ButtonProps> = ({value, children, ...props}) => {
    const { selectedValue, setSelectedValue } = useContext(GroupContext)
    return(
        <button {...props} onClick={(e: any) => clickHandle(e)}>{children}</button>
    )

    async function clickHandle(e: any) {
        if (setSelectedValue != null) {
            setSelectedValue(value)
        }
    }
}




export default Button