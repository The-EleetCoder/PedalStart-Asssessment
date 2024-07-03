import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();
  console.log(process.env.REACT_APP_BASE_URL);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + `/api/tasks/${id}`)
      .then((response) => setTask(response.data))
      .catch((error) =>
        console.error("There was an error fetching the task!", error)
      );
  }, [id]);

  return (
    <div className="container">
      <h1 className="my-4">Task Details</h1>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
    </div>
  );
};

export default TaskDetails;
