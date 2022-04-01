import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  // Array onde serão guardadas as to-dos
  const [todoList, setTodoList] = useState([]);
  // variável para fazer a verificação da mudança de light mode para dark mode
  const [darkMode, setDarkMode] = useState(false);

  const context = { todoList, setTodoList, darkMode, setDarkMode };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider as Provider };
