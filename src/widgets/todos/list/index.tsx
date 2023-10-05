"use client";
import { useTodos } from "@/store/todos";
import { Todo } from "../todo";
import style from "./style.module.css";
import { useFilter } from "@/store/filterTodos";

export const ListTodos = () => {
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const filter = useFilter((state) => state.filter);
  const todos = useTodos((state) => {
    switch (filter) {
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      case "uncompleted":
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.item}>
            <Todo
              title={todo.title}
              completed={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
