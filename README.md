# FT-FORM-COOMPONENTS

## Easy to use form components

The combined version of the form components you need when developing web applications can be found here. The development phase is still ongoing but if you want to test it you can download.

## Components (still developing)

- [x] [Button](#button)
- [x] [Input](#input)
- [x] [Steps](#steps)
- [x] [Checkbox](#steps)
- [ ] Radio button
- [ ] Image and video picker
- [ ] Autocomplete dropdown list
- [ ] Basic dropdown list
- [ ] Masked inputs for phone number, credit card number etc.
- [ ] Credit card view

## Installation
You can use this npm command to install the necessary dependencies and use the form components:
```
npm install ft-form-components
```

## Components and props

You can find the usage guide of the components that you need when developing web applications here.

### Button

The Button component was specifically developed to ensure the correct functioning of async functions. It addresses an issue that even experienced software developers might overlook. During the execution of async functions, users can click on buttons repeatedly until the functions complete. This behavior can lead to unnecessary multiple fetch operations, especially when users have to wait for an extended period. Using the Button component makes it very easy to prevent this behavior.


Exactly! The "loading" prop in the Button component is designed to handle this situation. By setting the "loading" prop to true, you can prevent multiple clicks on the Button until the async function completes. This way, even if users click the Button multiple times, the action will only be triggered once, avoiding redundant fetch operations or other async actions.

Here's an example of how you can use the "loading" prop in the Button component:

```
import { useState } from "react"
import Button from "ft-form-components/Button"

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div>
      <Button loading={loading} onClick={clickMe}>
        Click Me!
      </Button>
    </div>
  )

  async function clickMe() {
    setLoading(true)
    await fetch('......')
    setLoading(false)
  }
}
```

In this example, the Button component checks the "loading" state before allowing the async function to run. If "loading" is true, it means the async function is already in progress, and the button will be disabled, preventing further clicks until the async function completes and sets "loading" back to false.

You can also design the loading animation yourself using the "loadingComponent" prop. You can use both a string and another component as the "loadingComponent".

```
import { useState } from "react"
import Button from "ft-form-components/Button"
import Loading from "../components/Loading"

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div>
      <Button loading={loading} onClick={clickMe} loadingComponent={<Loading/>}>
        Click Me!
      </Button>
    </div>
  )

  async function clickMe() {
    setLoading(true)
    await fetch('......')
    setLoading(false)
  }
}
```

Here is an example of a Button design with tailwind css.

```
import { useState } from "react"
import Button from "ft-form-components/Button"
import Loading from "../components/Loading"

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)
  return(
    <div>
      <Button loading={loading} onClick={clickMe} loadingComponent={<Loading/>} className="bg-blue-600 px-4 py-2 text-xl font-semibold text-white">
        Click Me!
      </Button>
    </div>
  )

  async function clickMe() {
    setLoading(true)
    await fetch('......')
    setLoading(false)
  }
}
```