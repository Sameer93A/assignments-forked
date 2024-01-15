import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleAddTodos() {
    setTodos([...todos, { title, description }]);
  }

  function handleRemoveElements(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <>
      <TodoForm onAddTodo={handleAddTodos} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveElements} />
    </>
  );
}

export default App;
