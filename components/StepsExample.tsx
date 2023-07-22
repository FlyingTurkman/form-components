

import Steps from "../ft-form-components/src/Steps"




export default function StepsExample() {
    return(
        <div className="flex flex-row container mx-auto space-x-4">
            <div className="flex w-full flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex w-full flex-col items-center justify-center'>
                    <h1>3rd step with default colors</h1>
                    <hr className="w-full"/>
                </div>
                <Steps className="w-full" currentStep={3} maxSteps={5}/>
            </div>
            <div className="flex w-full flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex w-full flex-col items-center justify-center'>
                    <h1>3rd step with customised colors</h1>
                    <hr className="w-full"/>
                </div>
                <Steps className="w-full" currentStep={3} maxSteps={5} completedStepColor="blue" currentStepColor="purple" uncompletedStepColor="red"/>
            </div>
        </div>
    )
}