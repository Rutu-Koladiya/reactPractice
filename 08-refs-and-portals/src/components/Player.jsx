// using useState - and it's quite a lot of code we have to write here just to read the value that's entered into input field at the point if time where thiu button is pressed.Because we have to manage that value,that underlying enteredPlayerName state value,with every keystroke, with that onChange prop,to store it and to have it available for outputting it,and we have that second state just to know whether this button here was pressed or not,and this component here is now a great example for a component that can be simplified by using refs.

// import { useState } from "react";
// export default function Player() {
//   const [playerName, setPlayerName] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   function handleChange(e) {
//     setSubmitted(false);
//     setPlayerName(e.target.value);
//   }

//   function handleClick() {
//     setSubmitted(true);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? playerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" value={playerName} onChange={handleChange}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

// using useRef - Well, a ref in React is a value, just as the state in the end is a value and just as a variable contains a value but it's a special kind of value or it's managed by React in a special way to be precise. whenever ref changes component doesn't re-execute and for state, it's different - whenever we update state by calling that state updating fun the component fun will be re-executed.

import { useState, useRef } from "react";
export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(input.current.value);
    input.current.value = '';
  }
  return (
    <>
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={input} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
    </>
  );
}