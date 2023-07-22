import React, { HTMLAttributes } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    loadingComponent?: any
}






const Button: React.FC<ButtonProps> = ({loading, loadingComponent , onClick, children, ...props}) => {
    return(
        <button {...props} onClick={loading? () => { return }: onClick}>
            {loading && loadingComponent && (
                loadingComponent
            )}
            {loading && !loadingComponent && (
                <div className="loading">
                    <style>{`
                        .loading {
                            animation: rotation 2s infinite linear;
                        }
                        
                        @keyframes rotation {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    `}</style>
                    <AiOutlineLoading3Quarters/>
                </div>
            )}
            {!loading && (
                children
            )}
        </button>
    )
}



export default Button