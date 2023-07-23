import React, { HTMLAttributes, useContext } from "react";
import { GroupContext } from "./Group";
import { IoRadioButtonOn, IoRadioButtonOff } from 'react-icons/io5'


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: any;
}


const Button: React.FC<ButtonProps> = ({value, children, onClick, ...props}) => {
    const { selectedValue, setSelectedValue, selectedComponent, unselectedComponent } = useContext(GroupContext)
    if (selectedValue === value && selectedComponent) {
        return(
            <button {...props} onClick={(e: any) => clickHandle(e)}>
                {selectedComponent}
                {children}
            </button>
        )
    } else if (selectedValue === value && !selectedComponent) {
        return(
            <button {...props} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={(e: any) => clickHandle(e)}>
                <IoRadioButtonOn/>
                {children}
            </button>
        )
    } else if (selectedValue !== value && unselectedComponent) {
        return(
            <button {...props}>
                {unselectedComponent}
                {children}
            </button>
        )
    } else {
        return(
            <button {...props} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={(e: any) => clickHandle(e)}>
                <IoRadioButtonOff/>
                {children}
            </button>
        )
    }


    async function clickHandle(e: any) {
        if (setSelectedValue != null) {
            setSelectedValue(value)
        }
        if (onClick) {
            onClick(e)
        }   
    }
}




export default Button