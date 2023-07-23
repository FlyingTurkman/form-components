'use client'

import { useState, useEffect } from "react"
import Button from "ft-form-components/Button"
import Input from "ft-form-components/Input"
import ButtonExample from "@/components/ButtonExample"
import InputExample from "@/components/InputExample"
import CheckBoxExample from "@/components/CheckBoxExample"
import StepsExample from "@/components/StepsExample"
import RadioButton from "@/ft-form-components/src/RadioButton"
import RadioButtonExample from "@/components/RadioButtonExample"


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

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  const [values, setValues] = useState<jobType[]>(jobs)
  const [selectedValue, setSelectedValue] = useState<jobType>(jobs[-1])
  return(
    <div className="flex h-screen items-center justify-center">
      {/* <ButtonExample/> */}
      {/* <InputExample/> */}
      {/* <CheckBoxExample/> */}
      {/* <StepsExample/> */}
      <RadioButtonExample/>
    </div>
  )

  async function clickMe() {
    setLoading(true)

    setLoading(false)
  }
}