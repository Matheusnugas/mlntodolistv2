import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import saveDarkMode from "../images/saveDarkMode.png";
import saveLightMode from "../images/saveLightMode.png";
import "./EditTodo.css";

function EditTodo(props) {
  const { darkMode, todoList, setTodoList } = useContext(TodoContext);
  const [editedTodo, setEditedTodo] = useState({ todo: "", index: 0 });
  const { allProps } = props;
  const { currentTask, setEditState } = allProps;

  // Funcao para salvar o novo todo editado. Filtra o array, e salva um novo objeto fazendo o sort pelo index
  const saveEdited = () => {
    const prevTaskList = todoList.filter(
      (task) => task.todo !== currentTask.todo
    );
    const object = {
      todo: editedTodo.todo,
      index: currentTask.index,
      complete: false,
    };
    const newList = [object, ...prevTaskList].sort((a, b) => a.index - b.index);
    setTodoList(newList);
    setEditState(false);
  };

  const handleEditChange = ({ target }) => {
    setEditedTodo({ todo: target.value });
  };

  return (
    <>
      <input
        type="type"
        className={!darkMode ? "editInputLight" : "editInputDark"}
        value={editedTodo.todo}
        onChange={handleEditChange}
        maxLength="20"
      />
      <button
        onClick={saveEdited}
        className={!darkMode ? "saveButtonLight" : "saveButtonDark"}
        disabled={!editedTodo.todo}
      >
        <img
          src={!darkMode ? saveLightMode : saveDarkMode}
          alt="save task button"
        />
      </button>
    </>
  );
}

export default EditTodo;
