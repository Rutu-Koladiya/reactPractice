import { useState } from "react";

export default function AddToDo() {
    const [title, setTitle] = useState('');
  return (
    <div>
      <input placeholder="Add todo" type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => setTitle('')}>Add</button>
    </div>
  );
}
