'use client'

import { useState } from "react"
import CheckBox from "../ft-form-components/src/CheckBox"
import Button from "../ft-form-components/src/Button"

export default function Page() {
  const [checked, setChecked] = useState<boolean>(false)
  return(
    <div>
      <CheckBox checked={checked} checkChanged={setChecked} className="bg-red-300">
        I am Coder
      </CheckBox>
    </div>
  )
}