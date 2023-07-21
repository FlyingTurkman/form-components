import { HTMLAttributes } from "react";







export default function InputArea({className, ...props}: HTMLAttributes<HTMLInputElement>) {
    return(
        <input {...props} className={className}></input>
    )
}