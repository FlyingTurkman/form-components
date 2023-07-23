import React, { Dispatch, HTMLAttributes, createContext } from "react"
import Button from "./Button"





export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<typeof Button>[];
    values: any[] | any;
    selectedValue: any;
    setSelectedValue: Dispatch<any>;
}

export const GroupContext = createContext<{selectedValue: any, setSelectedValue: Dispatch<any> | null}>({selectedValue: null, setSelectedValue: null})


const Group: React.FC<GroupProps> = ({children, values, selectedValue, setSelectedValue, ...props}) => {

    return(
        <GroupContext.Provider value={{selectedValue, setSelectedValue}} {...props}>
            <div {...props}>
                {children}
            </div>
        </GroupContext.Provider>
    )
}




export default Group