import React, { Dispatch, HTMLAttributes } from "react";
import Button from "./Button";
export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<typeof Button>[];
    values: any[] | any;
    selectedValue: any;
    setSelectedValue: Dispatch<any>;
    selectedComponent?: any;
    unselectedComponent?: any;
}
export declare const GroupContext: React.Context<{
    selectedValue: any;
    setSelectedValue: Dispatch<any> | null;
    selectedComponent: any;
    unselectedComponent: any;
}>;
declare const Group: React.FC<GroupProps>;
export default Group;
