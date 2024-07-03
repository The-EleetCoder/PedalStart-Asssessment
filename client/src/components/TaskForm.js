import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/tasks/${id}`)
        .then((response) => {
          const task = response.data;
          setTitle(task.title);
          setDescription(task.description);
          const formattedDate = new Date(task.dueDate)
            .toISOString()
            .split("T")[0];
          setDueDate(formattedDate);
        })
        .catch((error) =>
          console.error("There was an error fetching the task!", error)
        );
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { title, description, dueDate };

    if (id) {
      axios
        .put(process.env.REACT_APP_BASE_URL + `/api/tasks/${id}`, task)
        .then(() => navigate("/"))
        .catch((error) =>
          console.error("There was an error updating the task!", error)
        );
    } else {
      axios
        .post(process.env.REACT_APP_BASE_URL + "/api/tasks", task)
        .then(() => navigate("/"))
        .catch((error) =>
          console.error("There was an error creating the task!", error)
        );
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">{id ? "Edit Task" : "Add New Task"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
