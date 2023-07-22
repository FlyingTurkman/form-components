import { Dispatch, HTMLAttributes } from "react";
import { IoCheckmark, IoClose } from 'react-icons/io5'



interface CheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
    checked: boolean;
    checkChanged: Dispatch<boolean>;
    checkedComponent?: any;
    uncheckedComponent?: any;
}





export default function CheckBox({checked, checkChanged, checkedComponent, uncheckedComponent, children, onClick, ...props}: CheckBoxProps) {
    return(
        <button {...props} onClick={(e: any) => clickHandle(e)}>
            {checked && checkedComponent && (
                checkedComponent
            )}
            {!checked && uncheckedComponent && (
                uncheckedComponent
            )}
            {checked && !checkedComponent && (
                <IoCheckmark className="inline"/>
            )}
            {!checked && !uncheckedComponent && (
                <IoClose className="inline"/>
            )}
            {children}
        </button>
    )

    async function clickHandle(e: any) {
        checkChanged(!checked)
        if (onClick) {
            onClick(e)
        }
    }
}