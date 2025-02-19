import { useState } from "react";
import AddToDo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function ToDo() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  return (
    <>
      <AddToDo />
      <TaskList todos={todos} />
    </>
  );
}
