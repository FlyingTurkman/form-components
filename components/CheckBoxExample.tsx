import CheckBox from "../ft-form-components/src/CheckBox";




import { useState } from "react";
import { AiFillCheckSquare, AiFillCloseSquare } from 'react-icons/ai'

export default function CheckBoxExample() {
    const [checked1, setChecked1] = useState<boolean>(true)
    const [checked2, setChecked2] = useState<boolean>(false)
    const [checked3, setChecked3] = useState<boolean>(true)
    const [checked4, setChecked4] = useState<boolean>(false)
    return(
        <div className="flex flex-row container mx-auto space-x-4">
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Checked with default checkmark</h1>
                    <hr className="w-full"/>
                </div>
                <CheckBox checked={checked1} checkChanged={setChecked1}>I am coder</CheckBox>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Unchecked with default checkmark</h1>
                    <hr className="w-full"/>
                </div>
                <CheckBox checked={checked2} checkChanged={setChecked2}>I am coder</CheckBox>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Checked with customised checkmark</h1>
                    <hr className="w-full"/>
                </div>
                <CheckBox className="flex flex-row items-center space-x-2" checked={checked3} checkChanged={setChecked3} checkedComponent={<AiFillCheckSquare className='flex text-xl text-green-600'/>}>
                    <span className="flex">I am coder</span>
                </CheckBox>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Unchecked with customised checkmark</h1>
                    <hr className="w-full"/>
                </div>
                <CheckBox className="flex flex-row items-center space-x-2" checked={checked4} checkChanged={setChecked4} uncheckedComponent={<AiFillCloseSquare className='flex text-xl text-red-600'/>}>
                    <span  className="flex">I am coder</span>
                </CheckBox>
            </div>
        </div>
    )
}