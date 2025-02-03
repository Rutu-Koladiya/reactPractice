/* eslint-disable react/prop-types */

{/* but when you want component update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.*/}

import { useState } from "react";


function Button({count, onClick}) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          padding: "0.4rem",
          backgroundColor: "maroon",
          color: "wheat",
          border: "1px solid wheat",
        }}
      >
        Click Me!
      </button>
      <h4>Clicked {count} times!</h4>
    </>
  );
}

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleChange() {
        setCount(count + 1);
    }

    return (
        <>
            <Button onClick={handleChange} count={count}/>
            <Button onClick={handleChange} count={count}/>
        </>
    )
}
