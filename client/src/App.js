import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
};

export default App;
