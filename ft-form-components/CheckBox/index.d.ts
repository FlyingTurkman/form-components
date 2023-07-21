import { Dispatch, HTMLAttributes } from "react";
interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
    checked: boolean;
    checkChanged: Dispatch<boolean>;
    checkedComponent?: any;
    uncheckedComponent?: any;
}
export default function CheckBox({ checked, checkChanged, checkedComponent, uncheckedComponent, children, ...props }: CheckBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
