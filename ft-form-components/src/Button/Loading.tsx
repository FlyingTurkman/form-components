import { HTMLAttributes } from "react";


interface LoadingProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}



export default function Loading({loading ,children, ...props}: LoadingProps) {
    if (loading) {
        return(
            <button {...props}>
                {children}
            </button>
        )
    } else {
        return(
            <div></div>
        )
    }

}