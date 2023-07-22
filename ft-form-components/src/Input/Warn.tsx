import { HTMLAttributes } from 'react'



export interface WarnInterface extends HTMLAttributes<HTMLLabelElement> {
    valid?: boolean
}




export default function Warn({valid, children, ...props}: WarnInterface) {
    if (!valid) {
        return(
            <label {...props}>
                {children}
            </label>
        )
    } else {
        return(
            <label></label>
        )
    }

}