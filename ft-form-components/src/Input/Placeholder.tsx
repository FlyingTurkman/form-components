import { HTMLAttributes } from "react";



export interface HeaderProps extends HTMLAttributes<HTMLLabelElement> {}



export default function Placeholder({children, ...props}: HeaderProps) {
    return(
        <label {...props}>
            {children}
        </label>
    )
}