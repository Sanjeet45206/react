import { useState } from "react";
import "./ToDo.css";

const ToDoFunction = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>React To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "done" : "pending"}>
            <span onClick={() => toggleTask(index)}>
              {index + 1}. {task.completed ? "✔️" : "❌"} {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoFunction;
