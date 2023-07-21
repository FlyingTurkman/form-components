'use client'

import CheckBox from "../ft-form-components/src/CheckBox"
import { useState } from "react"
import Button from "../ft-form-components/src/Button"
import Steps from "@/ft-form-components/src/Steps"

export default function Page() {
  const [checked, setChecked] = useState<boolean>(false)
  return(
    <div className="bg-red-300">
      <CheckBox checked={checked} checkChanged={setChecked} className="cursor-pointer flex flex-row items-center text-2xl">
        Erkek
      </CheckBox>
      <Button loading>
        test
      </Button>
      <Steps maxSteps={5} currentStep={4} className="w-full"/>
    </div>
  )
}