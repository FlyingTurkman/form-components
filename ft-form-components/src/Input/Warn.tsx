import { HTMLAttributes } from 'react'



export interface WarnInterface extends HTMLAttributes<HTMLLabelElement> {
    valid?: boolean
}




export default function Warn({valid, children, ...props}: WarnInterface) {
    return(
        <label {...props}>
            {children}
        </label>
    )
}