import React, { Dispatch, HTMLAttributes, createContext } from "react"
import Button from "./Button"





export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<typeof Button>[];
    values: any[] | any;
    selectedValue: any;
    setSelectedValue: Dispatch<any>;
    selectedComponent?: any,
    unselectedComponent?: any;
}

export const GroupContext = createContext<{selectedValue: any, setSelectedValue: Dispatch<any> | null, selectedComponent: any, unselectedComponent: any}>({selectedValue: null, setSelectedValue: null, selectedComponent: null, unselectedComponent: null})


const Group: React.FC<GroupProps> = ({children, values, selectedValue, setSelectedValue, selectedComponent, unselectedComponent, ...props}) => {

    return(
        <GroupContext.Provider value={{selectedValue, setSelectedValue, selectedComponent, unselectedComponent}} {...props}>
            <div {...props}>
                {children}
            </div>
        </GroupContext.Provider>
    )
}




export default Group