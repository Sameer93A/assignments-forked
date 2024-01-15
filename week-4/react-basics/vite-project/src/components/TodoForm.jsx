import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleAddClick() {
    onAddTodo(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button onClick={handleAddClick}>Add To Do</button>
    </>
  );
}

export default TodoForm;
