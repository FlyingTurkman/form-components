import { Dispatch, HTMLAttributes } from "react";
interface CheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
    checked: boolean;
    checkChanged: Dispatch<boolean>;
    checkedComponent?: any;
    uncheckedComponent?: any;
}
export default function CheckBox({ checked, checkChanged, checkedComponent, uncheckedComponent, children, onClick, ...props }: CheckBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
