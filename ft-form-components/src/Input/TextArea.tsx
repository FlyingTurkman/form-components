import { HTMLAttributes } from "react";





export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {

}


export default function TextArea(props: TextAreaProps) {
    return(
        <textarea {...props}/>
    )
}