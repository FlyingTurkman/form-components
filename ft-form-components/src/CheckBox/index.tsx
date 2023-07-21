import { Dispatch, HTMLAttributes } from "react";
import { IoCheckmark, IoClose } from 'react-icons/io5'



interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
    checked: boolean;
    checkChanged: Dispatch<boolean>;
    checkedComponent?: any;
    uncheckedComponent?: any;
}





export default function CheckBox({checked, checkChanged, checkedComponent, uncheckedComponent,children, ...props}: CheckBoxProps) {
    return(
        <div {...props} onClick={() => checkChanged(!checked)}>
            {checked && checkedComponent && (
                checkedComponent
            )}
            {!checked && uncheckedComponent && (
                uncheckedComponent
            )}
            {checked && !checkedComponent && (
                <IoCheckmark/>
            )}
            {!checked && !uncheckedComponent && (
                <IoClose/>
            )}
            {children}
        </div>
    )
}