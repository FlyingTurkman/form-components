


import { useState, useEffect } from "react"
import Button from "ft-form-components/Button"

export default function ButtonExample() {
    const [loading, setLoading] = useState<boolean>(false)
    return(
        <div className="flex flex-row container mx-auto space-x-4">
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div>
                    <h1 >Not clicked yet</h1>
                    <hr className="w-full"/>
                </div>
                <Button loading={false} onClick={clickMe} className="flex bg-blue-600 w-32 h-10 items-center justify-center px-4 py-2 text-base font-semibold text-white">
                Click Me!
                </Button>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div>
                    <h1 >Clicked and waiting with default loading component</h1>
                    <hr className="w-full"/>
                </div>
                <Button loading={true} onClick={clickMe} className="flex bg-blue-600 w-32 h-10 items-center justify-center px-4 py-2 text-base font-semibold text-white">
                Click Me!
                </Button>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center border border-gray-600 p-2">
                <div>
                    <h1 >Clicked and waiting with customised loading component</h1>
                    <hr className="w-full"/>
                </div>
                <Button loading={true} onClick={clickMe} loadingComponent={'Loading...'} className="flex bg-blue-600 w-32 h-10 items-center justify-center px-4 py-2 text-base font-semibold text-white">
                Click Me!
                </Button>
            </div>
        </div>
    )

    
  async function clickMe() {
    setLoading(true)

    setLoading(false)
  }
}