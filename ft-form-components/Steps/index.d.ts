import { CSSProperties, HTMLAttributes } from "react";
interface StepsProps extends HTMLAttributes<HTMLDivElement> {
    maxSteps: number;
    currentStep: number;
    completedStepColor?: CSSProperties['backgroundColor'];
    currentStepColor?: CSSProperties['backgroundColor'];
    uncompletedStepColor?: CSSProperties['backgroundColor'];
}
export default function Steps({ maxSteps, currentStep, completedStepColor, currentStepColor, uncompletedStepColor, children, ...props }: StepsProps): import("react/jsx-runtime").JSX.Element;
export {};
