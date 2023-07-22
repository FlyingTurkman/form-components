'use client'

import { useState, useEffect} from "react"
import Input from "ft-form-components/Input"

export default function Page() {
  const [username, setUsername] = useState<string>('')
  const [usernameValid, setUsernameValid] = useState<boolean>(false)
  useEffect(() => {
    if (username.includes(' ') || username.includes('/')) {
      setUsernameValid(true)
    } else {
      setUsernameValid(false)
    }
  }, [username])
  return(
    <div>
      <Input className="relative p-2">
        <Input.InputArea placeholder="A_Cool_Username_33" defaultValue={username} onChange={((e) => setUsername(e.currentTarget.value))} className="w-full p-2 border-gray-600 border rounded"/>
        <Input.Header className="absolute top-0 left-4 px-2 text-xs bg-white text-gray-600 border-x-gray-600 border-x rounded">
          Username
        </Input.Header>
        <Input.Warn className="absolute right-4 bottom-0 px-2 bg-white text-red-600 text-xs border-x-gray-600 border-x rounded" valid={usernameValid}>
          Invalid Username
        </Input.Warn>
      </Input>
    </div>
  )
}