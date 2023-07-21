import React, { HTMLAttributes } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Loading from "./Loading";



interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    loadingComponent?: any
}

interface LoadingProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}








const Button: React.FC<ButtonProps> & {Loading: React.FC<LoadingProps>} = ({loading,loadingComponent , onClick, children, ...props}) => {
    return(
        <button {...props} onClick={() => clickHandle()}>
            {loading && loadingComponent && (
                loadingComponent
            )}
            {loading && !loadingComponent && (
                <div>
                    Loading
                </div>
            )}
            {!loading && (
                children
            )}
        </button>
    )

    async function clickHandle() {
        if (loading) return
    }
}


Button.Loading = Loading;


export default Button