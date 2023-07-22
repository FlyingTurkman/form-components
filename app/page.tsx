'use client'

import { useState, useEffect } from "react"
import Button from "ft-form-components/Button"
import Input from "ft-form-components/Input"
import ButtonExample from "@/components/ButtonExample"
import InputExample from "@/components/InputExample"
import CheckBoxExample from "@/components/CheckBoxExample"
import StepsExample from "@/components/StepsExample"



export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div className="flex h-screen items-center justify-center">
      {/* <ButtonExample/> */}
      {/* <InputExample/> */}
      {/* <CheckBoxExample/> */}
      {/* <StepsExample/> */}
    </div>
  )

  async function clickMe() {
    setLoading(true)

    setLoading(false)
  }
}