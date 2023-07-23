import RadioButton from "../ft-form-components/src/RadioButton"
import { useState } from "react"
import { BsSquare, BsSquareFill } from 'react-icons/bs'


type jobType = {
    id: number,
    job: string
}
  
  
const jobs: jobType[] = [
    { id: 1, job: 'Developer'},
    { id: 2, job: 'Dietitian'},
    { id: 3, job: 'Architect'},
    { id: 4, job: 'Artist'}
]

export default function RadioButtonExample() {
    const [values1, setValues1] = useState<jobType[]>(jobs)
    const [selectedValue1, setSelectedValue1] = useState<jobType>(jobs[0])
    const [values2, setValues2] = useState<jobType[]>(jobs)
    const [selectedValue2, setSelectedValue2] = useState<jobType>(jobs[1])
    return(
        <div className="flex flex-row space-x-2">
            <RadioButton className="flex flex-col space-y-2 p-2 border-gray-600 border">
                <label className="text-lg font-semibold">Example with default icons</label>
                <hr className="w-full"/>
                <label>What is your job?</label>
                <hr className="w-full"/>
                <RadioButton.Group
                className="flex flex-col"
                values={values1} selectedValue={selectedValue1}
                setSelectedValue={setSelectedValue1}>
                    {values1.map((value) => {
                    return(
                        <RadioButton.Button key={value.id} value={value}>
                            {value.job}
                        </RadioButton.Button>
                    )
                    })}
                </RadioButton.Group>
                <hr/>
                <label>You are a {selectedValue1.job}</label>
            </RadioButton>
            <RadioButton className="flex flex-col space-y-2 p-2 border-gray-600 border">
                <label className="text-lg font-semibold">Example with customised icons</label>
                <hr className="w-full"/>
                <label>What is your job?</label>
                <hr className="w-full"/>
                <RadioButton.Group
                className="flex flex-col"
                values={values2}
                selectedValue={selectedValue2}
                setSelectedValue={setSelectedValue2}
                selectedComponent={<BsSquareFill className='text-green-600'/>}
                unselectedComponent={<BsSquare className='text-red-600'/>}>
                    {values2.map((value) => {
                    return(
                        <RadioButton.Button className="flex flex-row items-center gap-2" key={value.id} value={value}>
                            {value.job}
                        </RadioButton.Button>
                    )
                    })}
                </RadioButton.Group>
                <hr/>
                <label>You are a {selectedValue2.job}</label>
            </RadioButton>
        </div>
    )
}