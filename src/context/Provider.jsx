import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  // Array onde serão guardadas as to-dos
  const [todoList, setMainTodoList] = useState([]);
  // Todolist que é sempre copia da primeira para fazer os filtros
  const [allTodoList, setAllTodoList] = useState([]);
  // variável para fazer a verificação da mudança de light mode para dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Funcao que seta para as 2 TodoList para usar uma para mapear e uma para filtrar. Tambem salva a lista no localStorage;
  const setTodoList = (element) => {
    setMainTodoList(element);
    setAllTodoList(element);
    localStorage.setItem("list", JSON.stringify(element));
  };

  useEffect(() => {
    const localStorageList = JSON.parse(localStorage.getItem("list"));
    if (localStorageList) {
      setTodoList(localStorageList);
    }
  }, []);

  const context = {
    todoList,
    setTodoList,
    setMainTodoList,
    allTodoList,
    darkMode,
    setDarkMode,
  };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider as Provider };
