# FT-FORM-COMPONENTS

## Easy to use form components

The combined version of the form components you need when developing web applications can be found here. The development phase is still ongoing but if you want to test it you can download.

## Components (still developing)

- [x] [Button](#button)
- [x] [Input](#input)
- [x] [Steps](#steps)
- [x] [Checkbox](#checkbox)
- [x] [RadioButton](#radiobutton)
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

![Example Button Component](https://ft-form-components.vercel.app/button/1.png)

The Button component was specifically developed to ensure the correct functioning of async functions. It addresses an issue that even experienced software developers might overlook. During the execution of async functions, users can click on buttons repeatedly until the functions complete. This behavior can lead to unnecessary multiple fetch operations, especially when users have to wait for an extended period. Using the Button component makes it very easy to prevent this behavior.

Exactly! The "loading" prop in the Button component is designed to handle this situation. By setting the "loading" prop to true, you can prevent multiple clicks on the Button until the async function completes. This way, even if users click the Button multiple times, the action will only be triggered once, avoiding redundant fetch operations or other async actions.

- Props
  - loading: Not required, boolean type. Checking for loading state.
  - loadingComponent: Not required, any type. Customizing loading animation and design.

Here's an example of how you can use the "loading" prop in the Button component:

```jsx
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

```jsx
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

```jsx
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

### Input

![Example Input Component](https://ft-form-components.vercel.app/input/1.png)

Modern form elements can sometimes be complex in terms of design, and one such element is inputs. Inputs can have different designs in creative layouts. Therefore, the Input component comes with four different children elements.

- Props and childrens
  - [InputArea](#InputArea): Not required, children. Using for single line text.
  - [TextArea](#TextArea): Not required, children. Using for multiline text.
  - [Header](#Header): Not required, children. Using as a header of Input.
  - [Warn](#Warn): Not required, children. Using for invalid value warns.

#### InputArea

It is used as a basic input and utilizes input props.

```jsx
import Input from "ft-form-components/Input"

export default function Page() {
  return(
    <div>
      <Input>
        <Input.InputArea placeholder="Username"/>
      </Input>
    </div>
  )
}
```

#### TextArea

It is used as a basic input and utilizes input props. If you need more lines and a wider area, using TextArea instead of Input would be more appropriate.

```jsx
import Input from "ft-form-components/Input"

export default function Page() {
  return(
    <div>
      <Input>
        <Input.TextArea placeholder="About you"/>
      </Input>
    </div>
  )
}
```

#### Header

The Input component allows for more creative designs by using Header and Warn components. With these components, you can easily design an input that would otherwise require significant effort and time. Here is an example with tailwind css

```jsx
import Input from "ft-form-components/Input"

export default function Page() {
  return(
    <div>
      <Input className="relative p-2">
        <Input.InputArea placeholder="A_Cool_Username_33" className="p-2 border-gray-600 border rounded"/>
        <Input.Header className="absolute top-0 left-4 px-2 text-xs bg-white text-gray-600 border-x-gray-600 border-x rounded">
          Username
        </Input.Header>
      </Input>
    </div>
  )
}
```

#### Warn


You can use the Warn component to check if the value of the Input is valid and, if not, display a warning.

- Props
  - valid: Not required, boolean type. Using for validation check.

```jsx
import { useState, useEffect} from "react"
import Input from "ft-form-components/Input"

export default function Page() {
  const [username, setUsername] = useState<string>('')
  const [usernameValid, setUsernameValid] = useState<boolean>(false)
  useEffect(() => {
    if (username.includes(' ') || username.includes('/')) {
      setUsernameValid(false)
    } else {
      setUsernameValid(true)
    }
  }, [username])
  return(
    <div>
      <Input className="relative p-2">
        <Input.InputArea placeholder="A_Cool_Username_33" defaultValue={username}
        onChange={((e) => setUsername(e.currentTarget.value))} className="w-full p-2 border-gray-600 border rounded"/>
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
```

### Steps

![Example Step Component](https://ft-form-components.vercel.app/steps/1.png)
![Example Step Component](https://ft-form-components.vercel.app/steps/2.png)

If you have a form that consists of multiple steps, you can use the Steps component to show your users which step they are currently on. This way, users can easily track their progress throughout the form.

- Props
  - maxSteps: required, number type. It shows the total number of steps.
  - currentSteps: required, number type. It show current step.
  - completedStepColor: not required, color type, default value: #16a34a. It indicates the color representation of completed steps.
  - currentStepColor: not required, color type, default value: #ca8a04. It indicates the color representation of current step.
  - uncompletedStepColor: not required, color type, default value: #dc2626. It indicates the color representation of uncompleted steps.

```jsx
import Steps from 'ft-form-components/Steps'

export default function Page() {
  return(
    <div>
      <Steps maxSteps={5} currentStep={3}/>
    </div>
  )
}
```

### CheckBox

![Example CheckBox Component](https://ft-form-components.vercel.app/checkbox/1.png)

It is a simple checkbox structure that can be easily customized. Compared to a regular checkbox input, it is much easier to design.

- Props
  - checked: required, boolean type.
  - checkChanged: required, Dispatch<boolean> type.
  - checkedComponent: not required, any type. It allows you to personalize the design of what will be shown instead of the checkmark when it is checked. This can be a component, a string, or any other custom design.
  - uncheckedComponent: not required, any type. It allows you to personalize the design of what will be shown instead of the checkmark when it is unchecked. This can be a component, a string, or any other custom design.


```jsx
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
```

You can also add an onClick event to the checkbox component. With this event, when the checkbox is clicked, both the checked state changes and the specified event is triggered.

```jsx
import { useState } from "react"
import CheckBox from "ft-form-components/CheckBox"

export default function Page() {
  const [checked, setChecked] = useState<boolean>(true)
  return(
    <div>
      <CheckBox checked={checked} checkChanged={setChecked} onClick={() => alert('Sure ?')}>
        I am coder.
      </CheckBox>
    </div>
  )
}
```

### RadioButton

![Example RadioButton Component](https://ft-form-components.vercel.app/radiobutton/1.png)

The RadioButton component helps you create radio buttons in a simple way. By default, it provides its own icons, but it also allows you to customize the icons for both the selected and unselected values.

- Props and childrens
  - [Group](#radiobutton.group): required, HTMLDivElement type. 
  - [Button](#radiobutton.button): required. The RadioButton.Button component must be placed inside the RadioButton.Group component.

#### RadioButton.Group

The RadioButton.Button component ensures that the radio buttons stay together as a group. Without the need for setting up a radioGroup as in the classic radio type inputs, it automatically considers the children within it as a group. It only accepts RadioButton.Button component as children.

- Props and childrens
  - children: required, RadioButton.Button type.
  - values: required, any array type. It is a data group containing options and should be of type Array.
  - selectedValue: required, any type. It is the selected value and should be of the same type as a single element within the data group.
  - setSelectedValue: required, Dispatch<any> type.
  - selectedComponent: not required, any type. It allows you to personalize the icon design of the selected value.
  - unselectedComponent: not required, any type. It allows you to personalize the icon designs of the unselected values.

#### RadioButton.Button

It is the component that enables the display and selection of options. By default, it provides an onClick function to allow changing the selection. However, you can also add your own onClick event. In this case, both the selection process will occur and your custom event will be triggered when selecting the option.

- Props
 - value: required, any type.

Here is basic example and example with customised icons

```jsx
import RadioButton from "../ft-form-components/src/RadioButton"
import { useState } from "react"
import { BsSquare, BsSquareFill } from 'react-icons/bs'


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

export default function RadioButtonExample() {
    const [values1, setValues1] = useState<jobType[]>(jobs)
    const [selectedValue1, setSelectedValue1] = useState<jobType>(jobs[0])
    const [values2, setValues2] = useState<jobType[]>(jobs)
    const [selectedValue2, setSelectedValue2] = useState<jobType>(jobs[1])
    return(
        <div className="flex flex-row space-x-2">
            <RadioButton className="flex flex-col space-y-2 p-2 border-gray-600 border">
                <label className="text-lg font-semibold">Example with default icons</label>
                <hr className="w-full"/>
                <label>What is your job?</label>
                <hr className="w-full"/>
                <RadioButton.Group
                className="flex flex-col"
                values={values1} selectedValue={selectedValue1}
                setSelectedValue={setSelectedValue1}>
                    {values1.map((value) => {
                    return(
                        <RadioButton.Button key={value.id} value={value}>
                            {value.job}
                        </RadioButton.Button>
                    )
                    })}
                </RadioButton.Group>
                <hr/>
                <label>You are a {selectedValue1.job}</label>
            </RadioButton>
            <RadioButton className="flex flex-col space-y-2 p-2 border-gray-600 border">
                <label className="text-lg font-semibold">Example with customised icons</label>
                <hr className="w-full"/>
                <label>What is your job?</label>
                <hr className="w-full"/>
                <RadioButton.Group
                className="flex flex-col"
                values={values2}
                selectedValue={selectedValue2}
                setSelectedValue={setSelectedValue2}
                selectedComponent={<BsSquareFill className='text-green-600'/>}
                unselectedComponent={<BsSquare className='text-red-600'/>}>
                    {values2.map((value) => {
                    return(
                        <RadioButton.Button className="flex flex-row items-center gap-2" key={value.id} value={value}>
                            {value.job}
                        </RadioButton.Button>
                    )
                    })}
                </RadioButton.Group>
                <hr/>
                <label>You are a {selectedValue2.job}</label>
            </RadioButton>
        </div>
    )
}

```
