import { CSSProperties, HTMLAttributes } from "react";
import { useEffect, useState } from "react";



interface StepsProps extends HTMLAttributes<HTMLDivElement> {
    maxSteps: number,
    currentStep: number,
    completedStepColor?: CSSProperties['backgroundColor'],
    currentStepColor?: CSSProperties['backgroundColor'],
    uncompletedStepColor?: CSSProperties['backgroundColor']
}




export default function Steps(
    {maxSteps,
    currentStep,
    completedStepColor,
    currentStepColor,
    uncompletedStepColor, children, ...props}: StepsProps) {

    const [stepsArray, setStepsArray] = useState<any[]>([])
    useEffect(() => {
        let a: any[] = []
        let i: number = maxSteps
        let c: number = 0
        while (c != i) {
            a.push(c)
            c++
        }
        setStepsArray(a)
    }, [maxSteps, currentStep])
    return(
        <div {...props}>
            <style>{`
                .completedStep, .currentStep, .uncompletedStep {
                    margin-left: 4px;
                    margin-right: 4px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                    height: 10px;
                    min-width: 10px;
                    width: calc((100% / ${maxSteps || 1}) - (${maxSteps || 1} * 2px));
                    float: left;
                }
                .completedStep {
                    background-color: ${completedStepColor || '#16a34a'};
                }
                .currentStep {
                    background-color: ${currentStepColor || '#ca8a04'};
                }
                .uncompletedStep {
                    background-color: ${uncompletedStepColor || '#dc2626'};
                }
            `}</style>
            {stepsArray.map((s, index) => {
                return(
                    <span key={`stepsKey${index}`} className={currentStep > (index + 1)? 'completedStep': currentStep == (index + 1)? 'currentStep': 'uncompletedStep'}/>
                )
            })}
        </div>
    )
}