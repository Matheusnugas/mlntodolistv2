import { useContext, useState } from "react";
import "./App.css";
import Task from "./Components/Task";
import { TodoContext } from "./context/Provider";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";

function App() {
  const {
    darkMode,
    setDarkMode,
    todoList,
    setTodoList,
    allTodoList,
    setMainTodoList,
  } = useContext(TodoContext);

  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = ({ target }) => {
    setTodoInput(target.value);
  };

  const handleAddClick = () => {
    // Salvando um objeto na lista com cada to-do e seu respectivo index para fazer sort
    const toDoObject = {
      todo: todoInput,
      index: todoList.length,
      complete: false,
    };
    setTodoList([...allTodoList, toDoObject]);
    setTodoInput("");
  };

  const filterAll = () => {
    setTodoList(allTodoList);
  };

  const filterActive = () => {
    const newArray = allTodoList.filter((todo) => !todo.complete);
    setMainTodoList(newArray);
  };

  const filterCompleted = () => {
    const newArray = allTodoList.filter((todo) => todo.complete);
    setMainTodoList(newArray);
  };

  const deleteCompleted = () => {
    const newArray = allTodoList.filter((todo) => !todo.complete);
    setTodoList(newArray);
  };

  return (
    <div className="App">
      {/* Classnames condicionais para o darkMode */}
      <main className={!darkMode ? "pageWrapperLight" : "pageWrapperDark"}>
        <div className={!darkMode ? "todoContainerLight" : "todoContainerDark"}>
          <nav>
            <h1>TO-DO</h1>
            <button
              className="modeChanger"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={!darkMode ? moon : sun} alt="dark Mode Icon" />
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
              todoList.map((todo, index) => {
                return <Task key={index} taskTodo={todo} />;
              })}
          </section>
          <div
            className={
              !darkMode ? "functionalitiesDivLight" : "functionalitiesDivDark"
            }
          >
            <button
              onClick={filterAll}
              className={!darkMode ? "funcButtonLight" : "funcButtonDark"}
            >
              Todas
            </button>
            <button
              onClick={filterActive}
              className={!darkMode ? "funcButtonLight" : "funcButtonDark"}
            >
              Ativas
            </button>
            <button
              onClick={filterCompleted}
              className={!darkMode ? "funcButtonLight" : "funcButtonDark"}
            >
              Completas
            </button>
            <button
              onClick={deleteCompleted}
              className={!darkMode ? "funcButtonLight" : "funcButtonDark"}
            >
              Limpar completas
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
