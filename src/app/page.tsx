"use client";
import { useState } from "react";
import styles from "../css/page.module.css";
import { Filters } from "@/widgets/filters";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ListTodos } from "@/widgets/todos/list";
import { AddTodoForm } from "@/widgets/addTodoForm";
import { useTodos } from "@/store/todos";

export default function Home() {
  const [newTodo, setNewTodo] = useState(false);
  const [value, setValue] = useState("");
  const addTodo = useTodos((state) => state.addTodos);
  const newAddTodo = () => {
    addTodo(value);
    setNewTodo(false);
    setValue("");
  };
  const handeleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(value);
    setNewTodo(false);
    setValue("");
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Filters />
          <ListTodos />
        </div>

        <Footer onClick={() => setNewTodo(true)} />
        {newTodo && (
          <AddTodoForm
            onClickClose={() => setNewTodo(false)}
            value={value}
            onClick={newAddTodo}
            onChange={handeleChangeInput}
            onSubmit={submitHandler}
          />
        )}
      </div>
    </main>
  );
}
