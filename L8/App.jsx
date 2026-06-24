import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const [form, setForm] = useState({
    name: "",
    date: "",
    desc: ""
  });

  const addTask = (e) => {
    e.preventDefault();

    if (form.name && form.date) {
      setTasks([
        ...tasks,
        { ...form, done: false }
      ]);

      setForm({
        name: "",
        date: "",
        desc: ""
      });
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.done;
    if (filter === "pending") return !task.done;
  });

  return (
    <div>
      <h1>Reminder App</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={form.desc}
          onChange={(e) =>
            setForm({ ...form, desc: e.target.value })
          }
        />

        <button>Add Task</button>
      </form>

      <br />

      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <button onClick={() => setFilter("pending")}>
        Pending
      </button>

      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
    textDecoration: task.done ? "line-through" : "none"
  }}
          >
            <b>{task.name}</b> - {task.date}
            <br />
            {task.desc}
            <br />
            Status:
            {task.done ? " Completed" : " Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
