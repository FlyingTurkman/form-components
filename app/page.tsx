import { useState } from "react"
import Button from "ft-form-components/Button"

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div>
      <Button loading={loading}>

      </Button>
    </div>
  )
}