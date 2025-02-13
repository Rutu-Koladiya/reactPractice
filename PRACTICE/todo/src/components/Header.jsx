import { useState } from "react";
import { useRef } from "react";

export default function Header() {
  const [input, setInput] = useState(false);
  const [enteredtext, setEnteredText] = useState([]);
  const [checked, setChecked] = useState({});
  const text = useRef({});

  function handleClick() {
    setInput(true);
  }

  function handleText() {
    const newText = text.current.value.trim();

    if (newText) {
      const newTask = { id: Date.now(), text: newText };
      setEnteredText((prevText) => [...prevText, newTask]);
      text.current.value = "";
    }
  }

  function handleChange(id) {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [id]: !prevChecked[id],
    }));
  }

  function handleDeleteChecked() {
    setEnteredText((prevText) => prevText.filter((task) => !checked[task.id]));
    setChecked({});
  }

  return (
    <div>
      <h1>Todo WebApp</h1>
      <button onClick={handleClick}>+ Add Task</button>
      <hr />

      {input && (
        <div>
          <input type="text" ref={text} />
          <button onClick={handleText}>Add</button>
        </div>
      )}

      {enteredtext.length > 0 && (
        <div>
          {enteredtext.map((task) => (
            <div key={task.id}>
              <input
                type="checkbox"
                onChange={() => handleChange(task.id)}
                checked={checked[task.id] || false}
              />

              <label>{checked[task.id] ? <del>{task.text}</del> : task.text}</label>
            </div>
          ))}

          <br />
          <button onClick={handleDeleteChecked}>Delete checked</button>
        </div>
      )}
    </div>
  );
}
