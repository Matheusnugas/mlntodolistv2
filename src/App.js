import { useContext, useState } from "react";
import "./App.css";
import Task from "./Components/Task";
import { TodoContext } from "./context/Provider";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";

function App() {
  const { darkMode, setDarkMode, todoList, setTodoList } =
    useContext(TodoContext);

  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = ({ target }) => {
    setTodoInput(target.value);
  };

  const handleAddClick = () => {
    // Salvando um objeto na lista com cada to-do e seu respectivo index para fazer sort
    const toDoObject = { todo: todoInput, index: todoList.length };
    setTodoList([...todoList, toDoObject]);
    setTodoInput("");
  };

  return (
    <div className="App">
      {/* Classnames condicionais para o darkMode */}
      <main className={!darkMode ? "pageWrapperLight" : "pageWrapperDark"}>
        <div className={!darkMode ? "todoContainerLight" : "todoContainerDark"}>
          <nav>
            <h1>TODO</h1>
            <button
              className="modeChanger"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={!darkMode ? sun : moon} alt="dark Mode Icon" />
            </button>
          </nav>
          <div
            className={!darkMode ? "inputContainerLight" : "inputContainerDark"}
          >
            <input
              className={!darkMode ? "addTodoInputLight" : "addTodoInputDark"}
              onChange={handleInputChange}
              type="text"
              value={todoInput}
              maxLength="20"
            />
            <button
              disabled={!todoInput}
              onClick={handleAddClick}
              className="addButton"
            >
              ADICIONAR
            </button>
          </div>
          <section
            className={!darkMode ? "taskContainerLight" : "taskContainerDark"}
          >
            {/* Map da lista de tarefas para renderizar */}
            {todoList &&
              todoList.map((todo) => {
                return <Task task={todo} />;
              })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
