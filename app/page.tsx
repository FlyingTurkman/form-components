import { useState } from "react"
import Button from "ft-form-components/Button"

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div>
      <Button loading={loading} onClick={clickMe} className="bg-blue-600 px-4 py-2 text-xl font-semibold text-white">
        Click Me!
      </Button>
    </div>
  )

  async function clickMe() {
    setLoading(true)

    setLoading(false)
  }
}