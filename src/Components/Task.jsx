import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Task(props) {
  const { todo } = props;
  const { darkMode } = useContext(TodoContext);
  return (
    <div className={!darkMode ? "taskWrapperLight" : "taskWrapperDark"}>
      <button>Done</button>
      <button>Done</button>
    </div>
  );
}

export default Task;
