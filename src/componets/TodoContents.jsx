import { useState } from "react";
import TodoListItems from "./TodoListItems";
import styles from "../style.module.css";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';
import TodoModel from "../models/TodoModel"
export default function TodoContents() {
  const [todo, setTodo] = useState("","");
  const [todoList, setTodoList] = useState([]);
  const handleTodoInputChange = (args) => {
    let eachTodo = new TodoModel("","");
    eachTodo.setId(uuidv4());
    eachTodo.setItem(args.target.value)
    setTodo(eachTodo);
  };

  const handleSubmitValue = (args) => {
    args.preventDefault();
    if (todo.item) {
      setTodoList([...todoList, todo]);
      setTodo("","");
    }
  };

  return (
    <div className={styles.detailLayout}>
      <form action="" onSubmit={handleSubmitValue}>
        <div className={styles.todoAddComp}>
          <div className={styles.inputBoxDiv}>
            <input className={styles.inputBox}
              type="text"
              placeholder="Enter your todo"
              value={todo}
              onChange={handleTodoInputChange}
            />
          </div>
          <div className={styles.addButton}>
            <Button className={styles.buttonColor} type="submit" size="small">
              Add
            </Button>
          </div>
        </div>
      </form>

      <div>
        {todoList.map((todo) => (
          <TodoListItems key={todo.id} eachItem={todo.item} lists={todoList} setTodoList={setTodoList}></TodoListItems>
        ))}
      </div>

    </div>
  );
}
