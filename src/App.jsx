import Task from "./components/Task";
import TaskList from "./components/TaskList";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1 className="header">To Do App</h1>
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
