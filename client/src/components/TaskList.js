import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) =>
        console.error("There was an error fetching the tasks!", error)
      );
  }, []);

  const deleteTask = (id) => {
    axios
      .delete(process.env.REACT_APP_BASE_URL + `/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) =>
        console.error("There was an error deleting the task!", error)
      );
  };

  return (
    <div className="container">
      <h1 className="my-4">Task List</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Add New Task
      </Link>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            <div>
              <Link
                to={`/edit/${task._id}`}
                className="btn btn-secondary btn-sm mx-1"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTask(task._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
