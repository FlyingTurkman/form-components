'use client'

import { useState } from "react"
import CheckBox from "ft-form-components/CheckBox"

export default function Page() {
  const [checked, setChecked] = useState<boolean>(true)
  return(
    <div>
      <CheckBox checked={checked} checkChanged={setChecked}>
        I am coder.
      </CheckBox>
    </div>
  )
}