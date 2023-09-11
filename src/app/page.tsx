"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Filters } from "@/widgets/filters/filters";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { ListTodos } from "@/widgets/todos/list/list";
import { NewTodo } from "@/widgets/newTodo/newTodo";
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

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Filters />
        <ListTodos />
        <Footer onClick={() => setNewTodo(true)} />
        {newTodo && (
          <NewTodo
            onClickClose={() => setNewTodo(false)}
            value={value}
            onClick={newAddTodo}
            onChange={handeleChangeInput}
          />
        )}
      </div>
    </main>
  );
}