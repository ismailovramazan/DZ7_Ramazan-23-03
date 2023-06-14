import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {asyncCreateTodo, asyncDeleteTodo,
  fetchTodos, removeTodo} from "./todoSlice.js";
import classes from "./TodoList.module.css";
const TodoList = () => {
  const [val, setVal] = useState("");

  const { items,loading,error} = useSelector(
      state => state.todos)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  },[dispatch])

  if (loading) return <h5>Please wait,loading</h5>
  if (error !== '') return <h5>Sorry,happened error:{error}</h5>
  const onButtonClick = () => {
    if (val === "") {
      return;
    }
    dispatch(asyncCreateTodo({
      todo: val,
      completed: false,
      userId: 5
    }));
    setVal("");
  };

  const removeTodoItem = (item) => {
    if (item.isCreatedFromJson) {
      dispatch(removeTodo(item.id))
    }
    else {
      dispatch(asyncDeleteTodo(item.id))
    }
  }


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className={classes.container}>
      <h4>TodoList</h4>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
          onClick={onButtonClick}>Add</button>
      {items && (
        <ul
            className={classes.todoList}>
          {items.map((item) => (
            <li
                key={item.id}
                className={classes.todoItem}>
              {item.todo}
              <button
                className={classes.remove}
                onClick={() => removeTodoItem(item)}

                   
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
