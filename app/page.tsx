'use client'

import { useState, useEffect } from "react"
import Button from "ft-form-components/Button"
import Input from "ft-form-components/Input"
import ButtonExample from "@/components/ButtonExample"
import InputExample from "@/components/InputExample"
import CheckBoxExample from "@/components/CheckBoxExample"
import StepsExample from "@/components/StepsExample"
import RadioButton from "@/ft-form-components/src/RadioButton"



export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  const [values, setValues] = useState<string[]>(['a', 'b', 'c'])
  const [selectedValue, setSelectedValue] = useState<any>('a')
  return(
    <div className="flex h-screen items-center justify-center">
      {/* <ButtonExample/> */}
      {/* <InputExample/> */}
      {/* <CheckBoxExample/> */}
      {/* <StepsExample/> */}
      <RadioButton className="flex flex-col space-y-2">
        {selectedValue} Seçildi
        <RadioButton.Group className="flex flex-col" values={values} selectedValue={selectedValue} setSelectedValue={setSelectedValue}>
          {values.map((value) => {
            return(
              <RadioButton.Button key={value} value={value}>Option {value}</RadioButton.Button>
            )
          })}
        </RadioButton.Group>
      </RadioButton>
    </div>
  )

  async function clickMe() {
    setLoading(true)

    setLoading(false)
  }
}