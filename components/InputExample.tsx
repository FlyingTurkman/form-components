


import Input from 'ft-form-components/Input'
import { useState, useEffect } from 'react'


export default function InputExample() {
    const [value1, setValue1] = useState<string>('')
    const [value2, setValue2] = useState<string>('FlyingTurkman')
    const [value3, setValue3] = useState<string>('Flying Turkman')
    const [valid, setValid] = useState<boolean>(false)
    return(
        <div className="flex flex-row container mx-auto space-x-4">
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Empty input</h1>
                    <hr className="w-full"/>
                </div>
                <Input className='relative p-2'>
                    <Input.InputArea className='flex peer border border-gray-600 rounded p-2' placeholder='Cool_Username_33' defaultValue={value1} onChange={((e: any) => setValue1(e.target.value))}/>
                    <Input.Header className='absolute flex peer-placeholder-shown:hidden top-0 left-4 border-x border-x-gray-600 px-2 bg-white text-xs rounded text-gray-600'>Username</Input.Header>
                    <Input.Warn className='absolute bottom-0 right-4 border-x px-2 text-xs bg-white rounded text-red-600' valid={true}>Invalid Username</Input.Warn>
                </Input>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Input with valid value</h1>
                    <hr className="w-full"/>
                </div>
                <Input className='relative p-2'>
                    <Input.InputArea className='flex peer border border-gray-600 rounded p-2' placeholder='Cool_Username_33' defaultValue={value2} onChange={((e: any) => setValue2(e.target.value))}/>
                    <Input.Header className='absolute flex peer-placeholder-shown:hidden top-0 left-4 border-x border-x-gray-600 px-2 bg-white text-xs rounded text-gray-600'>Username</Input.Header>
                    <Input.Warn className='absolute bottom-0 right-4 border-x px-2 text-xs bg-white rounded text-red-600' valid={true}>Invalid Username</Input.Warn>
                </Input>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div className='flex flex-col w-full items-center justify-center'>
                    <h1>Input with invalid value</h1>
                    <hr className="w-full"/>
                </div>
                <Input className='relative p-2'>
                    <Input.InputArea className='flex peer border border-gray-600 rounded p-2' placeholder='Cool_Username_33' defaultValue={value3} onChange={((e: any) => setValue3(e.target.value))}/>
                    <Input.Header className='absolute flex peer-placeholder-shown:hidden top-0 left-4 border-x border-x-gray-600 px-2 bg-white text-xs rounded text-gray-600'>Username</Input.Header>
                    <Input.Warn className='absolute bottom-0 right-4 border-x border-x-gray-600 px-2 text-xs bg-white rounded text-red-600' valid={false}>Invalid Username</Input.Warn>
                </Input>
            </div>
        </div>
    )
}