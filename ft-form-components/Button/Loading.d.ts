import { HTMLAttributes } from "react";
interface LoadingProps extends HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}
export default function Loading({ loading, children, ...props }: LoadingProps): import("react/jsx-runtime").JSX.Element;
export {};
