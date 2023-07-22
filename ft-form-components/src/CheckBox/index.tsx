import { Dispatch, HTMLAttributes } from "react";
import { IoCheckmark, IoClose } from 'react-icons/io5'



interface CheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
    checked: boolean;
    checkChanged: Dispatch<boolean>;
    checkedComponent?: any;
    uncheckedComponent?: any;
}





export default function CheckBox({checked, checkChanged, checkedComponent, uncheckedComponent, children, onClick, ...props}: CheckBoxProps) {
    if (checked && checkedComponent) {
        return(
            <button {...props} onClick={(e: any) => clickHandle(e)}>
                {checkedComponent}
                {children}
            </button>
        )
    } else if (!checked && uncheckedComponent)  {
        return(
            <button {...props} onClick={(e: any) => clickHandle(e)}>
                {uncheckedComponent}
                {children}
            </button>
        )
    } else if (checked && !checkedComponent) {
        return(
            <button {...props} onClick={(e: any) => clickHandle(e)} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <IoCheckmark/>
                {children}
            </button>
        )
    } else {
        return(
            <button {...props} onClick={(e: any) => clickHandle(e)} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <IoClose/>
                {children}
            </button>
        )
    }
    
    async function clickHandle(e: any) {
        checkChanged(!checked)
        if (onClick) {
            onClick(e)
        }
    }
}