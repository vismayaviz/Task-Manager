import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateStatus,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");



const formatDateTime = (dateString) => {
  if (!dateString) return "—";

  const date = new Date(dateString);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};


  // LOAD TASKS
  const loadTasks = () => {
    getAllTasks().then((res) => setTasks(res.data));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // ADD TASK
  const handleAdd = () => {
    if (!title.trim()) return;

    createTask({
      title,
      description,
      status: "PENDING",
    }).then(() => {
      setTitle("");
      setDescription("");
      setMessage("Task added successfully ✅");
      loadTasks();
      setTimeout(() => setMessage(""), 2000);
    });
  };

  // DELETE
  const handleDelete = (id) => {
    deleteTask(id).then(loadTasks);
  };

  // STATUS UPDATE
  const changeStatus = (id, status) => {
    updateStatus(id, status).then(loadTasks);
  };

  // FILTER LOGIC
  const filteredTasks = tasks.filter((task) => {
    if (filter === "PENDING") return task.status !== "COMPLETED";
    if (filter === "COMPLETED") return task.status === "COMPLETED";
    return true;
  })
.filter((task) => {
    if (!search.trim()) return true;

    return (
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      (task.description &&
        task.description.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="app">
      {/* HEADER (FIXED CENTER) */}
      <div className="header">
        <h1>Task Manager</h1>

        <div className="filters">
          <button onClick={() => setFilter("ALL")}>All</button>
          <button onClick={() => setFilter("PENDING")}>Pending</button>
          <button onClick={() => setFilter("COMPLETED")}>Completed</button>
        </div>

        <div className="form">
          <input
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
      <div className="search-box">
        <input
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch(search)}>Search</button>
      </div>


      {/* TASK LIST */}
      <div className="task-container">
        {filteredTasks.length === 0 && (
          <p className="empty">No tasks found 🚫</p>
        )}

        {filteredTasks.map((task) => (
          <div key={task.id} className="card">
            <div className="left">
              <h3>{task.title}</h3>
              <p className="desc">{task.description}</p>
              <p className="status">{task.status}</p>

              <div className="buttons">
                <button
                  className="delete"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>

                {task.status === "PENDING" && (
                  <button
                    className="action"
                    onClick={() => changeStatus(task.id, "STARTED")}
                  >
                    Start
                  </button>
                )}

                {task.status === "STARTED" && (
                  <button
                    className="action"
                    onClick={() => changeStatus(task.id, "COMPLETED")}
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>

            <div className="right">
              <p>
               Started: {formatDateTime(task.startedDate)}
              </p>
              <p>
                Completed: {formatDateTime(task.completedDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


