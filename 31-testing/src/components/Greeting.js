import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    const changedTextHandler = () => {
        setChangedText(true)
    }
  return (
    <div>
      <h2>Hello World!</h2>
      {/* integration test coz now there is two unit Greeting and Output also */}
      {!changedText && <Output>Good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting
