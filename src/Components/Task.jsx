import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import blackCheckmark from "../images/blackCheckmark.png";
import checkMark from "../images/checkButton.svg";
import editDark from "../images/editDark.png";
import editLight from "../images/editLight.png";
import trashCanLight from "../images/trashCan.png";
import trashCanDark from "../images/trashCanDarkMode.png";
import EditTodo from "./EditTodo";
import "./Task.css";

function Task(props) {
  const { darkMode, todoList, setTodoList } = useContext(TodoContext);
  const { taskTodo } = props;
  const [edit, setEdit] = useState(false);

  // Funcao para deletar uma task da lista.
  const deleteTask = () => {
    const newList = todoList.filter((todo) => todo.todo !== taskTodo.todo);
    setTodoList(newList);
  };

  // Muda o valor da key COMPLETE da task, e a recoloca no array com o valor desejado e ordena o array pelo index.
  const setCompleted = () => {
    const newList = todoList.filter((todo) => todo.todo !== taskTodo.todo);
    if (taskTodo.complete === false) {
      const object = { ...taskTodo, complete: true };
      setTodoList([...newList, object].sort((a, b) => a.index - b.index));
    } else {
      const object = { ...taskTodo, complete: false };
      setTodoList([...newList, object].sort((a, b) => a.index - b.index));
    }
  };

  return (
    <>
      {edit ? (
        <div className={!darkMode ? "taskWrapperLight" : "taskWrapperDark"}>
          <EditTodo
            allProps={{
              currentTask: taskTodo,
              editState: edit,
              setEditState: setEdit,
            }}
          />
        </div>
      ) : (
        <div className={!darkMode ? "taskWrapperLight" : "taskWrapperDark"}>
          <div
            className={
              taskTodo.complete ? "doneTaskImageDiv" : "notDoneTaskImageDiv"
            }
          >
            <img
              src={!darkMode ? blackCheckmark : checkMark}
              alt="doneButton"
              className="doneImage"
            />
          </div>
          <p
            className={!darkMode ? "taskNameLight" : "taskNameDark"}
            onClick={setCompleted}
          >
            {taskTodo.todo}
          </p>
          <div className={!darkMode ? "taskButtonsLight" : "taskButtonsDark"}>
            <button
              className={
                !darkMode ? "taskEditDeleteLight" : "taskEditDeleteDark"
              }
              onClick={() => setEdit(!edit)}
            >
              <img src={!darkMode ? editLight : editDark} alt="edit button" />
            </button>
            <button
              onClick={deleteTask}
              className={
                !darkMode ? "taskEditDeleteLight" : "taskEditDeleteDark"
              }
            >
              <img
                src={!darkMode ? trashCanLight : trashCanDark}
                alt="delete button"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
