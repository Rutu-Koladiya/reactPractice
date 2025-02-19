import { useState } from "react";

export default function TaskList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task todo={todo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input value={todo.title} />
        <button>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>.
        <button>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
