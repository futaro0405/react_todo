import React, { useRef, useState } from 'react';

export const App = () => {

  const [todos, setTodos] = useState([]);
  const inputText = useRef("");
  const clickSave = () => {
    if(inputText.current === "") return;
    let todo = {
      id:
        Date.now().toString(16) + Math.floor(1000 * Math.random()).toString(16),
      task: inputText.current.value,
      completed: false
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    inputText.current = "";
  };

  const [edit, setEdit] = useState(false);
  const clickEdit = (editTodo) => {
    const newEdit = !edit;
    setEdit(newEdit);

    const newTodos = todos.map((todo) => {
      if(todo.id === editTodo.id) {
        todo.task = 
      }
    });
  };

  return (
    <>
      <h1>TODO LIST</h1>

      <input
        type="text"
        ref={inputText}
        placeholder="todo task"
      />
      <button onClick={clickSave}>保存</button>

      <h2>TASKS</h2>

      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            <input type="checkbox" disabled={todo.completed} />
            <input
              type="text"
              value={todo.task}
              disabled={edit}
            />
            <button onClick={() => clickEdit(todo)}>edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};
