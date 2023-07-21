'use client'

import { useState } from "react"
import Button from "ft-form-components/Button"
import CheckBox from "ft-form-components/CheckBox"
import Steps from 'ft-form-components/Steps'

export default function Page() {
  const [checked, setChecked] = useState<boolean>(false)
  return(
    <div className="bg-gray-100">
      <Button loading>Test</Button>
      <CheckBox checked={checked} checkChanged={setChecked}>
        Deneme
      </CheckBox>
      <Steps currentStep={2} maxSteps={4}/>
    </div>
  )
}